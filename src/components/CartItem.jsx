import React from 'react'
import { IoClose } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import { IoIosRemove } from "react-icons/io";
const CartItem = ({ cartItemInfo }) => {

  const { image, name, price, quantity } = cartItemInfo;
  
  return (
    <div className='flex shadow-lg mb-10 p-5 rounded-md text-gray-700 w-auto min-h-[160px]'>
      <div className='sm:min-h-[5rem] md:min-h-[6rem] lg:min-h-[7rem] h-20 w-auto text-left'>
        <img src={image} alt='' className='w-auto h-full object-cover' />
      </div>
      <div className=' w-full ml-2'>
        <div className='flex justify-between items-start'>
          <h2 className='text-black font-semibold text-xl md:text-2xl sm:text-base'>{name}</h2>
          <div className='flex'>
            <span className='border cursor-pointer rounded-md text-[#024E82] hover:bg-[#024E82] hover:text-white transition p-1 sm:text-2xl text-xl'><IoClose /></span>
          </div>

        </div>
        <div className='sm:flex-none lg:flex md:flex justify-between  sm:mt-12 ml-2'>
          <div className='sm:flex flex-none text-left'>
            <span className='text-base font-semibold text-black mr-4'>Qty : <span className=''>{quantity}</span></span>
            <span className='text-base font-semibold text-black'>Price : <span className=''>{(price * quantity).toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span></span>
          </div>
          <div className='flex gap-10 max-sm:mt-4'>
            <span className='border cursor-pointer rounded-md text-[#024E82] hover:bg-[#024E82] hover:text-white transition p-1 sm:text-2xl text-xl'><HiPlus /></span>
            <span className='border cursor-pointer rounded-md text-[#024E82] hover:bg-[#024E82] hover:text-white transition p-1 sm:text-2xl text-xl'><IoIosRemove /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem