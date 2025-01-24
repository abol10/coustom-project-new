import { useState } from "react";
import Hede from "../pages1/Hehe";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);  // وضعیت برای کنترل نمایش پسورد

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);  // تغییر وضعیت
    };
    return ( 
        <>
        <Hede />
        <h1 className="font-semibold text-end mr-28 mt-20">به کاستومی خوش آمدید</h1>
        <div className="font-semibold text-end mr-36 mt-20 text-sm">
            <button className="mr-1">ورود</button>
            <button>| ثبت نام</button>
        </div>
        <div className="grid grid-cols-2">
        <div className="col-span-1">
            <img className=" ml-20 mb-10" src="img/Login_Img.png" alt="" />
        </div>
        <div className="col-span-1 mr-10">
          <div className="mt-5 focus:text-jigary">
          <span className="grid justify-end mr-10 text-xs text-gray-300">نام کاربری</span>
          <input  className="input input-bordered input-xs mr-10 text-right placeholder:text-right mt-3 w-1/3 float-end" type="text" />
          </div>
          <div className="mt-20 focus:text-jigary">
          <span className="grid justify-end mr-10 text-xs text-gray-300">پسورد</span>
          <div>
          <input  className="input input-bordered input-xs mr-10 text-right placeholder:text-right mt-3 w-1/3 float-end" type={showPassword?'text':'password'} />
           <button onClick={togglePasswordVisibility} className="float-end mr-5 mt-4 ">
              {
                showPassword ? <FaEye />:<FaEyeSlash />
              }
            </button>
          </div>
          </div>
          <span className="grid justify-center ml-32 text-info text-ff mt-10 ">فراموشی رمز غبور</span>
          <span className="grid justify-center text-ff mt-10 ml-32"> ورود و عضویت شما به منزله پذیرفتن قوانین و مقررات می باشد</span>
        
        
        <div className="flex justify-center">
        <button className="text-ff text-white bg-jigary w-1/2 mt-4 py-1 rounded-lg shadow-md">ورود به سایت</button>
        </div>'
        <div className="flex justify-center">
        <button className="relative text-ff w-1/2 py-1 rounded-lg shadow-md">ورود با حساب گوگل</button>
        <FcGoogle className="absolute right-52 bottom-5 text-xl" />
        </div>'
        
        <button className="text-jigary text-ff ju">ثبت نام در سایت</button>
        </div>
        </div>
        
        </>
     );
}
 
export default Login;