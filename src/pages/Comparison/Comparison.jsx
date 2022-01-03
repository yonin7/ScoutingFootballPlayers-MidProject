import { useState } from 'react';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import './comparison.css';

const Comparison = ({ playerInfo }) => {
  const [pp, setPp] = useState({});

  const playerToCompare = (e) => {
    let id = e.target.value;
    let chosen = playerInfo.find((player) => player.name === id);
    setPp(chosen);
    console.log(pp);
  };

  return (
    <div className="compare__container">
      {playerInfo.map((player) => {
        return <PlayerCard key={player.name} player={player} />;
      })}
    </div>
  );
};

export default Comparison;
