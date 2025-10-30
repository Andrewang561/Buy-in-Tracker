import type { Player } from '../App'

interface PlayersProps {
    players: Player[];
}

function Players(prop: PlayersProps) {
    return (
        <>
          {prop.players.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.buyIn}</td>
              <td>{p.finalValue}</td>
            </tr>
          ))}
        </>
    );
}

export default Players