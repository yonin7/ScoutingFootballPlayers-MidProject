import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import './playerslist.css';

const PlayersList = ({ players, selectedPlayer }) => {
  return (
    <div className="cards__container">
      {players?.map((player, i) => {
        return (
          <PlayerCard
            key={i}
            player={player}
            displayLink={true}
            selectedPlayer={selectedPlayer}
          />
        );
      })}
    </div>
  );
};

export default PlayersList;
