 import { createContext, useState} from "react"

// crear contexto
export const CartContext = createContext()

// crear Provider 
export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  // añadir al carrito
  const addToCart = product => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // producto no esta en el carrito 
    setCart(prevtState => ([
      ...prevtState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }
  
  // eliminar un producto 
  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item.id !== product.id))
  }
  // limpiar carrito
  const clearCart = () => {
    setCart([])
  }
 

 return (
  <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart,
      removeFromCart
  }}>
    {children}
  </CartContext.Provider>
   )
}

