import { FcSalesPerformance } from "react-icons/fc";
const Special = () => {
    return ( 
        <>
        <div className="flex items-center mt-3">
                <span className="text-xs ml-32 mb-1 text-jigary font-semibold"> </span>
                <div className="relative flex-grow">
                    <div className="before:content-[''] before:block before:h-px before:bg-gray-400 before:absolute before:left-96 before:right-2 before:top-0"></div>
                </div>
                <span className="mb-2 text-xl font-semibold">فروش ویژه</span>
                <FcSalesPerformance className="text-gray-500 text-5xl mr-8 mb-3" />
            </div>
            <div className="grid grid-cols-2">
             <div className="col-span-1 order-last ">
                <img className="w-96 max-h-svh rounded-lg absolute" src="/img/ghabm.png" alt="" />
                <span className="relative left-72 top-80 font-bold text-lg text-white">لوازم خانگی</span>
                <span></span>
             </div>
             <div className="grid grid-cols-2 col-span-1 mt-5">
                  <div className="col-span-1">
                    <img className=" rounded-lg w-40 ml-48  " src="/img/ghabm.png" alt="" />
                    <span className="relative left-64 bottom-7 font-bold text-sm text-black">لوازم خانگی</span>
                  </div>
                  <div className="col-span-1">
                  <img className="absolute rounded-lg w-40 ml-12 " src="/img/ghabm.png" alt="" />
                  <span className="relative left-32 top-32 font-bold text-sm text-black">لوازم خانگی</span>
                  </div>
                  <div className="col-span-1">
                  <img className="absolute rounded-lg w-40 ml-48  " src="/img/ghabm.png" alt="" />
                  <span className="relative left-64 top-32 font-bold text-sm text-black">لوازم خانگی</span>
                  </div>
                  <div className="col-span-1">
                  <img className="absolute rounded-lg w-40  ml-12 " src="/img/ghabm.png" alt="" />
                  <span className="relative  left-32 top-32 font-bold text-sm text-black">لوازم خانگی</span>
                  </div>
             </div>
            </div>
        </>
     );
}
 
export default Special;