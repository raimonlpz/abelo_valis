import React, { useEffect, useRef, useState } from 'react'
import styles from './ValisMode.module.css'

export default function ValisMode() {

  const effectRan = useRef(false)
  const imgRef = useRef()
  let index = 0

  useEffect(() => {
    if (effectRan.current) return
    changeImg()
    effectRan.current = true
  }, [])

  const changeImg = () => {
    setTimeout(() => {
      if (index < 20) {
        index++
      } else {
        index = 1
      }
      if (imgRef.current) {
        imgRef.current.src = "/void/" + index + ".png";
      }
      changeImg();
    }, 100);
  };

  return (
    <div className={styles.valisContainer}>
        <img ref={imgRef} src="/void/1.png" className={styles.text} />
        <div className={styles.burst}></div>
    </div>
  )
}
