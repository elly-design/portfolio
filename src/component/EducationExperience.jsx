import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaChevronDown, FaChevronRight } from 'react-icons/fa';

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [expandedItems, setExpandedItems] = useState([1]);

  const toggleItem = (id) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter(itemId => itemId !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  const educationData = [
    {
      id: 1,
      year: '2024-2025',
      title: 'Technical University of Mombasa (TUM)',
      degree: 'KIEPS PROGRAM',
      description: [
        'Software Engineering',
        'Digital Marketing'
      ],
      icon: <FaGraduationCap className="text-blue-500" />,
      type: 'education',
      achievements: [
        'Developed a full-stack student management system',
        'Specialized in modern web technologies'
      ]
    },
    {
      id: 2,
      year: '2023-2024',
      title: 'AFRIBOT ROBOTICS',
      description: ['SOFTWARE ENGINEERING'],
      icon: <FaBriefcase className="text-green-500" />,
      type: 'experience'
    },
    {
      id: 3,
      year: '2020-2023',
      title: 'BANDARI COLLEGE',
      description: [],
      icon: <FaGraduationCap className="text-blue-500" />,
      type: 'education'
    },
     
  ];

  const filteredData = activeTab === 'all' 
    ? [...educationData]
    : educationData.filter(item => item.type === activeTab);

  return (
    <section id="education-experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-3">
            My Academic & Professional Journey
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Education & Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my academic achievements and professional experiences.
          </p>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              <FaGraduationCap className="mr-2" />
              Education
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              <FaBriefcase className="mr-2" />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              View All
            </button>
          </div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {filteredData.map((item, index) => {
            const isExpanded = expandedItems.includes(item.id);
            
            return (
              <div 
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <div className="flex items-center mt-1">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                          {item.year}
                        </span>
                        {item.degree && (
                          <span className="ml-2 text-sm text-gray-600">{item.degree}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
                  </button>
                </div>
                
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    {item.description && item.description.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Key Areas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.description.map((desc, i) => (
                            <span 
                              key={`${item.id}-desc-${i}`}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
                            >
                              {desc}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {item.achievements && item.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <li key={`${item.id}-ach-${i}`} className="flex items-start">
                              <span className="text-blue-500 mr-2 mt-1">•</span>
                              <span className="text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
          </div>
          
          <div className="mt-20 text-center px-4">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">My Certifications</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Here are some of the professional certifications I've earned throughout my journey.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-5xl mx-auto transform transition-all duration-300 hover:shadow-2xl">
              <div className="relative overflow-hidden rounded-xl border-4 border-gray-100 shadow-inner bg-white">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse text-gray-300">Loading certificate...</div>
                </div>
                <div className="relative w-full h-[70vh] flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                  <img 
                    src="/images/skies.jpeg" 
                    alt="Professional Certification" 
                    className="absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-500"
                    style={{
                      filter: 'contrast(1.3) brightness(0.9) saturate(1.2) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                      imageRendering: 'crisp-edges',
                      opacity: 0,
                      transition: 'opacity 0.5s ease-in-out, filter 0.3s ease',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      backgroundColor: '#f8f9fa',
                      padding: '1rem',
                      boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)'
                    }}
                    onLoad={(e) => {
                      e.target.style.opacity = '1';
                      const loadingText = document.getElementById('loading-text');
                      if (loadingText) loadingText.style.display = 'none';
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      const fallbackText = document.createElement('div');
                      fallbackText.className = 'text-center p-4 text-gray-500';
                      fallbackText.textContent = 'Certificate image could not be loaded. Please check the file path.';
                      e.target.parentNode.appendChild(fallbackText);
                      const loadingText = document.getElementById('loading-text');
                      if (loadingText) loadingText.style.display = 'none';
                    }}
                  />
                  <div id="loading-text" className="text-gray-400">Loading certificate...</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a 
                    href="/images/skies.jpeg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    View Full Size
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-800">Professional Certification</h3>
                <p className="text-gray-600 mt-2">Issued by Institution Name</p>
                <p className="text-sm text-gray-500 mt-2">Click on the certificate to view in full size</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default EducationExperience;
