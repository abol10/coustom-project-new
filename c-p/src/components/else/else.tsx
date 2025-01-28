import { useNavigate } from "react-router-dom";
import Hede from "../pages1/Hehe";

const Else = () => {
    const naviget = useNavigate();
    return ( 
        <div className="relative ">
            <Hede />
         <img className=" h-96 w-4/5 rounded-xl ml-32" src="img/error404.png" alt="" />
         <h1 className="font-bold text-xl text-center mb-10 absolute left-2/4 ">صحفه مورد نظر یافت نشد</h1>
         <button onClick={()=>naviget('/')} className="btn btn-error text-white text-ff text-center absolute left-2/4 -bottom-24 ">برگشت به صحفه اصلی</button>
        </div>
     );
}
 
export default Else;