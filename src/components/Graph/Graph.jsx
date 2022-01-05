import { useState, useEffect } from 'react';
import './graph.css';

const Graph = ({ player1, player2 }) => {
  const [width, setWidth] = useState(0);
  const [derection, setDerection] = useState('');
  const skills = [
    'acceleration',
    'agility',
    'balance',
    'jumping',
    'sprint_speed',
    'ball_control',
    'crossing',
    'dribbling',
    'finishing',
    'long_passing',
    'long_shots',
    'marking',
    'penalties',
    'strength',
  ];
  const calculator = (skill) => {
    const minus = player1[skill] - player2[skill];
    if (minus < 0) setDerection('forwards');
    else setDerection('backwards');
    const x = document.getElementById(skill);
    x.style.backgroundColor = 'green';
    setWidth(minus);
  };
  return (
    <div className="skillscontainer">
      {skills.map((skill) => {
        return (
          <div className="skillcontainer">
            <div className="skill">{skill}</div>
            <div className="line">
              {player1[skill]}
              <div className="percentage"></div>
              <div className="bar" id={{ skill }}></div>
              {player2[skill]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Graph;
