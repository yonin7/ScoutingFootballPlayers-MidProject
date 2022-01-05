import { useState } from 'react';
import './comparisoncard.css';

const ComparisonCard = ({ player, index }) => {
  const [color, setColor] = useState('null');
  const playerCheck = () => {
    if (index === 0) setColor('#1c8003');
    else setColor('blue');
  };
  return (
    <div
      className="ComparisonCardContainer"
      style={{ backgroundColor: `${color}` }}
    >
      {() => playerCheck()}
      <div className="nameAndImg">
        <img src={`${player.image}_120.png`} alt="image" />
        <div className="name">
          <ul>
            <li> {player.player_name}</li>
            <li>{player.team}</li>
            <li>{player.birthday}</li>
            <li>{player.position}</li>
          </ul>
        </div>
      </div>
      <div className="valueAndSalary">
        <ul>
          <li>Valued at {player.value}</li>
          <li>
            {' '}
            {player.wage} p.w until {player.date}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComparisonCard;
