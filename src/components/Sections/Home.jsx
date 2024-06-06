import React from 'react'
import portfolioImg from '../../assets/headshot.jpg'
import portfolioImage from '../../assets/aj_profile.jpeg'

const Home = () => {
  return (
    <section id='home' className='min-h-calc py-24 px-10 flex flex-col justify-center items-center gap-4 | md:h-screen md:py-10 sm:px-20 md:flex-row md:justify-center md:items-center md:gap-20 | lg:gap-40'>
      <img 
        src={portfolioImage} 
        className='w-64 h-64 object-cover rounded-full | md:w-96 md:h-96'
        alt="Portfolio Image" />

      <div className='flex flex-col gap-4 text-center md: md:text-left'>
        <h1 className='font-bold font-poppins text-4xl sm:text-5xl'>Hey! I'm Ejemen Iboi</h1>
        <p className='font-light text-2xl sm:text-4xl'>Software Engineer</p>
      </div>
    </section>
  )
}

export default Home