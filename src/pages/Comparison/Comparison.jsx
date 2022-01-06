import { useState } from 'react';
import ComparisonCard from '../../components/ComparisonCard/ComparisonCard';
import Graph from '../../components/Graph/Graph';
import './comparison.css';

const Comparison = ({ playerInfo }) => {
  const [pp, setPp] = useState({});
  const player1 = playerInfo[0];
  const player2 = playerInfo[1];

  const playerToCompare = (e) => {
    let id = e.target.value;
    let chosen = playerInfo.find((player) => player.name === id);
    setPp(chosen);
    console.log(pp);
  };

  return (
    <div className="compare__container">
      <div className="cardandgraph">
        <div className="cards__container">
          {playerInfo.map((player, index) => {
            return (
              <div key={player.player_api_id}>
                <ComparisonCard player={player} index={index} />
              </div>
            );
          })}
        </div>
        <div className="graph" style={{ width: '100%' }}>
          <Graph player1={player1} player2={player2} />
        </div>
      </div>
    </div>
  );
};

export default Comparison;

{
  /* <div key={player.player_api_id}>
<Modal playerData={player} />;
</div> */
}

{
  /* <PlayerCard key={player.name} player={player} /> */
}
