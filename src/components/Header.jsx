import { Filters } from "./Filters"

export const Header = () => {
  
  return (
    <header className="p-8 bg-gray-800 text-white" >
       <h1 className=" flex text-center text-5xl font-bold h-[60px] justify-center py-1 m-4 ">
        Shop React 🛒
       </h1>
    <Filters />
    </header >
  )
}

