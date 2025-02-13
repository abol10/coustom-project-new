import { createContext, useEffect, useState } from "react";
import Aos from 'aos';
import Hede from "../pages1/Hehe";
import Footer from "../pages10/footer";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { useGetProductsQuery } from "../../service/Supabase";
import { Link } from "react-router-dom";

const Profileme = () => {
    const MyContext = createContext([]);
  const { data, isLoading } = useGetProductsQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [displayedProducts, setDisplayedProducts] = useState(data?.slice(0, itemsPerPage));
  const [pageButtons, setPageButtons] = useState<JSX.Element[]>([]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedProducts(filteredProducts?.slice(startIndex, endIndex));
  };

  const [iconlike] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedprice, setSelectedprice] = useState<string>("");
  const [State, setState] = useState<boolean>(false);
  const [StateCheck, setStateCheck] = useState<boolean>(false);
  const [StateCheckthow, setStateCheckthow] = useState<boolean>(false);

  const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
  };

  const handlepriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedprice(event.target.value);
  };

  const handleReset = () => {
    setSelectedBrand("");
    setSelectedCategory("");
    setSelectedColor("");
    setSelectedprice("");
    setState(false);
    setStateCheck(false);
    setStateCheckthow(false);
  };
  // const filterproduct=(id:number)=>{
  //    data?.map(e=>{
  //     if(id==e.id){
  //       return console.log(e.img)
  //     }
  //    })
  // }

  // فیلتر محصولات بر اساس انتخاب‌های کاربر
  const filteredProducts = data?.filter(product => {
    const matchesBrand = selectedBrand ? product.material === selectedBrand : true;
    const matchesCategory = selectedCategory ? product.size === selectedCategory : true;
    const matchesColor = selectedColor ? product.color === selectedColor : true;
    const matchesPrice1 = selectedprice&&selectedprice==="1"?product.price<=100:product
    const matchesPrice2 = selectedprice && selectedprice === "2" 
    ? product.price >= 100 && product.price <= 200 
    : product;  
    const matchesPrice3 = selectedprice && selectedprice === "3" 
    ? product.price >= 300
    : product;  
    const matchesAvailable = StateCheck ? product.available : true;
    const matchesGraphic = StateCheckthow ? product.isGraphic : true;
    return matchesBrand && matchesCategory && matchesColor && matchesPrice1 &&matchesPrice2&&matchesPrice3  && matchesAvailable && matchesGraphic;
  })||[];
  const [previousFilteredProducts, setPreviousFilteredProducts] = useState(data);
  useEffect(() => {
    // فقط در صورتی که filteredProducts تغییر کرده باشد، عمل تغییر را انجام می‌دهیم
    if (JSON.stringify(filteredProducts) !== JSON.stringify(previousFilteredProducts)) {
      setDisplayedProducts(filteredProducts?.slice(0, itemsPerPage));
      setPreviousFilteredProducts(filteredProducts); // بروزرسانی previousFilteredProducts
    }
  }, [filteredProducts]);// فقط زمانی که filteredProducts تغییر کند
  
  
  // useEffect برای بروزرسانی دکمه‌های صفحه بندی
  useEffect(() => {
    const totalPages = Math.ceil(filteredProducts?.length / itemsPerPage);
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    const newButtons = [];
    if (startPage > 1) {
      newButtons.push(
        <button key="prev" onClick={() => handlePageChange(currentPage - 5)} className="px-4 py-2 mx-2 rounded bg-gray-200">قبلی</button>
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
        <button key="next" onClick={() => handlePageChange(currentPage + 5)} className="px-4 py-2 mx-2 rounded bg-gray-200">بعدی</button>
      );
    }
        // **راه‌حل: فقط در صورت تغییر مقدار، state را به‌روزرسانی کن**
        if (JSON.stringify(newButtons) !== JSON.stringify(pageButtons)) {
          setPageButtons(newButtons);
      }
  
  }, [currentPage, filteredProducts]);
 
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
 if (isLoading){return   <div className='mt-96 loader'></div>}
  return (
    <MyContext.Provider value={[]}>
      <Hede />
      <div className="grid grid-cols-7">
        <div className="col-span-5">
          <div className="grid grid-cols-1 justify-end sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10 mr-5 ml-10 shadow-xl">
            {displayedProducts?.map((e, index) => (
              <Link to={`/product/${e.id}`} className="text-right border-2 border-gray-300 p-2 rounded-lg hover:border-gray-900 w-48 h-56 ml-10 mb-10 opacity-95 cursor-pointer" key={index}>
                <img className="w-full h-24 object-cover mb-2 ml-auto rounded-md" src={e.img} alt={e.name} />
                <div className="grid grid-cols-2 text-right">
                  {iconlike ? <FcLike className="col-span-1 mt-2 cursor-pointer" /> : <FcDislike className="col-span-1 mt-2 cursor-pointer" />}
                  <span className="text-xs col-span-1">{e.name}</span>
                </div>
                <span className="block text-right text-xs mt-2">{e.caption}</span>
                <span className="block text-right text-sm mt-3">{e.price} تومان</span>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-5">
          {pageButtons}
          </div>
        </div>

        {/* فیلترها */}
        <div className="col-span-2 shadow-md mr-14 mt-8 rounded-lg">
          <div className="flex justify-between items-center">
            <button onClick={handleReset} className="text-xs text-primary-800 ml-2">حذف فیلتر ها</button>
            <span className="mr-2">فیلترها</span>
          </div>

          <select value={selectedBrand} onChange={handleBrandChange} className="float-right select text-right select-xs w-4/5 mr-3 rounded-md mt-8">
            <option disabled value="">نوع طرح</option>
            <option value="اسپورت">اسپورت</option>
            <option value="جیگری">جیگری</option>
          </select>

          <select value={selectedCategory} onChange={handleCategoryChange} className="float-right select text-right select-xs w-4/5 mr-3 rounded-md mt-8">
            <option disabled value="">اندازه</option>
            <option value="ورزشی">ورزشی</option>
            <option value="لباس">لباس</option>
          </select>

          <select value={selectedColor} onChange={handleColorChange} className="float-right select text-right select-xs w-4/5 mr-3 rounded-md mt-8">
            <option disabled value="">رنگ</option>
            <option value="قرمز">قرمز</option>
            <option value="آبی">آبی</option>
          </select>

          <div className="form-control w-52 float-right mr-5">
            <label className="label cursor-pointer">
              <input onChange={() => setState(!State)} type="checkbox" className="toggle toggle-info" checked={State} />
              <span className="label-text">ارسال امروز</span>
            </label>
          </div>

          <div className="form-control w-52 float-right mr-5">
            <label className="label cursor-pointer">
              <input onChange={() => setStateCheck(!StateCheck)} type="checkbox" className="toggle toggle-info" checked={StateCheck} />
              <span className="label-text">فقط کالا های موجود</span>
            </label>
          </div>

          <div className="form-control w-52 float-right mr-5">
            <label className="label cursor-pointer">
              <input onChange={() => setStateCheckthow(!StateCheckthow)} type="checkbox" className="toggle toggle-info" checked={StateCheckthow} />
              <span className="label-text">فقط محصولات گرافیکی</span>
            </label>
          </div>

          <select value={selectedprice} onChange={handlepriceChange} className="float-right select text-right select-xs w-4/5 mr-3 rounded-md mt-8 mb-10">
            <option disabled value="">رنج قیمت</option>
            <option value="1">کمتر از {100} هزار</option>
            <option value="2">بین {200} هزار تا {100} هزار</option>
            <option value="3">بین {400} هزار تا {200} هزار</option>
          </select>
        </div>
      
      </div>

      <Footer />
    </MyContext.Provider>
  );
};

export default Profileme;
