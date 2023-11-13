import React from 'react'
import ProductCard from './ProductCard'
import { CartContext } from '../contexts/CartContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function BestSelling() {

    const { shopProducts} = useContext(CartContext)
    const navigate = useNavigate()

    const handleNavigate = () => {
            navigate('products'); 
    }

    return (
        <div className='px-5 sm:px-16 py-6'>
            <h1 className='text-center text-3xl font-bold text-black'>Top Sellers</h1>
            <p className='pb-16'>Browse our top-selling products</p>
            <div className='grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                {
                    shopProducts.slice(8, 12).map((product) => (<ProductCard key={product.id} productInfo={product} />))
                }
            </div>
            <div className='p-20'>
                <button className='text-xs text-white bg-[#024E82] uppercase py-2 px-5 hover:bg-[#024f82ef] border-2 border-[#024E82] hover:text-white transition' onClick={handleNavigate}>shop now</button>
            </div>
        </div>
    )
}

export default BestSelling