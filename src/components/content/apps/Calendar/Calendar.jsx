import React, { forwardRef } from 'react'
import styles from './Calendar.module.css'
import Draggable from 'react-draggable'

const Calendar = forwardRef(({ isCalendarOpen, closeCalendar, maximizeApp, minimizeApp, onStartDrag, onStopDrag }, ref) => {
    return (
        <Draggable
            onStart={onStartDrag}
            onStop={onStopDrag}
        >
             <div 
                ref={ref} 
                className={styles.wrapper}
                style={{
                    visibility: isCalendarOpen ? 'visible' : 'hidden'
                }}
            >
                <div className={styles.left_inner_wrapper}>
                    <div className={styles.left_corner_buttons}>
                        <img
                            onClick={closeCalendar}
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
                    </div>
                </div>
                <div className={styles.calendar}>

                {/* <iframe className={styles.googleFrame} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FMadrid&bgcolor=%23B39DDB&showTitle=0&hl=es&showPrint=0&showTz=0&src=c3R1ZGlvLm1hcnRpcmlvQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uc3BhaW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043" style={{border: "0", width:"600px", height:"440px", frameborder:"0", scrolling: "no"}} loading="lazy"></iframe> */}
                </div>
            </div>
        </Draggable>
    )
})

export default Calendar