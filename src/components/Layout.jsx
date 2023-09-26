import React from 'react'
// import Navlinks from './Nav/Navlinks'
import Navbar from './Nav/Navbar'
import Footer from './Footer'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout