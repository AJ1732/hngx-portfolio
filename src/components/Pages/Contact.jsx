import React from 'react'
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';


const Contact = () => {
  return (
    <div id='contact' className='min-h-screen w-full h-full py-10 px-10 flex flex-col gap-10'>
      <h2 className='font-light text-4xl'>Contact Me</h2>

      <div className='min-h-screen bg-dark-brown text-white h-full w-full rounded p-10'>
        <ul className='grid grid-cols-2 items-center gap-10 | sm:grid-cols-3 md:grid-cols-4'>
          <li>
            <a 
              className='text-2xl flex justify-start items-center gap-4'
              href="https://github.com/AJ1732" target='_blank'>
              <FaGithubSquare className='text-6xl' />
              <h2 className='font-light font-josefinSans'>GitHub</h2>
            </a>
          </li>

          <li>
            <a 
              className='text-2xl flex justify-start items-center gap-4'
              href="https://www.linkedin.com/in/osezeleiboi/" target='_blank'>
              <FaLinkedin className='text-6xl' />
              <h2 className='font-poppins'>LinkedIn</h2>
            </a>
          </li>

          <li>
            <a 
              className='text-2xl flex justify-start items-center gap-4'
              href="https://twitter.com/EjemenIboi" target='_blank'>
              <FaXTwitter className='text-6xl' />
              <h2 className='font-poppins'>Twitter</h2>
            </a>
          </li>

          <li>
            <a 
              className='text-2xl flex justify-start items-center gap-4'
              href="mailto:ejemeniboi@outlook.com" target='_blank'>
              <HiOutlineMail className='text-6xl' />
              <h2 className='font-poppins'>Email</h2>
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Contact