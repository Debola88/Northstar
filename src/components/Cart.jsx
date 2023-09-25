import React from 'react'
import NavBar from './NavBar'
import image from '../assets/img_1.png'
import { IoClose } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import { IoIosRemove } from "react-icons/io";
import Footer from './Footer'


function Cart() {
  return (
    <div>
      <NavBar />
      <div className='px-10 sm:px-16 py-20'>
        <div className='flex uppercase text-left font-semibold text-sm cursor-pointer'>
          <span className='text-gray-500'>Home /</span>
          <span> Shopping</span>
        </div>
        <div className='flex flex-col py-16'>
          <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 max-w-[1240px] gap-x-10 text-center justify-center'>
            <div className='col-span-2'>
              <div className='flex shadow-lg mb-10 p-5 rounded-md bg-white text-gray-700 w-auto min-h-[160px]'>
                <div className='sm:min-h-[5rem] md:min-h-[6rem] lg:min-h-[7rem] h-20 w-auto text-left'>
                  <img src={image} alt='' className='w-auto h-full object-cover' />
                </div>
                <div className=' w-full ml-2'>
                  <div className='flex justify-between items-start'>
                    <h2 className='text-black font-semibold text-xl md:text-2xl sm:text-base'>Plain White Shirt</h2>
                    <div className='flex'>
                      <span className='border cursor-pointer rounded-md text-[#024E82] hover:bg-[#024E82] hover:text-white transition p-1 sm:text-2xl text-xl'><IoClose /></span>
                    </div>

                  </div>
                  <div className='sm:flex-none lg:flex md:flex justify-between  sm:mt-12 ml-2'>
                    <div className='sm:flex flex-none text-left'>
                      <span className='text-base font-semibold text-black mr-4'>Qty : <span className=''>1</span></span>
                      <span className='text-base font-semibold text-black'>Price : <span className=''>$59.00</span></span>
                    </div>
                    <div className='flex gap-10 max-sm:mt-4'>
                      <span className='border cursor-pointer rounded-md text-[#024E82] hover:bg-[#024E82] hover:text-white transition p-1 sm:text-2xl text-xl'><HiPlus /></span>
                      <span className='border cursor-pointer rounded-md text-[#024E82] hover:bg-[#024E82] hover:text-white transition p-1 sm:text-2xl text-xl'><IoIosRemove /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='shadow-lg rounded-md bg-white text-gray-700 min-h-[120px] overflow-hidden p-10'>
                <h1 className='border-b pb-4 text-[#024E82] sm:text-3xl text-xl font-bold text-left justify-start top-0'>Cart Summary</h1>
                <div className='flex justify-between pt-4'>
                  <span className='text-black'>Total Price :</span>
                  <span className='text-[#024E82] sm:text-2xl text-lg'>$59.00</span>
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
      <Footer />
    </div>
  )
}

export default Cart