import React, { forwardRef, useEffect, useState } from 'react'
import styles from './LinearGallery.module.css'
import Draggable from 'react-draggable'
import GridMakarradas from './GridMakarradas'

// Formerly Makarrada$
const LinearGallery = forwardRef(({
    isLinearGalleryOpen,
    closeLinearGallery,
    maximizeApp,
    minimizeApp,
    onStartDrag,
    onStopDrag
}, ref) => {

    const [images, setImages] = useState([])
    const [flippedCards, setFlippedCards] = useState([]) 
    const [matchedCards, setMatchedCards] = useState([])

    const originalImages = [
        '/abelo/img25.jpg',
        '/abelo/img26.jpg',
        '/abelo/img27.jpg',
        '/abelo/img28.jpg',
        '/abelo/img29.jpg',
        '/abelo/img30.jpg',
        '/abelo/img24.webp',
        '/abelo/img18.webp',
        '/abelo/img14.webp',
        '/abelo/img4.webp',
        '/abelo/img21.webp',
        '/abelo/img13.webp',
    ]

    useEffect(() => {
        const duplicatedImages = [...originalImages, ...originalImages]
        const shuffledImages = duplicatedImages.sort(() => Math.random() - 0.5)
        setImages(shuffledImages)
    }, [])

    const handleCardClick = (index) => {
        if (flippedCards.length === 2 || matchedCards.includes(index)) return 
        
        const newFlippedCards = [...flippedCards, index]
        setFlippedCards(newFlippedCards)

        if (newFlippedCards.length === 2) {
            const [firstIndex, secondIndex] = newFlippedCards
            if (images[firstIndex] === images[secondIndex]) {
                setMatchedCards([...matchedCards, firstIndex, secondIndex])
            } 
            setTimeout(() => setFlippedCards([]), 1000) 
        }
    }

  return (
    <Draggable
        onStart={onStartDrag}
        onStop={onStopDrag}
    >
        <div
          ref={ref}
          className={styles.wrapper}
          style={{
              visibility: isLinearGalleryOpen ? "visible" : "hidden",
          }}
        >
        <div className={styles.left_inner_wrapper}>
            <div className={styles.left_corner_buttons}>
              <img
                onClick={closeLinearGallery}
                className={styles.left_corner_button_img}
                    src="/images/icons/close.png"
                    alt="icns"
                />
                <img
                    onClick={minimizeApp}
                    className={styles.left_corner_button_img}
                    src="/images/icons/minimise.png"
                    alt="icns"
                />
                <img
                    onClick={maximizeApp}
                    className={styles.left_corner_button_img}
                    src="/images/icons/zoom.png"
                    alt="icns"
                />
                <div className={styles.appTitle}></div>
                </div>
            </div>
            <div className={styles.linearGallery}>
                <GridMakarradas 
                    images={images} 
                    flippedCards={flippedCards}
                    matchedCards={matchedCards}
                    handleCardClick={handleCardClick}
                />
            </div>
        </div>
    </Draggable>
  )
})

export default LinearGallery