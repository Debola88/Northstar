import React from 'react'
import box from '../assets/headphone.jpg'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'
import ProductCard from './ProductCard'

function BestSelling() {
    return (
        <div className='px-16 py-6'>
            <h1 className='text-center text-3xl font-bold text-black'>Top Sellers</h1>
            <p className='pb-16'>Browse our top-selling products</p>
            <div className='flex flex-col items-center justify-center'>
                <div className='grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
            <div className='p-20'>
                <button className='text-xs text-white bg-[#024E82] uppercase py-2 px-5 hover:bg-[#024f82ef] border-2 border-[#024E82] hover:text-white transition'>shop now</button>
            </div>
        </div>
    )
}

export default BestSelling