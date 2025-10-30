import { useState } from 'react'
import './App.css'
import Players from './components/players'

export interface Player {
  name: string;
  buyIn: number | "";
  finalValue: number | "";
}

function App() {
  const emptyPlayer: Player = {name: "", buyIn: "", finalValue: ""};

  const [playerValue, setPlayerValue] = useState<Player>(emptyPlayer);

  const [formValue, setFormValue] = useState<Player>(playerValue);

  const [allPlayers, setAllPlayers] = useState<Player[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]:
        name === "name"
          ? value 
          : Number(value), 
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setPlayerValue(formValue);
    setFormValue(emptyPlayer);
    setAllPlayers([...allPlayers, formValue]);
  };

  return (
    <div className="App">
      <h1>Poker Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formValue.name} onChange={handleChange}></input>
        </label>
        <br />
        <label>
          Buy In:
          <input type="number" name="buyIn" value={formValue.buyIn} onChange={handleChange}></input>
        </label>
        <br />
        <label>
          Final Value:
          <input type= "number" name="finalValue" value={formValue.finalValue} onChange={handleChange}></input>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Buy In</th>
            <th>Final Value</th>
          </tr>
        </thead>
        <tbody>
          <Players players={allPlayers}></Players>
        </tbody>
      </table>
    </div>
  );
}

export default App;
