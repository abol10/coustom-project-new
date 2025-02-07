import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Heders from './components/pages1/heders';
import './index.css';
import Profileme from './components/my_order/profile';
import Else from './components/else/else';
import Login from './components/Login/login';
import MyForm from './components/Registration/Registration';
import Myetalat from './components/etlaeattnas/Etlauat';
import Nmonekar from './components/nmonekar/Nmonekar';
import Etluate_Shop from './components/etluate_shop/etluat_shop';
import PrifilePage1 from './components/ProfilePage/Profilepage1';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* مسیر اصلی */}
          <Route path="/" element={<Heders />} />
          {/* مسیرهای مختلف */}
          <Route path="/product" element={<Profileme />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<MyForm />} />
          <Route path="/Registerphont" element={<Myetalat />} />
          <Route path="/Informationphont" element={<Nmonekar />} />
          <Route path="/InformationShop" element={<Etluate_Shop />} />
          <Route path="/Profile" element={<PrifilePage1 />} />
          {/* مسیر پیش‌فرض */}
          <Route path="*" element={<Else />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
