import { Link } from 'react-router-dom';
import './playercard.css';
const PlayerCard = ({ selectedPlayer, player, displayLink = false }) => {
  const chosenPlayer = (e) => {
    console.log(player);
    if (e.target.checked) selectedPlayer(player);
  };
  return (
    <div className="card__container">
      <div className="img__container">
        <h4>{player.name}</h4>
        <img src="https://images.beinsports.com/9B6uAk4Fq1KpzsqatP6ekliPxlk=/full-fit-in/1000x0/3230619-KAKA_REAL_MADRID.jpg" />
        <h5 className="position">{player.position}POS </h5>
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
        <h5>Age:{player.birth}</h5>
        <h5>heigth:{player.heigth}</h5>
        <h5>weigth:{player.weigth}</h5>
      </div>
      <div className="links__container">
        {displayLink && (
          <Link to="/comparison">
            <img
              src="https://i.ibb.co/BCMVF0P/betting-company-1.png"
              alt="compare"
            />
          </Link>
        )}
        <Link to={{ pathname: '/scoutReports', state: { player } }}>
          <img
            src="https://i.ibb.co/568JMyn/Giornalista.png"
            alt="ScoutReports"
          />
        </Link>
        <input type="checkbox" onChange={(e) => chosenPlayer(e)}></input>
      </div>
    </div>
  );
};

export default PlayerCard;
