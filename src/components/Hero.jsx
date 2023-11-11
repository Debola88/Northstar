import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('products');
    }

    return (
        <div className="w-full min-h-screen bg-hero-image bg-cover">
            <div className='min-h-screen pt-32 text-center text-white'>
                <div className=' max-w-max ml-auto mr-[10%]'>
                    <h1 className='font-bold text-4xl md:text-6xl'>STYLIST PICK BEAT</h1>
                    <h1 className='font-bold text-4xl pb-10 md:text-6xl'>THE HEAT</h1>
                    <button className='bg-transparent hover:bg-white text-white font-semibold hover:text-slate-600 py-2 px-4 border-2 border-white hover:border-transparent transition' onClick={handleNavigate}>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Hero