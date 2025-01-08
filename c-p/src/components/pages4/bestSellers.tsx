import { GiMedallist } from "react-icons/gi";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { useState, useEffect } from "react";
import { useGetProductsQuery } from "../../service/Supabase";

const Bestsellers = () => {
  // ایجاد وضعیت لایک برای هر محصول
  const [likedProducts, setLikedProducts] = useState<{ [key: number]: boolean }>({});

  const { data, isLoading } = useGetProductsQuery();

  // وقتی داده‌ها بارگذاری شدند، وضعیت لایک همه‌ی محصولات را به false تغییر می‌دهیم
  useEffect(() => {
    if (data) {
      // برای هر محصول، وضعیت لایک را به false (دیسلایک) تنظیم می‌کنیم
      const initialLikes: { [key: number]: boolean } = {};
      data.forEach((product) => {
        initialLikes[product.id] = true; // همه محصولات به طور پیش‌فرض دیسلایک هستند
      });
      setLikedProducts(initialLikes);
    }
  }, [data]);

  // عملکرد تغییر وضعیت لایک
  const handel = (id: number) => {
    setLikedProducts((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // تغییر وضعیت لایک
    }));
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
            {/* تصویر محصول */}
            <img
              className="w-40 h-32 object-cover mb-2 ml-auto rounded-md"
              src={e.img}
              alt={e.name}
            />
            {/* آیکن Like/Dislike */}
            <div className="grid grid-cols-2 text-right">
              {likedProducts[e.id] ? (
                <FcDislike
                  onClick={() => handel(e.id)}
                  className="col-span-1 mt-2 cursor-pointer"
                />
              ) : (
                <FcLike
                  onClick={() => handel(e.id)}
                  className="col-span-1 mt-2 cursor-pointer"
                />
              )}
              <span className="text-ff col-span-1">{e.name}</span>
            </div>
            {/* توضیحات و قیمت */}
            <span className="block text-right text-ff mt-4">{e.caption}</span>
            <span className="block text-right text-sm mt-2">تومان {e.price}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bestsellers;
