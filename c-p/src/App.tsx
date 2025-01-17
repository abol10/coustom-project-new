import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Heders from './components/pages1/heders';
import './index.css';
import Profileme from './components/my_order/profile';
import Else from './components/else/else';
import Login from './components/Login/login';
import MyForm from './components/Registration/Registration';
import Myetalat from './components/etlaeattnas/Etlauat';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* مسیر اصلی */}
          <Route path="/" element={<Heders />} />
          {/* مسیرهای مختلف */}
          <Route path="/myOrder" element={<Profileme />} />
          <Route path="/login" element={<Login />} />
          <Route path="/S" element={<MyForm />} />
          <Route path="/E" element={<Myetalat />} />
          {/* مسیر پیش‌فرض */}
          <Route path="*" element={<Else />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
