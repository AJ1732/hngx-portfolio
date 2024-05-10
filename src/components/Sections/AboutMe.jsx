import React from 'react'
import Div from '../Parts/Div'

const AboutMe = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'jQuery',
    'EJS',
    'TailwindCSS',
    'SASS/SCSS',
    'Bootstrap',
    'Git',
    'GitHub',
    'DSA',
    'OOP',
    'NodeJS',
    'ExpressJS',
    'MongoDB',
    'SQL',
    'PostgreSQL',
    'UI/UX Design'
  ]

  return (
    <section id='aboutme' className='min-h-fit w-full h-full pt-24 px-10 |  | flex flex-col gap-10'>
      <h2 className='font-light text-4xl'>About Me</h2>
      <div className='font-normal text-xl flex flex-col gap-2'>
        <p>An inquisitive and motivated Frontend Engineer, willing to obtain such position to utilize my skills in web development and programming, while continuously improving my skills and knowledge in this field.</p>
        <p>Possesses a proactive attitude and strong communication skills. A great problem solver and rational thinker, with excellent teamwork abilities in performing tasks.</p>
        <p>Fluent in English, beginner in French and Korean</p>
      </div>

      <div className='min-h-fit flex flex-col  justify-center items-center gap-3'>
        <h2 className='font-light text-2xl self-start'>Skills</h2>
        <ul className='w-full flex flex-wrap justify-between items-center gap-6 text-white'>
          {skills.map(skill => (
            <li key={skill}>
              <Div skill={skill} />
            </li>
          ))}
        </ul>
        
        <ul className='mt-2 flex flex-col gap-1'>
          <li>●	Well... Apart from English, I'm Proficient in languages such as HTML, CSS and JavaScript </li>
          <li>●	Proficient with Frontend frameworks like Bootstrap, SCSS/SASS, TailwindCSS, EJS, jQuery and React</li>
          <li>●	Familar with Backend technologies like NodeJS, ExpressJS, MongoDB, SQL, PostgreSQL, to make RESTful APIs</li>
          <li>● Understand web design principles and user experience (UX) design</li>
          <li>● Undergoing training in Data Structures like Stacks, Queues, List, Linked list and Hashmaps and Algorithms like Linear Search and Binary search in JavaScript to enhance problem-solving skills. As well as the concept of Big O notation and time complexity</li>
          <li>● I also engage in platforms like LeetCode and CodeWars to enhance my algorithmic and problem-solving skills. </li>
          <li>● I’ve engaged in Version Control and Collaboration by using Git and GitHub. I understand the importance of collaborative coding practices and have worked on group projects where developers contribute to the same codebase. </li>
          <li>● I am highly comfortable working within the terminal environment. I regularly use the terminal for tasks such as navigating the file system, managing files and directories, and executing various commands. I have a solid grasp of basic Linux command-line operations. Usually operations in file manipulation, searching, and text processing using commands like ls, cd, cat, echo and touch. </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutMe