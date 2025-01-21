import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "tailwindcss/tailwind.css";  // اطمینان از اینکه Tailwind در پروژه بارگذاری شده است

interface ChildProps {
    setChekednav: React.Dispatch<React.SetStateAction<boolean>>;
    state: boolean;
}

const Box_Alert_nmonekar: React.FC<ChildProps> = ({ setChekednav, state }) => {
    const navigate = useNavigate();

    const handleAlert = () => {
        Swal.fire({
            title: "فرم اطالاعات تماس به موفقیت ثبت شد",
            html: "<p class='text-ff'>روی گزینه تایید کلیک کنید</p>", // استفاده از `html` برای افزودن کلاس به متن
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
            // بعد از بسته شدن SweetAlert2
            setChekednav(false);
            if (state) {
                navigate('/F'); 
            }
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

export default Box_Alert_nmonekar;
