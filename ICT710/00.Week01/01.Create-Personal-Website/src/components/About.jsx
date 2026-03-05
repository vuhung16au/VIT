import { FiCode, FiLayout, FiZap } from 'react-icons/fi'

const About = () => {
  const skills = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive interfaces with React, Tailwind CSS, and modern JavaScript.'
    },
    {
      icon: <FiLayout className="w-8 h-8" />,
      title: 'UX Design',
      description: 'Creating intuitive and visually appealing designs that enhance user experience and engagement.'
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'Developing end-to-end solutions with modern frameworks and best practices for scalable applications.'
    }
  ]

  const technologies = [
    'React', 'JavaScript', 'TypeScript', 'Tailwind CSS',
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
    'Git', 'Docker', 'REST APIs', 'GraphQL'
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional web experiences
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Image and Introduction */}
          <div className="space-y-6">
            <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                YN
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Hello! I'm a Full-Stack Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                With a strong focus on frontend development and user experience design, 
                I specialize in building modern web applications that combine functionality 
                with aesthetics. I have experience working with React, Tailwind CSS, and 
                other cutting-edge web technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                In my projects, I strive to create intuitive and visually appealing 
                interfaces that provide seamless user experiences. I'm passionate about 
                delivering high-quality web applications that meet both user needs and 
                business objectives.
              </p>
            </div>
          </div>

          {/* Right Column - Skills and Technologies */}
          <div className="space-y-8">
            {/* Skills Cards */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-accent text-white rounded-lg">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light hover:shadow-md transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
