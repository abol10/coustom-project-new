import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import { supabase } from '../nmonekar/uplode_img_project'; // فرض می‌کنیم که این کانفیگ Supabase است
import Hede from '../pages1/Hehe';
import Footer from '../pages10/footer';
import { FaCheck, FaTimes } from 'react-icons/fa';
import Navbarrej from '../navbarRej/Navbar';
import Box_Alert_shop from './Box_alert_shop';

// تعریف اسکیما با Zod
const schema = z.object({
  name_shop: z.string().min(1, { message: "نام الزامی است" }),

  Saba_code: z.string()
    .refine((val) => val.startsWith('IR'), {
      message: "شماره شبا با IR حروف بزرگ شروع میشود",
    })
    .refine((val) => val.length === 30, {
      message: "شماره شبا باید دقیقاً ۳۰ کاراکتر باشد",
    }),

  instagram_page: z.string().optional(),
});

// تعریف نوع داده‌های فرم با استفاده از TypeScript
type FormData = z.infer<typeof schema>;

const Etluate_Shop = () => {
  const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [resolvedErrors, setResolvedErrors] = useState<Record<string, boolean>>({
    name_shop: false,
    Saba_code: false,
    instagram_page: false,
  });

  const [chekedNext, setChekedNext] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>(''); // برای ذخیره user_id

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('خطا در دریافت اطلاعات کاربر:', error.message);
        setUserId('anonymous');
      } else {
        setUserId(data.user.id || 'anonymous');
      }
    };
    getUser();
  }, []); // این استفاده از effect باعث می‌شود که بعد از بارگذاری کامپوننت، userId را دریافت کنید.

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // ارسال داده‌ها به دیتابیس
      const { error } = await supabase.from('shop_info').upsert([
        {
          name_shop: data.name_shop,
          saba_code: data.Saba_code,
          instagram_page: data.instagram_page || null,  // اگر پیج اینستاگرام خالی باشد، نال ارسال شود
          user_id: userId, // ارسال userId به دیتابیس
        },
      ]);

      if (error) {
        throw error;  // اگر ارور باشد، پرتاب می‌شود
      }

      // موفقیت‌آمیز بودن درخواست
      setChekedNext(true); // نمایش پیام موفقیت
      reset(); // پاک کردن فرم
      console.log("Form Data:", data);
    } catch (error) {
      console.error('Error inserting data into database:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      trigger(); // اعتبارسنجی مجدد
      Object.entries(errors).forEach(([field, error]) => {
        if (!error) {
          setResolvedErrors((prevState) => ({
            ...prevState,
            [field]: true,
          }));
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [errors, trigger]);

  return (
    <>
      <Hede />
      <Navbarrej />
      {chekedNext && <Box_Alert_shop setChekednav={setChekedNext} state={chekedNext} />}
      <div className="float-end mr-20">
        <span className="text-jigary text-base font-sans">فرم ثبت نام اطلاعات</span>
      </div>

      <div className="grid grid-cols-5 mt-10">
        <div className="col-span-2">
          <img className="shadow-sm h-56 ml-10 w-96 mt-24" src="img/shoping.png.png" alt="" />
        </div>

        <form className="col-span-3 mt-10 border border-gray-100 rounded-xl mr-10 shadow-2xl" onSubmit={handleSubmit(onSubmit)}>
          {/* نمایش ارورهای کلی */}
          <div className="border border-red-500 p-4 rounded-lg mb-4">
            <h2 className="font-bold text-lg text-right">لیست ارورها</h2>
            <ul className="mt-4">
              {Object.entries(errors).map(([field, error]) => (
                <li key={field} className={`flex items-center justify-end text-ff ${resolvedErrors[field] ? 'text-green-500' : 'text-red-500 '}`}>
                  {resolvedErrors[field] ? <FaCheck className="mr-2" /> : <FaTimes className="mr-2" />}
                  {error?.message}
                </li>
              ))}
            </ul>
          </div>

          {/* فرم ورودی‌ها */}
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <span className="text-ff text-gray-400 float-end mt-3">پیج اینیستاگرام(اختیاری)</span>
              <input
                type="text"
                {...register("instagram_page")}
                className="block input input-bordered input-xs ml-16 text-right placeholder:text-right mt-10 w-5/6"
                placeholder="پیج اینیستاگرام"
              />
            </div>
            <div className="col-span-1 mr-5">
              <span className="text-ff text-gray-400 float-end mt-3">نام فروشگاه</span>
              <input
                type="text"
                {...register('name_shop')}
                className="block input input-bordered input-xs ml-16 placeholder:text-right mt-10 w-5/6"
                placeholder="نام فروشگاه"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 mt-8">
            <div className="col-span-1"></div>
            <div className="col-span-1 mr-5">
              <span className="text-ff text-gray-400 float-end mt-3">شماره شبا</span>
              <input
                type="text"
                {...register("Saba_code")}
                className="block input input-bordered input-xs ml-32 text-right placeholder:text-right mt-10 w-5/6"
                placeholder="شماره شبا"
              />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button type="submit" className="btn btn-active btn-sm mb-2">ثبت</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Etluate_Shop;
