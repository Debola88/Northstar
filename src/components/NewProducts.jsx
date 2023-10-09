import React from 'react'

import ProductCard from './ProductCard'


function NewProducts() {
  return (
    <div className='px-16 py-6'>
      <h1 className='text-center text-3xl font-bold text-black'>Disover NEW Arrivals</h1>
      <p className='pb-16'>Recently added shirts!</p>  
      <div className='grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default NewProducts