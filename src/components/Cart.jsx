import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import emptycart from '../assets/12.png'

const Cart = () => {

  const { cartItems, totalPrice } = useContext(CartContext)

  return (
    <div>
      <div className='px-5 sm:px-16 py-16'>
        <div className='flex uppercase text-left font-semibold text-sm cursor-pointer'>
          <span className='text-gray-500'>Home /</span>
          <span> Shopping</span>
        </div>
        <div className='grid py-10 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-x-5 text-center justify-center'>
          <div className='col-span-2'>
            {
              cartItems.length === 0
                ? <div className='text-center'>
                  <div className='w-full max-w-max' >                  
                    <img src={emptycart} alt=''  className='max-h-[600px] w-auto'/>
                  </div>
                  <p className='text-gray-500 text-center'>Your cart is empty</p>
                </div>
                : cartItems.map((item) => (
                  <CartItem key={item.id} cartItemInfo={item} />
                ))
            }
          </div>
          <div className=''>
            <div className={`${cartItems.length === 0 && 'hidden'} border-2   shadow-lg rounded-md bg-white text-gray-700 min-h-[120px] overflow-hidden p-10`}>
              <h1 className='border-b pb-4 text-[#024E82] sm:text-3xl text-xl font-bold text-left justify-start top-0'>Cart Summary</h1>
              <div className='flex justify-between pt-4'>
                <span className='text-black'>Total Price :</span>
                <span className='text-[#024E82] sm:text-2xl text-lg'>{totalPrice.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='text-left'>
          <Link
            to="/billingdetails"
          >
            <button className={`${cartItems.length === 0 && 'hidden'} bg-[#024E82] text-sm uppercase sm:px-8 py-3 px-5 text-white hover:bg-[#025382]/90 border-2 hover:text-white transition`}>
              PROCEED TO CHECKOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart