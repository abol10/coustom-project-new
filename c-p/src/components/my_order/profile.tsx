import { useEffect, useState } from "react";
import Aos from 'aos';
import Hede from "../pages1/Hehe";
import Footer from "../pages10/footer";
  import { FcLike } from "react-icons/fc";
  import { FcDislike } from "react-icons/fc";
const Profileme = () => {
  const [iconlike, setIconlike] = useState(false);
  const ProductsBestsss = [
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
        id: '5'
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


  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out"
    })
  }, []);

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

  return (
    <div>
      <Hede />
      {/* ` */}
      <div className="grid grid-cols-7">
        <div className="col-span-5 ">
          <div className="flex justify-around text-sm tabs tabs-bordered">
            <button className="tab hover:text-jigary focus:tab-active" type="button">پربازدید ترین</button>
            <button className="tab hover:text-jigary focus:tab-active" type="button">جدید ترین</button>
            <button className=" tab hover:text-jigary focus:tab-active" type="button">پر فروش ترین</button>
            <button className="tab hover:text-jigary focus:tab-active" type="button">گران ترین</button>
            <button className="tab hover:text-jigary focus:tab-active" type="button">ارزان ترین</button>
            <button className="tab hover:text-jigary focus:tab-active" type="button">تمام محصولات</button>
          </div>
          <div className="grid grid-cols-1 justify-end g sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 mr-5 ml-10">
  {ProductsBestsss.map((e, index) => (
    <div className="text-right border-2 border-gray-300 p-2 rounded-lg hover:border-gray-900 w-48 h-56" key={index}>
      {/* تصویر محصول */}
      <img className="w-full h-24 object-cover mb-2 ml-auto rounded-md" src={e.img} alt={e.name} />
      {/* آیکن Like/Dislike */}
      <div className="grid grid-cols-2 text-right">
        {iconlike ? (
          <FcLike className="col-span-1 mt-2 cursor-pointer" />
        ) : (
          <FcDislike className="col-span-1 mt-2 cursor-pointer" />
        )}
        <span className="text-xs col-span-1">{e.name}</span>
      </div>
      {/* توضیحات و قیمت */}
      <span className="block text-right text-xs mt-2">{e.caption}</span>
      <span className="block text-right text-sm mt-3">{e.ghimat}</span>
    </div>
  ))}
</div>


        </div>
      {/* ` */}











      {/* شروع */}

        <div className="col-span-2 border border-gray-500 mr-14 rounded-lg">
          <div className="flex justify-between items-center">
            <button onClick={handleReset} className="text-xs text-primary-800 ml-2">حذف فیلتر ها</button>
            <span className="mr-2">فیلترها</span>
          </div>

      {/* ` */}
         
          <select
            value={selectedBrand}
            onChange={handleBrandChange}
            className="float-right select text-right select-xs w-4/5 mr-3 rounded-md mt-8"
          >
            <option disabled value="">نوع طرح</option>
            <option value="اسپورت">اسپورت</option>
            <option value="جیگری">جیگری</option>
       
          </select>
      {/* ` */}
 
      {/* ` */}
       
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="float-right select text-right select-xs w-4/5 mr-3 rounded-md mt-8"
          >
            <option disabled value="">اندازه</option>
            <option value="ورزشی">ورزشی</option>
            <option value="لباس">لباس</option>
           
          </select>
      {/* ` */}


      {/* ` */}
         
          <select
            value={selectedColor}
            onChange={handleColorChange}
            className="float-right select text-right select-xs w-4/5 mr-3 rounded-md mt-8"
          >
            <option disabled value="">رنگ</option>
            <option value="قرمز">قرمز</option>
            <option value="آبی">آبی</option>
          </select> 
      {/* ` */}
          
      <div className="form-control w-52 float-right mr-5">
    <label className="label cursor-pointer">
      <input onChange={()=>setState(!State)} type="checkbox" className="toggle toggle-info" checked={State} defaultChecked />
      <span  className="label-text">ارسال امروز</span>
    </label>
    </div>


    {/* چک باکس دو */}
    <div className="form-control w-52 float-right mr-5">
    <label className="label cursor-pointer">
      <input onChange={()=>setStateCheck(!StateCheck)} type="checkbox" className="toggle toggle-info" checked={StateCheck} defaultChecked />
      <span  className="label-text">فقط کالا های موجود</span>
    </label>
    </div>
      {/* چک باکس سه */}
      <div className="form-control w-52 float-right mr-5">
    <label className="label cursor-pointer">
      <input onChange={()=>setStateCheckthow(!StateCheckthow)} type="checkbox" className="toggle toggle-info" checked={StateCheckthow} defaultChecked />
      <span  className="label-text">فقط محصولات گرافیکی</span>
    </label>
    </div>
   {/* سلکتور محدودیت */}
   <select
            value={selectedprice}
            onChange={handlepriceChange}
            className="float-right select text-right select-xs w-4/5 mr-3 rounded-md mt-8"
          >
            <option disabled value="">محدودیت قیمت</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
          </select> 

    {/* پایان فیلتر */}
        </div>
        
      {/* پایان */}

      </div>
      <Footer />
    </div>
  );
}

export default Profileme;
