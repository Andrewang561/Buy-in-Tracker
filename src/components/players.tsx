import type { Player } from '../App'

interface PlayersProps {
    player1: Player;
}

function Players({ player1 }: PlayersProps) {
    return <h1>{player1.name}: Buy In: {player1.buyIn} Final Value: {player1.finalValue}</h1>
}

export default Players