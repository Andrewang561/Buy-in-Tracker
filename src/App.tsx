import { useState } from 'react'
import './App.css'
import PlayerForm from 'components/PlayerForm.tsx';

export interface Player {
  name: string;
  buyIn: number;
  finalValue: number;
}

function App() {
  const [players, setPlayers] = useState<Player[]>([]);

  const totalBuyIn = players.reduce((sum, p) => sum + p.buyIn, 0);
  const totalValue = players.reduce((sum, p) => sum + p.finalValue, 0);

  const addPlayer = (player: Player) => {
    setPlayers([...players, player]);
  };

  return (
    <div className="App">
      <h1>Poker Tracker</h1>
      <PlayerForm onAdd={addPlayer} />
      <PlayerList players={players} />
      <Totals totalBuyIn={totalBuyIn} totalValue={totalValue} />
    </div>
  );
}

export default App
