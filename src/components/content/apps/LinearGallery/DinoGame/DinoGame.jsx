import React, { useState, useEffect, useRef } from 'react';
import styles from './DinoGame.module.css';
import Obstacle from './Obstacle';
import Dino from './Dino';


const DinoGame = () => {
   const [dinoPosition, setDinoPosition] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [obstaclePosition, setObstaclePosition] = useState(100);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameSpeed, setGameSpeed] = useState(30); // Starting speed
  const [score, setScore] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      let jumpHeight = 0;
      const maxJumpHeight = 140; // Increased jump height
      const jumpSpeed = 15;
      const jumpInterval = setInterval(() => {
        if (jumpHeight < maxJumpHeight) { // Jump height
          jumpHeight += 6; // Jump increment
        } else {
          clearInterval(jumpInterval);
          const fallInterval = setInterval(() => {
            if (jumpHeight > 0) {
              jumpHeight -= 6; // Fall increment
            } else {
              clearInterval(fallInterval);
              setIsJumping(false);
            }
            setDinoPosition(jumpHeight);
          }, jumpSpeed);
        }
        setDinoPosition(jumpHeight);
      }, jumpSpeed);
    }
  };

  useEffect(() => {
    const obstacleInterval = setInterval(() => {
      if (!isGameOver) {
        if (obstaclePosition > -10) { // Allow obstacle to move off-screen
          setObstaclePosition(obstaclePosition - (1 + score * 0.05)); // Increase speed based on score
          setRotationAngle(prevAngle => (prevAngle + 3) % 360);
        } else {
          setObstaclePosition(100);
          setScore(prevScore => prevScore + 1); // Increment score when obstacle resets
          if (score % 5 === 0) { // Increase game speed every 5 points
            setGameSpeed(prevSpeed => Math.max(10, prevSpeed - 2)); // Increase speed
          }
        }
      }
    }, gameSpeed);

    return () => clearInterval(obstacleInterval);
  }, [obstaclePosition, isGameOver, score, gameSpeed]);

  useEffect(() => {
    if (obstaclePosition < 55 && obstaclePosition > 45 && dinoPosition < 5) {
      setIsGameOver(true);
    }
  }, [obstaclePosition, dinoPosition]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space' && !isGameOver) {
        handleJump();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isGameOver]);

  const tryAgain = () => {
    setDinoPosition(0);
    setObstaclePosition(100);
    setIsGameOver(false);
    setIsJumping(false);
    setScore(0);
    setGameSpeed(30); // Reset game speed
    setRotationAngle(0);
  };


  return (
    <div className={styles.dinoGame} onClick={!isGameOver ? handleJump : null}>
      <img src="/abelo/sky.webp" alt="Sky" />
      <img src="/abelo/sky.webp" alt="Sky" />
      <div className={styles.score}>
        Score: {score * 10}
      </div>
      <Dino position={dinoPosition} />
      <Obstacle position={obstaclePosition} rotationAngle={rotationAngle} />
      {isGameOver && (
        <div className={styles.gameOver}>
          Game Over!
          <button className={styles.tryAgain} onClick={tryAgain}>Try Again</button>
        </div>
      )}
    </div>
  );
}

export default DinoGame;

