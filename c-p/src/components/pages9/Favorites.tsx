import { TbFileLike } from "react-icons/tb";
import { BiSolidLeftArrowCircle } from "react-icons/bi";
import { FcLike } from "react-icons/fc";


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
    } 
];
const Favorite = () => {
    return ( 
        <>
            <div className="flex items-center mt-3">
                <div className="relative flex-grow">
                    <div className="before:content-[''] before:block before:h-px before:bg-gray-400 before:absolute before:left-96 before:right-2 before:top-0"></div>
                </div>
                <span className="mb-2 text-xl font-semibold">علاقه مندی ها</span>
                <TbFileLike className="text-gray-500 text-5xl ml-2 mr-8 mb-3" />
            </div>

            {/* اینجا تغییرات صورت گرفته */}
        
            <div className="grid grid-cols-1  g sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4 mr-5 ml-32 ">
            <div className="relative left-44 top-28">
                 <button> <BiSolidLeftArrowCircle className="text-2xl text-red-500" /></button>
                </div>
                
                {ProductsBest.map((e, index) => (
                    <div className="text-right border-2 border-gray-300 p-3 rounded-lg hover:border-gray-900" key={index}>
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
        </>
    );
}
 
export default Favorite;