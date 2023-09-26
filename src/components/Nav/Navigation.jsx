import React from 'react'
import { Link } from 'react-router-dom'
import Navlinks from './Navlinks'

const Navigation = () => {
  return (
    <nav className='bg-white-brown fixed w-full hidden md:flex md:justify-center md:items-center'>
      <Link to={`.`} className='text-4xl text-dark-brown font-extrabold font-sansita py-6 px-16'>Iboi</Link>
      <Navlinks />
    </nav>
  )
}

export default Navigation