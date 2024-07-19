import React, { forwardRef, useState } from 'react'
import styles from './Settings.module.css'
import Draggable from 'react-draggable'

const Settings = forwardRef(({ 
    isSettingsOpen, 
    closeSettings, 
    maximizeApp,
    minimizeApp, 
    onStartDrag, 
    onStopDrag,

    setIsValisMode,
    setIsHideBar,
    isValisMode,
    isHideBar
}, ref) => {

    return (
    <Draggable
        onStart={onStartDrag}
        onStop={onStopDrag}
      >
        <div
            ref={ref}
            className={styles.wrapper}
            style={{
                visibility: isSettingsOpen ? "visible" : "hidden",
            }}
        >
            <div className={styles.left_inner_wrapper}>
                <div className={styles.left_corner_buttons}>
                    <img
                        onClick={closeSettings}
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
                    <div className={styles.appTitle}></div>
                </div>
            </div>
            <div className={styles.settings}>
                <div>
                    <h6>System Settings</h6>
                    <div className={styles.option}>
                        <div>Valis Mode</div>
                        <label className={styles.switch}>
                            <input type="checkbox" onChange={() => setIsValisMode(!isValisMode)} />
                            <span className={`${styles.slider} ${styles.round}`}></span>
                        </label>
                    </div>
                    <div className={styles.option}>
                        <div>Show/Hide Menu Bar</div>
                        <label className={styles.switch}>
                            <input type="checkbox" onChange={() => setIsHideBar(!isHideBar)} />
                            <span className={`${styles.slider} ${styles.round}`}></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </Draggable>
    )
})

export default Settings