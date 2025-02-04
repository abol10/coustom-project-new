import { useEffect, useState } from "react";
import Aos from 'aos';
import Hede from "../pages1/Hehe";
import Footer from "../pages10/footer";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

const Profileme = () => {
  const ProductsBestsss = [
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 1003, like: false, id: "1", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat:993, like: false, id: "2", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "3", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "6", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "5", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "7", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "8", brand: 'اسپورت', category: 'ورزشی', color: 'آبی', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "4", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "9", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "10", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "11", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "12", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "13", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "14", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "15", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "16", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "17", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "18", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "19", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "20", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "21", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "22", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "23", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "24", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "25", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "26", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "27", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "28", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "29", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "30", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "31", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "32", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "33", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "34", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "35", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 150, like: false, id: "36", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 15, like: false, id: "37", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 15, like: false, id: "38", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 15, like: false, id: "39", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false },
      { img: '/img/ss.png', name: 'موبایل', caption: 'دارای رنگ بندی قابل طراحی', ghimat: 15, like: false, id: "40", brand: 'اسپورت', category: 'ورزشی', color: 'قرمز', available: true, isGraphic: false } 
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [displayedProducts, setDisplayedProducts] = useState(ProductsBestsss.slice(0, itemsPerPage));
  const [pageButtons, setPageButtons] = useState<JSX.Element[]>([]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedProducts(filteredProducts.slice(startIndex, endIndex));
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

  // فیلتر محصولات بر اساس انتخاب‌های کاربر
  const filteredProducts = ProductsBestsss.filter(product => {
    const matchesBrand = selectedBrand ? product.brand === selectedBrand : true;
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesColor = selectedColor ? product.color === selectedColor : true;
    const matchesPrice1 = selectedprice&&selectedprice==="1"?product.ghimat<=100:product
    const matchesPrice2 = selectedprice && selectedprice === "2" 
    ? product.ghimat >= 100 && product.ghimat <= 200 
    : product;  
    const matchesPrice3 = selectedprice && selectedprice === "3" 
    ? product.ghimat >= 400
    : product;  
    // const matchesPrice = selectedprice ? (selectedprice === "1" ? parseInt(product.ghimat.replace(",", "")) < 100000 : parseInt(product.ghimat.replace(",", "")) >= 100000 && parseInt(product.ghimat.replace(",", "")) < 200000) : true;
    const matchesAvailable = StateCheck ? product.available : true;
    const matchesGraphic = StateCheckthow ? product.isGraphic : true;
    return matchesBrand && matchesCategory && matchesColor && matchesPrice1 &&matchesPrice2&&matchesPrice3  && matchesAvailable && matchesGraphic;
  });

  // useEffect برای بروزرسانی دکمه‌های صفحه بندی
  useEffect(() => {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    const newButtons = [];
    if (startPage > 1) {
      newButtons.push(
        <button key="prev" onClick={() => handlePageChange(currentPage - 1)} className="px-4 py-2 mx-2 rounded bg-gray-200">قبلی</button>
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
        <button key="next" onClick={() => handlePageChange(currentPage + 1)} className="px-4 py-2 mx-2 rounded bg-gray-200">بعدی</button>
      );
    }
    setPageButtons(newButtons);
  }, [currentPage, filteredProducts]);

  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div>
      <Hede />
      <div className="grid grid-cols-7">
        <div className="col-span-5">
          <div className="grid grid-cols-1 justify-end sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 mr-5 ml-10">
            {displayedProducts.map((e, index) => (
              <div className="text-right border-2 border-gray-300 p-2 rounded-lg hover:border-gray-900 w-48 h-56" key={index}>
                <img className="w-full h-24 object-cover mb-2 ml-auto rounded-md" src={e.img} alt={e.name} />
                <div className="grid grid-cols-2 text-right">
                  {iconlike ? <FcLike className="col-span-1 mt-2 cursor-pointer" /> : <FcDislike className="col-span-1 mt-2 cursor-pointer" />}
                  <span className="text-xs col-span-1">{e.name}</span>
                </div>
                <span className="block text-right text-xs mt-2">{e.caption}</span>
                <span className="block text-right text-sm mt-3">{e.ghimat} تومان</span>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-5">
          {pageButtons}
          </div>
        </div>

        {/* فیلترها */}
        <div className="col-span-2 border border-gray-500 mr-14 rounded-lg">
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

          <select value={selectedprice} onChange={handlepriceChange} className="float-right select text-right select-xs w-4/5 mr-3 rounded-md mt-8">
            <option disabled value="">رنج قیمت</option>
            <option value="1">کمتر از {100} هزار</option>
            <option value="2">بین {200} هزار تا {100} هزار</option>
            <option value="3">بین {400} هزار تا {200} هزار</option>
          </select>
        </div>
      
      </div>

      <Footer />
    </div>
  );
};

export default Profileme;
