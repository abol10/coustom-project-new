import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../service/Supabase';
import Hede from '../pages1/Hehe';
import { FaShoppingCart } from "react-icons/fa";
import Footer from '../pages10/footer';
import Comments from '../comment/comment';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity, removeFromCart } from '../kamz';
import { RootState } from '../../Store';
import { showSuccess } from './alert-product-true';
import { showError } from '../comment/alert-comment';
import { useState, useEffect } from 'react';
import supabase from '../pages4/serverLike';
import { RxMagicWand } from 'react-icons/rx';

// تابع برای گرفتن `user_id` از Supabase Auth
const getUserId = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user ? user.id : null;
};

const ProductDetailPage = () => {
  const [userlog, setUserlog] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  // گرفتن سبد خرید از Redux
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // جستجوی محصول در سبد خرید بر اساس id
  const productInCartRedux = cartItems.find(item => item.id === parseInt(id!));

  // گرفتن اطلاعات محصول از API
  const { data: products, isLoading, error } = useGetProductsQuery();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userId = await getUserId();
      setUserlog(!!userId);
    };
    checkLoginStatus();
  }, []);

  if (!id) return <div>Product ID is missing!</div>;
  if (isLoading) return <div className="mt-96 loader"></div>;
  if (error) return <div>Error occurred!</div>;

  const product = products?.find((prod) => prod.id === parseInt(id));
  if (!product) return <div className="flex justify-center mt-96">محصول یافت نشد</div>;

  // اضافه کردن محصول به سبد خرید
  const handleAddToCart = async () => {
    const userId = await getUserId();
    if (!userId) {
      showError('برای خرید باید وارد حساب کاربری شوید');
      return;
    }

    // بررسی اینکه آیا محصول قبلاً در سبد خرید موجود است یا نه
    const existingProduct = cartItems.find(item => item.id === product.id && item.user_id === userId);

    if (existingProduct) {
      // اگر محصول موجود است، تعداد آن را افزایش می‌دهیم
      dispatch(incrementQuantity(existingProduct.id)); // به‌روزرسانی تعداد در Redux

      const updatedProduct = cartItems.find(item => item.id === existingProduct.id);
      
      if (updatedProduct) {
        const { error } = await supabase
          .from('cart')
          .update({ count: updatedProduct.count})  // استفاده از تعداد به‌روزرسانی شده
          .eq('user_id', userId)
          .eq('product_id', product.id);

        if (error) {
          showError('خطا در به‌روزرسانی تعداد');
        } else {
          showSuccess('تعداد محصول در سبد خرید به‌روزرسانی شد');
        }
      }
    } else {
      // اگر محصول وجود ندارد، یک رکورد جدید اضافه می‌کنیم
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        count: 1,  // تعداد اولیه 1
        image: product.img,
        user_id: userId,
      }));

      const { error: insertError } = await supabase
        .from('cart')
        .upsert([{
          user_id: userId,
          product_id: product.id,
          name: product.name,
          price: product.price,
          count: 1,  // تعداد اولیه 1
          image: product.img,
        }], { onConflict: 'user_id,product_id' });  // اصلاح این قسمت
  
      if (insertError) {
        showError('خطا در اضافه کردن محصول');
      } else {
        showSuccess('محصول به سبد خرید اضافه شد');
      }
        
    }
  };

  const handleIncrement = async () => {
    if (productInCartRedux) {
      dispatch(incrementQuantity(productInCartRedux.id));

      const updatedProduct = cartItems.find(item => item.id === productInCartRedux.id);
      
      if (updatedProduct) {
        const { error } = await supabase
          .from('cart')
          .update({ count: updatedProduct.count })  // به‌روزرسانی تعداد با مقدار جدید
          .eq('user_id', updatedProduct.user_id)
          .eq('product_id', updatedProduct.id);

        if (error) {
          console.error("Error updating count in Supabase:", error);
        }
      }
    }
  };

  const handleDecrement = async () => {
    if (productInCartRedux && productInCartRedux.count > 1) {
      dispatch(decrementQuantity(productInCartRedux.id));

      const updatedProduct = cartItems.find(item => item.id === productInCartRedux.id);
      
      if (updatedProduct) {
        const { error } = await supabase
          .from('cart')
          .update({ count: updatedProduct.count })  // به‌روزرسانی تعداد با مقدار جدید
          .eq('user_id', updatedProduct.user_id)
          .eq('product_id', updatedProduct.id);

        if (error) {
          console.error("Error updating count in Supabase:", error);
        }
      }
    } else if (productInCartRedux && productInCartRedux.count === 1) {
      handleRemoveFromCart();
    }
  };

  const handleRemoveFromCart = async () => {
    dispatch(removeFromCart(product.id));
    await supabase.from('cart').delete().eq('product_id', product.id);
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
                <div className="flex items-center mr-10 bg-jigary px-5 btn btn-sm text-white hover:text-jigary mb-20">
                  <span className="pr-5 cursor-pointer" onClick={handleIncrement}>+</span>
                  <span>{productInCartRedux?.count}</span>
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
          <img className="h-96" src={product.img} alt={product.name} />
        </div>
      </div>

      <Comments productId={product.id} />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
