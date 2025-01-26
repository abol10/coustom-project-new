import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import "tailwindcss/tailwind.css";  // اطمینان از اینکه Tailwind در پروژه بارگذاری شده است


const Box_Alert_true_Login: React.FC = () => {

    const handleAlert = () => {
        Swal.fire({
            title: "شما با موفقیت وارد اکانت خود شدید",
            html: "<p class='text-ff'>خوش آمدید</p>", // استفاده از `html` برای افزودن کلاس به متن
            icon: "success", // آیکون موفقیت
            confirmButtonText: "تایید", // دکمه تایید
            confirmButtonColor: "#34D399", // رنگ دکمه تایید
            customClass: {
                popup: 'bg-green-500 text-white rounded-lg shadow-lg p-4', // کوچکتر کردن ابعاد alert
                title: 'text-ff font-bold', // کاهش اندازه عنوان
                confirmButton: 'px-4 py-2 text-white rounded-full font-semibold bg-green-700 hover:bg-green-800', // استایل دکمه تایید
            },
            width: '400px', // تعیین عرض ثابت برای alert (می‌توانید تغییر دهید)
        }).then(() => {
         
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

export default Box_Alert_true_Login;
