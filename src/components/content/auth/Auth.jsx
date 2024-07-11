import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Auth.module.css'
import { getFullDateAndTime } from '../../../utils/time'

export default function Auth({ onSignin }) {

 const [currentDayTime, setCurrentTime] = useState(getFullDateAndTime())
 const wrapperRef = useRef()

 const getTime = useCallback(() => {
    const currentDayAndTime = getFullDateAndTime();
    setCurrentTime(currentDayAndTime);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getTime();
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [getTime]);

 const onClick = () => {
    wrapperRef.current.style.filter = 'brightness(0%)'
    setTimeout(() => {
        onSignin()
    }, 850);
 }

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.dayTime}>
            <span>{currentDayTime[0]}</span>
            <span>{currentDayTime[1]}</span>
        </div>  
        <div className={styles.authContainer}>                
            <div className={styles.loginBox}>
                <div className={styles.avatar}>
                    <img src="/abelo/sim.jpg" alt="" />
                </div>
                <span className={styles.nickname}>Abelo Valis</span>
                <input
                    defaultValue=""
                    type="text"
                    placeholder="Username"
                    className={styles.inputField}
                />
                <div className={styles.loginButton} onClick={onClick}>
                    <img src="/images/customicons/signin.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
