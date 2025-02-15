import { LiaCameraSolid } from "react-icons/lia";
import { CiCirclePlus } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { RiArrowGoBackLine, RiFolderHistoryLine, RiGalleryFill, RiUserFollowLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";
import { useEffect, useState } from "react";
import { supabase } from "./ProfilePage/ServerProfile";
import { useNavigate } from "react-router-dom";

const ProfileSetting = () => {
  const ProfileUser = [{
    name: "ali",
    profileuser: "img/profiledes.png",
    email: "ali@gmail.com",
    mojidi: 1000,
    designnumber: 45,
    orderNumber: 34
}];

const [profileImage, setProfileImage] = useState<string | null>(null);
const [Name, setName] = useState<string | null>(null);
const [email, setEmail] = useState<string | null>(null);
const [isUploading, setIsUploading] = useState(false);
const navigate = useNavigate();

const convertPersianToEnglish = (str: string) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return str.replace(/[۰-۹]/g, (match) => englishDigits[persianDigits.indexOf(match)]);
};

const handleSignOut = async () => {
    try {
        navigate('/Login');
        await supabase.auth.signOut();
    } catch (error) {
        console.error('Error signing out:', error);
    }
};

// بارگذاری و ویرایش تصویر پروفایل
const uploadImage = async (file: File | null) => {
    if (!file) return;

    setIsUploading(true);

    try {
        // بررسی فرمت فایل
        const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedFormats.includes(file.type)) {
            console.error('File format is not supported.');
            setIsUploading(false);
            return;
        }

        // دریافت اطلاعات کاربر
        const { data: user, error: userError } = await supabase.auth.getUser();

        if (userError || !user) {
            console.error('User not logged in!');
            setIsUploading(false);
            return;
        }

        // ایجاد یک نام یکتا برای فایل
        const fileName = `${user.user.id}_${Date.now()}_${encodeURIComponent(convertPersianToEnglish(file.name))}`;

        // بارگذاری تصویر جدید به داخل storage
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

        // ذخیره URL تصویر در متادیتای کاربر
        const { error: metaError } = await supabase.auth.updateUser({
            data: { profile_image_url: url }
        });

        if (metaError) {
            console.error('Error updating user metadata:', metaError);
            setIsUploading(false);
            return;
        }

        // تنظیم تصویر پروفایل جدید
        setProfileImage(url);
        setIsUploading(false);

    } catch (error) {
        console.error('Error uploading image:', error);
        setIsUploading(false);
    }
};

// دریافت تصویر پروفایل از متادیتای کاربر
const fetchProfileImage = async () => {
    const { data: user, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
        console.error('User not logged in!');
        return;
    }

    try {
        // دریافت تصویر پروفایل از متادیتای کاربر
        const profileImageUrl = user.user.user_metadata.profile_image_url;
        const profileName = user.user.user_metadata.first_name;
        const profileemail = user.user.user_metadata.email;
        setName(profileName||'کاربر بی نام');
        setEmail(profileemail)
        setProfileImage(profileImageUrl || "");

    } catch (error) {
        console.error('Error fetching profile image:', error);
    }
};

// بارگذاری تصویر پروفایل هنگام بارگذاری صفحه
useEffect(() => {
    fetchProfileImage();
}, []);
    return (
        <>
            {/* قسمت پروفایل */}
            <div className="mx-5  rounded-xl mt-10 shadow-md">
                <div>
                    {ProfileUser.map((e, index) => (
                        <div key={index}> {/* استفاده از id یا index برای key */}
                            <div className="grid justify-center">
                                <img className="relative rounded-full h-32 w-32 mt-5" src={ profileImage||"img/aaa.jpg"} alt="" />
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
                                {isUploading && <p className="loading loading-dots loading-sm ml-14 text-jigary mt-2"></p>}
                            </div>
                            <span className="grid justify-center mt-2 text-ff">{Name}</span>
                            <span className="grid justify-center mt-1 text-base/8 border-b pb-6 text-ff">{email}</span>
                            <div className="grid grid-cols-2 mt-4">
                                <div className="col-span-1 text-sm">
                                    <span className="ml-2 mr-2">{e.mojidi}</span>
                                    <span className="mb-0.5">تومان</span>
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
                                <div 
                                onClick={handleSignOut}
                                className="flex justify-end mr-2 mt-5 border-b pb-2 ml-5  cursor-pointer">
                                    <span onClick={handleSignOut} className="text-sm mr-2 font-semibold">
                                        خروج
                                    </span>
                                    <RiArrowGoBackLine className="mt-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProfileSetting; 