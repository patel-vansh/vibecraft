import { useState, useEffect } from 'react'
import './index.css'
import './loader.css'
import Loader from './Loader'
import FeatureCards from './FeatureCards'
import GraphSection from './GraphSection'
import ImageCarousel from './ImageCarousel'


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
      <button
        onClick={() => setDarkMode(dm => !dm)}
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 10000,
          padding: '0.5em 1em',
          borderRadius: '1em',
          border: 'none',
          background: 'var(--nav-bg)',
          color: 'var(--text-color)',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
        }}
        aria-label="Toggle dark mode"
      >
        {darkMode ? '🌙 Dark' : '☀️ Light'}
      </button>
      <FeatureCards />
      <GraphSection />
      <ImageCarousel />
    </div>
  )
}

export default App
