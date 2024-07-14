import React, { forwardRef } from 'react'
import styles from './Videobook.module.css'
import Draggable from 'react-draggable'

const Videobook = forwardRef(({ isVideobookOpen, closeVideobook, maximizeApp, minimizeApp, onStartDrag, onStopDrag }, ref) => {
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
                    </div>
                </div>
                <div className={styles.videobook}>
                <iframe width="600px" height="440px" style={{border: 'none', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}
                    src="https://www.youtube.com/embed/AyczLbxTX20?autoplay=0&mute=1">
                </iframe> 
                </div>
            </div>
        </Draggable>
    )
})

export default Videobook