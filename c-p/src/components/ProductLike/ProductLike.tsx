import { useState, useEffect } from "react";
import { useGetLikesQuery } from "./ServerLikeProduct";
import supabase from "../pages4/serverLike";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/scrollbar';

const ProductLike = () => {
  const [likedProducts, setLikedProducts] = useState<{ [key: number]: boolean }>({});
  const { data, isLoading } = useGetLikesQuery();

  useEffect(() => {
    if (data) {
      const initialLikes: { [key: number]: boolean } = {};
      data.forEach((like) => {
        initialLikes[like.product_id] = true;
      });

      localStorage.setItem('likedProducts', JSON.stringify(initialLikes));
      setLikedProducts(initialLikes);
    }
  }, [data]);

  const handleLike = async (productId: number) => {
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData?.user) {
      console.log("User is not logged in.");
      return;
    }

    const userId = userData.user.id;
    const isLiked = likedProducts[productId];

    const product = data?.find((e) => e.product_id === productId);
    if (!product) return;

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

      setLikedProducts((prevState) => {
        const updatedLikes = { ...prevState };
        delete updatedLikes[productId];
        return updatedLikes;
      });

      localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    }

    const updatedLikes = {
      ...likedProducts,
      [productId]: !likedProducts[productId],
    };

    setLikedProducts(updatedLikes);
    localStorage.setItem('likedProducts', JSON.stringify(updatedLikes));
  };

  const filteredData = data?.filter((product) => likedProducts[product.product_id]);

  
  if (isLoading) {
    return <div className="animate-pulse flex justify-center">
            <div className="animate-pulse h-[240px] w-[180px] bg-gray-300 rounded-xl mx-2">
           
            </div>
            <div className="animate-pulse h-[240px] w-[180px] bg-gray-300 rounded-xl mx-2">
           
           </div>
           <div className="animate-pulse h-[240px] w-[180px] bg-gray-300 rounded-xl mx-2">
           
           </div>
           <div className="animate-pulse h-[240px] w-[180px] bg-gray-300 rounded-xl mx-2">
           
           </div>
  
    </div>;
  }

  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={15}
        slidesPerView={4}
        // dir="rtl"
        breakpoints={{
          320: {
            slidesPerView: 1, // نمایش یک محصول برای موبایل
          },
          480: {
            slidesPerView: 2, // نمایش دو محصول برای تبلت
          },
          768: {
            slidesPerView: 3, // نمایش سه محصول برای صفحات کوچکتر
          },
          1024: {
            slidesPerView: 4, // نمایش چهار محصول در صفحه بزرگتر
          },
        }}
      >
        {filteredData?.map((e) => (
          <SwiperSlide key={e.id} className="swiper-slide">
            <div className="text-right border-2 border-gray-300 p-4 rounded-lg hover:border-gray-900 h-[240px] flex flex-col cursor-pointer shadow-xl">
              <img
                className="w-full h-28 object-cover mb-2 ml-auto rounded-md"
                src={e.product_img}
                alt={e.product_name}
              />
              <div className="flex justify-between items-center">
                {likedProducts[e.product_id] ? (
                  <FcLike
                    onClick={() => handleLike(e.product_id)}
                    className="cursor-pointer"
                  />
                ) : (
                  <CiHeart
                    onClick={() => handleLike(e.product_id)}
                    className="cursor-pointer text-base"
                  />
                )}
                <span className="text-ff ">{e.product_name}</span>
              </div>
              <span className="block text-right text-ff mt-1.5 line-clamp-2 mb-2">{e.product_caption}</span>
              <span className="block text-right text-sm ">تومان {e.product_price}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductLike;
