import React from 'react'
import box from '../assets/headphone.jpg'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'

function BestSelling() {
    return (
        <div className='px-16 py-6'>
            <h1 className='text-center text-3xl font-bold text-black'>Top Sellers</h1>
            <p className='pb-16'>Browse our top-selling products</p>
            <div className='flex flex-col items-center justify-center'>
                <div className='grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                    <div className=''>
                        <div className='bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden'>
                            <img src={box} alt='' className='w-full h-full object-cover' />
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
                                        <span className='text-sm line-through opacity-50'>
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
                    <div className=''>
                        <div className='bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden'>
                            <img src={box} alt='' className='w-full h-full object-cover' />
                            <div className='p-5 flex-col flex gap-3'>
                                <div className='flex items-center gap-2'>
                                    <span className='px-3 py-3 rounded-full text-xs bg-gray-100 '>stock ready</span>
                                    <span className='px-3 py-3 rounded-full text-xs bg-gray-100 '>official store</span>
                                </div>
                                <h2 className="text-left font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap" title='Plain white shirt'>
                                    Plain white shirt
                                </h2>
                                <div>
                                    <span className='text-lg font-bold'>
                                        <h3 className='text-left'>$29.00</h3>
                                    </span>
                                    <div className='flex items-center gap-2 mt-1' >
                                        <span className='text-sm line-through opacity-50'>
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
                    <div className=''>
                        <div className='bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden'>
                            <img src={box} alt='' className='w-full h-full object-cover' />
                            <div className='p-5 flex-col flex gap-3'>
                                <div className='flex items-center gap-2'>
                                    <span className='px-3 py-3 rounded-full text-xs bg-gray-100 '>stock ready</span>
                                    <span className='px-3 py-3 rounded-full text-xs bg-gray-100 '>official store</span>
                                </div>
                                <h2 className="text-left font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap" title='Plain white shirt'>
                                    Plain white shirt
                                </h2>
                                <div>
                                    <span className='text-lg font-bold'>
                                        <h3 className='text-left'>$29.00</h3>
                                    </span>
                                    <div className='flex items-center gap-2 mt-1' >
                                        <span className='text-sm line-through opacity-50'>
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
                    <div className=''>
                        <div className='bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden'>
                            <img src={box} alt='' className='w-full h-full object-cover' />
                            <div className='p-5 flex-col flex gap-3'>
                                <div className='flex items-center gap-2'>
                                    <span className='px-3 py-3 rounded-full text-xs bg-gray-100 '>stock ready</span>
                                    <span className='px-3 py-3 rounded-full text-xs bg-gray-100 '>official store</span>
                                </div>
                                <h2 className="text-left font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap" title='Plain white shirt'>
                                    Plain white shirt
                                </h2>
                                <div>
                                    <span className='text-lg font-bold'>
                                        <h3 className='text-left'>$29.00</h3>
                                    </span>
                                    <div className='flex items-center gap-2 mt-1' >
                                        <span className='text-sm line-through opacity-50'>
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
                </div>
            </div>
            <div className='p-20'>
                <button className='text-xs text-white bg-[#024E82] uppercase py-2 px-5 hover:bg-[#024f82ef] border-2 border-[#024E82] hover:text-white transition'>shop now</button>
            </div>
        </div>
    )
}

export default BestSelling