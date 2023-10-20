import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

function Selector() {

  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(!isOpen)


  return (
    <div className=''>
      <div className='relative flex flex-col items-center w-[220px] '>
        <button onClick={() => setIsOpen((prev) => !prev)} className="bg-gray-200 p-4 w-full flex items-center justify-between font-semibold text-lg tracking-wider border-4 active:border-white duration-300 active:text-white">Select Size
          {!isOpen ? (
            <MdOutlineKeyboardArrowDown className="h-6 w-auto" />
          ) : (
            <MdOutlineKeyboardArrowUp className="h-6 w-auto" />
          )}
        </button>

        {isOpen && (
          <div className='bg-gray-200 absolute top-[4.4rem] flex flex-col items-start w-full'>
            <div className='w-full'>
              <div className='border-b-2 border-slate-100 hover:bg-gray-300 cursor-pointer'><h3 className='flex justify-between p-4 ' onClick={handleClose}><span>Small</span><span>S</span></h3></div>
              <div className='border-b-2 border-slate-100 hover:bg-gray-300 cursor-pointer'><h3 className='flex justify-between p-4 ' onClick={handleClose}><span>Medium</span><span>M</span></h3></div>
              <div className='border-b-2 border-slate-100 hover:bg-gray-300 cursor-pointer'><h3 className='flex justify-between p-4 ' onClick={handleClose}><span>Large</span><span>L</span></h3></div>
              <div className='border-b-2 border-slate-100 hover:bg-gray-300 cursor-pointer'><h3 className='flex justify-between p-4 ' onClick={handleClose}><span>ExtraLarge</span><span>XL</span></h3></div>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}
export default Selector