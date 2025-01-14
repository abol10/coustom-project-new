import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Hede from '../pages1/Hehe';
import Footer from '../pages10/footer';
import { FaUser } from "react-icons/fa";
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { handleSignUp } from '../supuuser/User';  // ایمپورت تابع handleSignUp از فایل authOperations


// تعریف اسکیما با Zod
const schema = z.object({
  firstName: z.string().min(1, { message: "نام الزامی است" }).max(8, { message: 'نام باید حداکثر 8 کاراکتر باشد' }),
  email: z.string().email({ message: "لطفاً یک آدرس ایمیل معتبر وارد کنید" }),
  nationalId: z.string()
    .length(10, { message: "کد ملی باید دقیقا 10 رقم باشد" })
    .regex(/^\d+$/, { message: "کد ملی فقط می‌تواند شامل اعداد باشد" }),
  password: z.string()
    .min(6, { message: "کلمه عبور باید حداقل 6 کاراکتر باشد" })
    .regex(/^[a-zA-Z0-9]*$/, { message: "کلمه عبور می‌تواند فقط شامل حروف و اعداد باشد" })
    .refine((val) => /[a-zA-Z]/.test(val) && /\d/.test(val), {
      message: "کلمه عبور باید حداقل شامل یک حرف و یک عدد باشد",
    }),
  birthDate: z.string().min(1, { message: "تاریخ تولد الزامی است" })
});

// تعریف نوع داده‌های فرم با استفاده از TypeScript
type FormData = z.infer<typeof schema>;

function MyForm() {
  const { register, handleSubmit, formState: { errors }, trigger } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [resolvedErrors, setResolvedErrors] = useState<Record<string, boolean>>({
    firstName: false,
    email: false,
    nationalId: false,
    password: false,
    birthDate: false,
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // صدا زدن تابع handleSignUp برای ثبت‌نام
    const result = await handleSignUp(data.email, data.password,data.firstName,data.nationalId);

    if (result.error) {
      alert(result.error);  // نمایش ارور در صورت وجود
    } else {
      alert("ثبت‌نام با موفقیت انجام شد!");  // پیام موفقیت
      console.log("Form Data:", data);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      trigger();
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
      <div className="flex justify-center">
        <div className="grid justify-center text-jigary mr-20">
          <FaUser className="ml-6" />
          <span className="block text-ff mt-2">اطلاعات کاربر</span>
        </div>
        <img className="w-36 h-2 mt-3" src="img/Line 38.png" alt="" />
        <div className="grid justify-center text-jigary ml-20">
          <FaUser className="ml-6" />
          <span className="block text-ff mt-2">اطلاعات کاربر</span>
        </div>
      </div>

      <div className="float-end mr-20">
        <span className="text-jigary text-base font-sans">فرم ثبت نام اطلاعات</span>
      </div>

      <div className="grid grid-cols-5 mt-10">
        <div className="col-span-2">
          <img className="shadow-sm" src="img/Photo (1).png" alt="" />
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
              <span className="text-ff text-gray-400 float-end mt-3">نام و نام خانوادگی</span>
              <input
                type="text"
                {...register('firstName')}
                className="block input input-bordered input-xs ml-10 text-right placeholder:text-right mt-10 w-5/6"
                placeholder="نام"
              />
            </div>
            <div className="col-span-1 mr-5">
              <span className="text-ff text-gray-400 float-end mt-3">کد ملی</span>
              <input
                type="text"
                {...register('nationalId')}
                className="block input input-bordered input-xs ml-10 placeholder:text-right mt-10 w-5/6"
                placeholder="کد ملی"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 mt-8">
            <div className="col-span-1">
              <span className="text-ff text-gray-400 float-end mt-3">تحصیلات(اختیاری)</span>
              <select
                {...register}
                className="select select-bordered select-xs w-5/6 ml-10 mt-2 max-w-xs text-gray-300"
              >
                <option className="text-gray-300 text-right" disabled selected>
                  تحصیلات شما؟
                </option>
                <option className="text-gray-300 text-right" value="ابتدایی">ابتدایی</option>
                <option className="text-gray-300 text-right" value="متوسطه">متوسطه</option>
                <option className="text-gray-300 text-right" value="سایر">سایر</option>
              </select>
            </div>
            <div className="col-span-1 mr-5">
              <span className="text-ff text-gray-400 float-end mt-3">شغل(اختیاری)</span>
              <select
                {...register}
                className="select select-bordered select-xs w-5/6 ml-10 mt-2 max-w-xs text-gray-300"
              >
                <option className="text-gray-300 text-right" disabled selected>
                  شغل شما چیست؟
                </option>
                <option className="text-gray-300 text-right" value="راننده">راننده</option>
                <option className="text-gray-300 text-right" value="مکانیک">مکانیک</option>
                <option className="text-gray-300 text-right" value="پزشک">پزشک</option>
                <option className="text-gray-300 text-right" value="سایر">سایر</option>
              </select>
            </div>
          </div>

          {/* ایمیل و کلمه عبور */}
          <div className="grid grid-cols-2 mt-8">
            <div className="col-span-1">
              <span className="text-ff text-gray-400 float-end mt-3">آدرس ایمیل</span>
              <input
                type="email"
                {...register('email')}
                className="block input input-bordered input-xs ml-10 placeholder:text-right mt-10 w-5/6"
                placeholder="ایمیل"
              />
            </div>
            <div className="col-span-1 mr-5">
              <span className="text-ff text-gray-400 float-end mt-3">کلمه عبور</span>
              <input
                type="password"
                {...register('password')}
                className="block input input-bordered input-xs ml-10 placeholder:text-right mt-10 w-5/6"
                placeholder="کلمه عبور"
              />
            </div>
          </div>

          {/* تاریخ تولد */}
          <div className="grid grid-cols-2 mt-8">
            <div className="col-span-1"></div>
            <div className="col-span-1 mr-5">
              <span className="text-ff text-gray-400 float-end mt-3">تاریخ تولد</span>
              <select
                {...register('birthDate')}
                className="select select-bordered select-xs w-5/6 ml-10 mt-2 max-w-xs text-gray-300"
              >
                <option className="text-gray-400 text-right" disabled selected>
                  تاریخ تولد؟
                </option>
                <option className="text-gray-400" value="1390/1/1">1390/1/1</option>
                <option className="text-gray-400" value="1390/1/2">1390/1/2</option>
                <option className="text-gray-400" value="1390/1/3">1390/1/3</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button type="submit" className="btn btn-active btn-sm mb-2">ارسال</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default MyForm;
