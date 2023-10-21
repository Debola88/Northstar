import React from 'react'

function ContactForm() {
    return (
        <div>
            <div className="px-5 sm:px-16 py-32">
                <div className='flex flex-col min-[900px]:flex-row gap-10 justify-between'>
                    <div className='text-left basis-[62%] overflow-hidden text-[#555555]'>
                        <h2 className='lg:text-4xl text-[#3A3939] font-bold md:text-3xl sm:text-3xl'>We would love to hear from you.</h2>
                        <h3 className='py-8'>If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.</h3>
                        <div className=" ">
                            <form className='w-full space-y-4'>
                                <div className='flex flex-col min-[1024px]:flex-row gap-x-10 w-full'>
                                    <div className='py-2 w-full'>
                                        <input type="text" className='py-3 pl-2 w-full outline-none' placeholder='Name' required/>
                                    </div>
                                    <div className='py-2 w-full'>
                                        <input type="email" className='py-3 w-full pl-2 outline-none' placeholder='Email' required/>
                                    </div>
                                </div>
                                <div className='left-0'>
                                    <label className='pr-4'>Message</label>
                                    <textarea className='text-left w-full h-40 outline-none p-2' required/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='justify-between items-center overflow-hidden text-[#555555]'>
                        <div className='text-left'>
                            <h2 className='text-2xl font-bold text-black'>Visit Us</h2>
                            <p className='text-xs py-4'>GRA ikeja, Lagos, Nigeria<br /> Phone: +2349049440746</p>
                        </div>
                        <div className='py-10 text-left'>
                            <h2 className='text-2xl font-bold text-black'>Get In Touch</h2>
                            <p className='text-xs py-4'>You can get in touch with us on this provided email.
                                <br /><span className="pt-8">Email: adebolabadejo11@gmail.com</span></p>
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