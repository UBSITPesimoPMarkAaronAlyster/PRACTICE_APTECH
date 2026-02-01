import { useState } from 'react'
import './App.css'

function App() {
  const [answer, setAnswer] = useState('')
  const [noStyle, setNoStyle] = useState({})

  const handleNoClick = () => {
    const x = Math.random() * 300 - 150
    const y = Math.random() * 300 - 150
    setNoStyle({
      transform: `translate(${x}px, ${y}px)`
    })
  }

  return (
    <div className="container">
      <h1>💖 Happy Valentine’s Day 💖</h1>

      {answer === '' && (
        <>
          <p className="question">
            Will you be my Valentine? 🌹
          </p>

          <div className="buttons">
            <button className="yes" onClick={() => setAnswer('yes')}>
              Yes 💕
            </button>

            <button
              className="no"
              style={noStyle}
              onMouseEnter={handleNoClick}
            >
              No 😅
            </button>
          </div>
        </>
      )}

      {answer === 'yes' && (
        <div className="yes-message">
          <h2>YAYYY 💘</h2>
          <p>
            I can’t wait to spend Valentine’s Day with you 💕  
            Thank you for making me happy every day 🌸
          </p>
        </div>
      )}
    </div>
  )
}

export default App
