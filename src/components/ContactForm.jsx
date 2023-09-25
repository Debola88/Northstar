import React from 'react'

function ContactForm() {
    return (
        <div>
            <div className="px-16 py-32">
                <div className='flex flex-col min-[900px]:flex-row gap-10 justify-between'>
                    <div className='text-left basis-[62%] overflow-hidden text-[#555555]'>
                        <h2 className='lg:text-4xl text-[#3A3939] font-bold md:text-3xl sm:text-3xl'>We would love to hear from you.</h2>
                        <h3 className='py-8'>If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.</h3>
                        <div className="flex flex-col justify-between">
                            <form className='w-full space-y-4'>
                                <div className='flex flex-col min-[1024px]:flex-row'>
                                    <div className='py-4'>
                                        <label className=''>Name</label>
                                        <input type="text" className='text-left px-24 py-3 max-[1024px]:w-full outline-none' />
                                    </div>
                                    <div className='py-4'>
                                        <label className=''>Email</label>
                                        <input type="email" className='text-left px-24 py-3 max-[1024px]:w-full outline-none' />
                                    </div>
                                </div>
                                <div className='left-0'>
                                    <label className='pr-4'>Message</label>
                                    <textarea className='text-left w-full py-10 outline-none'/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='justify-between items-center overflow-hidden text-[#555555]'>
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
                <div className='text-left py-10'>
                    <button className='text-xs bg-[#024E82] uppercase py-3 px-6 text-white hover:bg-[#025382]/90 border-2 hover:text-white transition'>
                        Send message
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm