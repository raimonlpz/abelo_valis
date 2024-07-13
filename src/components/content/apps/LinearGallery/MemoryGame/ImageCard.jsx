import React from 'react';
import styles from '../LinearGallery.module.css'

const ImageCard = ({ src, index, isFlipped, handleClick }) => {
  return (
    <div className={styles.galleryItem} onClick={() => handleClick(index)}>
      <img 
        src={src} 
        alt={`Card ${index}`} 
        className={`${styles.galleryImage} ${isFlipped ? '' : styles.pixelated}`} 
      />
    </div>
  );
}

export default ImageCard;