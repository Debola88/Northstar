import React, { useContext } from 'react'


import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';



const Cart = () => {

  const { cartItems, totalPrice, totalQuantity } = useContext(CartContext)

  return (
    <div>
      <div className='px-10 sm:px-16 py-20'>
        <div className='flex uppercase text-left font-semibold text-sm cursor-pointer'>
          <span className='text-gray-500'>Home /</span>
          <span> Shopping</span>
        </div>
        <div className='flex flex-col py-16'>
          <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-x-10 text-center justify-center'>
            <div className='col-span-2'>
              {
                cartItems.length === 0 
                ? <p className='text-gray-500'>Your cart is empty</p> 
                : cartItems.map((item) => (
                  <CartItem  cartItemInfo={item}/>
                ))
              }
            </div>
            <div className=''>
              <div className='shadow-lg rounded-md bg-white text-gray-700 min-h-[120px] overflow-hidden p-10'>
                <h1 className='border-b pb-4 text-[#024E82] sm:text-3xl text-xl font-bold text-left justify-start top-0'>Cart Summary</h1>
                <div className='flex justify-between pt-4'>
                  <span className='text-black'>Total Price :</span>
                  <span className='text-[#024E82] sm:text-2xl text-lg'>{totalPrice.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-left'>
          <button className='bg-[#024E82] text-sm uppercase sm:px-8 py-3 px-5 text-white hover:bg-[#025382]/90 border-2 hover:text-white transition'>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart