import React, { forwardRef } from 'react'
import styles from './Formation.module.css'
import Draggable from 'react-draggable'
 
const Formations = forwardRef(({ isFormationsOpen, closeFormations, maximizeApp, minimizeApp, onStartDrag, onStopDrag }, ref) => {
    return (
        <Draggable
            onStart={onStartDrag}
            onStop={onStopDrag}
        >
            <div 
                ref={ref} 
                className={styles.wrapper}
                style={{
                    visibility: isFormationsOpen ? 'visible' : 'hidden'
                }}
            >
                <div className={styles.left_inner_wrapper}>
                    <div className={styles.left_corner_buttons}>
                        <img
                            onClick={closeFormations}
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
                <div className={styles.formations}>
                    <h5>Formación:</h5>
                    <div>
                        <ul>
                            <li><span style={{'color': '#54FFD5'}}>2022</span>: Taller "La memoria de los Objetos" impartido por Xavier Bobés.</li>
                            <li><span style={{'color': '#C5FF80'}}>2020</span>: Curso Intensivo UX/UI Beginners en Mr Marcel School impartido por Andres Rigo (IBM) y Jorge Barriobero (Tribal WW).</li>
                            <li><span style={{'color': '#FFC780'}}>2019</span>: El Marketing del Actor taller impartido por David Victori.</li>
                            <li><span style={{'color': '#DD94FF'}}>2016</span>: Erasmus en Escuela Superior de Música e Artes do Espectáculo, Oporto (ESMAE)</li>
                            <li><span style={{'color': '#E2FF94'}}>2014-2016</span>: Escuela Superior de Arte Dramático de Galicia, Vigo (ESAD)</li>
                            <li><span style={{'color': '#BD94FF'}}>2015</span>: Curso sin pretexto por Agusti Vila y Ermel Morales</li>
                            <li><span style={{'color': '#94FFE0'}}>2015</span>: Autoría y libertad creativa en escena por Marco Layera. (Chile)</li>
                            <li><span style={{'color': '#FFB0B7'}}>2012-2013</span>: Curso de Interpretación en la Escuela de Ficción de Voz Audiovisual, con Marcos Orsi, Tacho Gonzalez, Antonio Mourelos, Chema Gagino, Fina Calleja, Ibon Uzkudun, Jorge Saavedra y Luis Iglesias</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Draggable>
    )
})

export default Formations