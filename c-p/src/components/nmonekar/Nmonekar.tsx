import { useState, useEffect } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { supabase } from './uplode_img_project';  // import از supabaseClient خود
import Hede from '../pages1/Hehe';
import Footer from '../pages10/footer';
import Navbarrej from '../navbarRej/Navbar';
import Box_Alert_nmonekar from './Box_Alert_nmonekar';

function Nmonekar() {
  const [fileNames, setFileNames] = useState<string[]>(['', '', '']);
  const [imagePreviews, setImagePreviews] = useState<string[]>(['', '', '']);
  const [errors, setErrors] = useState<string[]>(['', '', '']);
  const [successMessage, setSuccessMessage] = useState<string>('');  
  const [userId, setUserId] = useState<string>(''); // برای ذخیره user_id

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('خطا در دریافت اطلاعات کاربر:', error.message);
        setUserId('anonymous');
      } else {
        setUserId(data.user.id || 'anonymous');
      }
    };
    getUser();
  }, []);

  const handleFileChange = (index: number) => async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[index] = 'وارد کردن تصویر الزامی است';
        return newErrors;
      });
      setImagePreviews((prevPreviews) => {
        const newPreviews = [...prevPreviews];
        newPreviews[index] = '';
        return newPreviews;
      });
      setFileNames((prevFileNames) => {
        const newFileNames = [...prevFileNames];
        newFileNames[index] = '';
        return newFileNames;
      });
      return;
    }

    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[index] = 'فقط فایل‌های تصویری (jpg, png, gif) مجاز هستند';
        return newErrors;
      });
      setImagePreviews((prevPreviews) => {
        const newPreviews = [...prevPreviews];
        newPreviews[index] = '';
        return newPreviews;
      });
      setFileNames((prevFileNames) => {
        const newFileNames = [...prevFileNames];
        newFileNames[index] = '';
        return newFileNames;
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviews((prevPreviews) => {
        const newPreviews = [...prevPreviews];
        newPreviews[index] = reader.result as string;
        return newPreviews;
      });
      setFileNames((prevFileNames) => {
        const newFileNames = [...prevFileNames];
        newFileNames[index] = file.name;
        return newFileNames;
      });
      setErrors((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[index] = '';
        return newErrors;
      });
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async () => {
    if (errors.some((error) => error !== '')) {
      alert('لطفاً همه ارورها را برطرف کنید');
      return;
    }

    try {
      const imageUrls: string[] = [];

      await Promise.all(
        fileNames.map(async (fileName, index) => {
          const fileInput = document.getElementById(`file-input-${index}`) as HTMLInputElement;
          const file = fileInput?.files?.[0];
          if (file) {
            const filePath = `uploads/${Date.now()}_${fileName}`;
            const { error } = await supabase.storage
              .from('img') 
              .upload(filePath, file);

            if (error) throw error;

            const { data: publicData } = await supabase.storage
              .from('img')
              .getPublicUrl(filePath);

            if (!publicData || !publicData.publicUrl) {
              throw new Error('خطا در دریافت URL عمومی فایل');
            }

            imageUrls.push(publicData.publicUrl);
          }
        })
      );

      const { error: dbError } = await supabase
        .from('user_images')
        .upsert([
          {
            user_id: userId, 
            image_url_1: imageUrls[0],
            image_url_2: imageUrls[1],
            image_url_3: imageUrls[2],
          },
        ]);

      if (dbError) throw dbError;

      setSuccessMessage('عملیات با موفقیت به اتمام رسید');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);

    } catch (error) {
      console.error('خطا در آپلود فایل‌ها:', error);
      alert('خطا در آپلود فایل‌ها');
      console.log(error);
    }
  };

  useEffect(() => {
    const hasError = errors.some((error) => error !== '');
    if (hasError) {
      setSuccessMessage('');
    }
  }, [errors]);

  useEffect(() => {
    const newErrors = ['وارد کردن تصویر الزامی است', 'وارد کردن تصویر الزامی است', 'وارد کردن تصویر الزامی است'];
    setErrors(newErrors);
  }, []);

  return (
    <>
      <Hede />
      <Navbarrej />
      <div className="float-end mr-20">
        <span className="text-jigary text-base font-sans">فرم ثبت نام اطلاعات</span>
      </div>

      <div className="grid grid-cols-5 mt-10">
        <div className="col-span-2">
          <img className="shadow-sm h-96 ml-20 w-96 mt-20" src="img/file.png" alt="" />
        </div>

        <form
          className="col-span-3 mt-10 border border-gray-100 rounded-xl mr-10 shadow-2xl p-8"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {/* نمایش ارورهای کلی */}
          <h2 className="font-bold text-lg text-right">لیست ارورها</h2>
          <div className="border border-red-500 p-4 rounded-lg mb-4 mt-2">
            {errors.some((error) => error !== '') && (
              <ul>
                {errors.map((error, index) => error && (
                  <li key={index} className="flex items-center justify-end text-red-500 text-ff">
                    <FaExclamationCircle className="mr-2" />
                    {error}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* فرم ورودی‌ها */}
          {['فایل شماره 1', 'فایل شماره 2', 'فایل شماره 3'].map((label, index) => (
            <div key={index} className="mb-4 text-left">
              <label className="block mb-2 text-gray-500 text-sm">{label}</label>
              <div className="flex items-center space-x-4">
                <label
                  htmlFor={`file-input-${index}`}
                  className="btn btn-sm btn-outline text-xs text-gray-400 hover:text-gray-600"
                >
                  انتخاب فایل
                </label>
                <input
                  type="file"
                  id={`file-input-${index}`}
                  className="hidden"
                  onChange={handleFileChange(index)}
                />

                {/* پیش‌نمایش تصویر */}
                {imagePreviews[index] && (
                  <img
                    src={imagePreviews[index]}
                    alt={`preview-${index}`}
                    className="w-16 h-16 object-cover border border-gray-300 rounded-lg"
                  />
                )}

                {/* نمایش نام فایل */}
                <span className="text-xs text-gray-600">
                  {fileNames[index] || 'فایلی انتخاب نشده'}
                </span>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-6">
            <button type="submit" className="btn btn-active btn-sm mb-2 text-xs">ثبت</button>
          </div>
        </form>

        {/* نمایش پیغام موفقیت */}
        {successMessage && (
          <Box_Alert_nmonekar setChekednav={() => {}} state={true} />
        )}
      </div>

      <Footer />
    </>
  );
}

export default Nmonekar;
