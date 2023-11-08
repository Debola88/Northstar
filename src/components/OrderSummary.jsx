import React from 'react'
import { useNavigate } from 'react-router-dom'
import orderconfirmed from '../assets/23.png'


const OrderSummary = () => {

    const navigate = useNavigate()

    return (
        <div className='px-5 sm:px-16 pb-6 flex max-sm:flex-col items-center'>
            <div className='w-full max-w-max'>
                <img src={orderconfirmed} alt='' className='max-h-[700px] w-auto' />
            </div>
            <div className='text-left'>
                <p className='text-3xl font-bold py-5'>Order confirmed!</p>
                <button className='text-sm bg-[#024E82] uppercase py-3 px-7 text-white hover:bg-[#025382]/90 hover:text-white transition' onClick={() => navigate(-3)}>Go back</button>
            </div>
        </div>
    )
}

export default OrderSummary