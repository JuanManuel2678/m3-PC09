import { useId } from "react"
import { useFilters } from "../Hook/useFilters"


export const Filters = () => {
  
  const { setFilters, filters } =  useFilters()
  
  const minPriceFilterId = useId()
  const caegoryFiltersId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
       category: event.target.value
      }
    ))
  }


  return (
    <section className=" flex gap-4  justify-center mt-8">

      <div className=" flex gap-4 shadow-inner px-2 font-bold items-center ">
        <label htmlFor={minPriceFilterId} className="py-2 px-3 ml-2 ">Precio</label>
        <input 
        type="range" 
        id={minPriceFilterId}
        min='0'
        max='20000'
        onChange={handleChangeMinPrice}
        value={filters.minPrice}
        className="w-[25px] bg-gray-500"
        />
        <span className="text-[#156a15] font-bold text-xl"> $ {filters.minPrice}</span>
      </div>

      <div className="shadow-inner flex gap-4  px-4 font-bold bg-">
        <label htmlFor={caegoryFiltersId} className="text-center content-center">Categoria</label>
        <select id={caegoryFiltersId} onChange={handleChangeCategory} className="w-[110px] text-center bg-gray-800  ">
          <option value="all">Todo</option>
          <option value="beauty">Belleza</option>
          <option value="fragrances">Perfume</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
          <option value="home-decoration">Hogar</option>
          <option value="kitchen-accessories">cocina</option>
          <option value="laptops">Laptop</option>
          <option value="mens-shirts">camisa</option>
          <option value="mens-shoes">zapatos</option>
          <option value="mens-watches">Reloj</option>
          <option value="mobile-accessories">Telefonia</option>
          <option value="motorcycle">Motos</option>
          <option value="skin-care">Piel</option>
          <option value="smartphones">Celulares</option>
          <option value="sports-accessories">Deporte</option>
          <option value="sunglasses">Lentes</option>
          <option value="tablets">Tablets</option>
          <option value="tops">Tops</option>
          <option value="vehicle">Carro</option>
          <option value="womens-bags">Cartera</option>
          <option value="womens-dresses">vestido</option>
          <option value="womens-jewellery">joyeria</option>
          <option value="womens-shoes">Tacones</option>
          <option value="womens-watches">Reloj Mujer</option>

        </select>
      </div>
    </section>
  )
}




// import { useId } from "react"
// import { useFilters } from "../Hook/useFilters"

// export const Filters = () => {
//   const { filters, setFilters } = useFilters()
 
//   const minPriceFilterId = useId()
//   const categoryFilterId = useId()

//   const handleChangeMinPrice = (event) => { 
//     setFilters(prevState => ({
//       ...prevState,
//       minPrice: event.target.value
//     }))
//   }

//   const handleChangeCategory = (event) => {
//    setFilters(prevState => ({
//       ...prevState,
//       category: event.target.value 
//     }))
//   }


//   return (
//     <section className=" flex gap-4  justify-center mt-8">

//       <div className=" flex gap-4 shadow-inner px-2 font-bold">
        
//         <label htmlFor={minPriceFilterId} className="py-2 px-3 ml-2 ">Precio a partir de:</label>
//         <input 
//         type="range" 
//         id={minPriceFilterId}
//         min="0"
//         max="1700"
//         onChange={handleChangeMinPrice}
//         value={filters.minPrice}/>
//         <span className="content-center">$ {filters.minPrice}</span>
//       </div>  
 
//       <div className="shadow-inner flex gap-4  px-4 font-bold">
//         <label 
//         className="text-center content-center" 
//         htmlFor={categoryFilterId}>Categoria</label>
//         <select 
//         id={categoryFilterId}
//         onChange={handleChangeCategory}
//         className="w-[110px] text-center">
//             <option value="all">Todas</option>
//             <option value="home-decoration">Hogar</option>
//             <option value="laptops">Portatiles</option>
//             <option value="smartphones">Telefonos</option>
//             <option value="fragrances">Lociones</option>
//             <option value="skincare">Faciales</option>
//             <option value="groceries">Comestibles</option>
//         </select>
//       </div>

//     </section>
//   )
// }


