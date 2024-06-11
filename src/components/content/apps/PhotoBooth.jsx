import React, { useEffect, useRef } from 'react'
import styles from './PhotoBooth.module.css'
import Draggable from 'react-draggable'

export default function PhotoBooth({ isPhotoBoothOpen, closePhotoBooth }) {

    const videoRef = useRef()

    useEffect(() => {
        if (videoRef.current) {
            let mediaDevices = navigator.mediaDevices;
            videoRef.current.muted = true
            mediaDevices.getUserMedia({
                video: true, 
                audio: true
            })
            .then((stream) => {
                videoRef.current.srcObject = stream
                videoRef.current.addEventListener('loadedmetadata', () => {
                    videoRef.current.play()
                })
            })
            .catch(alert)
        }
    }, [])


  return (
    <Draggable>
        <div
          className={styles.wrapper}
          style={{
            visibility: isPhotoBoothOpen ? "visible" : "hidden",
          }}
        >
        <div className={styles.left_inner_wrapper}>
            <div className={styles.left_corner_buttons}>
              <img
                onClick={closePhotoBooth}
                className={styles.left_corner_button_img}
                src="/images/icons/close.png"
                alt="icns"
              />
              <img
                className={styles.left_corner_button_img}
                src="/images/icons/minimise.png"
                alt="icns"
              />
              <img
                className={styles.left_corner_button_img}
                src="/images/icons/zoom.png"
                alt="icns"
              />
            </div>
          </div>
            <div className={styles.photobooth}>
                <video ref={videoRef} disablePictureInPicture ></video>
            </div>

            <div className={styles.commands}>
                <img src="/images/customicons/photobooth-shot.png" alt="" />
            </div>
        </div>
    </Draggable>
  )
}
