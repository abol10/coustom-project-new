import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod"; // وارد کردن Zod
import { zodResolver } from "@hookform/resolvers/zod"; // وارد کردن ZodResolver
import Hede from "../pages1/Hehe";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { FcGoogle } from "react-icons/fc";
import { FaExclamationCircle } from "react-icons/fa"; // اضافه کردن آیکون هشدار
import { supabase } from "./serverLogin"; // وارد کردن supabaseClient
import { useNavigate } from "react-router-dom";
import Box_Alert_true_Login from "./Alert_true_Login";
import Box_Alert_false_Login from "./Alert_false_Login";

// تعریف اسکیما با Zod برای ایمیل و پسورد
const loginSchema = z.object({
  email: z.string().min(1, { message: "ایمیل الزامی است" })
    .email({ message: "فرمت ایمیل صحیح نیست" })
    .min(6, { message: "ایمیل باید حداقل 6 کاراکتر باشد" }),
  password: z.string().min(1, { message: "پسورد الزامی است" })
    .regex(/[a-zA-Z]/, { message: "پسورد باید حاوی حروف انگلیسی باشد" }) 
    .regex(/[0-9]/, { message: "پسورد باید حاوی عدد باشد" })
    .regex(/^[^\u0600-\u06FF]*$/, { message: "پسورد نباید شامل کلمات فارسی باشد" })
    .min(6, { message: "پسورد باید حداقل 6 کاراکتر باشد" }),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors, isDirty, isSubmitted }, trigger, watch } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const navigate = useNavigate(); // استفاده از navigate برای تغییر مسیر
  const [chking,setchking]=useState<boolean>(false);
  const [chkingfalse,setchkingfalse]=useState<boolean>(true);

  const onSubmit = async (data: LoginForm) => {
    try {
      // ارسال درخواست ورود به Supabase
      const response = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (response.error) {
        console.error('Login error:', response.error.message);
        setchkingfalse(false);
      } else {
        const user = response.data?.user; // دسترسی به user از response.data
        console.log('User logged in:', user);
        navigate('/');
        setchking(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }

  };

  // استفاده از watch برای نظارت بر تغییرات فیلدها
  const email = watch("email");
  const password = watch("password");

  useEffect(() => {
    const validateForm = async () => {
      if (isDirty || isSubmitted) {
        await trigger();
      }
    };
    const chik=()=>{
      if(!chkingfalse)
        setchkingfalse(true);
    }
    validateForm();
    chik();
  }, [email, password, isDirty, isSubmitted, trigger,chkingfalse]);

  return (
    <>
      <Hede />
      {chking && ( <Box_Alert_true_Login /> )}
      {!chkingfalse && ( <Box_Alert_false_Login />   )}
      <h1 className="font-semibold text-end mr-28 mt-20">به کاستومی خوش آمدید</h1>
      
      {/* نمایش ارور ها در بالای فرم */}
      <div className="mb-4">
        {Object.keys(errors).length > 0 && (
          <div className="bg-red-100 text-red-700 p-3 rounded-md w-full max-w-lg ml-auto mr-0 flex items-center flex-col mt-5">
            {Object.keys(errors).map((key) => {
              const errorMessage = (errors[key as keyof LoginForm] as any)?.message;
              return (
                <div key={key} className="flex items-center justify-end w-full mb-2">
                  <FaExclamationCircle className="text-ff mr-2" />
                  <span className="text-ff">{errorMessage}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="font-semibold text-end mr-36 mb-4 text-sm">
        <button className="mr-1">ورود</button>
        <button>| ثبت نام</button>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <img className="ml-20 mb-10 shadow-md rounded-xl" src="img/Login_Img.png" alt="" />
        </div>
        <div className="col-span-1 shadow-md rounded-xl ">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-5 focus:text-jigary">
            <div>
              <span className="grid justify-center ml-28 text-xs text-gray-300">ایمیل</span>
              <input
                className="input input-bordered input-xs mr-56 text-right mt-3 w-1/3 float-end"
                type="email"
                {...register("email")}
              />
            </div>

            <div className="mt-20 focus:text-jigary">
              <span className="grid justify-center ml-28 text-xs text-gray-300">پسورد</span>
              <div className="flex justify-center ml-10">
                <input
                  className="relative input input-bordered input-xs mr-16 text-right placeholder:text-right mt-3 w-1/3 float-end"
                  type={showPassword ? 'text' : 'password'}
                  {...register("password")}
                />
                <button type="button" onClick={togglePasswordVisibility} className="absolute flex justify-center mr-52 mt-4">
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            <span className="grid justify-center mr-32 text-info text-ff mt-1 ">فراموشی رمز عبور</span>
            <span className="grid justify-center text-ff mt-10 mr-5">ورود و عضویت شما به منزله پذیرفتن قوانین و مقررات می‌باشد</span>

            {/* دکمه‌ها */}
            <div className="flex justify-center mt-6">
              <button type="submit" className="text-ff text-white bg-jigary w-1/3 mt-4 py-1 rounded-lg shadow-md">
                ورود به سایت
              </button>
            </div>

            <div className="flex justify-center mt-4">
              <button className="relative text-ff w-1/3 py-1 rounded-lg shadow-md bg-white border border-gray-300 flex items-center justify-center">
                <FcGoogle className="absolute left-4 text-xl" />
                ورود با حساب گوگل
              </button>
            </div>

            <div className="flex justify-center mt-4">
              <button type="button" onClick={()=>navigate('/s')} className="text-ff text-jigary">ثبت نام در سایت</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
