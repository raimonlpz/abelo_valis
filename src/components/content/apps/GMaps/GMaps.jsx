
import React, { forwardRef } from 'react'
import styles from './GMaps.module.css'
import Draggable from 'react-draggable'

const GMaps = forwardRef(({ isGMapsOpen, closeGMaps, maximizeApp, minimizeApp, onStartDrag, onStopDrag }, ref) => {
  return (
    <Draggable
      onStart={onStartDrag}
      onStop={onStopDrag}
    >
        <div
            ref={ref}
            className={styles.wrapper}
            style={{
                visibility: isGMapsOpen ? "visible" : "hidden",
            }}
        >
        
        <div className={styles.left_inner_wrapper}>
            <div className={styles.left_corner_buttons}>
              <img
                onClick={closeGMaps}
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
              <div className={styles.appTitle}>📍 VivaVigo</div>
            </div>
          </div>
          <div className="gmaps">
            <iframe   
                    frameBorder="0"
                    style={{border: 0, marginTop: '.6rem', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'}}
                    width="100%"
                    height="400"
                    title="Maps view"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Casco+Vello,+Vigo,+36202+Vigo,+Pontevedra&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ><a href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a></iframe
                >

              <img src="/abelo/postit-maps.png" alt="Postit" className={styles.postit} />
          </div>
        </div>
    </Draggable>
  )
})

export default GMaps
