import React from 'react';
import styles from './SnakeGame.module.css'

const Snake = ({ snake }) => {
  const headSegment = snake[snake.length - 1];
  const bodySegments = snake.slice(0, -1);

  return (
    <>
      {bodySegments.map((segment, index) => (
        <div 
          key={index} 
          className={styles.snakeSegment} 
          style={{ gridRowStart: segment[1] + 1, gridColumnStart: segment[0] + 1 }}
        />
      //   <div 
      //   className={styles.snakeSegment}
      //   style={{ gridRowStart: segment[1] + 1, gridColumnStart: segment[0] + 1 }}
      // >
      //   <img src="/abelo/snakehead.png" alt="Snake Head" className={styles.snakeHeadImg} />
      // </div>
      ))}
      <div 
        className={styles.snakeHead}
        style={{ gridRowStart: headSegment[1] + 1, gridColumnStart: headSegment[0] + 1 }}
      >
        <img src="/abelo/snakehead.png" alt="Snake Head" className={styles.snakeHeadImg} />
      </div>
    </>
  );
}

export default Snake;