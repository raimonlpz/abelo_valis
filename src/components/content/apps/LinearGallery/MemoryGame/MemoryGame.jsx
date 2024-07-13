import React, { useEffect, useState } from 'react'
import GridMakarradas from './GridMakarradas'

export default function MemoryGame() {
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
    <GridMakarradas 
        images={images} 
        flippedCards={flippedCards}
        matchedCards={matchedCards}
        handleCardClick={handleCardClick}
    />
  )
}
