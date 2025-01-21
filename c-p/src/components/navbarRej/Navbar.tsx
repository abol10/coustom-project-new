import { FaUser, FaPhone } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { BsShop } from "react-icons/bs";



const Navbarrej = () => {
  // استفاده از useLocation برای دریافت مسیر فعلی
  const location = useLocation();

  return (
    <div className="flex justify-evenly">
     <Link 
        to="/F" 
        className={`grid justify-center text-primary-400 mb-5 ${location.pathname.toLowerCase() === `${"/f"}` ? 'text-red-500' : ''}`}
      >
        <BsShop className="ml-6" />
        <span className="block text-ff mt-2">اطلاعات فروشگاه</span>
      </Link>
      <img className="w-36 h-2 mt-3 ml-10" src="img/Line 38.png" alt="خط جدا کننده" />
      <Link 
        to="/N" 
        className={`grid justify-center text-primary-400 ml-20 mb-5 ${location.pathname.toLowerCase() === `${"/n"}` ? 'text-red-500' : ''}`}
      >
        <MdOutlineDriveFolderUpload className="ml-6" />
        <span className="block text-ff mt-2">ثبت نمونه کار</span>
      </Link>
      <img className="w-36 h-2 mt-3 ml-10" src="img/Line 38.png" alt="خط جدا کننده" />
      {/* لینک اول */}
      <Link 
        to="/E" 
        className={`grid justify-center text-primary-400 mr-20 ${location.pathname.toLowerCase() === '/e' ? 'text-red-500' : ''}`}
      >
        <FaPhone className="ml-6" />
        <span className="block text-ff mt-2">اطلاعات تماس</span>
      </Link>

      {/* تصویر خط */}
      <img className="w-36 h-2 mt-3" src="img/Line 38.png" alt="خط جدا کننده" />

      {/* لینک دوم */}
      <Link 
        to="/S" 
        className={`grid justify-center text-primary-400 ml-20 ${location.pathname.toLowerCase() === `${"/s"}` ? 'text-red-500' : ''}`}
      >
        <FaUser className="ml-6" />
        <span className="block text-ff mt-2">اطلاعات کاربر</span>
      </Link>
    
    </div>
  );
}

export default Navbarrej;
