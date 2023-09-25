import React from 'react'
import hero from '../assets/hero.jpg'


const MiniNavBar = props => {
    return (
        <div>
            <div className='w-full h-[50hv]'>
                <img className='top-0 left-0 w-full h-[300px] object-cover' src={hero} alt="" />
                <div className='absolute top-0 w-full h-full flex flex-col text-left justify-center text-white '>
                    <div className='px-16 pb-10 max-w-[1100px] m-auto absolute'>
                        <h1 className='text-3xl md:text-5xl uppercase'>{props.title}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniNavBar