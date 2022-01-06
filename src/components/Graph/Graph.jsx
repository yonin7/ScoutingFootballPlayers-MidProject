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
  const calculator = (skill) => player1[skill] - player2[skill];

  return (
    <>
      {skills.map((skill) => (
        <dd className={`percentage percentage-${calculator(skill)}`}>
          <span className="text">{skill}</span>
        </dd>
      ))}
    </>
  );
};

export default Graph;
