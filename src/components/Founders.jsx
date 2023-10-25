import React from 'react'
import Founderone from '../assets/Founder1.png'
import Foundertwo from '../assets/Founder2.png'
import Founderthree from '../assets/Founder3.png'
import FounderFour from '../assets/Founder4.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function Founders() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className='pb-16'>
            <h1 className='p-16 mb-16 font-bold text-3xl text-black'>The Founders</h1>
            <div className='px-5 sm:px-16'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='grid gap-14 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                        <div  data-aos="fade-up">
                            <div className='min-h-[10rem] w-auto overflow-hidden'>
                                <img src={Founderone} alt='' className='w-full h-full object-cover' />
                            </div>
                            <div className='text-black py-5 font-bold text-left'>
                                <p>HM Jawad</p>
                            </div>
                        </div>
                        <div  data-aos="fade-up">
                            <div className='min-h-[10rem] w-auto overflow-hidden'>
                                <img src={Foundertwo} alt='' className='w-full h-full object-cover' />
                            </div>
                            <div className='text-black py-5 font-bold text-left'>
                                <p>Furqan Abid</p>
                            </div>
                        </div>
                        <div  data-aos="fade-up">
                            <div className='min-h-[10rem] w-auto overflow-hidden'>
                                <img src={Founderthree} alt='' className='w-full h-full object-cover' />
                            </div>
                            <div className='text-black py-5 font-bold text-left'>
                                <p>Abdullah Ah</p>
                            </div>
                        </div>
                        <div  data-aos="fade-up">
                            <div className='min-h-[10rem] w-auto overflow-hidden'>
                                <img src={FounderFour} alt='' className='w-full h-full object-cover' />
                            </div>
                            <div className='text-black py-5 font-bold text-left'>
                                <p>Abrar Khan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Founders