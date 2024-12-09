import Heders from './components/pages1/heders'
import Section from './components/pages2/section'
import Productcategories from './components/pages3/Product-categories'
import Bestsellers from './components/pages4/bestSellers'
import Special from './components/pages5/Specialsale'
import Populard from './components/pages6/Populardesigns'
import Topdesingner from './components/pages7/Topdesigners'
import Newdesign from './components/pages8/new_design'
import './index.css'

function App() {
 
  return (
     <div className=''>
      <Heders />
      <Section />
      <Productcategories />
      <Bestsellers  />
      <Special />
      <Populard />
      <Topdesingner />
      <Newdesign />
     </div>
  )
}
export default App
