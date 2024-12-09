import { FaUserPen } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { TbPencilCog } from "react-icons/tb";


const ProductsBest = [
    {
        img: '/img/ss.png',
        name: 'موبایل',
        caption: 'دارای رنگ بندی قابل طراحی',
        ghimat: '150,000 تومان',
        like: false,
        id: "1"
    },
    {
        img: '/img/ss.png',
        name: 'موبایل',
        caption: 'دارای رنگ بندی قابل طراحی',
        ghimat: '150,000 تومان',
        like: false,
        id: '2'
    },
    {
        img: '/img/ss.png',
        name: 'موبایل',
        caption: 'دارای رنگ بندی قابل طراحی',
        ghimat: '150,000 تومان',
        like: false,
        id: '3'
    },
    {
        img: '/img/ss.png',
        name: 'موبایل',
        caption: 'دارای رنگ بندی قابل طراحی',
        ghimat: '150,000 تومان',
        like: false,
        id: '4'
    },
    {
        img: '/img/ss.png',
        name: 'موبایل',
        caption: 'دارای رنگ بندی قابل طراحی',
        ghimat: '150,000 تومان',
        like: false,
        id: '5'
    },
    {
        img: '/img/ss.png',
        name: 'موبایل',
        caption: 'دارای رنگ بندی قابل طراحی',
        ghimat: '150,000 تومان',
        like: false,
        id: '6'
    },
    {
        img: '/img/ss.png',
        name: 'موبایل',
        caption: 'دارای رنگ بندی قابل طراحی',
        ghimat: '150,000 تومان',
        like: false,
        id: '7'
    },
    {
        img: '/img/ss.png',
        name: 'موبایل',
        caption: 'دارای رنگ بندی قابل طراحی',
        ghimat: '150,000 تومان',
        like: false,
        id: '8'
    }
    ,
    {
        img: '/img/ss.png',
        name: 'موبایل',
        caption: 'دارای رنگ بندی قابل طراحی',
        ghimat: '150,000 تومان',
        like: false,
        id: '8'
    }
    ,
    {
        img: '/img/ss.png',
        name: 'موبایل',
        caption: 'دارای رنگ بندی قابل طراحی',
        ghimat: '150,000 تومان',
        like: false,
        id: '8'
    }
    ,
    {
        img: '/img/ss.png',
        name: 'موبایل',
        caption: 'دارای رنگ بندی قابل طراحی',
        ghimat: '150,000 تومان',
        like: false,
        id: '8'
    }
];

const Newdesign = () => {

    return (
        <>
            <div className="flex items-center mt-3">
                <span className="text-xs ml-32 mb-1 text-jigary font-semibold">مشاهده بیشتر</span>
                <div className="relative flex-grow">
                    <div className="before:content-[''] before:block before:h-px before:bg-gray-400 before:absolute before:left-7 before:right-2 before:top-0"></div>
                </div>
                <span className="mb-2 text-xl font-semibold">جدیدترین های هفته</span>
                <FaUserPen className="text-gray-500 text-5xl ml-2 mr-8 mb-3" />
            </div>

            {/* اینجا تغییرات صورت گرفته */}
        
            <div className="grid grid-cols-1 justify-end g sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4 mr-5 ml-10">
               <div>
               <span className="text-base font-semibold order-first pr-3 text-right">محصولاتی که طراحی شده رو ببینید و در صورت نیازطرحشون رو مطابق سلیقه خودتون تغییر بدین</span>
               <img className="rounded-lg mr-4 mt-3" src="/img/ghabm.png" alt="" />
               </div>
                {ProductsBest.map((e, index) => (
                    <div className=" text-right border-2 border-gray-300 p-3 rounded-lg hover:border-gray-900" key={index}>
                       <div>
                        
                       </div>
                        <img className="w-40 h-32 object-cover mb-2 ml-auto rounded-md" src={e.img} alt={e.name} />
                        {/* آیکن Like/Dislike */}
                        <div className="grid grid-cols-2 text-right">
                            
                                <FcLike className="col-span-1 mt-2 cursor-pointer" />
                
                            <span className="text-sm col-span-1">{e.name}</span>
                        </div>
                        {/* توضیحات و قیمت */}
                        <span className="block text-right text-xs mt-4">{e.caption}</span>
                        <span className="block text-left text-sm mt-2">{e.ghimat}</span>
                    </div>
                ))}
             
            </div>
            <div className="grid grid-cols-4">
                  <div className="col-span-1">
                    <img className="w-52 h-32 mt-10 ml-20 rounded-lg" src="/img/ghabm.png" alt="" />
                  </div>
                  <div className="col-span-1">
                  <img className="w-64 h-14 mt-10 ml-3 rounded-lg" src="/img/ghabm.png" alt="" />
                  <img className="w-64 h-14 mt-2 ml-3 rounded-lg" src="/img/ghabm.png" alt="" />
                  </div>
                  <div className="col-span-1">
                  <img className="w-64 h-14 mt-10 ml-3 rounded-lg" src="/img/ghabm.png" alt="" />
                  <img className="w-64 h-14 mt-2 ml-3 rounded-lg" src="/img/ghabm.png" alt="" />
                  </div>
                  <div className="col-span-1">
                   <img className="w-52 h-32 mt-10  rounded-lg" src="/img/ghabm.png" alt="" />
                  </div>
                </div>
                <div>
                    <span className="flex justify-center mt-3 font-bold h-full">
                        کارت دعوت عروسی رو خودتون طراحی کنید
                    </span>
                </div>
                <div className="flex justify-center mt-3">
                  <div className="flex bg-jigary py-1 px-7 rounded-md text-white ">
                  <button className="flex text-center text-sm ">شروع طراحی
                  <TbPencilCog className="flex mt-1 ml-1 text-xl " />
                  </button>
                 
                  </div>
                </div>
        </>
    );
};

export default Newdesign;