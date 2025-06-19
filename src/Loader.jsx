import { useEffect, useState } from 'react'
import './loader.css'

export default function Loader({ onFinish, darkMode }) {
  const [progress, setProgress] = useState(0)
  const [breakStage, setBreakStage] = useState(false)
  const [expandStage, setExpandStage] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setBreakStage(true)
          setTimeout(() => setExpandStage(true), 600)
          setTimeout(onFinish, 2800)
          return 100
        }
        return prev + 1
      })
    }, 20)
    return () => clearInterval(interval)
  }, [onFinish])

  const formatted = progress.toString().padStart(3, '0')

  return (
    <div className={`loader-screen${darkMode ? ' dark' : ''} ${expandStage ? 'scale-out' : ''}`}>
      <div className="progress-digits">
        {formatted.split('').map((digit, idx) => (
          <div className="digit-text" key={idx}>{digit}</div>
        ))}
      </div>

      {!breakStage ? (
        <div className="progress-bar">
          <div className="fill-main" style={{ width: `${progress}%` }} />
        </div>
      ) : (
        <div className={`bar-break-wrapper ${expandStage ? 'move' : ''}`}>
          <div className={`bar-piece large ${expandStage ? 'expand' : ''}`} />
          <div className="bar-piece small" />
        </div>
      )}
    </div>
  )
}
