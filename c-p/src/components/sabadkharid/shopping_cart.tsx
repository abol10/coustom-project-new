import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity, clearCart, removeFromCart } from '../kamz'; // مسیر درست رو وارد کنید.
import { RootState } from '../../Store'; // اگر اسم Store متفاوت است، باید مسیر درست رو وارد کنید.

const Shopping_cart = () => {
  const dispatch = useDispatch();

  // دسترسی به سبد خرید از Redux store
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // اضافه کردن یک محصول به سبد خرید
  const handleAddToCart = (product:any) => {
    dispatch(addToCart(product));  // ارسال اکشن به Redux
  };

  // افزایش تعداد محصول
  const handleIncrement = (productId:number) => {
    dispatch(incrementQuantity(productId));  // ارسال اکشن به Redux
  };

  // کاهش تعداد محصول
  const handleDecrement = (productId:number) => {
    dispatch(decrementQuantity(productId));  // ارسال اکشن به Redux
  };

  // پاک کردن سبد خرید
  const handleClearCart = () => {
    dispatch(clearCart());  // ارسال اکشن به Redux
  };
  const handeremove=(productId:number)=>{
    dispatch(removeFromCart(productId))
  }

  return (
    <div>
      <h1>سبد خرید</h1>

      {/* نمایش محصولات سبد خرید */}
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>قیمت: {item.price}</p>
            <p>تعداد: {item.count}</p>

            <button onClick={() => handleIncrement(item.id)}>+</button>
            <button onClick={() => handleDecrement(item.id)}>-</button>
            <button onClick={() => handeremove(item.id)}>حذف از سبد خرید</button>
          </div>
        ))}
      </div>

      {/* دکمه پاک کردن سبد خرید */}
      <button onClick={handleClearCart}>پاک کردن سبد خرید</button>
    </div>
  );
};

export default Shopping_cart;
