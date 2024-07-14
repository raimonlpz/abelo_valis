import React from 'react';
import styles from './DinoGame.module.css';

const Obstacle = ({ position, rotationAngle }) => {
  return (
    <img 
    className={styles.obstacle}
    src={'/abelo/obstacle.png'} 
    alt="Obstacle" 
    style={{ 
      left: `${position}%`, 
      transform: `rotate(${rotationAngle}deg)` 
    }} 
  />
  );
}

export default Obstacle;
