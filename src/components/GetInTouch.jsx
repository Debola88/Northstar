import React from 'react'

function GetInTouch() {
    return (
        <div className="px-5 sm:px-16 py-32">
            <div className='flex flex-col justify-between'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-32'>
                    <div className='text-center justify-center text-[#3A3939]  overflow-hidden'>
                        <h2 className='lg:text-3xl font-bold md:text-2xl pt-16'>Message sent. We'll contact you soon.</h2>
                    </div>
                    <div className='justify-center items-left overflow-hidden text-[#555555]'>
                        <div className='text-left'>
                            <h2 className='text-2xl font-bold text-black'>Visit Us</h2>
                            <p className='text-xs py-4'>UET Lahore, Punjab, Pakistan<br /> Phone: +923039898987</p>
                        </div>
                        <div className='py-10 text-left'>
                            <h2 className='text-2xl font-bold text-black'>Get In Touch</h2>
                            <p className='text-xs py-4'>You can get in touch with us on this provided email.
                                <br /><span className="pt-8">Email: hmjawad087@gmail.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-left py-10'>
                <button className='text-xs bg-[#024E82] uppercase py-3 px-6 text-white hover:bg-[#025382]/90 border-2 hover:text-white transition'>
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default GetInTouch