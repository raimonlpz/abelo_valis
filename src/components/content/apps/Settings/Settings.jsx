import React, { forwardRef } from 'react';
import styles from './Settings.module.css';
import Draggable from 'react-draggable';

const Settings = forwardRef(({
    isSettingsOpen,
    closeSettings,
    maximizeApp,
    minimizeApp,
    onStartDrag,
    onStopDrag,

    setIsRestartTour,
    setIsValisMode,
    setIsHideBar,
    isValisMode,
    isHideBar
}, ref) => {

    const handleClose = (e) => {
        e.stopPropagation();
        closeSettings();
    };

    const handleToggleValisMode = (e) => {
        e.stopPropagation();
        setIsValisMode(!isValisMode);
    };

    const handleToggleHideBar = (e) => {
        e.stopPropagation();
        setIsHideBar(!isHideBar);
    };

    const handleRestartTour = (e) => {
        e.stopPropagation();
        setIsRestartTour(true);
    };

    return (
        <Draggable onStart={onStartDrag} onStop={onStopDrag}>
            <div
                ref={ref}
                className={styles.wrapper}
                style={{ visibility: isSettingsOpen ? 'visible' : 'hidden' }}
            >
                <div className={styles.left_inner_wrapper}>
                    <div className={styles.left_corner_buttons}>
                        <img
                            onClick={handleClose}
                            onTouchStart={handleClose}
                            className={styles.left_corner_button_close}
                            src="/images/icons/close.png"
                            alt="Close"
                        />
                        <img
                            onClick={minimizeApp}
                            onTouchStart={minimizeApp}
                            className={styles.left_corner_button_minimize}
                            src="/images/icons/minimise.png"
                            alt="Minimize"
                        />
                        <img
                            onClick={maximizeApp}
                            onTouchStart={maximizeApp}
                            className={styles.left_corner_button_maximize}
                            src="/images/icons/zoom.png"
                            alt="Maximize"
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
                            <label className={styles.switch}
                                onTouchStart={handleToggleValisMode}>
                                <input type="checkbox"
                                    onClick={handleToggleValisMode} checked={isValisMode} />
                                <span className={`${styles.slider} ${styles.round}`}></span>
                            </label>
                        </div>
                        <div className={styles.option} >
                            <div>Show/Hide Menu Bar</div>
                            <label className={styles.switch}
                                onTouchStart={handleToggleHideBar}
                            >
                                <input
                                    type="checkbox"
                                    onClick={handleToggleHideBar}
                                    checked={isHideBar}
                                />
                                <span className={`${styles.slider} ${styles.round}`}></span>
                            </label>
                        </div>
                        <div className={styles.option}>
                            <div>Open Tour Guide</div>
                            <label className={styles.switch}>
                                <button onClick={handleRestartTour} onTouchStart={handleRestartTour}>Open</button>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </Draggable>
    );
});

export default Settings;
