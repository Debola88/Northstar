import React from 'react'
import ProductCard from './ProductCard'
import { CartContext } from '../contexts/CartContext'
import { useContext } from 'react'

const Products = () => {

    const { shopProducts } = useContext(CartContext)

    return (
        <div className='px-5 sm:px-16 py-6 pt-10 pb-20'>
            <h1 className='text-center text-3xl font-bold text-black'>Quality <span className='text-[#024E82]'>PICKS</span> For You</h1>
            <p className='pb-16'>Shop all you want!</p>
            <div className='grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                {
                    shopProducts.map((product) => (<ProductCard key={product.id} productInfo={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products