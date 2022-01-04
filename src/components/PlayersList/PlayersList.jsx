import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import './playerslist.css';

const PlayersList = ({ players, selectedPlayer, onCardClick }) => {
  return (
    <div className="cards__container">
      {players?.map((player, i) => {
        return (
          <PlayerCard
            key={i}
            player={player}
            displayLink={true}
            selectedPlayer={selectedPlayer}
            onCardClick={onCardClick}
          />
        );
      })}
    </div>
  );
};

export default PlayersList;
