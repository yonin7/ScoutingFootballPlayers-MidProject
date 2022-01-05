import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Reports from '../assets/Reports.png';

const Modal = ({
  isOpen,
  handleModalClose,
  selectedPlayerReport,
  playerData,
  selectedPlayer,
}) => {
  const modalRoot = document.getElementById('modal-root');

  const handleSelect = (e) => {
    if (e.target.checked) selectedPlayer(playerData);
  };
  const GkAbilities = () => {
    return (
      <div>
        <ul style={{ listStyle: 'none' }}>
          <li>Diving:{playerData.gk_diving}</li>
          <li>Handling:{playerData.gk_handling}</li>
          <li>Kicking:{playerData.gk_kicking}</li>
          <li>Positioning:{playerData.gk_positioning}</li>
          <li>Reflexes:{playerData.gk_reflexes}</li>
        </ul>
      </div>
    );
  };
  const PlayerAbilities = () => {
    return (
      <div>
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            listStyle: 'none',
            fontSize: '1rem',
          }}
        >
          <li> Acceleration: {playerData.acceleration}</li>
          <li> Aggression: {playerData.aggression}</li>
          <li> Agility: {playerData.agility}</li>
          <li> Balance: {playerData.balance}</li>
          <li> Ball Control: {playerData.ball_control}</li>
          <li> Crossing: {playerData.crossing}</li>
          <li> Dribbling: {playerData.dribbling}</li>
          <li> Finishing: {playerData.finishing}</li>
          <li> Free kick: {playerData.free_kick_accuracy}</li>
          <li> Jumping: {playerData.jumping}</li>
          <li> Long Passing: {playerData.long_passing}</li>
          <li> Short Passing: {playerData.short_passing}</li>
          <li> Long Shots: {playerData.long_shots}</li>
          <li> Shot Power: {playerData.shot_power}</li>
          <li> Marking: {playerData.marking}</li>
          <li> Penalties: {playerData.penalties}</li>
          <li> Positioning: {playerData.positioning}</li>
          <li> Sliding Tackle: {playerData.sliding_tackle}</li>
          <li> Sprint Speed: {playerData.sprint_speed}</li>
          <li> Stamina: {playerData.stamina}</li>
          <li> Standing Tackle: {playerData.standing_tackle}</li>
          <li> Strength: {playerData.strength}</li>
          <li> Vision: {playerData.vision}</li>
        </ul>
      </div>
    );
  };

  return ReactDOM.createPortal(
    <div
      onClick={handleModalClose}
      style={{
        position: 'fixed',
        height: '100%',
        width: '100%',
        zIndex: 1,
        top: 0,
        left: 0,
        display: isOpen ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          height: '80vh',
          width: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',

          gap: '2rem',
          padding: '1rem',
          position: 'absolute',
          outline: 'transparent solid 2px',
          outlineOffset: '2px',
          borderRadius: '5%',
        }}
      >
        <div style={{ display: 'flex' }}>
          {' '}
          {/* Header */}
          {playerData.player_name}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5rem',
          }}
        >
          {' '}
          {/* Body */}
          <div
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              className="headerBody"
              style={{
                display: 'flex',
                gap: '3rem',
              }}
            >
              <img src={`${playerData.image}_120.png`} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ul style={{ listStyle: 'none' }}>
                  <li>Team: {playerData.team}</li>
                  <li>value: {playerData.value}</li>
                  <li>Birthday: {playerData.birthday}</li>
                  <li>Height: {playerData.height}</li>
                  <li> Weight: {playerData.weight}</li>
                  <li> Overall Rating: {playerData.overall_rating}</li>
                  <li>Foot: {playerData.preferred_foot}</li>
                  <li>Potential: {playerData.potential}</li>
                </ul>
              </div>
            </div>
          </div>
          {playerData.position === 'GK' ? GkAbilities() : PlayerAbilities()}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',

            fontSize: '0.7rem',
            width: '15rem',
          }}
        >
          {' '}
          {/* Actions */}
          <div className="compareCheckbox">
            <label>Compare Player:</label>
            <input type="checkbox" onChange={(e) => handleSelect(e)} />
          </div>
          <div
            className="reportLink"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '0.7rem',
              width: '15rem',
            }}
          >
            <label>Report:</label>
            <Link
              style={{
                textDecoration: 'none',
                color: '#00ADE6',
              }}
              onClick={() => selectedPlayerReport(playerData)}
              to="/scoutReports"
            >
              <img
                src={Reports}
                alt="ScoutReports"
                style={{
                  width: 32,
                  height: 32,
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>,
    modalRoot.appendChild(document.createElement('div'))
  );
};

export default Modal;
