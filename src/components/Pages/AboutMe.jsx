import React from 'react'

const AboutMe = () => {
  return (
    <div id='aboutme' className='min-h-screen w-full h-full py-10 px-10 |  | flex flex-col gap-10'>
      <h2 className='font-light text-4xl'>About Me</h2>
      <div className='font-medium text-xl flex flex-col gap-2'>
        <p>An inquisitive and motivated Frontend Engineer, willing to obtain such position to utilize my skills in web development and programming, while continuously improving my skills and knowledge in this field.</p>
        <p>Possesses a proactive attitude and strong communication skills. A great problem solver and rational thinker, with excellent teamwork abilities in performing tasks.</p>
        <p>Fluent in English, beginner in French and Korean</p>
      </div>

      <div className='min-h-screen flex flex-col  justify-center items-center gap-3'>
        <h2 className='font-light text-2xl self-start'>Skills</h2>
        <ul className='w-full flex flex-wrap justify-between items-center gap-4 text-white'>
          <li className=' bg-light-brown py-2 px-5 rounded'>HTML</li>
          <li className=' bg-light-brown py-2 px-5 rounded'>CSS</li>
          <li className=' bg-light-brown py-2 px-5 rounded'>JavaScript </li>
          <li className=' bg-light-brown py-2 px-5 rounded'>React </li>
          <li className=' bg-light-brown py-2 px-5 rounded'>jQuery </li>
          <li className=' bg-light-brown py-2 px-5 rounded'>Tailwind CSS </li>
          <li className=' bg-light-brown py-2 px-5 rounded'>Bootstrap</li>
          <li className=' bg-light-brown py-2 px-5 rounded'>Git</li>
          <li className=' bg-light-brown py-2 px-5 rounded'>DSA</li>
          <li className=' bg-light-brown py-2 px-5 rounded'>UI/UX</li>
        </ul>
        <ul className='flex flex-col gap-1'>
          <li>●	Apart from English, I'm Proficient in languages such as HTML and JavaScript, as well as CSS</li>
          <li>●	Familiarity with Frontend frameworks like Bootstrap, SCSS, Tailwind CSS, React and jQuery</li>
          <li>● Understand web design principles and user experience (UX) design</li>
          <li>● Undergoing training in Data Structures like Stacks, Queues, List, Linked list and Hashmaps and Algorithms like Linear Search and Binary search in JavaScript to enhance problem-solving skills. As well as the concept of Big O notation and time complexity</li>
          <li>● I also engage in platforms like LeetCode and CodeWars to enhance my algorithmic and problem-solving skills. </li>
          <li>● I’ve engaged in Version Control and Collaboration by using Git and GitHub. I understand the importance of collaborative coding practices and have worked on group projects where developers contribute to the same codebase. </li>
          <li>● I am highly comfortable working within the terminal environment. I regularly use the terminal for tasks such as navigating the file system, managing files and directories, and executing various commands. I have a solid grasp of basic Linux command-line operations. Usually operations in file manipulation, searching, and text processing using commands like ls, cd, cat, echo and touch. </li>
        </ul>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='font-light text-2xl'>Hobbies</h2>
        <ul className='md:w-2/5 flex flex-wrap gap-2 justify-between items-center text-white'>
          <li className=' bg-light-brown py-2 px-3 rounded'>Volleyball</li>
          <li className=' bg-light-brown py-2 px-3 rounded'>Skateboarding</li>
          <li className=' bg-light-brown py-2 px-3 rounded'>Golf </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe