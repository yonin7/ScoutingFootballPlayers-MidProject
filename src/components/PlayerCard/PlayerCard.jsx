import { Link } from 'react-router-dom';
import './playercard.css';
const PlayerCard = ({ player, displayLink = false, onCardClick }) => {
  console.log(player);
  return (
    <div className="card__container" onClick={() => onCardClick(player)}>
      <div className="img__container">
        <h4>{player.player_name}</h4>
        <img src={`${player.image}_120.png`} />
        <h5 className="position">{player.position} </h5>
      </div>
      <div className="shareAndLike">
        <div className="like">🖤</div>
        <div className="share">
          <img
            src="https://api.icons8.com/download/a5d38503865a8990ff38b46357345debdb740e3d/Android_L/PNG/256/Very_Basic/share-256.png"
            alt="Share"
          />
        </div>
      </div>
      <div className="titles">
        <h5>Age: {player.birthday}</h5>
        <h5>height: {player.height} m</h5>
        <h5>weight: {player.weight} Kg</h5>
      </div>
    </div>
  );
};

export default PlayerCard;
