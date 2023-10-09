import React from 'react'
import { LuUser } from "react-icons/lu";
import { BiArchive } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useState } from 'react';
import { BiHomeAlt2 } from "react-icons/bi";
import { BsInfoSquare } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = <>
    <div className='lg:hidden block absolute top-16 w-full bg-slate-100 left-0 transition'>
      <ul className="text-sm font-semibold text-left px-10 ">
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center gap-2 flex text-lg border-t'><nav><NavLink spy={true} smooth={true} to="/" className='flex gap-2'><span className='text-sm'>HOME</span></NavLink></nav></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><nav><NavLink spy={true} smooth={true} to="/about" className='flex gap-2'><span className='text-sm'> ABOUT</span></NavLink></nav></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><nav><NavLink spy={true} smooth={true} to="/ContactUs" className='flex gap-2'><span className='text-sm'> CONTACT US</span></NavLink></nav></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><nav><NavLink spy={true} smooth={true} to="/user" className='flex gap-2'><span className='text-sm'> ACCOUNT</span></NavLink></nav></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><nav><NavLink spy={true} smooth={true} to="/cart" className='flex gap-2'><span className='text-sm'>Cart</span></NavLink></nav></li>
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
              <li className='hover:text-blue-800 transition cursor-pointer'><nav><NavLink spy={true} smooth={true} to="/">HOME</NavLink></nav></li>
              <li className='hover:text-blue-800 transition cursor-pointer'><nav><NavLink spy={true} smooth={true} to="/about">ABOUT</NavLink></nav></li>
              <li className='hover:text-blue-800 transition cursor-pointer'><nav><NavLink spy={true} smooth={true} to="/ContactUs">CONTACT US</NavLink></nav></li>
              <li className='transition cursor-pointer ml-20'><nav><NavLink spy={true} smooth={true} to="/user"><LuUser /></NavLink></nav></li>
              <li className='transition cursor-pointer'><nav><NavLink spy={true} smooth={true} to="/cart"><BiArchive /></NavLink></nav></li>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block md:hidden transition text-xl' onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  )
}

export default NavBar