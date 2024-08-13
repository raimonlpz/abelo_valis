import React, { forwardRef } from 'react'
import styles from './CircGallery.module.css'
import Draggable from 'react-draggable'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import Scene from './components/Scene'

const CircGallery = forwardRef(({
  isCircGalleryOpen,
  closeCircGallery,
  maximizeApp,
  minimizeApp,
  onStartDrag,
  onStopDrag
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
              visibility: isCircGalleryOpen ? "visible" : "hidden",
          }}
      >

        <div className={styles.left_inner_wrapper}>
            <div className={styles.left_corner_buttons}>
              <img
                onClick={closeCircGallery}
                className={styles.left_corner_button_close}
                    src="/images/icons/close.png"
                    alt="icns"
                />
                <img
                    onClick={minimizeApp}
                    className={styles.left_corner_button_minimize}
                    src="/images/icons/minimise.png"
                    alt="icns"
                />
                <img
                    onClick={maximizeApp}
                    className={styles.left_corner_button_maximize}
                    src="/images/icons/zoom.png"
                    alt="icns"
                />
                 <div className={styles.closeX}>&#10005;</div>
                 <div className={styles.miniX}>-</div>
                <div className={styles.appTitle}></div>
                </div>
            </div>
            <div className={styles.circGallery}>
              <Canvas dpr={[1, 1.5]}>
                  <ScrollControls pages={4} infinite>
                    <Scene position={[0, 1.85, 1.5]} /> 
                  </ScrollControls>
              </Canvas>
            </div>
      </div>
    </Draggable>
  )
})



export default CircGallery

