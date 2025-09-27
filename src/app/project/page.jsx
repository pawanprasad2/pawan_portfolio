import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaCode, FaEye, FaPlay, FaImage } from 'react-icons/fa'

function Projectpage() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  
  const projects = [
    {
      id: 1,
      title: "TaskFlow",
      subtitle: "Project Management Platform",
      description: "A comprehensive project management solution with real-time collaboration, timeline tracking, and team analytics. Built with modern React patterns and optimized for performance.",
      year: "2024",
      type: "Web Application",
      stack: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveLink: "https://taskflow-demo.vercel.app",
      githubLink: "https://github.com/yourusername/taskflow",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=entropy&auto=format",
      featured: true,
      status: "Live"
    },
    {
      id: 2,
      title: "WeatherLens",
      subtitle: "Smart Weather Analytics",
      description: "Advanced weather forecasting with AI-powered predictions and interactive climate data visualization. Features real-time updates and location-based insights.",
      year: "2024",
      type: "Progressive Web App",
      stack: ["Next.js", "TypeScript", "D3.js", "OpenAI"],
      liveLink: "https://weatherlens.app",
      githubLink: "https://github.com/yourusername/weatherlens",
      thumbnail: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=entropy&auto=format",
      featured: false,
      status: "Live"
    },
    {
      id: 3,
      title: "CodeShare",
      subtitle: "Developer Collaboration Tool",
      description: "Real-time code sharing platform with syntax highlighting, live cursors, and version control integration. Supports multiple programming languages and themes.",
      year: "2023",
      type: "SaaS Platform",
      stack: ["Vue.js", "Express", "Redis", "WebRTC"],
      liveLink: "https://codeshare-live.com",
      githubLink: "https://github.com/yourusername/codeshare",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=entropy&auto=format",
      featured: true,
      status: "Live"
    },
    {
      id: 4,
      title: "FinanceBot",
      subtitle: "AI Financial Assistant",
      description: "Intelligent financial advisor chatbot with portfolio analysis and personalized investment recommendations. Uses machine learning for market predictions.",
      year: "2023",
      type: "AI Application",
      stack: ["Python", "FastAPI", "TensorFlow", "PostgreSQL"],
      liveLink: "https://financebot.ai",
      githubLink: "https://github.com/yourusername/financebot",
      thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop&crop=entropy&auto=format",
      featured: false,
      status: "Beta"
    },
    {
      id: 5,
      title: "StreamVibe",
      subtitle: "Music Streaming Platform",
      description: "Modern music streaming service with playlist curation, social features, and high-quality audio streaming. Includes recommendation algorithms and artist analytics.",
      year: "2023",
      type: "Media Platform",
      stack: ["React Native", "GraphQL", "AWS", "Stripe"],
      liveLink: "https://streamvibe.music",
      githubLink: "https://github.com/yourusername/streamvibe",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=entropy&auto=format",
      featured: true,
      status: "Live"
    },
    {
      id: 6,
      title: "EcoTracker",
      subtitle: "Sustainability Dashboard",
      description: "Environmental impact tracking application with carbon footprint calculator and sustainability recommendations. Gamified approach to eco-friendly living.",
      year: "2024",
      type: "Mobile App",
      stack: ["Flutter", "Firebase", "Node.js", "Charts.js"],
      liveLink: "https://ecotracker.app",
      githubLink: "https://github.com/yourusername/ecotracker",
      thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop&crop=entropy&auto=format",
      featured: false,
      status: "Coming Soon"
    }
  ]

  return (
    <div className='min-h-screen bg-[#1b1f24] text-white'>
      
      {/* Hero Section */}
      <div className='relative py-16 lg:py-24 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-6'>
          
          {/* Header */}
          <div className='mb-16 lg:mb-20'>
            <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8'>
              <div>
                <h1 className='text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-4'>
                  PROJECTS
                </h1>
                <p className='text-xl lg:text-2xl font-light text-gray-400 max-w-3xl leading-relaxed'>
                  A curated collection of digital experiences, from concept to deployment
                </p>
              </div>
              <div className='mt-8 lg:mt-0 text-right'>
                <div className='text-3xl font-bold mb-1'>{projects.length}</div>
                <div className='text-gray-500 text-sm font-mono'>TOTAL PROJECTS</div>
              </div>
            </div>
            <div className='w-full h-px bg-gray-800'></div>
          </div>

          {/* Projects Grid */}
          <div className='space-y-12 lg:space-y-16'>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative transition-all duration-500 ${
                  hoveredProject && hoveredProject !== project.id ? 'opacity-50' : 'opacity-100'
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Row */}
                <div className='grid lg:grid-cols-12 gap-8 lg:gap-12 items-start'>
                  
                  {/* Thumbnail */}
                  <div className='lg:col-span-5'>
                    <div 
                      className='relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group-hover:scale-[1.02] transition-transform duration-700'
                      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    >
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className='w-full h-full object-cover'
                      />
                      
                      {/* Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      
                      {/* Status Badge */}
                      <div className='absolute top-4 left-4'>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          project.status === 'Live' ? 'bg-green-500 text-white' :
                          project.status === 'Beta' ? 'bg-yellow-500 text-black' :
                          'bg-blue-500 text-white'
                        }`}>
                          {project.status}
                        </span>
                      </div>

                      {/* View Overlay */}
                      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
                        <div className='bg-white/20 backdrop-blur-sm border border-white/30 rounded-full w-16 h-16 flex items-center justify-center'>
                          <FaImage className='w-6 h-6' />
                        </div>
                      </div>

                      {/* Project Number */}
                      <div className='absolute bottom-4 right-4 text-white/80 font-mono text-sm'>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='lg:col-span-7'>
                    <div className='space-y-6'>
                      
                      {/* Meta Info */}
                      <div className='flex flex-wrap items-center gap-4 text-sm text-gray-400'>
                        <span className='font-mono'>{project.year}</span>
                        <div className='w-1 h-1 bg-gray-600 rounded-full'></div>
                        <span>{project.type}</span>
                        <div className='w-1 h-1 bg-gray-600 rounded-full'></div>
                        <span className='text-gray-300'>{project.featured ? 'Featured' : 'Project'}</span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h2 className='text-3xl lg:text-4xl font-bold mb-2 group-hover:text-gray-300 transition-colors'>
                          {project.title}
                        </h2>
                        <p className='text-lg lg:text-xl text-gray-400 font-light'>
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className='text-gray-300 leading-relaxed text-base lg:text-lg'>
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div>
                        <div className='text-sm text-gray-500 mb-3 font-mono'>TECH STACK</div>
                        <div className='flex flex-wrap gap-2'>
                          {project.stack.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className='px-3 py-1 bg-gray-800/60 border border-gray-700/50 text-gray-300 text-sm rounded-full hover:border-gray-600 transition-colors'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='flex items-center justify-center space-x-3 bg-white text-black py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 group/btn'
                        >
                          <FaEye className='w-4 h-4' />
                          <span className='font-semibold'>View Live</span>
                          <FaArrowRight className='w-3 h-3 group-hover/btn:translate-x-1 transition-transform' />
                        </a>
                        
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='flex items-center justify-center space-x-3 border border-gray-600 text-white py-3 px-6 rounded-xl hover:border-gray-400 hover:bg-gray-900/50 transition-all duration-300 group/btn'
                        >
                          <FaGithub className='w-4 h-4' />
                          <span className='font-semibold'>Source Code</span>
                          <FaCode className='w-3 h-3 group-hover/btn:scale-110 transition-transform' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Border */}
                <div className='mt-12 lg:mt-16 h-px bg-gray-800/50'></div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className='mt-20 lg:mt-32 pt-12 border-t border-gray-800'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div>
                <h3 className='text-2xl lg:text-3xl font-bold mb-4'>Ready to collaborate?</h3>
                <p className='text-gray-400 text-lg leading-relaxed'>
                  I'm always excited to work on new projects and bring innovative ideas to life. Let's create something extraordinary together.
                </p>
              </div>
              
              <div className='grid grid-cols-2 gap-8'>
                <div className='text-center lg:text-left'>
                  <div className='text-2xl lg:text-3xl font-bold mb-2'>100k+</div>
                  <div className='text-gray-500'>Users Impacted</div>
                </div>
                <div className='text-center lg:text-left'>
                  <div className='text-2xl lg:text-3xl font-bold mb-2'>98%</div>
                  <div className='text-gray-500'>Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projectpage