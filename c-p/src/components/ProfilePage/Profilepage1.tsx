import Hede from "../pages1/Hehe";
import Footer from "../pages10/footer";
import { LiaCameraSolid } from "react-icons/lia";
import { CiCirclePlus } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { RiArrowGoBackLine, RiFolderHistoryLine, RiGalleryFill, RiUserFollowLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";
import { useEffect, useState } from "react";
import { supabase } from "./ServerProfile";



const PrifilePage1 = () => {
    const ProductsBest = [
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: "1"
        },
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '2'
        },
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '3'
        },
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '4'
        },
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '5'
        },
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '6'
        },
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '7'
        },
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '8'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '8'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '8'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '8'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '8'
        }
    ];
    const ProfileUser=[{
        name:"ali",
        profileuser:"img/profiledes.png",
        email:"ali@gmail.com",
        mojidi:1000,
        designnumber:45,
        orderNumber:34
    }]
        const [profileImage, setProfileImage] = useState<string | null>(null);
        const [isUploading, setIsUploading] = useState(false);
        const convertPersianToEnglish = (str: string) => {
            const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
            const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            
            return str.replace(/[۰-۹]/g, (match) => englishDigits[persianDigits.indexOf(match)]);
        };
        // بارگذاری تصویر پروفایل
        const uploadImage = async (file: File | null) => {
            if (!file) return;
        
            setIsUploading(true);
        
            try {
                // دریافت اطلاعات کاربر
                const { data: user, error: userError } = await supabase.auth.getUser();
        
                if (userError || !user) {
                    console.error('User not logged in!');
                    return;
                }
        
                // ایجاد یک نام یکتا برای فایل با استفاده از شناسه کاربر و زمان
                const fileName = `${user.user.id}_${Date.now()}_${encodeURIComponent(convertPersianToEnglish(file.name))}`;
        
                // بارگذاری تصویر به داخل storage
                const { data, error } = await supabase.storage
                    .from('profile-images')  // نام باکت در سوپابیس
                    .upload(fileName, file);
        
                if (error) {
                    throw error;
                }
        
                // دریافت URL فایل بارگذاری شده
                const url = supabase.storage
                    .from('profile-images')
                    .getPublicUrl(data.path).data.publicUrl;
        
                // ذخیره URL در پایگاه داده
                const { error: dbError } = await supabase
                    .from('profiles')
                    .upsert({
                        user_id: user.user.id,
                        profile_image_url: url,
                    });
        
                if (dbError) {
                    throw dbError;
                }
        
                // تنظیم تصویر پروفایل جدید
                setProfileImage(url);
                setIsUploading(false);
        
                // ذخیره در localStorage برای استفاده مجدد
                localStorage.setItem('profileImage', url);
        
            } catch (error) {
                console.error('Error uploading image:', error);
                setIsUploading(false);
            }
        };
     
        // دریافت تصویر پروفایل از دیتابیس
        const fetchProfileImage = async () => {
            const { data: user, error: userError } = await supabase.auth.getUser();
    
            if (userError || !user) {
                console.error('User not logged in!');
                return;
            }
    
            try {
                // چک کردن در لوکال استوریج
                const savedImage = localStorage.getItem('profileImage');
                if (savedImage) {
                    setProfileImage(savedImage);
                    return;
                }
    
                // دریافت تصویر پروفایل از دیتابیس
                const { data, error } = await supabase
                    .from('profiles')
                    .select('profile_image_url')
                    .eq('user_id', user.user.id)  // فیلتر بر اساس user_id
                    .limit(1)  // محدود کردن تعداد رکوردهای برگشتی به یک رکورد
                    .single();  // فقط یک رکورد بازگشت داده شود
    
                if (error) {
                    throw error;
                }
    
                // تنظیم تصویر پروفایل از دیتابیس یا تصویر پیش‌فرض
                setProfileImage(data?.profile_image_url || "");
    
            } catch (error) {
                console.error('Error fetching profile image:', error);
            }
        };
    
        // بارگذاری تصویر پروفایل هنگام بارگذاری صفحه
        useEffect(() => {
            fetchProfileImage();
        }, []);
    return ( 
        <div>
            <Hede />
             <span className="flex justify-end text-2xl mr-20 mt-10 font-bold ">پروفایل</span>
              {/* گرید کردن  */}
            <div className="grid grid-cols-6">
                <div className=" col-span-4  mx-10 rounded-lg shadow-xl">
                  <span className="flex justify-end  mt-2 mr-5 font-semibold text-base">خرید های پر تکرار من</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-6">
                 {ProductsBest.map((product,index) => (
                 <div key={product.id + "_" + index} className="border p-4 rounded-xl h-64 w-52 mt-5 mb-2">
                   <img src={product.img} alt={product.name} className="w-full h-32 object-cover mb-2" />
                 <h3 className="text-center">{product.name}</h3>
                <p className="text-center">{product.caption}</p>
                 <p className="text-center">{product.ghimat} تومان</p>
                  </div>
                ))}
                 </div>
                </div>
 
                   {/* قسمت پروفایل */}
                <div className="col-span-2 mx-5  rounded-xl mt-10 shadow-md">
                <div>
  {ProfileUser.map((e, index) => (
    <div key={index}> {/* استفاده از id یا index برای key */}
      <div className="grid justify-center">
        <img className="relative rounded-full h-32 w-32 mt-5" src={profileImage ||"img/aaa.jpg"} alt="" />
        <LiaCameraSolid
          onClick={() => document.getElementById("file-input")?.click()}
          className="absolute right-56 mt-28 mr-4 h-8 w-8 border border-jigary bg-jigary rounded-full text-xl text-white cursor-pointer"
        />
        <input
          id="file-input"
          type="file"
          style={{ display: 'none' }} // مخفی کردن input
          onChange={(e) => {
            const file = e.target.files?.[0]; // استفاده از optional chaining برای چک کردن
            if (file) { // چک می‌کنیم که فایل موجود باشد
              uploadImage(file); // تغییر تصویر پروفایل
            } else {
              console.log("No file selected");
            }
          }}
        />
        {isUploading && <p className="flex justify-center text-jigary text-ff">در حال آپلود...</p>}
      </div>
      <span className="grid justify-center mt-2">{e.name}</span>
      <span className="grid justify-center mt-1 text-base/8 border-b pb-6">{e.email}</span>
      <div className="grid grid-cols-2 mt-4">
        <div className="col-span-1 text-sm">
          <span className="ml-2 mr-2">{e.mojidi}</span>
          <span className="">تومان</span>
        </div>
        <div className="flex col-span-1 justify-end mr-1">
          <CiCirclePlus className="h-4 w-4 text-jigary m-1 cursor-pointer" />
          <span className="text-sm font-semibold">اعتبار خرید</span>
        </div>
      </div>
      {/* 2 */}
      <div className="grid grid-cols-2 mt-8">
        <div className="col-span-1 text-sm">
          <span className="ml-6 mr-2">{e.designnumber}</span>
        </div>
        <div className="flex col-span-1 justify-end mr-1">
          <span className="text-sm font-semibold">تغداد طرح ها</span>
        </div>
      </div>
      {/* 3 */}
      <div className="grid grid-cols-2 mt-8">
        <div className="col-span-1 text-sm">
          <span className="ml-6 mr-2">{e.orderNumber}</span>
        </div>
        <div className="flex col-span-1 justify-end mr-1">
          <span className="text-sm font-semibold">تعداد سفارش ها</span>
        </div>
      </div>
      {/* 4 */}
      <div className="grid grid-cols-2 mt-8">
        <div className="col-span-1 text-sm"></div>
        <div className="flex col-span-1 justify-end mr-1 border-b pb-2 hover:text-jigary hover:border-jigary cursor-pointer">
          <span className="text-sm font-semibold">داشبورد</span>
          <GoHome className="h-4 w-4 m-1 " />
        </div>
      </div>
      <div className="">
        <div className="flex justify-end mr-2 mt-5 border-b pb-2 ml-5 cursor-pointer">
          <span className="text-sm mr-2 font-semibold">
            تاریخچه سفارشات
          </span>
          <RiFolderHistoryLine className="mt-1" />
        </div>
      </div>
      {/* 2 */}
      <div className="">
        <div className="flex justify-end mr-2 mt-5 border-b pb-2 ml-5 cursor-pointer">
          <span className="text-sm mr-2 font-semibold">
            گالری
          </span>
          <RiGalleryFill className="mt-0.5" />
        </div>
      </div>
      {/* 3 */}
      <div className="">
        <div className="flex justify-end mr-2 mt-5 border-b pb-2 ml-5 cursor-pointer">
          <span className="text-sm mr-2 font-semibold">
            آدرس ها
          </span>
          <FaLocationDot className="mt-0.5" />
        </div>
      </div>
      {/* 4 */}
      <div className="">
        <div className="flex justify-end mr-2 mt-5 border-b pb-2 ml-5 cursor-pointer">
          <span className="text-sm mr-2 font-semibold">
            دنبال شوندگان
          </span>
          <RiUserFollowLine className="mt-0.5" />
        </div>
      </div>
      {/* 5 */}
      <div className="">
        <div className="flex justify-end mr-2 mt-5 border-b pb-2 ml-5 cursor-pointer">
          <span className="text-sm mr-2 font-semibold">
            اطلاعات حساب کاربری
          </span>
          <FaUserCog className="mt-0.5" />
        </div>
      </div>
      {/* 6 */}
      <div className="">
        <div className="flex justify-end mr-2 mt-5 border-b pb-2 ml-5  cursor-pointer">
          <span className="text-sm mr-2 font-semibold">
            خروج
          </span>
          <RiArrowGoBackLine className="mt-1" />
        </div>
      </div>
    </div>
  ))}
</div>

                </div>

            </div>
            <Footer />
        </div>
     );
}
 
export default PrifilePage1;