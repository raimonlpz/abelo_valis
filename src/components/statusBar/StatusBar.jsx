import React from 'react'
import styles from './StatusBar.module.css'
import { useState, useCallback, useEffect } from 'react'
import { getDayAndTime } from '../../utils/time'

export default function StatusBar({ toggleAppleMenu }) {
    const [currentTime, setCurrentTime] = useState(getDayAndTime())

    const getTime = useCallback(() => {
      const currentDayAndTime = getDayAndTime();
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


  return (
    <>
    <div className={styles.wrapper} >
      <div className={styles.wrapper_inner_left}>
        <img
          id="statusBar"
          onClick={toggleAppleMenu}
          className={styles.appleIcon}
          src="/svgs/apple.svg"
          alt="apple_icon"
        />
        <ul className={` ${styles.left_ul}`}>
          <li>
            <span>Finder</span>
          </li>
          <li>
            <span>File</span>
          </li>
          <li>
            <span>Edit</span>
          </li>
          <li>
            <span>View</span>
          </li>
          <li>
            <span>Go</span>
          </li>
          <li>
            <span>Window</span>
          </li>
          <li>
            <span>Help</span>
          </li>
        </ul>
      </div>
      <div className={styles.wrapper_inner_right}>
        <ul className={styles.right_ul}>
          <li>
            <img src="/images/statusicons/1.png" alt="s1" />
          </li>
          <li>
            <img src="/images/statusicons/2.png" alt="s2" />
          </li>
          <li>
            <img src="/images/statusicons/3.png" alt="s3" />
          </li>
          <li>
            <img src="/images/statusicons/4.png" alt="s4" />
          </li>
          <li>
            <img src="/images/statusicons/5.png" alt="s5" />
          </li>
          <li>
            <img src="/images/statusicons/6.png" alt="s6" />
          </li>
          <li>
            <img src="/images/statusicons/7.png" alt="s7" />
          </li>
          <li id="clock">
            <span className={styles.date}>{currentTime}</span>
          </li>
        </ul>
      </div>
    </div>

  <div className={`flex justify-between w-[90%] absolute mx-7 pt-4 lg:visible md:hidden`}>
    <div className=''>
    <img
          onClick={toggleAppleMenu}
          className={styles.appleIcon_mobile}
          src="/svgs/apple.svg"
          alt="apple_icon"
        />
    </div>
    <div className='text-white tracking-wider'>
      <span className={styles.date}>{currentTime}</span>
    </div>
  </div>
  </>
  )
}
