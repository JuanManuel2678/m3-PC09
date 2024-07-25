
import { AddToCartIcon } from "/public/Icons.jsx";
import { RemoveFromCartIcon } from '/public/Icons.jsx'
import { useCart } from "../Hook/useCart";


export const Products = ({ products }) => {

  //  const { addToCart } = useCart()
  const { addToCart, cart, removeFromCart } = useCart()

  const checkProductIncard = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className="w-full min-h-[1200px] flex justify-center items-center bg-gray-800">

      <ul className="flex flex-wrap justify-around content-center px-12 py-4 m-4 w-full">
        {products.slice(0, 25).map((item) => { 
          const isProductInCart = checkProductIncard(product)
          
          return (
          
          <li 
          className=' flex flex-col items-center text-center justify-between w-[220px] h-[300px] m-2 rounded-xl shadow-box bg-black p-4 text-white'
          key={item.id}>

            <figure className=" h-[60%] w-full border-b-2 px-2 border-black/50 rounded-t bg-white p-">
            <img 
            className='h-full w-full rounded-t-xl object-contain bg-white' src={item.thumbnail} 
            alt={item.title} />
            </figure>

            <div className="flex flex-col  h-[30%]">
              <strong>{item.title}</strong>
              <span className="text-[#156a15] font-bold ">$ {item.price}</span> 
            </div>

            <div className=" h-[15%] w-full flex justify-center content-center ">

              <button 
              style={{backgroundColor: isProductInCart ? 'red' : 'blue'}}
              onClick={() => {
                isProductInCart 
                ? removeFromCart(product)
                : addToCart(product)
              }}
              className=' h-full border-2 border-gray-800 px-1 py-1 rounded-lg bg-gray-600 hover:bg-white hover:text-black  hover:scale-125' >
                {
                  isProductInCart 
                  ? <RemoveFromCartIcon />
                  : <AddToCartIcon />
                }
                <AddToCartIcon />
              </button>

            </div>
            
          </li> ) })}
      </ul>
    </main>
  );
};

export default Products;

// import { useCart } from '../Hook/useCart'
// import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'

// export const Products = ({ products }) => {
//   const { addToCart, removeFromCart, cart} = useCart()

//     const checkProductIncart = product => {
//       return cart.some(item => item.id === product.id)
//     }

//   return (
// <main className='flex w-full'>
//   <ul className="flex flex-wrap justify-around  content-center px-12 py-4 m-4 w-full">
//     {products.map(product =>{
//       const isProductInCart = checkProductIncart(product)

//      return (
//       <li className='border-2 border-black flex flex-col items-center text-center justify-between w-[300px] h-[500px] m-2 rounded-lg bg-[#111] text-[#fff] shadow-2xl'
//       key={product.id}>

//       <img
//       className='border-2 border-black h-[400px] mt-2 text-center rounded-xl object-cover block'
//       src={`https://picsum.photos/id/5${product.id}/200/300`}
//       alt={product.title} />

//       <div>
//         <strong>{product.title}</strong>  - $ {product.price}
//       </div>

//       <div>
//         <button
//         className='bg-[grey] px-2 py-2 rounded-lg mb-2 hover:bg-white'
//         onClick={()=> {
//           isProductInCart
//           ? removeFromCart(product)
//           : addToCart(product)
//         }}
//         >{
//           isProductInCart
//           ? <RemoveFromCartIcon />
//           : <AddToCartIcon />
//         }
//         </button>
//       </div>

//       </li>
//      )
// })}
//   </ul>
// </main>
//   )
// }
