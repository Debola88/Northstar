import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

const Selector = ({sizes, setSpecificSize}) => {

  const [isOpen, setIsOpen] = useState(false)
  const handleClose = (selectedSize) =>  {
    setSpecificSize(selectedSize)
    setIsOpen(!isOpen)
  }

  return (
      <div className='relative flex flex-col items-center w-[220px] max-sm:w-[200px]'>
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
              {
                sizes.map((size)=> <div key={size.spec} className='border-b-2 border-slate-100 hover:bg-gray-300 cursor-pointer'><h3 className='flex justify-between p-4 ' onClick={() => handleClose(size.code)}><span>{size.code}</span><span>{size.spec}</span></h3></div>
                )
              }
            </div>
          </div>
        )}
      </div>
  )
}
export default Selector