import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, removeFromCart, incrementQuantity } from '../kamz';
import { RootState } from '../../Store';
import Hede from '../pages1/Hehe';
import Footer from '../pages10/footer';
import { TiDelete } from "react-icons/ti";
import { showSuccess } from '../ProductDetailPage/alert-product-true';
import supabase from '../pages4/serverLike';
import { useNavigate } from 'react-router-dom';

const Shopping_cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // نمایش محصولات بر اساس صفحه‌بندی بدون نیاز به استیت جدا
  const displayedProducts = cartItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  //جک کردن اکانت 
  const getUserId = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return user ? user.id : null;
  };
  const [userlog, setUserlog] = useState<boolean>(false);
  const naviget=useNavigate();
  // تغییر صفحه
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // افزایش تعداد محصول
  const handleIncrement = (productId: number) => {
    dispatch(incrementQuantity(productId));
  };
  

  // کاهش تعداد محصول
  const handleDecrement = (productId: number) => {
    dispatch(decrementQuantity(productId));
    const remainingItemsInPage = cartItems.filter(item => item.id !== productId)
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).length;
    const rem=cartItems.some(e=>e.id===productId&&e.count<2);
    if (remainingItemsInPage <= 0 && currentPage > 1&&rem) {
    setCurrentPage(prevPage => prevPage - 1);
    }
    if(rem)
    showSuccess('محصول از سبد خرید حذف شد');

   console.log(rem)
  };

  // حذف محصول
  const handleRemove = (productId: number) => {
    dispatch(removeFromCart(productId));
    showSuccess('محصول از سبد خرید حذف شد');
  
    // محاسبه تعداد آیتم‌های باقی‌مانده در صفحه جاری پس از حذف
    const remainingItemsInPage = cartItems.filter(item => item.id !== productId)
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).length;
  
    // اگر هیچ محصولی در صفحه جاری نمانده باشد و صفحه اول نباشیم، یک صفحه به عقب برویم
    if (remainingItemsInPage <= 0 && currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };
  

  // محاسبه مبلغ کل
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.count, 0);

  // ایجاد دکمه‌های صفحه‌بندی
  const totalPages = Math.ceil(cartItems.length / itemsPerPage);
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        key={i}
        className={`px-4 py-2 mx-2 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </button>
    );
  }
    useEffect(() => {
      const checkLoginStatus = async () => {
        const userId = await getUserId();
        setUserlog(!!userId);
      };
      checkLoginStatus();
    }, []);
   const Handellpage=()=>{
    if(userlog)
      naviget('/')
    else{
      naviget('/Login')
      alert('شما در حال حاضر اکانتی ندارین اول مراحل ثبت نام یا لاگین رو انجام بدید و در ادامه به')
    }
   }

  return (
    <div>
      <Hede />
      <div className='mx-44 rounded-lg mt-16 border border-gray-200 shadow-xl'>
        <h1 className='text-center font-semibold'>سبد خرید</h1>
        <div dir="rtl" className="grid grid-cols-4 gap-4gray-100 p-4 rounded-lg text-right mb-5">
          <div className="font-bold text-center border-b border-b-gray-300 pb-11">محصول</div>
          <div className="font-bold text-center border-b border-b-gray-300 pb-11">قیمت</div>
          <div className="font-bold text-center border-b border-b-gray-300 pb-11">تعداد</div>
          <div className="font-bold text-center border-b border-b-gray-300 pb-11">قیمت کل</div>

          {/* اطلاعات محصول */}
          {displayedProducts.map((item) => (
            <React.Fragment key={item.id}>
              <div className="flex items-center gap-4 mt-20 border-b border-b-gray-300 pb-5">
                <TiDelete className='text-xl cursor-pointer' onClick={() => handleRemove(item.id)} />
                <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg " />
                <span className="text-sm mb-1 font-semibold mr-5">{item.name}</span>
              </div>
              <div className="text-center mt-24 border-b border-b-gray-300 pb-5">{item.price} تومان</div>
              <div className="flex justify-center items-center mt-16 border-b border-b-gray-300 pb-5">
                <button className="px-2 bg-red-500 text-white rounded mt-3" onClick={() => handleDecrement(item.id)}>-</button>
                <span className="mx-3 mt-3">{item.count}</span>
                <button className="px-2 bg-green-500 text-white rounded mt-3" onClick={() => handleIncrement(item.id)}>+</button>
              </div>
              <div className="text-center font-semibold mt-24 border-b border-b-gray-300 pb-5">{item.price * item.count} تومان</div>
            </React.Fragment>
          ))}
        </div>

        <div className='flex justify-between items-center mb-7 mt-10 w-full'>
          <button onClick={Handellpage} className='btn btn-sm bg-jigary text-white hover:text-jigary text-sm px-5 ml-5'>تکمیل فرایند خرید</button>
          <h1 className='text-xl font-semibold mr-5'>مبلغ کل: {totalAmount} تومان</h1>
        </div>

        {/* دکمه‌های صفحه‌بندی */}
        <div className="flex justify-center mb-5">{pageButtons}</div>
      </div>

      <Footer />
    </div>
  );
};

export default Shopping_cart;
