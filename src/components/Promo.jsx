import React from 'react'

function Promo() {
  return (
    <div className='px-16'>
      <div className='flex flex-col justify-between'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10'>
          <div className='bg-black text-gray-700 w-auto min-h-[300px] overflow-hidden p-20 max-sm:p-14 '>
            <span className='uppercase text-white text-xl font-semibold'>peace of mind</span>
            <p className='text-sm text-white p-7 max-sm:p-1'>A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.</p>
            <button className='text-xs text-[#024E82] uppercase py-2 px-5 bg-white hover:bg-black border-2 border-white hover:text-white transition'>
              Buy now
            </button>
          </div>
          <div className='bg-black text-gray-700 min-h-[300px] overflow-hidden p-20 max-sm:p-14'>
            <span className='uppercase text-white text-xl font-semibold'>BUY 2 GET 1 FREE</span>
            <p className='text-sm text-white p-7 max-sm:p-1'>End of season sale. Buy any 2 items of your choice and get 1 free.</p>
            <button className='text-xs text-[#024E82] uppercase py-2 px-5 bg-white hover:bg-black border-2 border-white hover:text-white transition'>
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo