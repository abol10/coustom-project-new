import { GiMedallist } from "react-icons/gi";
import { FcLike } from "react-icons/fc";
import { useState, useEffect } from "react";
import { useGetProductsQuery } from "../../service/Supabase";
import supabase from "./serverLike";  // وارد کردن supabaseClient
import { CiHeart } from "react-icons/ci";


const Bestsellers = () => {
  const [likedProducts, setLikedProducts] = useState<{ [key: number]: boolean }>({});
  
  const { data, isLoading } = useGetProductsQuery();

  // وقتی که داده‌ها بارگذاری شدند، وضعیت لایک‌ها را از دیتابیس و یا localStorage دریافت می‌کنیم
  useEffect(() => {
    const fetchLikes = async () => {
      if (data) {
        // ابتدا همه‌ی محصولات را به صورت دیسلایک در نظر می‌گیریم
        const initialLikes: { [key: number]: boolean } = {};
        data.forEach((product) => {
          initialLikes[product.id] = false; // همه محصولات به طور پیش‌فرض دیسلایک هستند
        });

        // خواندن لایک‌های موجود از localStorage
        const storedLikes = JSON.parse(localStorage.getItem('likedProducts') || '{}');

        // اگر اطلاعات لایک از localStorage موجود باشد، آن را بارگذاری می‌کنیم
        setLikedProducts((prevState) => ({
          ...prevState,
          ...storedLikes
        }));

        const { data: userData, error: userError } = await supabase.auth.getUser();
        
        if (userError || !userData?.user) {
          console.log("User is not logged in.");
          return;
        }

        const userId = userData.user.id; // شناسه کاربر

        // خواندن لایک‌ها از دیتابیس
        const { data: likesData, error: likesError } = await supabase
          .from('likes')
          .select('product_id')
          .eq('user_id', userId);

        if (likesError) {
          console.error("Error fetching likes:", likesError);
        } else {
          // تغییر وضعیت لایک‌ها بر اساس داده‌های دریافتی از دیتابیس
          likesData?.forEach((like) => {
            initialLikes[like.product_id] = true; // اگر لایک کرده باشد، true می‌شود
          });
        }

        // ذخیره وضعیت لایک‌ها در localStorage
        localStorage.setItem('likedProducts', JSON.stringify(initialLikes));

        // ذخیره وضعیت لایک‌ها در state
        setLikedProducts(initialLikes);
      }
    };

    fetchLikes();
  }, [data]);

  // تغییر وضعیت لایک
  const handel = async (productId: number) => {
    const { data: userData, error: userError } = await supabase.auth.getUser();
  
    if (userError || !userData?.user) {
      console.log("User is not logged in.");
      return;
    }
  
    const userId = userData.user.id;
    const isLiked = likedProducts[productId];
  
    const product = data?.find((e) => e.id === productId); // پیدا کردن محصول بر اساس productId
    if (!product) return; // اگر محصول پیدا نشد، ادامه نمی‌دهیم
  
    const { name, caption, price, img } = product;  // اضافه کردن img برای ذخیره تصویر
  
    // حذف کاما از قیمت و تبدیل به عدد
  
    // اگر قبلاً لایک شده باشد، دیسلایک می‌شود
    if (isLiked) {
      const { error } = await supabase
        .from('likes')
        .delete()
        .eq('product_id', productId)
        .eq('user_id', userId);
  
      if (error) {
        console.error("Error unliking product:", error);
      } else {
        console.log("Product unliked successfully");
      }
    } else {
      // اگر لایک نشده باشد، لایک جدید اضافه می‌شود
      const { error } = await supabase
        .from('likes')
        .insert([{
          product_id: productId,
          user_id: userId,
          product_name: name,
          product_caption: caption,
          product_price: price,  // استفاده از price عددی
          product_img: img  // ذخیره تصویر محصول
        }]);
  
      if (error) {
        console.error("Error liking product:", error);
      } else {
        console.log("Product liked successfully");
      }
    }
  
    // به‌روزرسانی وضعیت لایک در state و localStorage
    const updatedLikes = {
      ...likedProducts,
      [productId]: !likedProducts[productId],
    };
  
    setLikedProducts(updatedLikes);
    localStorage.setItem('likedProducts', JSON.stringify(updatedLikes));
  };
  
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex items-center mt-3">
        <span className="text-xs ml-32 mb-1 text-jigary font-semibold">مشاهده بیشتر</span>
        <div className="relative flex-grow">
          <div className="before:content-[''] before:block before:h-px before:bg-gray-400 before:absolute before:left-7 before:right-2 before:top-0"></div>
        </div>
        <span className="mb-2 text-xl font-semibold">پرفروش ترین ها</span>
        <GiMedallist className="text-gray-500 text-5xl mr-8 mb-3" />
      </div>

      <div className="grid grid-cols-1 justify-end g sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4 mr-5 ml-10">
        {data?.map((e) => (
          <div
            className="text-right border-2 border-gray-300 p-3 rounded-lg hover:border-gray-900"
            key={e.id}
          >
            <img
              className="w-40 h-32 object-cover mb-2 ml-auto rounded-md"
              src={e.img}
              alt={e.name}
            />
            
            <div className="grid grid-cols-2 text-right">
              {likedProducts[e.id] ? (
                 <FcLike
                 onClick={() => handel(e.id)}
                 className="col-span-1 mt-2 cursor-pointer"
               />
              ) : (
                <CiHeart
                onClick={() => handel(e.id)}
                className="col-span-1 mt-2 cursor-pointer text-base"
              />
              )}
              <span className="text-ff col-span-1">{e.name}</span>
            </div>
            <span className="block text-right text-ff mt-4">{e.caption}</span>
            <span className="block text-right text-sm mt-2">تومان {e.price}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bestsellers;
