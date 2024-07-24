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
      className='cursor-pointer text-black-50 border-[2px] border-black rounded-md flex justify-center p-1 absolute right-4 top-4  h-[32px] w-[32px] z-90 transition-all ' htmlFor={cartCheckboxId}>
       <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox'  className='peer hidden'/>

      <aside className='border-2 border-black bg-white/40 p-[20px] fixed right-0 top-10 w-[200px] h-full m-2 rounded-lg hidden peer-checked:block place-items-center items-center'>

        <ul>
          <li className='border-b border-black pb-[10px] text-black text-center' >
            <img src={`https://picsum.photos/id/5/200/300`} alt="phone" 
            className='w-full rounded-lg'/>
            <div className='flex flex-col'>
              <strong>iphone</strong> 
              <span className="text-[#156a15] font-bold ">$ 1960 </span>
            </div>

            <footer className='flex gap-2 justify-center items-center '>
              <small>
                Qty : 1
              </small>
              <button className='bg-white border-[2px] border-black py-0 px-1 text-black rounded-full' >+</button>
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


