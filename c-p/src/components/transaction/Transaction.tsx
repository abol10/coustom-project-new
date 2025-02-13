import Hede from "../pages1/Hehe";
import Footer from "../pages10/footer";
import ProfileSetting from "../ProfileSetting";
const Transaction = () => {
    return ( 
        <div>
            <Hede />
             <span className="flex justify-end text-2xl mr-20 mt-10 font-bold ">پروفایل</span>
              {/* گرید کردن  */}
            <div className="grid grid-cols-6">
                <div className=" col-span-4  mx-10 rounded-lg shadow-xl mt-10">
                 <span className="flex justify-end mr-5 text-xl font-semibold mt-10">تاریخچه سفارشات</span>
                 <div className="grid grid-cols-2  border-b border-b-gray-300 pb-5 mx-5">
                      {/* col 1 */}
                  <div className="col-span-1">
                  </div>

                      {/* col2 */}
                     <div className="flex justify-between col-span-1 flex-row-reverse mt-6 ">
                        <button className="text-ff hover:text-jigary">جاری</button>
                        <button className="text-ff hover:text-jigary">تحویل شده</button>
                        <button className="text-ff hover:text-jigary">مرجوع شده</button>
                        <button className="text-ff hover:text-jigary">لغو شده</button>
                    </div>
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
 
export default Transaction;



