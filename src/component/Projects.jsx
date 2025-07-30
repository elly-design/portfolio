import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobileAlt, FaGlobe } from 'react-icons/fa';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Student Admission Portal',
      description: 'A comprehensive full-stack solution for managing student admissions with real-time tracking and document management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Auth'],
      github: 'https://github.com/elly-design/tbjs-system',
      demo: '#',
      image: 'https://img.freepik.com/free-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?w=800&t=st=1719732000000~exp=1719735600000~hmac=1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
      category: 'web',
      featured: true
    },
    {
      id: 2,
      title: 'Kujia Mtandao',
      description: 'Modern e-commerce platform with seamless user experience and secure payment integration.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Stripe'],
      github: 'https://github.com/elly-design/kujia-mtandao',
      demo: '#',
      image: 'https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=800&t=st=1719732000000~exp=1719735600000~hmac=1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
      category: 'web',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing my projects and skills with modern UI/UX design.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: '#',
      image: 'https://img.freepik.com/free-vector/developer-activity-concept-illustration_114360-1639.jpg?w=800&t=st=1719732000000~exp=1719735600000~hmac=1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
      category: 'web'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <FaGlobe className="mr-2" /> },
    { id: 'web', name: 'Web Development', icon: <FaCode className="mr-2" /> },
    { id: 'mobile', name: 'Mobile Apps', icon: <FaMobileAlt className="mr-2" /> },
    { id: 'iot', name: 'IoT Projects', icon: <FaServer className="mr-2" /> },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const getCategoryIcon = (category) => {
    const cat = categories.find(cat => cat.id === category);
    return cat ? cat.icon : <FaGlobe className="mr-2" />;
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-3">
            My Work
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve specific problems and deliver exceptional user experiences.
          </p>
        </div>
        
        {/* Projects Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                project.featured ? 'border-2 border-blue-100' : 'border border-gray-100'
              }`}
            >
              <div className="h-60 bg-gray-100 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/800x600?text=Project+Image';
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-white/90 text-gray-500 text-xs font-medium rounded-full backdrop-blur-sm">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
                        aria-label="View code on GitHub"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
                        aria-label="View live demo"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    {getCategoryIcon(project.category)}
                    <span className="capitalize">{project.category}</span>
                  </div>
                  <a 
                    href={project.github || '#'} 
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    View Project
                    <FaExternalLinkAlt className="ml-2" size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">No projects found</h3>
            <p className="mt-1 text-gray-500">We couldn't find any projects in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
