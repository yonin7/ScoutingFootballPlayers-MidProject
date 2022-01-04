import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Search from '../../assets/SearchPeople.png';
import Compare from '../../assets/Compare.png';
import Reports from '../../assets/Reports.png';

const Navbar = ({ reportsCounter }) => {
  return (
    <nav className="navbar__container">
      <Link style={{ textDecoration: 'none', color: '#00ADE6' }} to="/">
        <img src=" https://svgshare.com/i/dD4.svg" alt="Home" />
      </Link>
      <div className="rigthIcons">
        <Link style={{ textDecoration: 'none', color: '#00ADE6' }} to="/search">
          <img src={Search} alt="search" />
        </Link>
        <Link to="/comparison">
          <img src={Compare} alt="compare" />
        </Link>
        <div className="report">
          <Link
            style={{
              textDecoration: 'none',
              color: '#00ADE6',
            }}
            to="/scoutReports"
          >
            <img src={Reports} alt="ScoutReports" />
          </Link>

          <div className="counter">{reportsCounter}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
