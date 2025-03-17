import React from 'react';
import NavBar from './NavBar';
import Form from './Form';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaHtml5, FaCss3Alt, FaReact, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const navLinks = [
    { title: 'Home', path: '#home' },
    { title: 'About', path: '#about' },
    { title: 'Skills', path: '#skills' },
    { title: 'Contact', path: '#contact' },
    { title: 'Portfolio', path: '#portfolio' },
    { title: 'Blog', path: '#blog' },
    { title: 'FAQ', path: '#faq' },
    { title: 'Login', path: '#login' },
    { title: 'Sign Up', path: '#signup' },
    { title: 'Logout', path: '#logout' },
  ];

  return (
    <>
      <NavBar title="Eliot" links={navLinks} />

      <div
        id="home"
        className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white"
        style={{ backgroundImage: 'url(/images/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Header */}
        <h1 className="mt-6 text-5xl font-bold mb-4 text-center">Hi! I'm Eliot Owiti</h1>
        <h2 className="text-2xl font-semibold text-gray-300 text-center mb-6">
          Marine Engineer | Software Developer
        </h2>

        {/* Social Links */}
        <div className="mt-6 flex gap-6 justify-center">
          <a
            href="https://www.linkedin.com/in/elliot-manacia-844055342/"
            target="_blank"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaLinkedin className="text-4xl text-gray-400" />
          </a>
          <a
            href="https://github.com/elly-design"
            target="_blank"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub className="text-4xl text-gray-500" />
          </a>
          <a
            href="mailto:ellyman2021@gmail.com"
            className="hover:text-gray-400 transition duration-300"
          >
            <MdEmail className="text-4xl text-gray-600" />
          </a>
        </div>

        {/* Icon Separator */}
        <div className="mt-10">
          <i className="fas fa-arrow-down text-4xl text-gray-300"></i>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="mt-12 w-4/5 p-12 px-16 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>

        {/* Centered Content */}
        <div className="flex flex-col items-center md:flex-row md:justify-between w-full">
          
          {/* Image Section */}
          <div className="mb-6 md:mb-0 flex justify-center w-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-white opacity-75 rounded-lg"></div>
            <img 
              src="/images/myself.jpeg" 
              alt="Profile" 
              className="object-cover rounded-lg shadow-md relative z-10"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-3/5 text-left md:text-justify">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I am <span className="font-semibold text-gray-900">Eliot Manacia Owiti</span>, a dedicated <span className="font-semibold text-gray-900">Marine Engineer</span>, <span className="font-semibold text-gray-900">Software Developer</span>, and <span className="font-semibold text-gray-900">Front-End Developer</span>. My passion lies in developing ultrasonic underwater microcontroller detectors and designing smart automation systems that enhance marine technology.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              As a Front-End Developer, I specialize in creating visually appealing and user-friendly web interfaces. I have experience working with modern web technologies such as HTML, CSS, JavaScript, and React. My focus is on building responsive and accessible web applications that provide an excellent user experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I am committed to continuous learning and staying ahead of advancements in marine engineering, software development, and front-end development. My dedication to innovation drives me to explore new technologies and implement them in practical real-world applications.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="mt-12 w-4/5 p-12 px-16 rounded-lg shadow-lg mx-auto text-center bg-white">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-wide">My Skills</h2>

        <div className="space-y-8">
          {/* Languages */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 uppercase tracking-wide">Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-md transform transition duration-300 hover:scale-110 hover:bg-blue-600">
                <FaHtml5 size={24} /> HTML
              </span>
              <span className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-md transform transition duration-300 hover:scale-110 hover:bg-green-600">
                <FaCss3Alt size={24} /> CSS
              </span>
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 uppercase tracking-wide">Frameworks</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-bold rounded-full shadow-md transform transition duration-300 hover:scale-110 hover:bg-purple-600">
                <SiTailwindcss size={24} /> Tailwind CSS
              </span>
              <span className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-bold rounded-full shadow-md transform transition duration-300 hover:scale-110 hover:bg-teal-600">
                <FaReact size={24} /> React
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="mt-12 w-3/4 mx-auto flex flex-col md:flex-row justify-between items-stretch space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 p-8 rounded-lg shadow-lg bg-white flex flex-col min-h-full">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            {/* Phone */}
            <p className="text-lg text-gray-800 mb-4 flex items-center">
              <i className="fas fa-phone-alt text-blue-500 mr-3"></i> +254113011949
            </p>

            {/* Email */}
            <p className="text-lg text-gray-800 mb-4 flex items-center">
              <i className="fas fa-envelope text-blue-500 mr-3"></i> ellyman2021@gmail.com
            </p>

            {/* Location */}
            <p className="text-lg text-gray-800 mb-4 flex items-center">
              <i className="fas fa-map-marker-alt text-blue-500 mr-3"></i> Mombasa, Kenya
            </p>

            {/* Working Hours */}
            <p className="text-lg text-gray-800 mb-4 flex items-center">
              <i className="fas fa-clock text-blue-500 mr-3"></i> Mon - Fri: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col min-h-full">
          <Form />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 mt-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://www.linkedin.com/in/elliot-manacia-844055342/"
              target="_blank"
              className="hover:text-gray-400 transition duration-300"
            >
              <FaLinkedin className="text-2xl text-white" />
            </a>
            <a
              href="https://github.com/elly-design"
              target="_blank"
              className="hover:text-gray-400 transition duration-300"
            >
              <FaGithub className="text-2xl text-white" />
            </a>
            <a
              href="mailto: ellyman2021@gmail.com"
              className="hover:text-gray-400 transition duration-300"
            >
              <MdEmail className="text-2xl text-white" />
            </a>
          </div>
          <p className="text-gray-500">&copy; 2025 Eliot Owiti. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}