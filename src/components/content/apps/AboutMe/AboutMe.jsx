import React, { forwardRef, useState, useCallback } from 'react';
import Draggable from 'react-draggable';
import styles from './AboutMe.module.css';
import { getFullDateAndTime } from '../../../../utils/time';

const AboutMe = forwardRef(({ isAboutMeOpen, closeAboutMe, maximizeApp, minimizeApp, onStartDrag, onStopDrag }, ref) => {


    const [currentDayTime, setCurrentTime] = useState(getFullDateAndTime())

    const getTime = useCallback(() => {
        const currentDayAndTime = getFullDateAndTime();
        setCurrentTime(currentDayAndTime);
    }
        , []);  


    return (
        <Draggable onStart={onStartDrag} onStop={onStopDrag}>
            <div
                ref={ref}
                className={styles.wrapper}
                style={{ visibility: isAboutMeOpen ? 'visible' : 'hidden' }}
            >
                <div className={styles.left_inner_wrapper}>
                    <div className={styles.left_corner_buttons}>
                        <img
                            onClick={closeAboutMe}
                            className={styles.left_corner_button_close}
                            src="/images/icons/close.png"
                            alt="Close"
                        />
                        <img
                            onClick={minimizeApp}
                            className={styles.left_corner_button_minimize}
                            src="/images/icons/minimise.png"
                            alt="Minimize"
                        />
                        <img
                            onClick={maximizeApp}
                            className={styles.left_corner_button_maximize}
                            src="/images/icons/zoom.png"
                            alt="Maximize"
                        />
                    </div>
                </div>
                <div>
                    <img src="/images/drawing-pin.svg" alt="Pin" className="absolute top-6 right-10 w-20" />
                </div>
                <div className={styles.aboutMe}>
                    <div className={styles.dayTime}>
                        <span>{currentDayTime[0]}</span>
                        <span>{currentDayTime[1]}</span>
                    </div>
                    
                    <div className={styles.title}>
                        <img src="/abelo/aboutMe.png" alt="About Me" />
                        <img src="/abelo/dni.png" alt="DNI" />
                    </div>
                    <div className={styles.content}>
                        <p className={styles.text}>
                            ¡Hola! Soy Abelo Valis, <span>actor, músico y diseñador de ropa español</span>. Mi arte y talento hablan por sí solos: cada actuación, cada nota y cada diseño lleva mi sello único e inigualable.
                            Con años de experiencia, me he convertido en un <span>referente en cada disciplina que toco</span>. La pasión y dedicación que pongo en todo lo que hago te garantizan una experiencia inigualable.
                            Si buscas excelencia y autenticidad, puedes confiar en mí para superar tus expectativas. <br /><span>Gracias por creer en el verdadero arte</span>.
                        </p>
                    </div>
                    <div className={styles.gpt}>Con ayuda de <img src="/images/icons/chatgpt.webp" alt="ChatGPT" /></div>
                </div>
            </div>
        </Draggable>
    );
});

export default AboutMe;
