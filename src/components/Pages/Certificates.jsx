import React from 'react'
import freeCodeCamp from '../../assets/freeCodeCamp.png'
import womenTechster from '../../assets/womenTechster.jpeg'

const Certificates = () => {
  return (
    <div id='certificates' className='min-h-screen py-10 px-10 flex flex-col gap-8'>
      <h2 className='font-light text-4xl'>Certificates</h2>
      <ul className='text-white flex flex-col gap-12 sm:grid sm:grid-cols-2'>
        <li className='flex flex-col gap-4 justify-start items-center bg-light-brown rounded p-8'>
          <h2 className='font-poppins font-medium  self-start sm:text-xl'>FreeCodeCamp Responsive Web Design</h2>
          <a className='flex flex-col gap-4 justify-start items-center' href="https://freecodecamp.org/certification/Ejemen/responsive-web-design" target='_blank'>
            <img 
              src={freeCodeCamp} 
              className='w-4/5 '
              alt="freeCodeCamp Certificate" />
          </a>
        </li>

        <li className='flex flex-col gap-4 justify-start items-center  bg-light-brown rounded p-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Women Techster Bootcamp</h2>
          <a className='flex flex-col gap-4 justify-start items-center' href="https://www.linkedin.com/in/osezeleiboi/" target='_blank'>
            <img 
              src={womenTechster} 
              className='w-4/5'
              alt="freeCodeCamp Certificate" />
          </a>
        </li>

        <li></li>
      </ul>
    </div>
  )
}

export default Certificates