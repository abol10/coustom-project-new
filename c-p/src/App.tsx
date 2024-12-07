import Heders from './components/pages1/heders'
import Section from './components/pages2/section'
import Productcategories from './components/pages3/Product-categories'
import Bestsellers from './components/pages4/bestSellers'
import Special from './components/pages5/Specialsale'
import './index.css'

function App() {
 
  return (
     <div className=''>
      <Heders />
      <Section />
      <Productcategories />
      <Bestsellers  />
      <Special />
     </div>
  )
}
export default App
