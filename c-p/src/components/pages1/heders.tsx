import { LiaShoppingCartSolid } from "react-icons/lia";
import { CiLogin } from "react-icons/ci";
import Searche from "./searche";

const Heders = () => {
    // const [isSearch, setSearch] = useState<boolean>(false);
    
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
                   <Searche />
                
          </div>
          <div className="border-b border-gray-300 my-2 mt-10"></div>

        </header>
     );
}
  
export default Heders;
