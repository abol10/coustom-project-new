import Hede from "../pages1/Hehe";
import Footer from "../pages10/footer";
import ProfileSetting from "../ProfileSetting";
import { FaRegComments } from "react-icons/fa6";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import { PiCheckCircleLight } from "react-icons/pi";
import { LiaTimesCircleSolid } from "react-icons/lia";
import { CiImageOn } from "react-icons/ci";
import { RiShoppingBag4Line } from "react-icons/ri";
import ProductLike from "../ProductLike/ProductLike";









const ProfilePage2 = () => {
    return ( 
        <div>
            <Hede />
             <span className="flex justify-end text-2xl mr-20 mt-10 font-bold ">پروفایل</span>
              {/* گرید کردن  */}
            <div className="grid grid-cols-6">
                <div className=" col-span-4  mx-10 rounded-lg shadow-xl">
                  <span className="flex justify-end  mt-2 mr-5 font-semibold text-xl">سفارشات من</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-6 mb-10 mt-3">
       {/* 1 */}
               <div className="col-span-1 ml-24 border-r border-gray-300 pr-4"> {/* اضافه کردن خط عمودی در بین */}
                 <div>
                <div className="flex">
                   <span className="text-base">10 محصول</span>
                <CiImageOn className="text-jigary ml-0.5 mt-1.5"/>
         </div>
                  <span className="text-ff mb-10 ml-5">درگالری</span>
                </div>
                <div className="mt-5">
                     <div className="flex">
                   <span className="block text-base">28محصول</span>
                        <RiShoppingBag4Line className="text-jigary ml-1 mt-1.5" />
                 </div>
                  <span className="text-ff mb-10 ml-5">فیزیکی</span>
           </div>
        </div>

      {/* 2 */}
      <div className="col-span-1 ml-24 border-r border-gray-300 pr-4"> {/* اضافه کردن خط عمودی در بین */}
            <div>
                   <div className="flex">
                   <span className="text-base">۴۵ سفارش</span>
               <PiCheckCircleLight className="text-jigary ml-1 mt-1.5" />
                                </div>
                  <span className="text-ff mb-10 ml-3">ارسال شده</span>
                </div>
                <div className="mt-5">
                  <div className="flex">
                    <span className="block text-sm">215 سفارش</span>
                    <LiaTimesCircleSolid className="text-jigary ml-1 mt-1.5" />
                  </div>
                  <span className="text-ff mb-10 mr-1 ml-4">لغو شده</span>
                </div>
              </div>
            
              {/* 3 */}
              <div className="col-span-1 ml-24">
                <div className="">
                  <div className="flex">
                    <span className="text-base">۴۵ سفارش</span>
                    <IoEllipsisHorizontalCircle className="text-jigary ml-1 mt-1.5" />
                  </div>
                  <span className="text-ff mb-10 ml-5">جاری</span>
                </div>
                <div className="mt-5 ml-5">
                  <div className="flex">
                    <span className="block text-base">54 نظر</span>
                    <FaRegComments className="text-jigary ml-1 mt-1.5" />
                     </div>
                  <span className="text-ff mb-10 mr-1">ثبت شده</span>
                </div>
              </div>
            </div> 
            {/* اتمام */}
            <span className="flex justify-end mr-4 mb-8 font-semibold text-xl">علاقه مندی ها</span>
          <div className="mx-10" dir="rtl">
            <ProductLike />
          </div>

                </div> 
               {/* profileSetting */}
               <div className="col-span-2">
                <ProfileSetting />
               </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default ProfilePage2;











    // const ProductsBest = [
    //     {
    //         nazsr: '/img/ss.png',
    //         sfarsh: 'موبایل',
    //         caption: 'دارای رنگ بندی قابل طراحی',
    //         ghimat: '150,000 تومان',
    //         like: false,
    //         id: "1"
    //     }

    // ];

 {/* {ProductsBest.map((product,index) => (
                 <div key={product.id + "_" + index} className="border p-4 rounded-xl h-64 w-52 mt-5 mb-2">
                   <img src={product.img} alt={product.name} className="w-full h-32 object-cover mb-2" />
                 <h3 className="text-center">{product.name}</h3>
                <p className="text-center">{product.caption}</p>
                 <p className="text-center">{product.ghimat}</p>
                  </div>
                ))} */}