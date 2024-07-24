import Products from "./components/Products"
import { products as initialProducts } from '../public/products.json'
import { Header } from "./components/Header"
import { Footer } from './components/Footer'
import { useFilters } from "./Hook/useFilters"
import { Cart } from "./components/Cart"


function App() { 
  
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)
   
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


