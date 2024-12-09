import { BsPersonFillAdd } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { datadesign } from "./data_design";

const design:datadesign[] = [
  {
    profile_design:"/img/profiledes.png",
    name_design:"ali hosini",
   fallower_design:0 ,
   number_design:0,
   Sales_statistics:10,
  img:"/img/profiledes.png",
  img2:"/img/profiledes.png",
  img3:"/img/profiledes.png"
  },
  {
    profile_design:"/img/profiledes.png",
    name_design:"ali hosini",
   fallower_design:0 ,
   number_design:0,
   Sales_statistics:10,
  img:"/img/profiledes.png",
  img2:"/img/profiledes.png",
  img3:"/img/profiledes.png"
  },
  {
    profile_design:"/img/profiledes.png",
    name_design:"ali hosini",
   fallower_design:0 ,
   number_design:0,
   Sales_statistics:10,
  img:"/img/profiledes.png",
  img2:"/img/profiledes.png",
  img3:"/img/profiledes.png"
  },
  {
    profile_design:"/img/profiledes.png",
    name_design:"ali hosini",
   fallower_design:0 ,
   number_design:0,
   Sales_statistics:10,
  img:"/img/profiledes.png",
  img2:"/img/profiledes.png",
  img3:"/img/profiledes.png"
  },
  {
    profile_design:"/img/profiledes.png",
    name_design:"ali hosini",
   fallower_design:0 ,
   number_design:0,
   Sales_statistics:10,
  img:"/img/profiledes.png",
  img2:"/img/profiledes.png",
  img3:"/img/profiledes.png"
  },
  {
    profile_design:"/img/profiledes.png",
    name_design:"ali hosini",
   fallower_design:0 ,
   number_design:0,
   Sales_statistics:10,
  img:"/img/profiledes.png",
  img2:"/img/profiledes.png",
  img3:"/img/profiledes.png"
  },
  {
    profile_design:"/img/profiledes.png",
    name_design:"ali hosini",
   fallower_design:0 ,
   number_design:0,
   Sales_statistics:10,
  img:"/img/profiledes.png",
  img2:"/img/profiledes.png",
  img3:"/img/profiledes.png"
  },
];

const Topdesingner = () => {

    return (
        <div className="">
            <div className="flex items-center mt-3 ">
                <div className="relative flex-grow">
                    <div className="before:content-[''] before:block before:h-px before:bg-gray-400 before:absolute before:left-32 before:right-2 before:top-0"></div>
                </div>
                <span className="mb-2 text-xl font-semibold">طراحان برتر</span>
                <CiStar className="text-gray-500 text-5xl mr-8 mb-3" />
            </div>

            {/* اینجا تغییرات صورت گرفته */}
            <div className="grid grid-cols-1 justify-end g sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4 mr-5 ml-10 order-last">
                {design.map((e, index) => (
                    <div className=" text-right border-2 border-gray-300 p-3 rounded-lg hover:border-gray-900" key={index}>
                        {/* تصویر محصول */}
                        <img className="w-20 h-20 object-cover mb-2 rounded-full ml-10" src={e.profile_design} alt={e.name_design} />
                        {/* آیکن Like/Dislike */}
                        <div className="text-center">
                            <span className="text- text-base">{e.name_design}</span>
                        </div>
                        <div className="flex">
                        <span className="block text-right text-ff mt-4">| دنبال کنندگان:<span className="pn-10">{e.fallower_design}</span></span>
                        <span className="block text-right text-ff mt-4">|  تعداد طرح ها:<span className="mb-3">{e.number_design}</span></span>
                        <span className="block text-right text-ff mt-4 order-first">آمار فروش:<span className="mb-3">{e.Sales_statistics}</span></span>
                        </div>
                        <div className="grid grid-cols-3 mt-5 mb-5">
                            <img className="col-span-1 w-12 h-full rounded-lg" src={e.img} alt="" />
                            <img className="col-span-1 w-12 h-full rounded-lg" src={e.img2} alt="" />
                            <img className="col-span-1 w-12 h-full rounded-lg" src={e.img3} alt="" />
                        </div>
                        
                       <div className="block flex border border-red-600 py-2 text-center px-3  rounded-lg text-sm mt-2 hover:border-black">
                       <button className="px-2 text-xs pl-8 text-red-600"> دنبال کردن </button>
                       <BsPersonFillAdd className="mt-1 text-base text-red-600"/>
                       </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2">
                <div className="grid grid-cols-2 col-span-1 bg-pink-200 mx-10 mt-6 rounded-lg ">
                   <div className="col-span-1">
                   <img className="w-full h-36 rounded-lg" src="/img/ghabm.png"/>
                   </div>
                   <div className="col-span-1">
                    <span  className="flex flex-wrap px-10 text-right font-semibold">محصولات مناسب هدیه دادن به خانوم ها</span>
                    <button className="mt-11 ml-20 p-2 text-xs border border-red-500 rounded-lg  text-red-600  hover:border-gray-600"> دیدن محصولات </button>
                   </div>
                </div>




                <div className="grid grid-cols-2 col-span-1 bg-pink-200 mx-10 mt-6 rounded-lg">
                <div className="col-span-1">
                   <img className="w-full h-36 rounded-lg" src="/img/ghabm.png"/>
                   </div>
                   <div className="col-span-1">
                    <span  className="flex flex-wrap px-10 text-right font-semibold">محصولات مناسب هدیه دادن به خانوم ها</span>
                    <button className="mt-11 ml-20 p-2 text-xs border border-red-500 rounded-lg  text-red-600  hover:border-gray-600"> دیدن محصولات </button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Topdesingner;