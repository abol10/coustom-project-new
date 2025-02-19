import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../service/Supabase';
import Hede from '../pages1/Hehe';
import { FaShoppingCart } from "react-icons/fa";
import { RxMagicWand } from "react-icons/rx";
import Footer from '../pages10/footer';
import Comments from '../comment/comment';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity } from '../kamz'; 
import { RootState } from '../../Store';
import { showSuccess } from './alert-product-true';
import supabase from '../pages4/serverLike';
import { showError } from '../comment/alert-comment';
import { useState, useEffect } from 'react';

// تابع برای گرفتن `user_id` از Supabase Auth
const getUserId = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user ? user.id : null;
};

const ProductDetailPage = () => {
  const [userlog, setuserlog] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  // انتخاب سبد خرید از Redux
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // جستجوی محصول در سبد خرید بر اساس id
  const productInCartRedux = cartItems.find(item => item.id === parseInt(id!));

  // گرفتن اطلاعات محصول از API
  const { data: products, isLoading, error } = useGetProductsQuery();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userId = await getUserId();
      setuserlog(!!userId); // اگر کاربر لاگین کرده باشد، true خواهد شد
    };
    checkLoginStatus();
  }, []);

  if (!id) {
    return <div>Product ID is missing!</div>;
  }

  if (isLoading) return <div className="mt-96 loader"></div>;
  if (error) return <div>Error occurred!</div>;

  const product = products?.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div className="flex justify-center mt-96">کالایی که شما وارد کردین یافت نشد دوباره تلاش کنین</div>;
  }

  // هنگامی که محصول به سبد خرید اضافه می‌شود
  const handleAddToCart = async () => {
    const userId = await getUserId(); // دریافت `user_id` از Supabase Auth

    if (!userId) {
      showError('شما برای این عملیات باید وارد اکانت خود شوید');
      return;
    }

    // بررسی اینکه آیا این محصول قبلاً توی سبد خرید کاربر هست یا نه
    if (productInCartRedux) {
      return; // اگر محصول در سبد خرید هست، کار اضافه کردن دوباره انجام نمی‌شود
    }

    // اضافه کردن محصول به سبد خرید با استفاده از Redux
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        count: 1,
        image: product.img,
      })
    );

    // ذخیره `user_id` و اطلاعات محصول در لوکال استوریج
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...cart, {
      id: product.id,
      name: product.name,
      price: product.price,
      count: 1,
      image: product.img,
      user_id: userId, // اضافه کردن `user_id`
    }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // نمایش پیام موفقیت
    showSuccess("محصول به سبد خرید اضافه شد");
  };

  // کاهش تعداد محصول
  const handleDecrement = () => {
    if (productInCartRedux) {
      dispatch(decrementQuantity(productInCartRedux.id));
    }
  };

  // افزایش تعداد محصول
  const handleIncrement = () => {
    if (productInCartRedux) {
      dispatch(incrementQuantity(productInCartRedux.id));
    }
  };

  const isInCart = !!productInCartRedux;

  return (
    <>
      <Hede />
      <div className="grid grid-cols-4 mt-10">
        <div className="col-span-2 mt-10">
          <h1 className="font-semibold text-jigary text-right mr-4">مشخصات محصول</h1>
          <div className="grid justify-end mr-4 text-ff">
            <span className="mt-5" dir="rtl">
              جنس: <span className="mr-2">{product.material}</span>
            </span>
            <span className="mt-5" dir="rtl">
              شست و شو: <span className="mr-2">{product.name}</span>
            </span>
            <span className="mt-5" dir="rtl">
              سایز ها: <span className="mr-2">{product.size}</span>
            </span>
            <span className="mt-5" dir="rtl">
              رنگ ها: <span className="mr-2">{product.color}</span>
            </span>
            <span className="mt-5" dir="rtl">
              قد: <span className="mr-2">{product.height}</span>
            </span>
          </div>
          <h1 className="flex justify-center mt-7 font-semibold mr-40">
            <span className="mr-2">تومان</span> {product.price}
          </h1>

          <div className="flex justify-center mt-20">
            {userlog ? (
              isInCart ? (
                // اگر محصول در سبد خرید بود
                <div className="flex items-center mr-10 bg-jigary px-5 btn btn-sm text-white hover:text-jigary">
                  <span className="pr-5 cursor-pointer" onClick={handleIncrement}>+</span>
                  <span>{productInCartRedux?.count || 1}</span>
                  <span className="pl-5 cursor-pointer" onClick={handleDecrement}>-</span>
                </div>
              ) : (
                // اگر محصول در سبد خرید نبود
                <button
                  onClick={handleAddToCart}
                  className="bg-jigary rounded-md text-white btn btn-sm text-ff mr-5 hover:text-jigary"
                >
                  <div className="flex">
                    افزودن به سبد خرید <FaShoppingCart className="mt-0.5 h-3 w-3 ml-1" />
                  </div>
                </button>
              )
            ) : (
              // اگر کاربر وارد نشده باشد
              <button
                onClick={handleAddToCart}
                className="bg-jigary rounded-md text-white btn btn-sm text-ff mr-5 hover:text-jigary"
              >
                <div className="flex">
                  افزودن به سبد خرید <FaShoppingCart className="mt-0.5 h-3 w-3 ml-1" />
                </div>
              </button>
            )}

            <button className="bg-jigary rounded-md text-white btn btn-sm text-ff hover:text-jigary">
              <div className="flex">
                شخصی سازی محصول <RxMagicWand className="mt-0.5 h-3 w-3 ml-2" />
              </div>
            </button>
          </div>
        </div>

        <div className="flex justify-center col-span-2">
          <img className="rounded-xl w-96 mr-5" src={product.img} alt={product.name} />
        </div>
      </div>

      <div>
        <h1 className="flex justify-end mr-10 mt-28 font-semibold text-jigary text-xl">امتیاز و دیدگاه کاربران</h1>
        <Comments productId={product.id} />
      </div>

      <Footer />
    </>
  );
};

export default ProductDetailPage;
