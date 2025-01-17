import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Hede from '../pages1/Hehe';
import Footer from '../pages10/footer';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { handleSignUpNumber } from './User_number';
import Navbarrej from '../navbarRej/Navbar';

// تعریف اسکیما با Zod
const schema = z.object({
  number: z.string()
    .min(1, { message: "شماره تلفن الزامی است" })
    .regex(/^09\d{9}$/, { message: "شماره باید با 09 شروع شده و شامل 11 رقم باشد" }),
  numberMe: z.string()
    .min(1, { message: "شماره تلفن الزامی است" })
    .regex(/^072\d{8}$/, { message: "شماره باید با 072 شروع شده و شامل 11 رقم باشد" }),
  codepost: z.string()
    .length(10, { message: "کد پستی باید دقیقا 10 رقم باشد" })
    .regex(/^\d{10}$/, { message: "کد پستی فقط باید شامل اعداد باشد" }), // کد پستی باید 10 رقم عدد باشد
    addrescode: z.string()
    .min(1, { message: "وارد کردن شهر الزامی هست" })
  
});

// تعریف نوع داده‌های فرم با استفاده از TypeScript
type FormData = z.infer<typeof schema>;

function Myetalat() {
  const { register, handleSubmit, formState: { errors }, trigger } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [resolvedErrors, setResolvedErrors] = useState<Record<string, boolean>>({
    number: false,
    numberMe: false,
    codepost: false,
    addrescode: false,
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // صدا زدن تابع handleSignUp برای ثبت‌نام
    const result = await handleSignUpNumber(data.number,  data.numberMe, data.codepost , data.addrescode);

    if (result.error) {
      alert(result.error);  // نمایش ارور در صورت وجود
    } else {
      alert("ثبت‌نام با موفقیت انجام شد!"); 
      setchekedNext(true) // پیام موفقیت
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

  // مقدار پیش‌فرض برای آدرس کامل
  const [shaher, setshahre] = useState<string>('');
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setshahre(event.target.value);  // مقدار انتخاب‌شده را ذخیره می‌کنیم
  };

  const [ostan, setostan] = useState<string>('');
  const handleSelectChangeostan = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setostan(event.target.value);  // مقدار انتخاب‌شده را ذخیره می‌کنیم
  };
  const [chekedNext,setchekedNext]=useState<boolean>(false);


  return (
    <>
      <Hede />
      <Navbarrej />
      <div className="float-end mr-20">
        <span className="text-jigary text-base font-sans">فرم ثبت نام اطلاعات</span>
      </div>

      <div className="grid grid-cols-5 mt-10">
        <div className="col-span-2">
          <img className="shadow-sm h-96 ml-20 w-96 mt-48" src="img/Group.png" alt="" />
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
              <span className="text-ff text-gray-400 float-end mt-3">شماره تلفن (همراه با کد شهر)</span>
              <input
                type="text"
                {...register('numberMe')}
                className="block input input-bordered input-xs ml-16 text-right placeholder:text-right mt-10 w-5/6"
                placeholder="شماره تلفن"
              />
            </div>
            <div className="col-span-1 mr-5">
              <span className="text-ff text-gray-400 float-end mt-3">شماره موبایل</span>
              <input
                type="text"
                {...register('number')}
                className="block input input-bordered input-xs ml-16 placeholder:text-right mt-10 w-5/6"
                placeholder="شماره موبایل"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 mt-8">
            <div className="col-span-1 mr-5">
              <span className="text-ff text-gray-400 float-end mt-3">شهر</span>
              <select
                {...register}
                onChange={handleSelectChange}
                className="select select-bordered select-xs w-5/6 ml-20 mt-2 max-w-xs text-gray-300"
              >
                <option className="text-gray-300 text-right" disabled selected>
                  شهر
                </option>
                <option className="text-gray-300 text-right" value="تهران">تهران</option>
                <option className="text-gray-300 text-right" value="مشهد">مشهد</option>
                <option className="text-gray-300 text-right" value="زاهدان">زاهدان</option>
                <option className="text-gray-300 text-right" value="شیراز">شیراز</option>
                <option className="text-gray-300 text-right" value="اهواز">اهواز</option>
                <option className="text-gray-300 text-right" value="فیروزآباد">فیروزآباد</option>
              </select>
            </div>
            <div className="col-span-1 mr-5">
              <span className="text-ff text-gray-400 float-end mt-3">استان</span>
              <select
                {...register}
                onChange={handleSelectChangeostan}
                className="select select-bordered select-xs w-5/6 ml-16 mt-2 max-w-xs text-gray-300"
              >
                <option className="text-gray-300 text-right" disabled selected>
                  استان
                </option>
                <option className="text-gray-300 text-right" value="تهران">تهران</option>
                <option className="text-gray-300 text-right" value="فارس">فارس</option>
                <option className="text-gray-300 text-right" value="خراسان">خراسان</option>
                <option className="text-gray-300 text-right" value="خوزستان">خوزستان</option>
                <option className="text-gray-300 text-right" value="سیستان و بلوجستان">سیستان و بلوجستان</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 mt-8">
            <div className="col-span-1"></div>
            <div className="col-span-1 mr-5">
              <span className="text-ff text-gray-400 float-end mt-3">کد پستی</span>
              <input
                type="text"
                {...register('codepost')}
                className="block input input-bordered input-xs ml-16 text-right placeholder:text-right mt-10 w-5/6"
                placeholder="کد پستی"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 mt-8">
            <div className="col-span-1"></div>
            <div className="col-span-1 mr-5">
              <span className="text-ff text-gray-400 float-end mt-3">آدرس کامل پستی (میتونید از نقشه استفاده کنید)</span>
              <input
                type="text"
                {...register('addrescode')}
                className="block input input-bordered input-xs ml-32 text-right placeholder:text-right mt-10 w-5/6"
                placeholder="آدرس"
                value={`${shaher}  ${ostan}`} // مقدار پیش‌فرض
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
}

export default Myetalat;
