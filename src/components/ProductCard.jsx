import React from 'react'
import Box from '../assets/headphone.jpg'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'
function ProductCard () {
  return (
    <div className=''>
    <div className='bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden'>
      <img src={Box} alt='' className='w-full h-full object-cover' />
      <div className='p-5 flex-col flex gap-3'>
        <div className='flex items-center gap-2'>
          <span className='px-3 py-3 rounded-full text-xs bg-gray-100 '>stock ready</span>
          <span className='px-3 py-3 rounded-full text-xs bg-gray-100 '>official store</span>
        </div>
        <h2 className="text-left font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap text-black" title='Plain white shirt'>
          Plain white shirt
        </h2>
        <div>
          <span className='text-lg font-bold'>
            <h3 className='text-left'>$29.00</h3>
          </span>
          <div className='flex items-center gap-2 mt-1' >
            <span className='text-sm text-slate-400 line-through'>
              $49.00
            </span>
            <span className='bg-green-500 px-1.5 py-0.5 rounded-md text-xs text-white uppercase font-bold'>
              save 30%
            </span>
          </div>
        </div>
        <span className='flex items-center mt-1 gap-1 text-yellow-500'>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
          <span className='text-xs ml-2 text-gray-500'>
            20k reviews
          </span>
        </span>
      </div>
    </div>
  </div>
  )
}

export default ProductCard
