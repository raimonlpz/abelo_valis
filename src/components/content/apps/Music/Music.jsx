import React, { forwardRef } from 'react'
import Draggable from 'react-draggable'
import styles from './Music.module.css'

const Music = forwardRef(({
    isMusicOpen,
    closeMusic,
    maximizeApp,
    minimizeApp,
    onStartDrag,
    onStopDrag
}, ref) => {
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
                    visibility: isMusicOpen ? "visible" : "hidden",
                }}
            >

                <div className={styles.left_inner_wrapper}>
                    <div className={styles.left_corner_buttons}>
                        <img
                            onClick={closeMusic}
                            onTouchStart={handleTouchStart(closeMusic)}

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
                        <div className={styles.appTitle}></div>
                    </div>
                </div>
                <div className={styles.music}>
                    <iframe
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/artist/6EhQW9yBg612lW3SII1bpA?utm_source=generator&theme=0"
                        width="550"
                        height="400"
                        frameBorder="0"
                        allowFullScreen=""
                        allow="autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    fullscreen; 
                    picture-in-picture"
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </Draggable>
    )
})

export default Music
