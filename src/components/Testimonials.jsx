import React from 'react'
import one from '../assets/circle1.png'
import two from '../assets/circle2.png'
import three from '../assets/circle3.png'
import { RiDoubleQuotesL } from "react-icons/ri";

function Testimonials() {
    return (
        <div className='px-16 max-sm:px-5 py-10 bg-white'>
            <h1 className='text-4xl font-bold text-black'>Testimonials</h1>
            <div className='p-16'>
                <div className='flex flex-col  sm:flex-row gap-x-10 items-center justify-center mx-auto pb-20'>
                    <div className='min-h-40 overflow-hidden block'>
                        <img src={one} alt='' className='w-full h-full rounded-full object-cover object-[59%_-4px]' />
                    </div>
                    <div className='py-5 font-bold text-left'>
                        <span className='text-black text-5xl max-sm:text-2xl'><RiDoubleQuotesL /></span>
                        <p className='text-lg text-gray-600 max-sm:text-sm'>Once we ordered some accessories items and we got the <br />products delivered in our doorstep,
                            the customer support<br /> was super helpful and they answered all my queries.</p>
                        <div className='pt-6 text-black font-bold text-lg'>Stacy</div>
                    </div>
                </div>
                <div className='flex flex-col  sm:flex-row gap-x-10 items-center justify-center mx-auto pb-20'>
                    <div className='min-h-40 overflow-hidden block'>
                        <img src={two} alt='' className='w-full h-full rounded-full object-cover object-[59%_-4px]' />
                    </div>
                    <div className='py-5 font-bold text-left'>
                        <span className='text-black text-5xl max-sm:text-2xl'><RiDoubleQuotesL /></span>
                        <p className='text-lg text-gray-600 max-sm:text-sm'>Once we ordered some accessories items and we got the <br />products delivered in our doorstep,
                            the customer support<br /> was super helpful and they answered all my queries.</p>
                        <div className='pt-6 text-black font-bold text-lg'>Kelly</div>
                    </div>
                </div>
                <div className='flex flex-col  sm:flex-row gap-x-10 items-center justify-center mx-auto pb-20'>
                    <div className='min-h-40 overflow-hidden block'>
                        <img src={three} alt='' className='w-full h-full rounded-full object-cover object-[59%_-4px]' />
                    </div>
                    <div className='py-5 font-bold text-left'>
                        <span className='text-black text-5xl max-sm:text-2xl'><RiDoubleQuotesL /></span>
                        <p className='text-lg text-gray-600 max-sm:text-sm'>Once we ordered some accessories items and we got the <br />products delivered in our doorstep,
                            the customer support<br /> was super helpful and they answered all my queries.</p>
                        <div className='pt-6 text-black font-bold text-lg'>Chase</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials