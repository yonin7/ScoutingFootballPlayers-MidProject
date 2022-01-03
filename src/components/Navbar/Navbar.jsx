import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar__container">
      <Link style={{ textDecoration: 'none', color: '#00ADE6' }} to="/">
        <img src=" https://svgshare.com/i/dD4.svg" alt="Home" />
      </Link>
      <div className="rigthIcons">
        <Link style={{ textDecoration: 'none', color: '#00ADE6' }} to="/search">
          <img src="https://i.ibb.co/2W69mky/Scout.png" alt="search" />
        </Link>
        <Link
          style={{ textDecoration: 'none', color: '#00ADE6' }}
          to="/scoutReports"
        >
          <img
            src="https://i.ibb.co/568JMyn/Giornalista.png"
            alt="ScoutReports"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
