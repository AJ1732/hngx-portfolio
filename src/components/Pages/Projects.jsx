import React from 'react'
import galleryDrop from '../../assets/galleryDrop.png'
import taskTracker from '../../assets/taskTracker.png'
import vanLife from '../../assets/vanLife.png'
import memeGenerator from '../../assets/memeGenerator.png'
import passTheMessage from '../../assets/passTheMessage.png'

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen py-10 px-10 flex flex-col gap-10'>
      <h2 className='font-light text-4xl'>Projects</h2>
      
      <ul className='text-white flex flex-col gap-12 sm:grid sm:grid-cols-2'>
        <li className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Gallery Drop</h2>
          <p className='font-extralight'>A functional and responsive image gallery that showcases a collection of images in a visually appealing way. Ability to Login to the gallery page. Authenticated users are able to use the Drag-and-Drop feature, able to select and drag images, effortlessly rearranging them within the gallery. Built using the following technologies:</p>
          <ul className='w-full flex flex-wrap justify-between items-center gap-4 text-white'>
            <li className=' bg-light-brown py-2 px-5 rounded'>React </li>
            <li className=' bg-light-brown py-2 px-5 rounded'>Tailwind CSS </li>
            <li className=' bg-light-brown py-2 px-5 rounded'>Firebase </li>
          </ul>
          <img 
              src={galleryDrop} 
              className='w-4/5 '
              alt="Project Image" />
          
          <div className='w-full flex justify-between items-center'>
            <a 
              className='self-start font-light hover:text-light-brown' 
              href="https://1732-gallery-task.netlify.app/" target='_blank'>Link to Project</a>
            <a 
              className='self-start font-light hover:text-light-brown' 
              href="https://github.com/AJ1732/gallery-task" target='_blank'>Link to GitHub Repo</a>
          </div>
        </li>

        <li className='flex flex-col gap-4 justify-between items-center bg-dark-brown rounded p-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Task Tracker</h2>
          <p className='font-extralight'>Built a responsive task tracker application, that allows users to create and delete tasks, helping them stay organized and manage their daily activities effectively. Implemented a user-friendly design using the following technologies:</p>
          <ul className='w-full flex flex-wrap justify-between items-center gap-4 text-white'>
            <li className=' bg-light-brown py-2 px-5 rounded'>React </li>
            <li className=' bg-light-brown py-2 px-5 rounded'>React icons</li>
            <li className=' bg-light-brown py-2 px-5 rounded'>Tailwind CSS </li>
          </ul>
          <img 
              src={taskTracker} 
              className='w-4/5 '
              alt="Project Image" />

          <div className='w-full flex justify-between items-center'>
            <a 
              className='self-start font-light hover:text-light-brown' 
              href="https://1732-task-tracker.netlify.app/" target='_blank'>Link to Project</a>
            <a 
              className='self-start font-light hover:text-light-brown' 
              href="https://github.com/AJ1732/task-tracker" target='_blank'>Link to GitHub Repo</a>

          </div>
        </li>

        <li className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Van Life</h2>
          <p className='font-extralight'>A react application simplify and enhance the van life experience for enthusiasts around the globe. Built using the following technologies:</p>
          <ul className='w-full flex flex-wrap justify-between items-center gap-1 text-white'>
            <li className=' bg-light-brown py-2 px-5 rounded'>React </li>
            <li className=' bg-light-brown py-2 px-5 rounded'>React Router v6</li>
            <li className=' bg-light-brown py-2 px-5 rounded'>Tailwind CSS </li>
          </ul>
          <img 
              src={vanLife} 
              className='w-4/5 '
              alt="Project Image" />

          <div className='w-full flex justify-between items-center'>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="https://1732-van-life.netlify.app/" target='_blank'>Link to Project</a>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="https://github.com/AJ1732/van-life" target='_blank'>Link to GitHub Repo</a>

          </div>
        </li>

        <li className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Pass the Message</h2>
          <p className='font-extralight'>A simple Text lister. Input what you want. Built used the following technologies: </p>
          <ul className='w-full flex flex-wrap justify-between items-center gap-4 text-white'>
            <li className=' bg-light-brown py-2 px-5 rounded'>HTML </li>
            <li className=' bg-light-brown py-2 px-5 rounded'>CSS </li>
            <li className=' bg-light-brown py-2 px-5 rounded'>JavaScript</li>
          </ul>
          <img 
              src={passTheMessage} 
              className='w-4/5 '
              alt="Project Image" />
          <div className='w-full flex justify-between items-center'>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="https://1732-pass-the-message.netlify.app/" target='_blank'>Link to Project</a>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="https://github.com/AJ1732/pass-the-message" target='_blank'>Link to GitHub Page</a>

          </div>
        </li>

        <li className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Meme Generator</h2>
          <p className='font-extralight'>Are you ready to unleash your inner comedian and conquer the internet with humor? Look no further, because the Meme Generator is here to transform your everyday moments into viral sensations. Built using the following technologies: </p>
          <ul className='w-full flex flex-wrap justify-between items-center gap-4 text-white'>
            <li className=' bg-light-brown py-2 px-5 rounded'>React </li>
            <li className=' bg-light-brown py-2 px-5 rounded'>meme API </li>
            <li className=' bg-light-brown py-2 px-5 rounded'>JavaScript</li>
          </ul>
          <img 
              src={memeGenerator} 
              className='w-4/5 '
              alt="Project Image" />
          
          <div className='w-full flex justify-between items-center'>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="https://1732-meme-generator.netlify.app/" target='_blank'>Link to Project</a>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="https://github.com/AJ1732/meme-generator" target='_blank'>Link to GitHub Repo</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Projects