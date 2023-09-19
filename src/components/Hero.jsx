import React from 'react'
import hero from '../assets/hero.jpg'

const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <img className='top-0 left-0 w-full h-screen object-cover' src={hero} alt="" />
            <div className='absolute top-0 w-full h-full flex flex-col text-center justify-center text-white '>
                <div className='md:right-[10%] right-[10%] max-w-[1100px] m-auto absolute'>
                    <h1 className='font-bold text-4xl md:text-6xl'>STYLIST PICK BEAT</h1>
                    <h1 className='font-bold text-4xl pb-10 md:text-6xl'>THE HEAT</h1>
                    <button className='bg-transparent hover:bg-white text-white font-semibold hover:text-slate-600 py-2 px-4 border-2 border-white hover:border-transparent transition'>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Hero