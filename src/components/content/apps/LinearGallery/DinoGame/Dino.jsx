import React from 'react';
import styles from './DinoGame.module.css';

const Dino = ({ position }) => {
  return (
    <img 
      className={styles.dino}
      src="/abelo/runner.gif"
      alt="Dino" 
      style={{ bottom: `${position}px` }} 
    />
  );
}

export default Dino;
