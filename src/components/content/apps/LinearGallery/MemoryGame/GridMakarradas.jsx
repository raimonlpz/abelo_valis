import React from 'react';
import styles from '../LinearGallery.module.css'
import ImageCard from './ImageCard';

const GridMakarradas = ({ images, flippedCards, matchedCards, handleCardClick }) => {
    return (
        <div className={styles.gallery}>
          {images.map((src, index) => (
            <ImageCard
                key={index}
                src={src}
                index={index}
                isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
                handleClick={handleCardClick}
          />
          ))}
        </div>
      );
}

export default GridMakarradas