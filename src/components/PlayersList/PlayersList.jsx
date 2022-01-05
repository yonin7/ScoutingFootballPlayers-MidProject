import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import './playerslist.css';

const PlayersList = ({ players, onCardClick, onScroll }) => {
  return (
    <div
      className="cards__container"
      style={{ overflowY: 'scroll' }}
      onScroll={onScroll}
    >
      {players?.map((player, i) => {
        return (
          <PlayerCard
            key={i}
            player={player}
            displayLink={true}
            onCardClick={onCardClick}
          />
        );
      })}
    </div>
  );
};

export default PlayersList;
