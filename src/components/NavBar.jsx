import React from 'react'
import { LuUser } from "react-icons/lu";
import { BiArchive } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useState } from 'react';
import { BiHomeAlt2 } from "react-icons/bi";
import { BsInfoSquare } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = <>
    <div className='lg:hidden block absolute top-16 w-full bg-slate-100 left-0 transition'>
      <ul className="text-sm font-semibold text-left px-20 ">
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center gap-2 flex text-lg'><Link spy={true} smooth={true} to="/" className='flex gap-2'><BiHomeAlt2 /><span className='text-sm'>HOME</span></Link></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><Link spy={true} smooth={true} to="/about" className='flex gap-2'><BsInfoSquare /><span className='text-sm'> ABOUT</span></Link></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><Link spy={true} smooth={true} to="/ContactUs" className='flex gap-2'><TiContacts /><span className='text-sm'> CONTACT US</span></Link></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><Link spy={true} smooth={true} to="#" className='flex gap-2'><LuUser /><span className='text-sm'> ACCOUNT</span></Link></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><Link spy={true} smooth={true} to="/cart" className='flex gap-2'><BiArchive /><span className='text-sm'>Cart</span></Link></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><Link spy={true} smooth={true} to="#" className='flex gap-2'><FiMenu /><span className='text-sm'>MENU</span></Link></li>
      </ul>
    </div>
  </>


  return (
    <nav className="fixed bg-slate-100 top-0 left-0 w-full md:shadow-lg">
      <div className="h-10vh flex justify-between lg:py-5 px-10 sm:px-16 py-4">
        <div className="flex items-center flex-1">
          <span className='text-3xl font-bold text-black'>NorthStar</span>
        </div>
        <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-0 text-sm text-black'>
              <li className='hover:text-blue-800 transition cursor-pointer'><Link spy={true} smooth={true} to="/">HOME</Link></li>
              <li className='hover:text-blue-800 transition cursor-pointer'><Link spy={true} smooth={true} to="/about">ABOUT</Link></li>
              <li className='hover:text-blue-800 transition cursor-pointer'><Link spy={true} smooth={true} to="/ContactUs">CONTACT US</Link></li>
              <li className='transition cursor-pointer ml-20'><Link spy={true} smooth={true} to="#"><LuUser /></Link></li>
              <li className='transition cursor-pointer'> <Link spy={true} smooth={true} to="/cart"><BiArchive /></Link></li>
              <li className='transition cursor-pointer'><Link spy={true} smooth={true} to="#"><FiMenu /></Link></li>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block md:hidden transition' onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  )
}

export default NavBar