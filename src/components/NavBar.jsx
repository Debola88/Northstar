import { useContext } from 'react'
import { LuUser } from "react-icons/lu";
import { BiArchive } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';
// import { BiHomeAlt2 } from "react-icons/bi";
// import { BsInfoSquare } from "react-icons/bs";
// import { TiContacts } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';


const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const {totalQuantity} = useContext(CartContext)


  const content = <>
    <div className='lg:hidden block absolute top-16 w-full bg-slate-100 left-0 transition'>
      <ul className="text-sm font-semibold text-left px-[3.5rem]">
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center gap-2 flex text-lg'><nav><NavLink  to="/" className='flex gap-2' onClick={handleClick}><span className='text-sm'>HOME</span></NavLink></nav></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><nav><NavLink  to="/about" className='flex gap-2' onClick={handleClick}><span className='text-sm'> ABOUT</span></NavLink></nav></li>
        <li className='my-3 py-3 hover:bg-slate-200 hover:rounded item-center text-lg'><nav><NavLink  to="/ContactUs" className='flex gap-2' onClick={handleClick}><span className='text-sm'> CONTACT US</span></NavLink></nav></li>
      </ul>
    </div>
  </>


  return (
    <nav className="fixed bg-slate-100 top-0 left-0 w-full md:shadow-lg z-50">
      <div className="flex justify-between lg:py-5 px-5 sm:px-16 py-4 ">
        <div className='flex gap-3 items-center'>
          <button className='block md:hidden transition text-xl' onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuBurger />}
          </button>
          <div className="flex items-center flex-1">
            <span className='text-3xl font-bold text-black'>NorthStar</span>
          </div>
        </div>
        <div className='text-lg flex gap-5 ml-auto justify-end items-center md:hidden'>
          <nav><NavLink  to="/user"><LuUser className='text-lg'/></NavLink></nav>
          <nav className='flex justify-end'>
            <NavLink  to="/cart">
              <span className='w-4 h-4 bg-blue-800 absolute rounded-full items-center text-center justify-center top-5'>
                <p className="text-xs text-white">{totalQuantity}</p>
              </span>
              <BiArchive className='text-lg'/>
            </NavLink>
          </nav>
        </div>

        <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-0 text-sm text-black'>
              <li className='hover:text-blue-800 transition cursor-pointer'><nav><NavLink to="/">HOME</NavLink></nav></li>
              <li className='hover:text-blue-800 transition cursor-pointer'><nav><NavLink to="/about">ABOUT</NavLink></nav></li>
              <li className='hover:text-blue-800 transition cursor-pointer'><nav><NavLink to="/ContactUs">CONTACT US</NavLink></nav></li>
              <li className='transition cursor-pointer ml-20'><nav><NavLink  to="/user"><LuUser className='text-xl'/></NavLink></nav></li>
              <li className='transition cursor-pointer'>
                <nav className='flex'>
                  <NavLink  to="/cart">
                    <span className='w-4 h-4 bg-blue-800 absolute rounded-full items-center text-center justify-center top-5'>
                      <p className="text-xs text-white">{totalQuantity}</p>
                    </span>
                    <BiArchive className='text-xl'/>
                  </NavLink>
                </nav>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
      </div>
    </nav>
  )
}

export default NavBar