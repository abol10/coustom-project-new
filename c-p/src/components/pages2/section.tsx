import {ReactTyped} from 'react-typed'

const Section = () => {
    return ( 
        <>
        <div className="flex justify-evenly bg-left  flex-row-reverse ">    
      <button  className="flex text-sm mx-2 hover:text-jigary" type="button">لوازم خانگی</button>
         <button  className="flex text-sm mx-2 hover:text-jigary" type="button">قاب موبایل</button>
         <button  className="flex text-sm mx-2 hover:text-jigary" type="button">اکسسوری</button>
         <button  className="flex text-sm mx-2 hover:text-jigary" type="button">مدرسه واداره</button>
        <button  className="flex text-sm mx-2 hover:text-jigary" type="button">کارت و پوستر</button> 
         <button  className="flex text-sm mx-2 hover:text-jigary" type="button">جشن و مهمانی</button> 
        </div>
        <div className="bg-pink-300 mx-44 mt-16 h-96 relative rounded-lg bg-opacity-35">
        <ReactTyped  className="absolute right-10 top-20 text-lg font-bold"strings={[" آنلاین شاپ کاستومی"]} typeSpeed={100} />
            {/* <span className="absolute right-10 top-20 text-lg font-bold">
                آنلاین شاپ کاستومی
            </span> */}
              <ReactTyped  className="block absolute right-10 top-28 text-sm  text-opacity-40 "strings={["آنلاین شاپ کاستومی محصولات متنوعی دارد و این امکان رو بهتون میده متن هاتون رو شخصی سازی کنید"]} typeSpeed={100} />
            {/* <span className="absolute right-10 top-28 text-sm  text-opacity-40 ">
                آنلاین شاپ کاستومی محصولات متنوعی داره و این
                 امکان رو بهتون میده متن هاتونو رو شخصی سازی کنید
            </span> */}
        </div>
     
        </>
     );
}
 
export default Section;