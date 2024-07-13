import React from 'react';
import styles from './DinoGame.module.css';

const Obstacle = ({ position }) => {
  return (
    <img 
    className={styles.obstacle}
    src={'/abelo/obstacle.png'} 
    alt="Obstacle" 
    style={{ left: `${position}%` }} 
  />
  );
}

export default Obstacle;
