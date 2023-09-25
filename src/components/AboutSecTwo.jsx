import React from 'react'
import unsplash from '../assets/unsplash.png'

function AboutSecTwo() {
    return (
        <div className='px-10 sm:px-16 py-16 w-full'>
            <div className='flex flex-col justify-between'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                    <div className='min-h-[400px] w-auto overflow-hidden'>
                        <div className='group h-fit'>
                            <div className='relative overflow-hidden'>
                                <img src={unsplash} alt='' />
                                <div className='absolute w-full flex item-center justify-center bottom-5'>
                                    <button className='text-lg font-semibold text-[#024E82] uppercase py-2 px-6 bg-white hover:bg-black border-2 border-white hover:text-white rounded-full transition'>
                                        Buy now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='min-h-[400px] overflow-hidden'>
                        <div className='group h-fit'>
                            <div className='relative overflow-hidden'>
                                <img src={unsplash} alt='' />
                                <div className='absolute w-full flex item-center justify-center bottom-5'>
                                    <button className='text-lg font-semibold text-[#024E82] uppercase py-2 px-6 bg-white hover:bg-black border-2 border-white hover:text-white rounded-full transition'>
                                        Buy now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSecTwo