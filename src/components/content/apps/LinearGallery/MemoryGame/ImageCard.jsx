import React from 'react';
import styles from '../LinearGallery.module.css'

const ImageCard = ({ src, index, isFlipped, handleClick }) => {

  const handleTouchStart = (callback) => (e) => {
    e.preventDefault();
    callback();
  };

  return (
    <div className={styles.galleryItem} onClick={() => handleClick(index)} onTouchStart={() => (handleClick(index))}>
      <img
        src={src}
        alt={`Card ${index}`}
        className={`${styles.galleryImage} ${isFlipped ? '' : styles.pixelated}`}
      />
    </div>
  );
}

export default ImageCard;