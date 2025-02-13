import { useState, useEffect } from 'react';
import { supabase } from '../Login/serverLogin';
import moment from 'moment-jalaali';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

interface Comment {
  id: number;
  product_id: number;
  comment_text: string | null;
  created_at: string;
  user_id: string;
}

const Comments = ({ productId }: { productId: number }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [user, setUser] = useState<any>(null); 
  const [loading, setLoading] = useState<boolean>(true);  // وضعیت بارگذاری
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editedCommentText, setEditedCommentText] = useState<string>('');

  // بارگذاری اطلاعات کاربر و بررسی وضعیت ورود
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);  // بعد از دریافت اطلاعات کاربر، بارگذاری تمام می‌شود
    };

    // اگر کاربر وارد نشده باشد، در هنگام تغییر وضعیت ورود/خروج هم وضعیت کاربر رو بررسی می‌کنیم
    supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user || null);
      setLoading(false);
    });

    fetchUser();
  }, []);

  // بارگذاری کامنت‌ها
  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('product_id', productId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching comments:', error);
    } else {
      const validComments = data?.filter((comment) => comment?.comment_text !== null) || [];
      setComments(validComments);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [productId]);

  // ارسال کامنت
  const handleAddComment = async () => {
    if (newComment.trim() === '') return;
    if (!user) return; // اگر کاربر وارد نشده باشد، کامنت ارسال نمی‌شود

    const { data, error } = await supabase
      .from('comments')
      .insert([{ product_id: productId, comment_text: newComment, user_id: user.id }])
      .single();

    if (error) {
      console.error('Error adding comment:', error);
    } else {
      fetchComments(); // بارگذاری دوباره کامنت‌ها بعد از ارسال کامنت جدید
      setNewComment('');
    }
  };

  // حذف کامنت
  const handleDeleteComment = async (commentId: number) => {
    const { error } = await supabase
      .from('comments')
      .delete()
      .eq('id', commentId);

    if (error) {
      console.error('Error deleting comment:', error);
    } else {
      fetchComments();
    }
  };

  // ویرایش کامنت
  const handleEditComment = (commentId: number, commentText: string) => {
    setEditingCommentId(commentId);
    setEditedCommentText(commentText);
  };

  const handleSaveEditedComment = async () => {
    if (editedCommentText.trim() === '') return;

    const { error } = await supabase
      .from('comments')
      .update({ comment_text: editedCommentText })
      .eq('id', editingCommentId);

    if (error) {
      console.error('Error updating comment:', error);
    } else {
      fetchComments(); // بارگذاری دوباره کامنت‌ها بعد از ویرایش
      setEditingCommentId(null);
      setEditedCommentText('');
    }
  };

  // بررسی وضعیت بارگذاری و نمایش اطلاعات
  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">کامنت‌ها</h2>
      
      <div className="space-y-4">
        {comments?.map((comment) =>
          comment?.comment_text ? (
            <div key={comment.id} className="p-4 bg-gray-50 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-700 text-ff">
                  نام کاربر: {user?.user_metadata?.first_name || 'کاربر ناشناس'}
                </span>
                <span className="text-sm text-gray-500">
                  {moment(comment.created_at).format('jYYYY/jMM/jDD HH:mm:ss')}
                </span>
              </div>
              
              {/* ویرایش کامنت */}
              {editingCommentId === comment.id ? (
                <div>
                  <textarea
                    value={editedCommentText}
                    onChange={(e) => setEditedCommentText(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                  />
                  <button
                    onClick={handleSaveEditedComment}
                    className="mt-3 w-full py-2 bg-blue-500 text-white rounded-md"
                  >
                    ذخیره تغییرات
                  </button>
                </div>
              ) : (
                <p className="text-gray-800">{comment.comment_text}</p>
              )}

              {/* دکمه‌های ویرایش و حذف */}
              {user && comment.user_id === user.id && (
                <div className="mt-3 flex justify-between">
                  <FaRegEdit
                    onClick={() => handleEditComment(comment.id, comment.comment_text || '')}
                    className="text-blue-500 hover:underline cursor-pointer"
                  />
                 
                  <MdDeleteForever
                    onClick={() => handleDeleteComment(comment.id)}
                    className="text-jigary hover:underline cursor-pointer "
                  />
                </div>
              )}
            </div>
          ) : null
        )}
      </div>

      {/* نمایش نام کاربر به جای پیغام "ورود" */}
      {user ? (
        <div className="mt-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="کامنت خود را بنویسید..."
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            onClick={handleAddComment}
            className="mt-3 w-full py-2 bg-jigary text-white rounded-md hover:text-jigary btn font-semibold"
          >
            ارسال کامنت
          </button>
        </div>
      ) : (
        <p className="mt-4 text-red-600">برای ارسال کامنت ابتدا وارد شوید.</p>
      )}
    </div>
  );
};

export default Comments;
