import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import "tailwindcss/tailwind.css";  // اطمینان از اینکه Tailwind در پروژه بارگذاری شده است

const Box_Alert_false_Login: React.FC = () => {

    const handleAlert = () => {
        Swal.fire({
            title: "خطا در ورود به حساب",
            html: "<p class='text-ff'>ایمیل یا پسورد شما اشتباه است لطفا دقت کنید</p>", // پیام خطای ورود
            icon: "error", // آیکون خطا
            confirmButtonText: "تلاش مجدد", // دکمه تلاش مجدد
            confirmButtonColor: "#EF4444", // رنگ دکمه تایید
            customClass: {
                popup: 'bg-red-500 text-white rounded-lg shadow-lg p-4', // استایل alert خطا
                title: 'text-ff font-bold', // استایل عنوان
                confirmButton: 'px-4 py-2 text-white rounded-full font-semibold bg-red-700 hover:bg-red-800', // استایل دکمه تایید
            },
            width: '400px', // تعیین عرض ثابت برای alert
        }).then(() => {
            // می‌توانید در اینجا هر عملی که بخواهید انجام بدید (مثل ریست فیلدها یا بازگشت به صفحه ورود)
        });
    };

    useEffect(() => {
        handleAlert(); // نمایش alert به محض بارگذاری کامپوننت
    }, []);  // اینطور تنها یکبار هنگام بارگذاری کامپوننت اجرا می‌شود

    return (
        <div className="flex justify-center items-center h-screen">
            {/* در اینجا هیچ دکمه‌ای وجود ندارد چون alert خودکار نمایش داده می‌شود */}
        </div>
    );
};

export default Box_Alert_false_Login;
