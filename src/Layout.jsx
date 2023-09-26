import React from 'react'
// import Navlinks from './Nav/Navlinks'
import Navbar from './components/Nav/Navbar'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout