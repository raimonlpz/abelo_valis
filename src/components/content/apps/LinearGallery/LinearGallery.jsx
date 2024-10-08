import React, { forwardRef, useRef, useState } from 'react'
import styles from './LinearGallery.module.css'
import Draggable from 'react-draggable'
import MemoryGame from './MemoryGame/MemoryGame'
import SnakeGame from './SnakeGame/SnakeGame'
import DinoGame from './DinoGame/DinoGame'
import { useMediaQuery } from 'react-responsive'

// Formerly Makarrada$ / Game$
const LinearGallery = forwardRef(({
    isLinearGalleryOpen,
    closeLinearGallery,
    maximizeApp,
    minimizeApp,
    onStartDrag,
    onStopDrag
}, ref) => {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const changerRef = useRef()
    const [currentGame, setCurrentGame] = useState('memory')

    const changeGame = () => {
        if (currentGame === 'memory') {
            setCurrentGame('snake')
        } else if (currentGame === 'snake') {
            setCurrentGame('dino')
        } else {
            setCurrentGame('memory')
        }
        changerRef.current.blur()
    }

    const handleTouchStart = (callback) => (e) => {
        e.preventDefault();
        callback();
    };

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
                            onTouchStart={handleTouchStart(closeLinearGallery)}
                            className={styles.left_corner_button_img}
                            src="/images/icons/close.png"
                            alt="icns"
                        />
                        <img
                            onClick={minimizeApp}
                            onTouchStart={handleTouchStart(minimizeApp)}

                            className={styles.left_corner_button_minimize}
                            src="/images/icons/minimise.png"
                            alt="icns"
                        />
                        <img
                            onClick={maximizeApp}
                            onTouchStart={handleTouchStart(maximizeApp)}

                            className={styles.left_corner_button_maximize}
                            src="/images/icons/zoom.png"
                            alt="icns"
                        />
                        <div className={styles.closeX}>&#10005;</div>
                        <div className={styles.miniX}>-</div>
                        <div className={styles.appTitle}>
                            {!isMobile && (
                                <button className={styles.macButton} onClick={changeGame} ref={changerRef}>Cambiar Juego</button>

                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.linearGallery}>
                    {(currentGame === 'snake' && !isMobile) && <SnakeGame />}
                    {(currentGame === 'memory' && !isMobile) && <MemoryGame />}
                    {(currentGame === 'dino' && !isMobile) && <DinoGame />}
                    {isMobile && <MemoryGame />}
                </div>
            </div>
        </Draggable>
    )
})

export default LinearGallery