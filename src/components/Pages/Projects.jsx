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
          <img 
              src={galleryDrop} 
              className='w-4/5 '
              alt="Project Image" />
          <a 
            className='self-start font-light hover:text-light-brown' 
            href="https://1732-gallery-task.netlify.app/" target='_blank'>Link to Project</a>
        </li>

        <li className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Task Tracker</h2>
          <img 
              src={taskTracker} 
              className='w-4/5 '
              alt="Project Image" />
          <a 
            className='self-start font-light hover:text-light-brown' 
            href="https://1732-task-tracker.netlify.app/" target='_blank'>Link to Project</a>
        </li>

        <li className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Van Life</h2>
          <img 
              src={vanLife} 
              className='w-4/5 '
              alt="Project Image" />
          <a 
            className='self-start font-light hover:text-light-brown'
            href="https://1732-van-life.netlify.app/" target='_blank'>Link to Project</a>
        </li>

        <li className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Pass the Message</h2>
          <img 
              src={passTheMessage} 
              className='w-4/5 '
              alt="Project Image" />
          <a 
            className='self-start font-light hover:text-light-brown'
            href="https://1732-pass-the-message.netlify.app/" target='_blank'>Link to Project</a>
        </li>

        <li className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Meme Generator</h2>
          <img 
              src={memeGenerator} 
              className='w-4/5 '
              alt="Project Image" />
          <a 
            className='self-start font-light hover:text-light-brown'
            href="https://1732-meme-generator.netlify.app/" target='_blank'>Link to Project</a>
        </li>
      </ul>
    </div>
  )
}

export default Projects