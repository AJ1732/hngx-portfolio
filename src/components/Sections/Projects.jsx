import React from 'react'
import galleryDrop from '../../assets/projects/galleryDrop.png'
import taskTracker from '../../assets/projects/taskTracker.png'
import workoutTracker from '../../assets/projects/workoutTracker.png'
import bloom from '../../assets/projects/bloom.png'
import vanLife from '../../assets/projects/vanLife.png'
import memeGenerator from '../../assets/projects/memeGenerator.png'
import passTheMessage from '../../assets/projects/passTheMessage.png'
import mangataGallo from '../../assets/projects/Mangata-Gallo.png'
import Div from '../Parts/Div'

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen pt-24 px-10 flex flex-col gap-10'>
      <h2 className='font-light text-4xl'>Projects</h2>
      
      <div className='text-white columns-md gap-8 w-full max-w-full mx-auto my-20 '>
        {/* WORKOUT TRACKER */}
        <article className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8 | h-fit | break-inside-avoid mb-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Workout Tracker</h2>
          <p className='font-extralight'>Built a responsive workout tracker application, that allows users to create and delete workouts, helping them stay organized and manage their workout activities effectively. All workouts are stored and retrieved from a database. Implemented a user-friendly design using the following technologies:</p>
          <ul className='w-full flex flex-wrap justify-between items-center gap-4 text-white'>
            <Div skill={'React'} />
            <Div skill={'TailwindCSS'} />
            <Div skill={'MongoDB'} />
            <Div skill={'NojeJS'} />
            <Div skill={'ExpressJS'} />
          </ul>
          <figure>
            <img 
                src={workoutTracker} 
                className='w-4/5 m-auto'
                alt="Project Image" />
          </figure>
          <div className='w-full flex justify-between items-center'>
            <a 
              className='self-start font-light hover:text-light-brown' 
              href="https://1732-mern-workout.netlify.app/" target='_blank'>Link to Project</a>
            <a 
              className='self-start font-light hover:text-light-brown' 
              href="https://github.com/AJ1732/mern_stack" target='_blank'>Link to GitHub Repo</a>
          </div>
        </article>
        
        {/* TASK TRACKER */}
        <article className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8 | h-fit | break-inside-avoid mb-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Task Tracker</h2>
          <p className='font-extralight'>Built a responsive task tracker application, that allows users to create and delete tasks, helping them stay organized and manage their daily activities effectively. Implemented a user-friendly design using the following technologies:</p>
          <ul className='w-full flex flex-wrap justify-between items-center gap-4 text-white'>
            <Div skill={'React'} />
            <Div skill={'TailwindCSS'} />
          </ul>
          <figure>
            <img 
                src={taskTracker} 
                className='w-4/5 m-auto'
                alt="Project Image" />
          </figure>
          <div className='w-full flex justify-between items-center'>
            <a 
              className='self-start font-light hover:text-light-brown' 
              href="https://1732-task-tracker.netlify.app/" target='_blank'>Link to Project</a>
            <a 
              className='self-start font-light hover:text-light-brown' 
              href="https://github.com/AJ1732/task-tracker" target='_blank'>Link to GitHub Repo</a>

          </div>
        </article>

        {/* MEME GENERATOR */}
        <article className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8 | h-fit | break-inside-avoid mb-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Bloom Web Application</h2>
          <p className='font-extralight'>Empower your journey of motherhood with Bloom. Your one-stop support system for information and connection for every step of your pregnancy. Built using the following technologies: </p>
          <ul className='w-full flex flex-wrap justify-between items-center gap-4 text-white'>
            <Div skill={'React'} />
            <Div skill={'TailwindCSS'} />
          </ul>
          <figure>
            <img 
                src={bloom} 
                className='w-4/5 m-auto'
                alt="Project Image" />
          </figure>
          <div className='w-full flex justify-between items-center'>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="https://frontend--tech-nexus-bloom-test.netlify.app/" target='_blank'>Link to Project</a>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="/" target='_blank'>Coming Soon...</a>
          </div>
        </article> 
       
        {/* MEME GENERATOR */}
        <article className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8 | h-fit | break-inside-avoid mb-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Meme Generator</h2>
          <p className='font-extralight'>Are you ready to unleash your inner comedian and conquer the internet with humor? Look no further, because the Meme Generator is here to transform your everyday moments into viral sensations. Built using the following technologies: </p>
          <ul className='w-full flex flex-wrap justify-between items-center gap-4 text-white'>
            <Div skill={'React'} />
            <Div skill={'meme API'} />
            <Div skill={'JavaScript'} />
          </ul>
          <figure>
            <img 
                src={memeGenerator} 
                className='w-4/5 m-auto'
                alt="Project Image" />
          </figure>
          <div className='w-full flex justify-between items-center'>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="https://1732-meme-generator.netlify.app/" target='_blank'>Link to Project</a>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="https://github.com/AJ1732/meme-generator" target='_blank'>Link to GitHub Repo</a>
          </div>
        </article> 

        {/* GALLERY DROP */}
        <article className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8 | h-fit | break-inside-avoid mb-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Gallery Drop</h2>
          <p className='font-extralight'>A functional and responsive image gallery that showcases a collection of images in a visually appealing way. Ability to Login to the gallery page. Authenticated users are able to use the Drag-and-Drop feature, able to select and drag images, effortlessly rearranging them within the gallery. Built using the following technologies:</p>
          <ul className='w-full flex flex-wrap justify-between items-center gap-4 text-white'>
            <Div skill={'React'} />
            <Div skill={'TailwindCSS'} />
            <Div skill={'Firebase'} />
          </ul>
          <figure>
            <img 
                src={galleryDrop} 
                className='w-4/5 m-auto'
                alt="Project Image" />
          </figure>    
          <div className='w-full flex justify-between items-center'>
            <a 
              className='self-start font-light hover:text-light-brown' 
              href="https://1732-gallery-task.netlify.app/" target='_blank'>Link to Project</a>
            <a 
              className='self-start font-light hover:text-light-brown' 
              href="https://github.com/AJ1732/gallery-task" target='_blank'>Link to GitHub Repo</a>
          </div>
        </article>

        {/* PASS THE MESSAGE */}
        <article className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8 | h-fit | break-inside-avoid mb-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Pass the Message</h2>
          <p className='font-extralight'>A simple Text lister. Input what you want. Built used the following technologies: </p>
          <ul className='w-full flex flex-wrap justify-between items-center gap-4 text-white'>
            <Div skill={'HTML'} />
            <Div skill={'CSS'} />
            <Div skill={'JavaScript'} />
          </ul>
          <figure>
            <img 
                src={passTheMessage} 
                className='w-4/5 m-auto'
                alt="Project Image" />
          </figure>
          <div className='w-full flex justify-between items-center'>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="https://1732-pass-the-message.netlify.app/" target='_blank'>Link to Project</a>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="https://github.com/AJ1732/pass-the-message" target='_blank'>Link to GitHub Page</a>

          </div>
        </article>

        {/* VAN LIFE */}
        <article className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8 | h-fit | break-inside-avoid mb-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Van Life</h2>
          <p className='font-extralight'>A react application simplify and enhance the van life experience for enthusiasts around the globe. Built using the following technologies:</p>
          <ul className='w-full flex flex-wrap justify-between items-center gap-1 text-white'>
            <Div skill={'React'}/>
            <Div skill={'React Router v6'}/>
            <Div skill={'TailwindCSS'}/>
          </ul>
          <figure>
            <img 
                src={vanLife} 
                className='w-4/5 m-auto'
                alt="Project Image" />
          </figure>
          <div className='w-full flex justify-between items-center'>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="https://1732-van-life.netlify.app/" target='_blank'>Link to Project</a>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="https://github.com/AJ1732/van-life" target='_blank'>Link to GitHub Repo</a>
          </div>
        </article>
        
        {/* COURSERA HTML & CSS */}
        <article className='flex flex-col gap-4 justify-start items-center bg-dark-brown rounded p-8 | h-fit | break-inside-avoid mb-8'>
          <h2 className='font-poppins font-medium self-start sm:text-xl'>Coursera HTML and CSS in-depth Portfolio Project</h2>
          <p className='font-extralight'>This portfolio project demonstrates my ability to create a visually appealing and user-friendly website for a fictional client, Mangata and Gallo, a jewelry store specializing in special occasions. Built using the following technologies: </p>
          <ul className='w-full flex flex-wrap justify-between items-center gap-4 text-white'>
            <Div skill={'HTML'} />
            <Div skill={'CSS'} />
          </ul>
          <figure>
            <img 
                src={mangataGallo} 
                className='w-4/5 m-auto'
                alt="Project Image" />
          </figure>
          <div className='w-full flex justify-between items-center'>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="https://mangata-and-gallo.netlify.app/" target='_blank'>Link to Project</a>
            <a 
              className='self-start font-light hover:text-light-brown'
              href="https://github.com/AJ1732/coursera_portfolio_project" target='_blank'>Link to GitHub Repo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects