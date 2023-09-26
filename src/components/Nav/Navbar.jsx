import React from 'react'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'


const Navbar = () => {
  return (
    <div className='relative bg-light-brown text-white'>
      <Navigation />
      <MobileNavigation />
    </div>
  )
}

export default Navbar