import { useState } from 'react';
import PlayerCard from '../../components/PlayerCard/PlayerCard';

const Comparison = ({ playerInfo }) => {
  const [player, setPlayer] = useState(0);

  const playerToCompare = (id) => {
    let player = playerInfo.find((player) => player.id === id);
  };

  return (
    <div>
      <select name="cars" id="cars">
        {playerInfo.map((player) => {
          return (
            <option value={player.id} onChange={() => playerToCompare(value)}>
              {player.name}
            </option>
          );
        })}
      </select>
      <PlayerCard player={playerInfo} />
      {/* <PlayerCard player={'?'} /> */}
    </div>
  );
};

export default Comparison;
