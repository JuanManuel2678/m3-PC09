import { useId } from 'react'
// import { useCart } from '../Hook/useCart'
import { CartIcon, ClearCartIcon } from '../../public/Icons'

// export const CartItem = () => {
//   return (
//     <li>
//       <img
//         src={`https://picsum.photos/id/5${id}/200/300`}
//         alt={title}
//       />
//       <div>
//         <strong>{title}</strong> - ${price}
//       </div>

//       <footer>
//         <small>
//           Qty: {quantity}
//         </small>
//         <button onClick={addToCart}>+</button>
//       </footer>
//     </li>
//   )
// }

export const Cart = () => {
  const cartCheckboxId = useId()
  // const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label 
      className='cursor-pointer bg-[#09f] items-center rounded-full flex h-[32px] justify-center p-4 adsolute right-8 top-8 w-[32px] z-90' htmlFor={cartCheckboxId}>
       <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' />

      <aside className='flex flex-col border-2 border-black bg-black p-[32px] fixed right-0 top-0 width-0 w-[200px]'>
        <ul>
          <li className='border-b -1 border-black pb-[16px] text-white text-center' >
            <img src={`https://picsum.photos/id/5/200/300`} alt="phone" 
            className='w-full'/>
            <div>
              <strong>iphone</strong> -$ 1960
            </div>

            <footer className='flex gap-2 justify-center items-center '>
              <small>
                Qty : 1
              </small>
              <button className='bg-white py-1 px-1 text-black' >+</button>
            </footer>
          </li>
        </ul>
        <button className='bg-[grey]  flex justify-center px-2 rounded-lg'  >
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}


