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

      <aside
       className='border-2 border-black bg-blue-950/60 p-[20px] fixed right-0 top-12 w-[200px] m-2 rounded-lg hidden peer-checked:block'>

        <ul className='flex justify-center'>

          <li className=' w-[160px] h-[320px] flex flex-col justify-around gap-2  border border-b-black/60'  >

              <figure className='rounded-lg h-8/10 '>
              <img src={`https://picsum.photos/id/5/200/300`} alt="phone" 
                    className='w-full rounded-lg'/>
                    <figcaption className='text-[15px] text-center text-white'> iphone $ 1960 </figcaption>  
              </figure>

            <footer className='flex gap-2 p-2 justify-around items-center h-2/10'>

              <small >
                Qty : 1
              </small>

              <button className='bg-white py-0 px-1 content-center  text-black rounded-full' >+</button>
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


