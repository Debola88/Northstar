import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function AboutSecTwo() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className='px-5 sm:px-16 py-16 w-full'>
            <div className='flex flex-col justify-between'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 w-full'>
                    <div className='bg-buy-now bg-cover text-gray-700 w-auto min-h-[500px] h-fit overflow-hidden flex items-end justify-center pb-10' data-aos="fade-up">
                        <button className='text-lg font-semibold text-[#024E82] uppercase py-2 px-6 bg-white hover:bg-black border-2 border-white hover:text-white rounded-full transition'>
                            Buy now
                        </button>
                    </div>
                    <div className='bg-buy-later bg-cover text-gray-700 w-auto min-h-[500px] h-fit overflow-hidden flex items-end justify-center pb-10' data-aos="fade-up">
                        <button className='text-lg font-semibold text-[#024E82] uppercase py-2 px-6 bg-white hover:bg-black border-2 border-white hover:text-white rounded-full transition'>
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSecTwo