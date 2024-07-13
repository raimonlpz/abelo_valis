import React from 'react';
import styles from './SnakeGame.module.css'
import Snake from './Snake';
import Food from './Food';

const GameBoard = ({ snake, food, boardSize }) => {
  return (
    <div className={styles.gameBoard} style={{ gridTemplateRows: `repeat(${boardSize}, 1fr)`, gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
      <Snake snake={snake} />
      <Food food={food} />
    </div>
  );
}

export default GameBoard;