import React, { useState, useContext } from 'react'
import Selector from './Selector'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { IoIosRemove } from 'react-icons/io'
import { IoIosAdd } from 'react-icons/io'
import { useLocation } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'


const Product = () => {

    const location = useLocation();
    
    const productInfo = location.state

    const { name, image, description, price, discount, id,  } = productInfo

    const [count, setCount] = useState(1)

    const {addItemToCart} = useContext(CartContext)

    const handleAddToCart = (product) => addItemToCart(product)

    const [sizes, setSizes] = useState(
        [{
          code: 'Small',
          spec: 'S'
        },
        {
          code: 'Medium',
          spec: 'M'
        },
        {
          code: 'Large',
          spec: 'L'
        },
        {
          code: 'ExtraLarge',
          spec: 'XL'
        }
      ])
    
    const [specificSize, setSpecificSize] = useState('') 

    return (
        <div>
            <div className='px-5 sm:px-16 py-16 w-full'>
                <div className='flex flex-col justify-between'>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8'>
                        <div>
                            <div className='min-h-[200px] overflow-hidden'>
                                <img src={image} alt='' className='w-auto lg:h-[650px]' />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-left text-black font-semibold text-5xl max-md:text-3xl py-4'>Plain White Shirt</h2>
                            <span className='py-2 flex items-center mt-1 gap-1 text-yellow-500'>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                                <BsStar />
                                <span className='text-xs ml-2 text-gray-500'>
                                    (15)
                                </span>
                            </span>
                            <div className='py-2 flex items-center gap-4 mt-1 text-xl max-md:xl' >
                                <span className='line-through text-gray-400'>
                                    {price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}
                                </span>
                                <span className=' text-[#024E82]'>
                                    {(price - (price * (discount / 100))).toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}
                                </span>
                            </div>
                            <p className='text-gray-600 text-left text-lg font-semibold py-4'>{description}</p>
                            <div className='text-left py-3'>
                                <Selector 
                                    sizes={sizes} 
                                    setSpecificSize={setSpecificSize}
                                />
                            </div>
                            <div className='flex gap-10 max-sm:mt-4'>
                                <span
                                    className='border cursor-pointer rounded-md text-[#024E82] hover:bg-[#024E82] hover:text-white transition p-1 sm:text-2xl text-xl'
                                    onClick={() => (setCount(count + 1))} >
                                    <IoIosAdd />
                                </span>
                                <span className='justify-center items-center text-center'>{count}</span>
                                <span
                                    className={`${count === 1 ? 'pointer-events-none':''} 'text cursor-pointer border rounded-md text-[#024E82] hover:bg-[#024E82] hover:text-white transition p-1 sm:text-2xl text-xl'`}
                                    onClick={() => (setCount(count - 1))} >
                                    <IoIosRemove/>
                                </span>
                            </div>
                            <div className='text-left left-0 py-4'>
                                <button 
                                    className='bg-[#024E82] uppercase py-3 px-6 text-white hover:bg-[#025382]/90 border-2 hover:text-white transition'
                                    onClick={() => handleAddToCart({...productInfo, quantity: count, size: specificSize})}
                                >
                                    ADD TO CART
                                </button>
                            </div>
                            <div className='text-left text-gray-600 font-semibold'>
                                <p className='pt-2'><span className='text-black'>Category:</span> Women, Polo, Casual</p>
                                <p className='pt-2'><span className='text-black'>Tags:</span> Modern, Design, Cotton</p>
                            </div>
                            <div className='flex flex-col items-left pt-5'>
                                <div className='grid gap-3 grid-cols-5 overflow-hidden text-left w-52'>
                                    <div className='h-8 w-8 rounded-full bg-gray-300'>
                                    </div>
                                    <div className='h-8 w-8 rounded-full bg-gray-300'>
                                    </div>
                                    <div className='h-8 w-8 rounded-full overflow-hidden bg-gray-300'>
                                    </div>
                                    <div className='h-8 w-8 rounded-full overflow-hidden bg-gray-300'>
                                    </div>
                                    <div className='h-8 w-8 rounded-full px-2 py-[0.45rem] overflow-hidden bg-gray-300 cursor-pointer'>
                                        <span className='justify-center text-center items-center'><MdOutlineEmail /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-16'>
                    <div className='flex'>
                        <span className='text-sm font-semibold text-black border-t-2 border-l-2 border-r text-center p-4'>Description</span>
                        <span className='text-sm font-semibold text-gray-500 bg-slate-200 border-t-2 border-r-2 border-l text-center p-4'>Review(0)</span>
                    </div>
                    <div className='text-left text-sm text-gray-500 border-2'>
                        <p className='p-10'>A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. <br /><br />
                            Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a
                            Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are.[28] Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience. </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Product