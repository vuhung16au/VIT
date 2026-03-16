import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <div className="min-h-screen">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
