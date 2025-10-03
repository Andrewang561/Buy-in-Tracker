import { useState } from "react";
import type { Player } from "../App";

interface PlayerFormProps {
  onAdd: (player: Player) => void;
}

function PlayerForm({ onAdd }: PlayerFormProps) {
  const [name, setName] = useState("");
  const [buyIn, setBuyIn] = useState<number>(0);
  const [finalValue, setFinalValue] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ name, buyIn, finalValue });
    setName("");
    setBuyIn(0);
    setFinalValue(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Player Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Buy In"
        value={buyIn}
        onChange={(e) => setBuyIn(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Final Value"
        value={finalValue}
        onChange={(e) => setFinalValue(Number(e.target.value))}
      />
      <button type="submit">Add Player</button>
    </form>
  );
}

export default PlayerForm;