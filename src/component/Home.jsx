import React from 'react';
import NavBar from './NavBar';
import Form from './Form';
import EducationExperience from './EducationExperience';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaHtml5, FaCss3Alt, FaReact, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const navLinks = [
    { title: 'Home', path: '#home' },
    { title: 'About', path: '#about' },
    { title: 'Skills', path: '#skills' },
    { title: 'Education & Experience', path: '#education-experience' },
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
      <NavBar title="" links={navLinks} />

      <div
        id="home"
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-blue-400 font-mono text-lg mb-3">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Eliot Owiti
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8">
              <span className="relative inline-block">
                <span className="relative z-10">Marine Engineer</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-500/20 -rotate-1 -z-0"></span>
              </span>
              <span className="mx-3">|</span>
              <span className="relative inline-block">
                <span className="relative z-10">Software Developer</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-cyan-500/20 -rotate-1 -z-0"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Creating innovative solutions at the intersection of marine technology and software development.
            </p>
          </div>
          
          {/* Profile Image */}
          <div className="relative group">
            <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden z-10 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mix-blend-overlay"></div>
              <img 
                src="/images/myself.jpeg" 
                alt="Eliot Owiti"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
          </div>
        </div>

        {/* Social Links */}

        {/* Social Links */}
        <div className="mt-12 flex gap-6 justify-center">
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
      <div id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-3">About Me</span>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Professional Overview
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Marine Engineering</h3>
                  <p className="mt-1 text-gray-600">Expertise in marine systems and automation, with hands-on experience in developing underwater detection technologies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Software Development</h3>
                  <p className="mt-1 text-gray-600">Specializing in building responsive, accessible web applications with modern JavaScript frameworks.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Expertise</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Frontend Development</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Marine Systems</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '94%'}}></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">UI/UX Design</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Experience Section */}
      <EducationExperience />

      {/* Skills Section */}
      <div id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-3">Skills & Expertise</span>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">My Technical Skills</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column - Technical Skills */}
            <div className="space-y-8">
              {/* Languages */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </span>
                  Programming Languages
                </h3>
                <div className="space-y-5">
                  {[
                    { name: 'HTML5', level: '90%', icon: <FaHtml5 className="text-orange-500" /> },
                    { name: 'CSS3', level: '85%', icon: <FaCss3Alt className="text-blue-500" /> },
                    { name: 'JavaScript', level: '80%', icon: <i className="fab fa-js text-yellow-400"></i> },
                    { name: 'Python', level: '75%', icon: <i className="fab fa-python text-blue-700"></i> }
                  ].map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center space-x-2">
                        {skill.icon}
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" 
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </span>
                  Frameworks & Libraries
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'React', icon: <FaReact className="text-blue-400" size={24} /> },
                    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" size={24} /> },
                    { name: 'Node.js', icon: <i className="fab fa-node-js text-green-500" style={{ fontSize: '24px' }}></i> },
                    { name: 'Express', icon: <i className="fas fa-server text-gray-600" style={{ fontSize: '24px' }}></i> }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-white transition-colors border border-gray-100">
                      <div className="w-12 h-12 flex items-center justify-center mb-2">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Professional Skills */}
            <div className="space-y-8">
              {/* Professional Skills */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </span>
                  Professional Skills
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Problem Solving', 'Teamwork', 'Communication', 
                    'Time Management', 'Creativity', 'Adaptability'
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Currently Learning */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Currently Learning
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'Next.js', 'GraphQL', 'Docker', 'AWS'].map((item, index) => (
                    <span key={index} className="px-3 py-1 bg-white text-blue-600 text-sm font-medium rounded-full border border-blue-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-3">
              Get In Touch
            </span>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">Contact Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                  <i className="fas fa-phone-alt text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3"></h3>
                <p className="text-gray-600">+254 113 011 949</p>
                <p className="text-sm text-gray-500 mt-2">Mon - Fri  , 8:00 AM - 5:00 PM</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                  <i className="fas fa-envelope text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3"></h3>
                <p className="text-gray-600">ellyman2021@gmail.com</p>
                <p className="text-sm text-gray-500 mt-2">I'll respond within 24 hours</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                  <i className="fas fa-map-marker-alt text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3"></h3>
                <p className="text-gray-600">Mombasa, Kenya</p>
                <p className="text-sm text-gray-500 mt-2">Available for remote work worldwide</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h3>
              <Form />
              <div className="mt-6 flex items-center">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="px-4 text-sm text-gray-500">OR</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              <div className="mt-6">
                <p className="text-center text-gray-600 mb-4">Connect with me on social media</p>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://www.linkedin.com/in/elliot-manacia-844055342/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a 
                    href="https://github.com/elly-design" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-900 text-white flex items-center justify-center transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a 
                    href="mailto:ellyman2021@gmail.com" 
                    className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                    aria-label="Send Email"
                  >
                    <MdEmail className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
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