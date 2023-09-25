import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router'

function Layout () {
  return (
    <div>
      <NavBar/>
        <main>
          <Outlet />
        </main>
      <Footer/>
    </div>
  )
}
export default Layout