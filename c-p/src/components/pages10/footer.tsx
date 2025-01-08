import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import {ReactTyped} from 'react-typed'
const Footer = () => {
    return (  
        <div className="mt-24">
        <div className="grid grid-cols-2 bg-red-900">
          <div className="col-span-1 mt-10 mr-20">
             <span className="flex justify-center text-white text-sm">
                مارا در شبکه های اجتماعی دنبال کنید
             </span>
             <div className="flex justify-center mt-4" >
                 <FaSquareInstagram className="ml-4 text-xl" />
                 <FaFacebookF className="ml-4 text-xl" />
                 <BsTelegram className="ml-4 text-xl"/>
                  <FaYoutube className="ml-4 text-xl"/>
             </div>
           </div>
           <div className="col-span-1 mt-14 ml-28 mb-12">
               <span className=" text-white text-xs ml-20">برای  اخرین اخبار از تخفیف ها و اخبار ایمیل خود را وارد کنید</span>
              <div className="flex">
              <input placeholder="ایمیل شما" className="block w-96 h-7 border border-white rounded-md outline-none bg-red-900 placeholder:text-opacity-45 text-sm placeholder:text-right placeholder:pr-2" type="text" />
              <button className="border border-jigary text-white px-3 ml-2 bg-jigary rounded-md">ثبت</button>
              </div>

           </div>
        </div>
        <div className="grid grid-cols-5 bg-jigary">
            <div className="col-span-2 mt-8">
                <span className="flex justify-center text-white text-base">فروشگاه اینترنتی کاستومی</span>
                <div className="flex justify-center mt-6">
                    <span className=" text-white text-opacity-50 text-xs ">تماس با پشتیبانی   :0939999 </span>
                    <span className=" text-white text-opacity-50 text-xs order-first mr-8">پاسخگویی24ساعته7روزهفته</span>
                </div>
                <div className="flex ml-36 mt-16 w-14 h-16">
                    <img className="rounded-md mr-4" src="/img/ghabm.png" alt="" />
                    <img className="rounded-md mr-4" src="/img/ghabm.png" alt="" />
                    <img className="rounded-md mr-4" src="/img/ghabm.png" alt="" />
                </div>
            </div>
            <div className="col-span-1 mt-10 text-white">
                <span className="block ml-14 text-xs underline underline-offset-8">راهنمای خرید</span>
                <button className="block text-right text-xs ml-6  mt-8">راهنمای ثبت سفارش</button>
                <button className="block text-right text-xs ml-9 mt-4">شیوه های پرداخت</button>
                <button className="block text-right text-xs ml-4 mt-4">نحوه ارسال سفارش ها</button>
                <button className="block text-right text-xs mt-4">شرایط بازگرداندن محصول</button>
            </div>
            <div className="col-span-1 mt-10 text-white">
                <span className="block ml-20 text-xs underline underline-offset-8">خدمات مشتریان</span>
                <button className="block ml-20 text-right text-xs ml- mt-8">سوالات متداول</button>
                <button className="block text-right text-xs ml-20 mt-4">حریم خصوصی</button>
                <button className="block text-right text-xs ml-24 mt-4">ثبت شکایت</button>
                <button className="block text-right text-xs ml-14 mt-4">ضمانت نامه محصولات</button>
            </div>
            <div className="col-span-1 mt-10 text-white">
                <span className="block ml-14 text-xs underline underline-offset-8">همراه با کاستومی</span>
                <button className="block text-right text-xs ml-14  mt-8">فروش محصولات</button>
                <button className="block text-right text-xs ml-16 mt-4">فرصت همکاری</button>
                <button className="block text-right text-xs ml-20 mt-4">تماس با ما</button>
                <button className="block text-right text-xs ml-20 mt-4 mb-16">نقشه سایت</button>
            </div>
        </div>
        {/* <span className="flex justify-center text-xs text-white bg-jigary">
                تمام حقوق این سایت متعلق به فروشگاه کاستومی میباشد
            </span> */}
        <ReactTyped className="flex justify-center text-xs text-white bg-jigary"strings={["تمام حقوق این سایت متعلق به فروشگاه کاستومی میباشد"]} typeSpeed={100} />
        </div>
    );
}
 
export default Footer;