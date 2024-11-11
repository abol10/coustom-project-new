import { LiaShoppingCartSolid } from "react-icons/lia";
import { CiLogin } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const Heders = () => {
    const [isTyping, setIsTyping] = useState<boolean>(false);
    return ( 
        <header>
          <h3 className="bg-red-700 text-center text-black text-sm ">با عضویت در کاستومی اولین خرید خود را رایگان انجام بده </h3>
          
          <div className="flex mt-5">
            <span className="text-sm ml-20 mt-2">سبد خرید</span>
            <button type="button" className="mb-2"><LiaShoppingCartSolid className="text-black text-2xl ml-1 mt-2 "/></button>
            <span className="text-sm pl-1 ml-14 mt-2 ">
                ثبت نام     | 
            </span>
            
            <span className="text-sm pl-1 ml-1 mt-2  ">
            ورود 
            </span>
            <span>
               <CiLogin className="ml-1 text-xl mt-3" />
            </span>
            <form className="placeholder:flex placeholder: items-center relative" action="">
                <input
                 className="h-48px items-center pr-2 pl-10 ml-14 mt-2  outline-none border border-gray-300 rounded-xl shadow-sm w-550px placeholder:text-jigary placeholder:text-sm placeholder:text-right placeholder:m-1 text-right placeholder-opacity-25"
                  placeholder="جست و جو"
                   type="text" 
                   onFocus={()=>setIsTyping(true)}
                   onBlur={()=>setIsTyping(false)}
                   onChange={(e)=>e.target.value&&setIsTyping(true)}
                   />
                <button className={`absolute left-16 top-4 transition-all duration-300 ${isTyping ?'transform -translate-x-12':''}`} type="button"><BsSearch className="text-lg text-jigary" /></button>
            </form>
          </div>
          <div className="border-b border-gray-300 my-2 mt-10"></div>

        </header>
     );
}
 
export default Heders;