import React from 'react'

const MiniNavBar = props => {
    return (
        <div>
            <div className="w-full h-[50hv] bg-hero-image bg-cover pt-24">
                <div className='mt-24 text-center text-white'>
                    <div className=' max-w-max mr-auto ml-[10%] pb-20'>
                        <h1 className='text-3xl font-semibold md:text-5xl uppercase'>{props.title}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniNavBar