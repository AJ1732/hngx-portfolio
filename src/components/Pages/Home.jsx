import React from 'react'
import portfolioImg from '../../assets/headshot.jpg'

const Home = () => {
  return (
    <div id='home' className='min-h-screen py-24 px-10 flex flex-col justify-start items-center gap-4 | sm:py-10 sm:px-20 sm:flex-row  sm:gap-40'>
      <img 
        src={portfolioImg} 
        className='w-64 h-64 object-cover rounded-full | sm:w-96 sm:h-96'
        alt="Portfolio Image" />

      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-3xl text-center sm:text-5xl sm:text-left'>Hey! I'm Ejemen Iboi</h1>
        <p className='font-light text-4xl'>I'm a Frontend Engineer</p>
      </div>
    </div>
  )
}

export default Home