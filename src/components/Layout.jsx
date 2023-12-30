import React from 'react'
// import Navlinks from './Nav/Navlinks'
import Navbar from './Nav/Navbar'
import Footer from './Footer'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='max-w-[90rem] m-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout