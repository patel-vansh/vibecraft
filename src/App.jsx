import { useState, useEffect } from 'react'
import './index.css'
import './loader.css'
import Loader from './Loader'
import FeatureCards from './FeatureCards'
import GraphSection from './GraphSection'
import ImageCarousel from './ImageCarousel'
import DevStats from './DevStats'
import RippleEffect from './RippleEffect'


function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : ''
  }, [darkMode])

  return loading ? (
    <Loader darkMode={darkMode} onFinish={() => setLoading(false)} />
  ) : (
    <div className={darkMode ? 'dark' : ''}>
      <nav className="navbar">
        <div className="nav-left">
          <span className="nav-icon"><img width="40" src="logo.png" alt="Vibecraft Logo" /></span>
          <span className="site-name">Vibecraft</span>
        </div>
        <button
          onClick={() => setDarkMode(dm => !dm)}
          className="theme-toggle"
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
      <FeatureCards />
      <GraphSection />
      <ImageCarousel />
      <DevStats />
      <RippleEffect />
    </div>
  )
}

export default App
