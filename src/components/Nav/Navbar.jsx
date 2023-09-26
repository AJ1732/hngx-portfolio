import React from 'react'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'


const Navbar = () => {
  return (
    <div className='relative bg-white-brown-brown text-dark-brown'>
      <Navigation />
      <MobileNavigation />
    </div>
  )
}

export default Navbar