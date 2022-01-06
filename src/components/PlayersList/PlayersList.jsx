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
          <div key={i}>
            <PlayerCard
              player={player}
              displayLink={true}
              onCardClick={onCardClick}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PlayersList;
