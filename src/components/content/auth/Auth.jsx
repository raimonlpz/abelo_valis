import React, { useRef } from 'react'
import styles from './Auth.module.css'

export default function Auth({ onSignin }) {

 const wrapperRef = useRef()

 const onClick = () => {
    wrapperRef.current.style.opacity = 0
    setTimeout(() => {
        onSignin()
    }, 250);
 }

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.authContainer}>
            <div className={styles.loginBox}>
                <div className={styles.avatar}>
                    <img src="/abelo/avatar.png" alt="" />
                </div>
                <input
                    defaultValue="$$$_abelo_valis_69"
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
