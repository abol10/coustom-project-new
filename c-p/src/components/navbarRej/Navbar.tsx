import { FaUser, FaPhone } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const Navbarrej = () => {
  // استفاده از useLocation برای دریافت مسیر فعلی
  const location = useLocation();

  return (
    <div className="flex justify-center">
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
