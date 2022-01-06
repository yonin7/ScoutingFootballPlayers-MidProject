import React from 'react';
import './home.css';
import Img from '../../assets/GETZE.jpg';
import DECISIONI from '../../assets/DECISIONI.png';

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <main className="main">
        <h1>The Football Platform</h1>
        <p>
          The professional platform for people working in the football world:
          data, statistics and tools.
          <br />
          <br />
          Analyze teams, matches and players; discover new talents; promote your
          players; learn by the best. Everywhere, from your desktop, tablet or
          mobile.
        </p>
      </main>
    </div>
  );
};

export default Homepage;
