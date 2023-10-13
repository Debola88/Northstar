import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router'
import ScrollReset from './ScrollReset'

function Layout() {
  return (
    <div className="text-center bg-slate-100 text-gray-800 min-h-[100dvh]">
      <NavBar/>
      <main className='mt-16'>
        <Outlet />
        <ScrollReset />
      </main>
      <Footer />
    </div>
  )
}
export default Layout