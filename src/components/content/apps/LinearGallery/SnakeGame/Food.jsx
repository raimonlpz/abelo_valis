import React from 'react';
import styles from './SnakeGame.module.css'

const Food = ({ food }) => {
  return (
    <div 
      className={styles.food}
      style={{ gridRowStart: food[1] + 1, gridColumnStart: food[0] + 1 }}
    >
      <img src="/images/customicons/gun.png" alt="Food" className={styles.foodImg} />
    </div>
  );
}

export default Food;