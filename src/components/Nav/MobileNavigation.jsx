import React, { useState } from 'react';

import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

import Navlinks from './Navlinks';

const MobileNavigation = () => {
  const [ isOpen , setIsOpen] = useState(false);

  const hamburgerIcon = <CgMenuRight 
                          className='text-3xl text-dark-brown absolute -top-12 right-8'
                          onClick={ () => setIsOpen(!isOpen) } />

  const closeIcon =  <CgClose 
                        className='text-3xl text-dark-brown absolute -top-12 right-8'
                        onClick={ () => setIsOpen(!isOpen) } />

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className='absolute z-10 top-16 right-0 | h-full w-full px-10 | md:relative md:hidden'>
      <h1 className='absolute -top-16 left-0 text-3xl text-dark-brown font-sansita font-extrabold  py-4 px-8'>Iboi</h1>
      {isOpen? closeIcon: hamburgerIcon}      
      {isOpen && <Navlinks isMobile={isOpen} closeMobileMenu={closeMobileMenu} />}     
    </nav>
  )
}

export default MobileNavigation