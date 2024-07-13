import React, { useState, useEffect, useRef } from 'react'
import styles from './SnakeGame.module.css'
import GameBoard from './GameBoard';

const SnakeGame = () => {
    const [snake, setSnake] = useState([[5, 5]]);
    const [food, setFood] = useState([10, 10]);
    const [direction, setDirection] = useState('RIGHT');
    const [isGameOver, setIsGameOver] = useState(false);
    const boardSize = 15;
    const gameSpeed = 200; // milliseconds

    const handleKeyDown = (e) => {
        switch (e.key) {
          case 'ArrowUp':
            if (direction !== 'DOWN') setDirection('UP');
            break;
          case 'ArrowDown':
            if (direction !== 'UP') setDirection('DOWN');
            break;
          case 'ArrowLeft':
            if (direction !== 'RIGHT') setDirection('LEFT');
            break;
          case 'ArrowRight':
            if (direction !== 'LEFT') setDirection('RIGHT');
            break;
          default:
            break;
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [direction]);

    useInterval(() => {
        if (!isGameOver) moveSnake();
    }, gameSpeed);

    const moveSnake = () => {
        const newSnake = [...snake];
        const head = [...newSnake[newSnake.length - 1]];
    
        switch (direction) {
          case 'UP':
            head[1] -= 1;
            break;
          case 'DOWN':
            head[1] += 1;
            break;
          case 'LEFT':
            head[0] -= 1;
            break;
          case 'RIGHT':
            head[0] += 1;
            break;
          default:
            break;
        }
    
        newSnake.push(head);
        newSnake.shift();
    
        if (checkCollision(head, newSnake)) {
          setIsGameOver(true);
        } else {
          setSnake(newSnake);
    
          if (head[0] === food[0] && head[1] === food[1]) {
            growSnake();
            generateFood();
          }
        }
    };

    const checkCollision = (head, snake) => {
        if (head[0] < 0 || head[0] >= boardSize || head[1] < 0 || head[1] >= boardSize) {
          return true;
        }
        for (const segment of snake.slice(0, -1)) {
          if (head[0] === segment[0] && head[1] === segment[1]) {
            return true;
          }
        }
        return false;
    };

    const growSnake = () => {
        const newSnake = [...snake];
        newSnake.unshift([]);
        setSnake(newSnake);
    };

    const generateFood = () => {
        const newFood = [
          Math.floor(Math.random() * boardSize),
          Math.floor(Math.random() * boardSize)
        ];
        setFood(newFood);
    };

    const tryAgain = () => {
        setSnake([[5, 5]]);
        setFood([10, 10]);
        setDirection('RIGHT');
        setIsGameOver(false);
    };

    return (
        <div className={styles.snakeGame}>
          {isGameOver ? (
            <div className={styles.gameOver}>
                Game Over!
                <button className={styles.tryAgain} onClick={tryAgain}>Try Again</button>
            </div>
          ) : (
            <GameBoard snake={snake} food={food} boardSize={boardSize} />
          )}
        </div>
    );
}

// Custom hook for setting an interval
const useInterval = (callback, delay) => {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      if (delay !== null) {
        const id = setInterval(() => savedCallback.current(), delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };
  

export default SnakeGame