import React from 'react'
import { FaTruckFast } from "react-icons/fa6"
import { FaFingerprint } from 'react-icons/fa'
import { FaLifeRing } from 'react-icons/fa'
import { FaArrowRotateLeft } from 'react-icons/fa6'

function Benefit() {
    return (
        <div>
            <div className='flex flex-col items-center justify-center px-16 py-16'>
                <div className='grid gap-28 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                    <div className='flex gap-6'>
                        <span className='text-2xl text-[#024E82]'><FaTruckFast /></span>
                        <div className='text-left'>
                            <span className='text-sm font-bold uppercase text-black'>free shipping</span>
                            <p className='text-sm text-gray-700 pt-3'>Enjoy free shipping on all <br />orders above $100</p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <span className='text-2xl text-[#024E82]'><FaLifeRing /></span>
                        <div className='text-left'>
                            <span className='text-sm font-bold uppercase text-black'>free shipping</span>
                            <p className='text-sm text-gray-700 pt-3'>Our support team is there<br /> to help you for your quaries</p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <span className='text-2xl text-[#024E82]'><FaArrowRotateLeft /></span>
                        <div className='text-left'>
                            <span className='text-sm font-bold uppercase text-black'>free shipping</span>
                            <p className='text-sm text-gray-700 pt-3'>Simply return it within 30<br /> days of an exchange</p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <span className='text-2xl text-[#024E82]'><FaFingerprint /></span>
                        <div className='text-left'>
                            <span className='text-sm font-bold uppercase text-black'>free shipping</span>
                            <p className='text-sm text-gray-700 pt-3'>Our payments are secured<br /> with 256 bit encryption</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit