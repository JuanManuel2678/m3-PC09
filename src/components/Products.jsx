import { AddToCartIcon } from "/public/Icons.jsx";

export const Products = ({ products }) => {
  return (
    <main className="w-full flex justify-center items-center">
      <ul className="flex flex-wrap justify-around  content-center px-12 py-4 m-4 w-full">
        {products.slice(0, 15).map((item) => (
          <li 
          className='border-2 border-black flex flex-col items-center text-center justify-between w-[300px] h-[300px] m-2 rounded-lg bg-[#01022b] text-[#fff] shadow-2xl'
          key={item.id}>
            <img 
            className='border-2 border-black h-[180px] mt-2 text-center rounded-xl object-cover block bg-white'
            src={item.thumbnail} 
            alt={item.title} />
            <div>
              <strong>{item.title}</strong> - $ {item.price}
            </div>
            <div>
              <button className='bg-blue-950  border-2 border-black px-2 py-2 rounded-lg mb-2 hover:bg-white hover:text-black' >
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
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
