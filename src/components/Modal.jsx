import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Compare from '../assets/Compare.png';
import Reports from '../assets/Reports.png';

const Modal = ({ isOpen, handleModalClose, reportRequest, compareRequest }) => {
  const modalRoot = document.getElementById('modal-root');

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
        // onClick={alert}
        style={{
          zIndex: 9999,
          backgroundColor: 'white',
          height: '80vh',
          width: '60vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          outline: 'transparent solid 2px',
          outlineOffset: '2px',
          borderRadius: '5%',
        }}
      >
        <div>
          {' '}
          {/* Header */}
          Player Name
        </div>
        <div>
          {' '}
          {/* Body */}
          Player Description / data
        </div>
        <div style={{ display: 'flex' }}>
          {' '}
          {/* Actions */}
          <Link onClick={compareRequest}>
            <img
              src={Compare}
              alt="compare"
              style={{ width: 32, height: 32 }}
            />
          </Link>
          <Link
            style={{
              textDecoration: 'none',
              color: '#00ADE6',
            }}
            onClick={reportRequest}
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
    </div>,
    modalRoot.appendChild(document.createElement('div'))
  );
};

export default Modal;
