import React from 'react'
import Hero from '../components/Hero';
import NewProducts from '../components/NewProducts';
import Benefit from '../components/Benefit';
import Promo from '../components/Promo';
import BestSelling from '../components/BestSelling';

function HomePage() {
    return (
        <>
            <Hero />
            <NewProducts />
            <Benefit />
            <Promo />
            <BestSelling />  
        </>
    )
}

export default HomePage