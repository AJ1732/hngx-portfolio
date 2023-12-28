import React from 'react'
import freeCodeCamp from '../../assets/freeCodeCamp.png'
import womenTechster from '../../assets/womenTechster.jpeg'
import stuternHackathon from '../../assets/stuternHackathon.png'
import courseaHTMLCertificate from '../../assets/courseraHTMLCSSCertificate.png'

const Certificates = () => {
  return (
    <section id='certificates' className='min-h-screen pt-24 px-10 flex flex-col gap-8'>
      <h2 className='font-light text-4xl'>Certificates</h2>
      
      <ul className='text-white flex flex-col gap-12 sm:grid sm:grid-cols-2'>
        <li>
          <figure className='flex flex-col gap-4 justify-start items-center  bg-light-brown rounded p-8'>
            <figcaption className='font-poppins font-medium self-start sm:text-xl'>Coursera Meta HTML and CSS in depth</figcaption>
            <a className='flex flex-col gap-4 justify-start items-center' href="https://coursera.org/share/6d1e5b29f7fdc15872271936ba4bb3bd" target='_blank'>
              <img 
                  src={courseaHTMLCertificate} 
                  className='w-4/5'
                  alt="Coursera Meta HTML and CSS in depth" />
            </a>
          </figure>
        </li>

        <li>
          <figure className='flex flex-col gap-4 justify-start items-center  bg-light-brown rounded p-8'>
            <figcaption className='font-poppins font-medium self-start sm:text-xl'>The Complete 2023 Web Development Bootcamp</figcaption>
            <a className='flex flex-col gap-4 justify-start items-center' href="https://www.udemy.com/certificate/UC-3a853897-2f20-4fc8-87c8-83d4f657e9ae/" target='_blank'>
              <img 
                src={`https://udemy-certificate.s3.amazonaws.com/image/UC-3a853897-2f20-4fc8-87c8-83d4f657e9ae.jpg`} 
                className='w-4/5'
                alt="The Complete 2023 Web Development Bootcamp Certificate" />
            </a>
          </figure>
        </li>

        <li>
          <figure className='flex flex-col gap-4 justify-start items-center  bg-light-brown rounded p-8'>
            <figcaption className='font-poppins font-medium self-start sm:text-xl'>Stutern Klusterthon Hackathon 2023</figcaption>
            <a className='flex flex-col gap-4 justify-start items-center' href="https://stuternklusterthon.tiiny.site/" target='_blank'>
              <img 
                src={stuternHackathon} 
                className='w-4/5'
                alt="Stutern Klusterthon 2023 Certificate" />
            </a>
          </figure>
        </li>

        <li>
          <figure className='flex flex-col gap-4 justify-start items-center  bg-light-brown rounded p-8'>
            <figcaption className='font-poppins font-medium self-start sm:text-xl'>Women Techster Bootcamp</figcaption>
            <a className='flex flex-col gap-4 justify-start items-center' href="https://www.linkedin.com/in/osezeleiboi/" target='_blank'>
              <img 
                src={womenTechster} 
                className='w-4/5'
                alt="Women Techster Bootcamp Certificate" />
            </a>
          </figure>
        </li>

        <li>
          <figure className='flex flex-col gap-4 justify-start items-center bg-light-brown rounded p-8'>
            <figcaption className='font-poppins font-medium  self-start sm:text-xl'>FreeCodeCamp Responsive Web Design</figcaption>
            <a className='flex flex-col gap-4 justify-start items-center' href="https://freecodecamp.org/certification/Ejemen/responsive-web-design" target='_blank'>
              <img 
                src={freeCodeCamp} 
                className='w-4/5 '
                alt="freeCodeCamp Certificate" />
            </a>
          </figure>
        </li>
      </ul>
    </section>
  )
}

export default Certificates