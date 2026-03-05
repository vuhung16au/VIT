import { FiArrowDown } from 'react-icons/fi'

const Home = () => {
  const scrollToAbout = (e) => {
    e.preventDefault()
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center section-padding pt-24"
    >
      <div className="container-custom text-center">
        <div className="space-y-6 animate-fadeIn">
          {/* Greeting */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium">
            Hi, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
            Full-Stack Developer
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Focused on frontend development and creating intuitive, 
            visually appealing user experiences with modern web technologies.
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <a
              href="#about"
              onClick={scrollToAbout}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span>Learn More About Me</span>
              <FiArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FiArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  )
}

export default Home
