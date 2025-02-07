import Hede from "../pages1/Hehe";
import Footer from "../pages10/footer";
import { useEffect, useState } from "react";
import ProfileSetting from "../ProfileSetting";





const PrifilePage1 = () => {
    
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
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
        ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }  ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }  ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }  ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }  ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }  ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }  ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }  ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }  ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }  ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }  ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }  ,
        {
            img: '/img/ss.png',
            name: 'موبایل',
            caption: 'دارای رنگ بندی قابل طراحی',
            ghimat: '150,000 تومان',
            like: false,
            id: '9'
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const [displayedProducts, setDisplayedProducts] = useState(ProductsBest.slice(0, itemsPerPage));
    const [pageButtons, setPageButtons] = useState<JSX.Element[]>([]);

        const handlePageChange = (page: number) => {
            setCurrentPage(page);
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            setDisplayedProducts(ProductsBest.slice(startIndex, endIndex));
          };
        

        useEffect(() => {
            const totalPages = Math.ceil(ProductsBest.length / itemsPerPage);
            const startPage = Math.max(1, currentPage - 2);
            const endPage = Math.min(totalPages, currentPage + 2);
            
            const newButtons = [];
        
            if (startPage > 1) {
                newButtons.push(
                    <button key="prev" onClick={() => handlePageChange(currentPage - 5)} className="px-4 py-2 mx-2 rounded bg-gray-200">
                        قبلی
                    </button>
                );
            }
        
            for (let i = startPage; i <= endPage; i++) {
                newButtons.push(
                    <button 
                        key={i} 
                        className={`px-4 py-2 mx-2 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} 
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </button>
                );
            }
        
            if (endPage < totalPages) {
                newButtons.push(
                    <button key="next" onClick={() => handlePageChange(currentPage + 5)} className="px-4 py-2 mx-2 rounded bg-gray-200">
                        بعدی
                    </button>
                );
            }
        
            // **راه‌حل: فقط در صورت تغییر مقدار، state را به‌روزرسانی کن**
            if (JSON.stringify(newButtons) !== JSON.stringify(pageButtons)) {
                setPageButtons(newButtons);
            }
        
        }, [currentPage, ProductsBest]);
    return ( 
        <div>
            <Hede />
             <span className="flex justify-end text-2xl mr-20 mt-10 font-bold ">پروفایل</span>
              {/* گرید کردن  */}
            <div className="grid grid-cols-6">
                <div className=" col-span-4  mx-10 rounded-lg shadow-xl">
                  <span className="flex justify-end  mt-2 mr-5 font-semibold text-base">خرید های پر تکرار من</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-6 mb-10">
                 {displayedProducts.map((product,index) => (
                 <div key={product.id + "_" + index} className="border p-4 rounded-xl h-64 w-52 mt-5 mb-2">
                   <img src={product.img} alt={product.name} className="w-full h-32 object-cover mb-2" />
                 <h3 className="text-center">{product.name}</h3>
                <p className="text-center">{product.caption}</p>
                 <p className="text-center">{product.ghimat}</p>
                  </div>
                ))}
                 </div>
                </div> 
               {/* profileSetting */}
               <div className="col-span-2">
                <ProfileSetting />
               </div>
            </div>
           {/* Pagination */}
          <div className="flex justify-center mt-5 mr-96">
          {pageButtons}
          </div>
            <Footer />
        </div>
     );
}
 
export default PrifilePage1;