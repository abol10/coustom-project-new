import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Heders from './components/pages1/heders'
import './index.css'
import Profileme from './components/my_order/profile'
import Else from './components/else/else'
import Login from './components/Login/login'
import MyForm from './components/Registration/Registration'

function App() {
 
  return (
     <div className=''>
       <Router>
        <Routes>
          <Route path='/' element={<Heders />} />
          <Route path='myOrder' element={<Profileme />} />
          <Route path='Login' element={<Login />} />
          <Route path='S' element={<MyForm />} />
          <Route path='*' element={<Else />} />
        </Routes>
       </Router>
       
     </div>
  )
}
export default App
