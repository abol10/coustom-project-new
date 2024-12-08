import { RiGalleryFill } from "react-icons/ri";
import { AiTwotoneLike } from "react-icons/ai";
import { FcDislike } from "react-icons/fc";

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

const Populard = () => {

    return (
        <div className="mt-40">
            <div className="flex items-center mt-3 ">
                <span className="text-xs ml-32 mb-1 text-jigary font-semibold">مشاهده بیشتر</span>
                <div className="relative flex-grow">
                    <div className="before:content-[''] before:block before:h-px before:bg-gray-400 before:absolute before:left-7 before:right-2 before:top-0"></div>
                </div>
                <span className="mb-2 text-xl font-semibold">طرح های پرطرفدار</span>
                <AiTwotoneLike className="text-gray-500 text-5xl mr-8 mb-3" />
            </div>

            {/* اینجا تغییرات صورت گرفته */}
            <div className="grid grid-cols-1 justify-end g sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4 mr-5 ml-10">
                {ProductsBest.map((e, index) => (
                    <div className=" text-right border-2 border-gray-300 p-3 rounded-lg hover:border-gray-900" key={index}>
                        {/* تصویر محصول */}
                        <img className="w-40 h-32 object-cover mb-2 ml-auto rounded-md" src={e.img} alt={e.name} />
                        {/* آیکن Like/Dislike */}
                        <div className="grid grid-cols-2 text-right">
                            
                               
                        
                                <FcDislike className="col-span-1 mt-2 cursor-pointer" />
                        
                            <span className="text-sm col-span-1">{e.name}</span>
                        </div>
                        <span className="block text-right text-xs mt-4">{e.caption}</span>
                       <div className="block flex border border-red-600 py-2 text-center px-3  rounded-lg text-sm mt-2 hover:border-black">
                       <button className="px-2 text-xs pl-8 text-red-600">افزودن به گالری</button>
                       <RiGalleryFill className="mt-1  text-red-600"/>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Populard;
