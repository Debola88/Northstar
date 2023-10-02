import React, { useState } from 'react'
import Hero from '../components/Hero';
import NewProducts from '../components/NewProducts';
import Benefit from '../components/Benefit';
import Promo from '../components/Promo';
import BestSelling from '../components/BestSelling';
import { FaShoppingCart } from 'react-icons/fa';
import CartPopup from './CartPopup';
import Featured from './Featured';
import ProductData from "../data/ProductData"

function HomePage() {
    const data = ProductData;

    const [showCart, setShowCart] = useState(false);
    const [cartData, setCartData] = useState([]);

    return (
        <div className='relative z-10'>
            <Hero />
            <NewProducts />
            <Benefit />
            <Promo />
            <BestSelling />
            <Featured data={data} cartData={cartData} setCartData={setCartData}/> 
            <div className='fixed bottom-32 right-8 cursor-pointer p-4 rounded-full drop-shadow-xl bg-white border hover:scale-110 ease-in-out duration-150 transition-all z-[20]'  onClick={() => setShowCart(prev => !prev)}>
                <FaShoppingCart className='font-bold text-black text-2xl drop-shadow-xl'/>
                <span className='absolute font-bold -top-2 -right-2 bg-red-500 text-white px-2 rounded-full'>{cartData.length}</span>
            </div>
            { showCart && <CartPopup setShowCart={setShowCart} cartData={cartData} setCartData={setCartData}/> }  
        </div>
    )
}

export default HomePage