import React from 'react'
import styles from './RightBar.module.css'
import { useEffect } from 'react'

export default function RightBar({ rightBarOpened }) {

    return (
        <div className={styles.wrapper} style={{transform: rightBarOpened ? 'translateX(0px)' : 'translateX(320px)'}}>
            <div className='flex gap-1'>
                <img className='w-[50%] pointer-events-none' src="/lateral/weather.png" alt="Weather" />
                <img className='w-[50%] pointer-events-none' src="/lateral/bat.png" alt="Battery" />
            </div>
            <img className='w-[100%] pointer-events-none' src="/lateral/clock.png" alt="Clocks" />
            <img className='w-[100%] pointer-events-none' src="/lateral/finance.png" alt="Finance" />
            <img className='w-[100%] pointer-events-none' src="/lateral/tracker.png" alt="Tracker" />
        </div>
    )
}