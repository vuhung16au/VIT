import { useState } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here (e.g., send to API or email service)
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub className="w-6 h-6" />,
      url: 'https://github.com',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-6 h-6" />,
      url: 'https://linkedin.com',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: <FiTwitter className="w-6 h-6" />,
      url: 'https://twitter.com',
      color: 'hover:text-sky-500 dark:hover:text-sky-400'
    },
    {
      name: 'Email',
      icon: <FiMail className="w-6 h-6" />,
      url: 'mailto:your.email@example.com',
      color: 'hover:text-red-500 dark:hover:text-red-400'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span>Send Message</span>
                <FiSend className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, 
                or opportunities to be part of your vision. Feel free to reach 
                out through any of the channels below.
              </p>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target={social.name !== 'Email' ? '_blank' : undefined}
                      rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                      className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-md`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-3">
                  <FiMail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a 
                      href="mailto:your.email@example.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Notice */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Quick Response:</span> I typically 
                respond to messages within 24-48 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2026 Your Name. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
