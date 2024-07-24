import { createContext, useState } from "react"

//el que se consume
export const FiltersContext = createContext()

// el que provee el acceso al contexto 
export const FiltersProvider = ({ children }) => {
  
  const [filters, setFilters ] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
   <FiltersContext.Provider value={{
     filters,
     setFilters
    }}>
      {children}
   </FiltersContext.Provider>
  )
}

 
 