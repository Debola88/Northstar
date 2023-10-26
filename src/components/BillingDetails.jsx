import React from 'react'


function BillingDetails() {
    return (
        <div>
            <div className='px-5 sm:px-16 py-20'>
                <div className='flex uppercase text-left font-semibold text-sm cursor-pointer'>
                    <span className='text-gray-500'>Home /</span>
                    <span> CHECKOUT</span>
                </div>
                <h1 className='text-left sm:text-4xl text-xl text-black font-bold py-10'>Billing Details</h1>
                <div className='py-6 overflow-hidden'>
                    <form className='space-y-4 overflow-hidden justify-start'>
                        <div className='text-left flex flex-col'>
                            <label className=''>Full Name</label>
                            <input type="text" className='text-left w-[500px] p-2 h-10 outline-none' />
                        </div>
                        <div className='text-left flex flex-col'>
                            <label className=''>Street address</label>
                            <input type="text" className='text-left w-[500px] p-2 h-10 outline-none' placeholder='House number and street name'/>
                        </div>
                        <div className='text-left flex flex-col'>
                            <label className=''>Town / City</label>
                            <input type="text" className='text-left w-[500px] p-2 h-10 outline-none' />
                        </div>
                        <div className='text-left flex flex-col'>
                            <label className=''>Phone</label>
                            <input type="tel" className='text-left w-[500px] p-2 h-10 outline-none' />
                        </div>
                        <div className='text-left flex flex-col'>
                            <label className=''>Email address</label>
                            <input type="email" className='text-left w-[500px] p-2 h-10 outline-none' />
                        </div>
                    </form>
                </div>
                <div className=''>
                    <div className='shadow-lg rounded-md bg-white text-gray-700 min-h-[200px] overflow-hidden p-10'>
                        <h1 className='border-b pb-4 text-[#024E82] sm:text-3xl text-xl font-bold text-left justify-start top-0'>Your Order</h1>
                        <div className='flex justify-between pt-4 font-semibold'>
                            <span className='text-black sm:text-xl text-base'>Product</span>
                            <span className='text-black sm:text-xl text-base'>Total</span>
                        </div>
                        <div>
                            <div className='flex justify-between pt-4 text-gray-500'>
                                <span className=''>Plain White Shirt</span>
                                <span className=''>$59.00</span>
                            </div>
                        </div>
                        <div className='flex justify-between pt-4 text-gray-500'>
                            <span className=''>Subtotal</span>
                            <span className=''>$59.00</span>
                        </div>
                        <div className='flex justify-between pt-4'>
                            <span className='text-black'></span>
                            <span className='text-[#024E82] sm:text-2xl text-lg'>$59.00</span>
                        </div>
                    </div>
                </div>
                <div className='mt-10 text-left text-sm border border-gray-300 text-gray-500 bg-slate-200'>
                    <p className='p-5'>Cash on delivery. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                </div>
                <div className='sm:text-right sm:right-0 text-left left-0 py-4'>
                    <button className='bg-[#024E82] text-sm uppercase py-3 px-6 text-white hover:bg-[#025382]/90 border-2 hover:text-white transition'>
                        PLACE ORDER
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BillingDetails