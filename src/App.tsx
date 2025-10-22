import { useState } from 'react'
import './App.css'
import Players from './components/players'

export interface Player {
  name: string;
  buyIn: number;
  finalValue: number;
}

function App() {

  const [playerValue, setPlayerValue] = useState<Player>({
    name: "Andrew",
    buyIn: 500,
    finalValue: 1000
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted player:", playerValue);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={playerValue.name} onChange={(event) => 
            setPlayerValue({ ...playerValue, name: event.target.value })
          }></input>
        </label>
        <br />
        <label>
          Buy In:
          <input type="number" value={playerValue.buyIn} onChange={(event) =>
            setPlayerValue({ ...playerValue, buyIn: Number(event.target.value)})
          }></input>
        </label>
        <br />
        <label>
          Final Value:
          <input type= "number" value={playerValue.finalValue} onChange={(event) =>
            setPlayerValue({ ...playerValue, finalValue: Number(event.target.value)})
          }></input>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1>Poker Tracker</h1>
      <Players player1={playerValue} />
    </div>
  );
}

export default App;
