import React, { forwardRef } from 'react'
import styles from './Agenda.module.css'
import Draggable from 'react-draggable'

const Agenda = forwardRef(({ isAgendaOpen, closeAgenda, maximizeApp, minimizeApp, onStartDrag, onStopDrag }, ref) => {
    return (
        <Draggable
        onStart={onStartDrag}
        onStop={onStopDrag}
        >
            <div 
                ref={ref} 
                className={styles.wrapper}
                style={{
                    visibility: isAgendaOpen ? 'visible' : 'hidden'
                }}
            >
                <div className={styles.left_inner_wrapper}>
                    <div className={styles.left_corner_buttons}>
                        <img
                            onClick={closeAgenda}
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
                    </div>
                </div>
                <div className={styles.agenda}>
                    <div className={styles.agenda_header}>
                        <img src="/abelo/sim.jpg" alt="Sims Avatar" />
                        <span>Abelo Valis</span>
                    </div>
                    <div className={styles.agenda_list}>
                        <ul>
                            <li>mail representante <span>eboracast@gmail.com </span></li>
                            <li>telf representante <span>+34 625 542 936 | +34 609 811 224</span></li>
                            <li>mail personal <span>valisattitude@gmail.com </span></li>
                            <li>cumpleaños <span>10 de marzo 1994 </span></li>
                            <li>casa <span>Vigo (Galicia)</span></li>
                            <li>telf prevención suicidio <span>+34 900 925 555 </span></li>
                        </ul>
                    </div>
                    <div className={styles.agenda_footer}>
                        <img src="/abelo/av.png" alt="Firma" />
                    </div>
                </div>
            </div>
        </Draggable>
    )
})

export default Agenda