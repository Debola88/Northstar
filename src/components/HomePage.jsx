import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import NewProducts from '../components/NewProducts';
import Benefit from '../components/Benefit';
import Promo from '../components/Promo';
import Footer from '../components/Footer';
import BestSelling from '../components/BestSelling';

function HomePage() {
    return (
        <div>
            <NavBar />
            <Hero />
            <NewProducts />
            <Benefit />
            <Promo />
            <BestSelling />
            <Footer />
        </div>
    )
}

export default HomePage