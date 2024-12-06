import { GiMedallist } from "react-icons/gi";
import { productcatgoriarr } from "./product_catgory";

const Productcategories = () => {
  const Productsss: productcatgoriarr[] = [
    {
      name: "قاب موبایل",
      img: "/img/ghabm.png"
    },
    {
      name: "موبایل",
      img: "/img/ss.png"
    },
    {
      name: "گوشی",
      img: "/img/ss.png"
    },
    {
      name: "گوشی",
      img: "/img/ss.png"
    },
    {
      name: "گوشی",
      img: "/img/ss.png"
    },
    {
      name: "گوشی",
      img: "/img/ss.png"
    },
    {
      name: "گوشی",
      img: "/img/ss.png"
    }
  
  ];

  return (
    <>
      <div className="flex items-center mt-3">
        <span className="text-xs ml-32 mb-1 text-jigary font-semibold">مشاهده بیشتر</span>
        <div className="relative flex-grow">
          <div className="before:content-[''] before:block before:h-px before:bg-gray-400 before:absolute before:left-7 before:right-2 before:top-0"></div>
        </div>
        <span className="mb-2 text-xl font-semibold">دسته بندی محصولات</span>
        <GiMedallist className="text-gray-500 text-5xl mr-8 mb-3" />
      </div>

  
      <div className="flex flex-row-reverse space-x-reverse space-x-6 mt-4 mr-5 ml-10">
        {Productsss.map((e, index) => {
          return (
            <div key={index} className="text-center mr-5 border-2 border-gray-300 p-1 rounded-lg">
              <img className="w-36 h-16 object-cover mb-2 mx-auto rounded-md" src={e.img} alt={e.name} />
              <span className="block mr-2 text-xs">{e.name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Productcategories;
