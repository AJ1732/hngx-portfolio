import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { motion } from "framer-motion"

const Navlinks = ({ isMobile, closeMobileMenu }) => {

  const navVariants = {
    from: {
      y: -40,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    }
  }

  const navListVariants = {
    from: {
      y: -40,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
    },

  }

  const transitions = {
    type: 'tween', // the animation is done straight forward
    type: 'spring', // the animation is done with a spring effect 
  }

  return (
    <motion.div 
      className='bg-dark-brown w-full md:bg-white-brown'
      variants={navVariants}
      initial='from'
      animate='to'
    >
      <ul className='text-white text-xl tracking-wide font-medium | w-full | flex flex-col justify-center items-start gap-4 | py-12 px-10 |  | md:text-xl md:text-dark-brown md:py-8 md:flex-row md:justify-end sm:gap-10 md:gap-4'>
        <motion.li 
          className='hover:text-light-brown'
          variants={navListVariants}
          onClick={ () => isMobile && closeMobileMenu() }
        >
          <HashLink to={`#home`} smooth>Home</HashLink>
        </motion.li>

        <motion.li 
          className='hover:text-light-brown'
          variants={navListVariants}
          onClick={ () => isMobile && closeMobileMenu() }
        >
          <HashLink to={`#aboutme`} smooth>About Me</HashLink>
        </motion.li>
        
        <motion.li 
          className='hover:text-light-brown'
          variants={navListVariants}
          onClick={ () => isMobile && closeMobileMenu() }
        >
          <HashLink to={`#projects`} smooth>Projects</HashLink>
        </motion.li>

        <motion.li 
          className='hover:text-light-brown'
          variants={navListVariants}
          onClick={ () => isMobile && closeMobileMenu() }
        >
          <HashLink to={`#certificates`} smooth>Certificates</HashLink>
        </motion.li>

        <motion.li 
          className='hover:text-light-brown'
          variants={navListVariants}
          onClick={ () => isMobile && closeMobileMenu() }
        >
          <HashLink to={`#contact`} smooth>Conatct Me</HashLink>
        </motion.li>
      </ul>
    </motion.div>
  )
}

export default Navlinks