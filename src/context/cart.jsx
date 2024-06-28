import { createContext, useReducer, useState} from "react"
import Products from "../components/Products"
// import { cartReducer, cartInitialState } from "../reducers/cart"

// crear contexto
export const CartContext = createContext()

// function useCartReducer () {
//   const [state, dispatch] = useReducer(cartReducer, cartInitialState)

//   const addToCart = product => dispatch({
//     type: 'ADD_TO_CART',
//     payload: product
//   })
  
//   const removeFromCart = product => dispatch({
//     type: 'REMOVE_FROM_CART',
//     payload: product
//   })
  
//   const clearCart = () => dispatch({ type: 'CLEAR_CART'})

//   return {state, addToCart, removeFromCart,clearCart}
// }


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  // const {state, addToCart, removeFromCart, clearCart } = useCartReducer()
  const addToCart = product => {
    // ver si el producto ya esta en el carriot
    // setCart([...cart, Product])
    const productInCartIndex = cart.findIndex(item = item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quiantity += 1
      setCart(newCart)
    }
  }
  const clearCart = () => {}
  setCart([])

 return (
  <CartContext.Provider value={{
      // cart: state,
      cart,
      addToCart,
      clearCart
      // removeFromCart
  }}>
    {children}
  </CartContext.Provider>
)
}




