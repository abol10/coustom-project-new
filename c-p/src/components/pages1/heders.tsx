import Section from "../pages2/section";
import Productcategories from "../pages3/Product-categories";
import Bestsellers from "../pages4/bestSellers";
import Special from "../pages5/Specialsale";
import Populard from "../pages6/Populardesigns";
import Topdesingner from "../pages7/Topdesigners";
import Newdesign from "../pages8/new_design";
import Favorite from "../pages9/Favorites";
import Footer from "../pages10/footer";
import Hede from "./Hehe";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Heders = () => {
    useEffect(()=>{
       Aos.init(
        {
          duration:1000,
          easing:"ease-in-out"
        }
       )
    },[])
    // const [isSearch, setSearch] = useState<boolean>(false);
    
    return ( 
     <>
     <Hede />
     <Section />
  <div data-aos="fade-up">
  <Productcategories />
  </div>
  <div data-aos="fade-up">
  <Bestsellers />
  </div>
  <div data-aos="fade-up">
  <Special />
  </div>     
  <div data-aos="fade-up">
  <Populard/>
  </div>
   <div data-aos="fade-up"><Topdesingner /></div>
   <div data-aos="fade-up">
   <Newdesign/>
  </div>
  <div data-aos="fade-up">
  <Favorite/>
  </div>
 <Footer />
     </>
     );
}
  
export default Heders;
