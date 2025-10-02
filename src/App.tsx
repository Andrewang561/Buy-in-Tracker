import { useState } from 'react'
import './App.css'

function App() {
  const [playerInfo, setPlayerInfo] = useState({name: "", buyIn: 0})
  
  const handleClick = () => {
    setPlayerInfo({name: "Andrew", buyIn: 100});
  }

  return (
    <>
      <h1>Poker Buy In Tracker</h1>
      <div className="card">
        <button onClick={handleClick}>
          Update Player Info
        </button>
        <p>
          Player: {playerInfo.name} Buy In: ${playerInfo.buyIn}
        </p>
      </div>
    </>
  )
}

export default App
