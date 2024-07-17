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
      className='cursor-pointer bg-blue-950 text-teal-50 rounded-md flex justify-center p-1 absolute right-4 top-4  h-[32px] w-[32px] z-90 transition-all ' htmlFor={cartCheckboxId}>
       <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox'  className='peer hidden'/>

      <aside className='border-2 border-black bg-blue-950/60 p-[32px] fixed right-0 top-0 w-[200px] h-full m-2 rounded-lg hidden peer-checked:block place-items-center items-center'>

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
              <button className='bg-white py-1 px-2 text-black rounded-full' >+</button>
            </footer>
          </li>
        </ul>
        
        <button className='bg-blue-950 text-white border border-white flex justify-center rounded-lg m-2 hover:scale-110 mx-auto p-2'>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}


