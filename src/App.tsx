import { useState } from 'react'
import './App.css'
import Players from './components/players'

export interface Player {
  name: string;
  buyIn: number;
  finalValue: number;
}

function App() {
  const temp: Player = {
    name: "Andrew",
    buyIn: 500,
    finalValue: 1000
  }
  return (
    <div className="App">
      <h1>Poker Tracker</h1>
      <Players player1={temp} />
    </div>
  );
}

export default App
