import React from 'react'
import { Link } from "react-scroll";
import { RiVisaLine } from "react-icons/ri"
import { BiLogoMastercard } from 'react-icons/bi';
import { FaCcPaypal } from 'react-icons/fa6';
import { FaDhl } from 'react-icons/fa6';
import { IoIosArrowForward } from "react-icons/io";


function Footer() {
    return (
        <div className='bg-gray-200 text-gray-500 pt-10 text-sm px-10 sm:px-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center'>
                    <div className='mb-5 text-left'>
                        <h3 className='uppercase font-bold pb-4 text-black'>Company info</h3>
                        <ul>
                            <li className='pb-2 hover:text-[#024E82] transition cursor-pointer'><Link>About Us</Link></li>
                            <li className='pb-2 hover:text-[#024E82] transition cursor-pointer'><Link>Latest Posts</Link></li>
                            <li className='pb-2 hover:text-[#024E82] transition cursor-pointer'><Link>Contact Us</Link></li>
                            <li className='pb-2 hover:text-[#024E82] transition cursor-pointer'><Link>Shop</Link></li>
                        </ul>
                    </div>
                    <div className='mb-5 text-left'>
                        <h3 className='uppercase font-bold pb-4 text-black'>Help link</h3>
                        <ul>
                            <li className='pb-2 hover:text-[#024E82] transition cursor-pointer'><Link>Tracking</Link></li>
                            <li className='pb-2 hover:text-[#024E82] transition cursor-pointer'><Link>Order Status</Link></li>
                            <li className='pb-2 hover:text-[#024E82] transition cursor-pointer'><Link>Delivery</Link></li>
                            <li className='pb-2 hover:text-[#024E82] transition cursor-pointer'><Link>FAQ</Link></li>
                        </ul>
                    </div>
                    <div className='mb-5 text-left'>
                        <h3 className='uppercase font-bold pb-4 text-black'>useful link</h3>
                        <ul>
                            <li className='pb-2 hover:text-[#024E82] transition cursor-pointer'><Link>Special Offer</Link></li>
                            <li className='pb-2 hover:text-[#024E82] transition cursor-pointer'><Link>Gift Cards</Link></li>
                            <li className='pb-2 hover:text-[#024E82] transition cursor-pointer'><Link>Advertising</Link></li>
                            <li className='pb-2 hover:text-[#024E82] transition cursor-pointer'><Link>Terms of Use</Link></li>
                        </ul>
                    </div>
                    <div className='mb-5 text-left'>
                        <h3 className='uppercase font-bold text-black'>Get in the know</h3>
                        <div className="text-left">
                            <form className='left-0 w-full space-y-4'>
                                <input type="email" placeholder='Enter email' className='text-left w-60 h-12 text-black font-semibold border-b-[0.4px] bg-transparent border-b-gray-500 outline-none' />
                                <span className='absolute text-xl cursor-pointer'><IoIosArrowForward /></span>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full border-t border-gray-300'>
                <div className='max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center'>
                    <div className='text-left'>
                        <div>
                            <span>&copy;</span> NorthStar eCommerce
                        </div>
                        <div>
                            Privacy Policy  Terms & Conditons
                        </div>
                    </div>
                    <div className='text-4xl py-2 flex gap-2'>
                        <span className='hover:text-[#024E82] transition'><RiVisaLine /></span>
                        <span className='hover:text-[#024E82] transition'><BiLogoMastercard /></span>
                        <span className='hover:text-[#024E82] transition'><FaCcPaypal /></span>
                        <span className='hover:text-[#024E82] transition'><FaDhl /></span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer