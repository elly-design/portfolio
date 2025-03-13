import React from 'react'
import NavBar from './NavBar'
import Form from '../component/Form';

export default function Home() {

  const navLinks = [
    { title: 'Home', path: '/home' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Services', path: '/services' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Blog', path: '/blog' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Login', path: '/login' },
    { title: 'Sign Up', path: '/signup' },
    { title: 'Logout', path: '/logout' },
  ]
 
  return (
    <>

     <NavBar 
     title="Eliot"
     links={navLinks} 
     />

     
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      {/* Header */}
      <h1 className=" mt-6 text-5xl font-bold mb-4">Eliot Manacia Owiti</h1>
      <h2 className="text-2xl font-semibold text-gray-300">Marine Engineer | Software Developer</h2>

      {/* About Section */}
      <div className="mt-6 w-3/4 text-center">
        <p className="text-lg text-gray-200 leading-relaxed">
          I specialize in marine engineering, robotics and software development. Passionate about creating innovative ultrasonic underwater microcontroller detectors and designing smart automation systems.
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex gap-4">
        <a
          href="https://www.linkedin.com/in/elliot-manacia-844055342/"
          target="_blank"
          className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/elly-design"
          target="_blank"
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-600 transition duration-300"
        >
          GitHub
        </a>
        <a
          href="mailto: ellyman2021@gmail.com"
          className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Contact Me
        </a>
      </div>
      <Form />
    </div>
    </>
  )
}

