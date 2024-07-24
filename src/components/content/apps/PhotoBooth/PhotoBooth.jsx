import React, { forwardRef, useEffect, useRef, useState } from 'react'
import styles from './PhotoBooth.module.css'
import Draggable from 'react-draggable'


const PhotoBooth = forwardRef(({ isPhotoBoothOpen, closePhotoBooth, maximizeApp, minimizeApp, onStartDrag, onStopDrag }, ref) => {

    const videoRef = useRef()
    const shotRef = useRef()
    const ctaRef = useRef()

    const [filter, setFilter] = useState('none')

    useEffect(() => {
        if (videoRef.current && isPhotoBoothOpen) {

            let mediaDevices = navigator.mediaDevices;
            
            videoRef.current.muted = true
            mediaDevices.getUserMedia({
                video: true, 
                audio: true
            })
            .then((mediaStream) => {
              videoRef.current.srcObject = mediaStream
                videoRef.current.addEventListener('loadedmetadata', () => {
                    videoRef.current.play()
                })
            })
            .catch(alert)
        }

        return () => {
        }
    }, [isPhotoBoothOpen])



  const onShot = () => {
    if (ctaRef.current) {
      ctaRef.current.style.display = 'none'
      shotRef.current.style.display = 'flex'
    }
    if (shotRef.current) {
      shotRef.current.innerHTML = '<span>3</span>'
      setTimeout(() => {
        shotRef.current.innerHTML = '<span>2</span>'
      }, 1000)
      setTimeout(() => {
        shotRef.current.innerHTML = '<span>1</span>'
     }, 2000)
     setTimeout(() => {
      shotRef.current.innerHTML = '<span>Error 404: <br/> <span style="display: block; font-size: 2.3rem; margin: 0 2rem; line-height: 2.8rem;">Eres feisim@ quien coño te crees para venir a hacerte una foto a mi fuckin web</span></span>'
    }, 3000)
    setTimeout(() => {
    ctaRef.current.style.display = 'block'
        shotRef.current.style.display = 'none'
      }, 6000)
    }
  }


  return (
    <Draggable onStart={onStartDrag} onStop={onStopDrag}>
        <div
          ref={ref}
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
              <div className={styles.appTitle}>🪞 Ego Booth</div>
            </div>
          </div>
            <div className={styles.photobooth}>
                <video ref={videoRef} disablePictureInPicture playsInline width={600} height={450} ></video>
                {
                                  (filter === 'none') ? <div className={`${styles.filter} ${styles.filterOptNone}`}></div>
                                  : 
                                  (filter === 'gingham') ? <div className={`${styles.filter} ${styles.filterOptGingham}`}></div> 
                                  :
                                  (filter === 'juno') ? <div className={`${styles.filter} ${styles.filterOptJuno}`}></div>
                                  :
                                  (filter === 'lark') ? <div className={`${styles.filter} ${styles.filterOptLark}`}></div>
                                  :
                                  (filter === 'ludwig') ? <div className={`${styles.filter} ${styles.filterOptLudwig}`}></div>
                                  : 
                                  (filter === 'sierra') ? <div className={`${styles.filter} ${styles.filterOptSierra}`}></div>
                                  : <div className={`${styles.filter} ${styles.filterOptValencia}`}></div>
                }
             </div>

            <div className={styles.effectGrid}>
              <div className={`${styles.filterOpt} ${styles.filterOptNone}`} onClick={() => setFilter('none')}></div>
              <div className={`${styles.filterOpt} ${styles.filterOptGingham}`} onClick={() => setFilter('gingham')}></div>
              <div className={`${styles.filterOpt} ${styles.filterOptJuno}`} onClick={() => setFilter('juno')}></div>
              <div className={`${styles.filterOpt} ${styles.filterOptLark}`} onClick={() => setFilter('lark')}></div>
              <div className={`${styles.filterOpt} ${styles.filterOptLudwig}`} onClick={() => setFilter('ludwig')}></div>
              <div className={`${styles.filterOpt} ${styles.filterOptSierra}`} onClick={() => setFilter('sierra')}></div>
              <div className={`${styles.filterOpt} ${styles.filterOptValencia}`} onClick={() => setFilter('valencia')}></div>
            </div>

            <div className={styles.shot} ref={shotRef}>
            </div>  

            <div className={styles.commands} ref={ctaRef} onClick={onShot}>
                <img src="/images/customicons/photobooth-shot.png" alt="Cam shot"  />
            </div>
        </div>
    </Draggable>
  )
})


export default PhotoBooth