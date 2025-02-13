import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../service/Supabase';
import Hede from '../pages1/Hehe';
import { FaShoppingCart } from "react-icons/fa";
import { RxMagicWand } from "react-icons/rx";
import Footer from '../pages10/footer';
import Comments from '../comment/comment';


const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Product ID is missing!</div>;
  }

  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <div className='mt-96 loader'></div>;

  if (error) return <div>Error occurred!</div>;

  const product = products?.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div className='flex justify-center mt-96'>کالایی که شما وارد کردین یافت نشد دوباره تلاش کنین</div>;
  }

  return (
    <>
      <Hede />
      <div className="grid grid-cols-4 mt-10">
        {/* 1 */}
        <div className="col-span-2 mt-10">
          <h1 className="font-semibold text-jigary text-right mr-4">مشخصات محصول</h1>
          <div className="grid justify-end mr-4 text-ff">
            <span className="mt-5" dir="rtl">
              جنس:<span className="mr-2 ">{product.material}</span>
            </span>
            <span className="mt-5" dir="rtl">
              شست و شو:<span className="mr-2 ">{product.name}</span>
            </span>
            <span className="mt-5" dir="rtl">
              سایز ها:<span className="mr-2 ">{product.size}</span>
            </span>
            <span className="mt-5" dir="rtl">
              رنگ ها:<span className="mr-2">{product.color}</span>
            </span>
            <span className="mt-5" dir="rtl">
              قد:<span className="mr-2">{product.height}</span>
            </span>
          </div>
          <h1 className="flex justify-center mt-7 font-semibold mr-40">
            <span className="mr-2">تومان</span> {product.price}
          </h1>

          <div className="flex justify-center mt-20">
            <button className="bg-jigary rounded-md text-white btn btn-sm text-ff mr-5 hover:text-jigary">
              افزودن به سبد خرید <FaShoppingCart className="mt-0.5 h-3 w-3" />
            </button>
            <button className="bg-jigary rounded-md text-white btn btn-sm text-ff hover:text-jigary">
              شخصی سازی محصول <RxMagicWand className="mt-0.5 h-3 w-3" />
            </button>
          </div>
        </div>
        {/* 2 */}
        <div className="flex justify-center col-span-2">
          <img className="rounded-xl w-96 mr-5" src={product.img} alt="" />
        </div>
      </div>
         <div>
            <h1  className=' flex justify-end  mr-10 mt-28 font-semibold text-jigary text-xl'>
                امیتاز و دیدگاه کاربران
            </h1>
            <Comments productId={product.id} />
         </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
