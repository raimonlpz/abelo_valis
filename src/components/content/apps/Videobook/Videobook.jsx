import React, { forwardRef } from 'react'
import styles from './Videobook.module.css'
import Draggable from 'react-draggable'

const Videobook = forwardRef(({ isVideobookOpen, closeVideobook, maximizeApp, minimizeApp, onStartDrag, onStopDrag }, ref) => {
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
                    visibility: isVideobookOpen ? 'visible' : 'hidden'
                }}
            >
                <div className={styles.left_inner_wrapper}>
                    <div className={styles.left_corner_buttons}>
                        <img
                            onClick={closeVideobook}
                            onTouchStart={handleTouchStart(closeVideobook)}
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
                    </div>
                </div>
                <div className={styles.videobook}>
                <iframe width="600px" height="440px" referrerPolicy='strict-origin-when-cross-origin' style={{border: 'none', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}
                    src="https://www.youtube.com/embed/AyczLbxTX20?si=O1mbeOl-NX-Ocx53" allow='encrypted-media'>
                </iframe> 
                </div>
            </div>
        </Draggable>
    )
})

export default Videobook