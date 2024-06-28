import Products from "./components/Products"
import { products as initialProducts } from '../public/products.json'
import { useState } from "react"
import { Header } from "./components/Header"
import { Footer } from './components/Footer'
import { useFilters } from "./Hook/useFilters"
import { Cart } from "./components/Cart"


function App() { 
  const [products] = useState(initialProducts)
  const { filterProducts, filters } = useFilters()
   const filteredProducts = filterProducts(products)
   
  return (
    <>
     <Header />
     <Cart />
     <Products products={filteredProducts} />
     <Footer />
    </>
  )
}


export default App


