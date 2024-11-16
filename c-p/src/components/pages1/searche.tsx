import { useState } from "react"
import { BsSearch } from "react-icons/bs";

const Searche = () => {
  const [items, setItems] = useState<string[]>([]);
  const [name, setnaem] = useState<string>('');

  
    const handell = ()=>{
      setItems([...items,name])
      console.log(items)
    }
    return ( 
        <>
         <div className="relative">
                <input
                 className="h-48px items-center pr-2 pl-10 ml-14 mt-2  outline-none border border-gray-300 rounded-xl shadow-sm w-550px placeholder:text-jigary placeholder:text-sm placeholder:text-right placeholder:m-1 text-right placeholder-opacity-25"
                  placeholder="جست و جو"
                   type="text" 
                   onFocus={()=>{
                    // setIsTyping(true)
                    // setSearch(true)
                   }}
                   onBlur={()=>{
                    // setIsTyping(false)
                    // setSearch(false)
                   }}
                   onChange={(e)=>{
                    // e.target.value&&setIsTyping(true)
                    setnaem(e.target.value)
                   }}
                   />
                <button className={`absolute left-16 top-4 transition-all duration-300 `} type="button"><BsSearch onClick={handell} className="text-lg text-jigary" /></button>
            </div>
        <div>
            {/* <button onClick={handell} type="button">searche</button> */}
        </div>
        {
          items.map(item=><span className="mr-4">{item}</span>)
        }
        </>
    );
}
 
export default Searche;
// ${isTyping ?'transform -translate-x-12':''}