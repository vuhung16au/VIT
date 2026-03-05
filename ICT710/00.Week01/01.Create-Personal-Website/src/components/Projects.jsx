import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Node.js. Includes user authentication, product management, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates. Features include task assignments, progress tracking, and team collaboration tools.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts. Integrates with weather APIs to provide real-time data.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
      tags: ['React', 'API Integration', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Portfolio CMS',
      description: 'A content management system for portfolio websites. Allows easy content updates, project management, and blog posting with a user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
      tags: ['React', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Social Media Analytics',
      description: 'An analytics dashboard for social media metrics. Provides insights into engagement, reach, and audience demographics with interactive visualizations.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['React', 'D3.js', 'REST API'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Fitness Tracker',
      description: 'A mobile-responsive fitness tracking application. Users can log workouts, track progress, set goals, and view detailed analytics of their fitness journey.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
