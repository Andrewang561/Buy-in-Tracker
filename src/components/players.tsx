import type { Player } from '../App'

interface PlayersProps {
    player1: Player;
}

function Players({ player1 }: PlayersProps) {
    return <tr>
        <td>{player1.name}</td>
        <td>{player1.buyIn}</td>
        <td>{player1.finalValue}</td>
    </tr>
}

export default Players