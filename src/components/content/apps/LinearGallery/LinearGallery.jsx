import React, { Suspense, forwardRef } from 'react'
import styles from './LinearGallery.module.css'
import Draggable from 'react-draggable'
import { Canvas } from '@react-three/fiber'
import { Float, Scroll, ScrollControls } from '@react-three/drei'
import Pages from './components/Pages'


const LinearGallery = forwardRef(({
    isLinearGalleryOpen,
    closeLinearGallery,
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
              visibility: isLinearGalleryOpen ? "visible" : "hidden",
          }}
        >
        <div className={styles.left_inner_wrapper}>
            <div className={styles.left_corner_buttons}>
              <img
                onClick={closeLinearGallery}
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
                <div className={styles.appTitle}></div>
                </div>
            </div>
            <div className={styles.linearGallery}>
                <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
                    <Suspense fallback={null}>
                        <ScrollControls horizontal damping={1} pages={9} distance={1}>
                                <Scroll>
                                    <Pages />
                                </Scroll>
                        </ScrollControls>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    </Draggable>
  )
})

export default LinearGallery