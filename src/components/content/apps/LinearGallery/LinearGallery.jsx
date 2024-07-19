import React, { forwardRef, useRef, useState } from 'react'
import styles from './LinearGallery.module.css'
import Draggable from 'react-draggable'
import MemoryGame from './MemoryGame/MemoryGame'
import SnakeGame from './SnakeGame/SnakeGame'
import DinoGame from './DinoGame/DinoGame'

// Formerly Makarrada$ / Game$
const LinearGallery = forwardRef(({
    isLinearGalleryOpen,
    closeLinearGallery,
    maximizeApp,
    minimizeApp,
    onStartDrag,
    onStopDrag
}, ref) => {

    const changerRef = useRef()
    const [currentGame, setCurrentGame] = useState('memory')

    const changeGame = () => {
        if (currentGame ==='memory') {
            setCurrentGame('snake')
        } else if (currentGame === 'snake') {
            setCurrentGame('dino')
        } else {
            setCurrentGame('memory')
        }
        changerRef.current.blur()
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
                 <div className={styles.closeX}>&#10005;</div>
                 <div className={styles.miniX}>-</div>
                <div className={styles.appTitle}>
                    <button className={styles.macButton} onClick={changeGame} ref={changerRef}>Cambiar Juego</button>
                </div>
                </div>
            </div>
            <div className={styles.linearGallery}>
                {currentGame === 'snake' && <SnakeGame />}
                {currentGame === 'memory' && <MemoryGame />}
                {currentGame === 'dino' && <DinoGame />}
            </div>
        </div>
    </Draggable>
  )
})

export default LinearGallery