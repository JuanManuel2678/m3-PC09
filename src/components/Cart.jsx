import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../../public/Icons'
import { useCart } from '../Hook/useCart'

export const Cart = () => {

  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  function CartItem ({thumbnail, price, title, quantity, addToCart}) {

    return (
      <li className=' w-[200px] h-[300px] flex flex-col justify-around mx-auto gap-2 border-b-[3px] border-b-gray-200 font-bold'>

      <figure className='rounded-lg h-[80%] w-full p-2 bg-gray-700/60 gap-2 flex flex-col'>
      <img src={thumbnail} alt="phone" 
            className='w-full rounded-lg h-[80%]'/>
            <figcaption className='text-[15px] text-center text-white h-[20%] '> {title} $ {price} </figcaption>  
      </figure>

    <footer className='flex gap-6 p-2 justify-center items-center h-[20%] text-white bg-gray-700/60 rounded-lg'>

      <small >
        Qty : {quantity}
      </small>

      <button 
      onClick={addToCart}
      className='bg-white py-0 px-1 content-center  text-black rounded-full' >+</button>
    </footer>
      
  </li>
    )
  }

  return (
    <>
      <label 
      className='cursor-pointer bg-blue-950 text-teal-50 rounded-md flex justify-center p-1 absolute right-4 top-4  h-[32px] w-[32px] z-90 transition-all ' htmlFor={cartCheckboxId}>
       <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox'  className='peer hidden'/>

      <aside
       className='border-2 border-black bg-black/60 p-2 fixed right-0 top-12 w-[240px] min-h-[1000px] m-2 rounded-lg hidden peer-checked:block'>

        <ul className='flex justify-center w-[230px]'>
          {cart.map(product => (
            <CartItem key={product.id}
            addToCart={() => addToCart(product)} 
            {...product}/>
          ))

          }
        </ul>
        
        <button 
        onClick={clearCart}
        className='bg-blue-950 text-white border border-white flex justify-center rounded-lg m-2 hover:scale-110 mx-auto p-2'>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}


