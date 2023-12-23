import React from 'react'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'


const Navbar = () => {
  return (
    <header className='relative bg-white-brown-brown text-dark-brown'>
      <Navigation />
      <MobileNavigation />
    </header>
  )
}

export default Navbar