import React, { forwardRef } from 'react'
import styles from './AboutMe.module.css'
import Draggable from 'react-draggable'

const AboutMe = forwardRef(({ isAboutMeOpen, closeAboutMe, maximizeApp, minimizeApp, onStartDrag, onStopDrag }, ref) => {
    return (
        <Draggable
            onStart={onStartDrag}
            onStop={onStopDrag}
        >
            <div
                ref={ref}
                className={styles.wrapper}
                style={{
                    visibility: isAboutMeOpen ? 'visible' : 'hidden'
                }}
            >
                <div className={styles.left_inner_wrapper}>
                    <div className={styles.left_corner_buttons}>
                        <img
                            onClick={closeAboutMe}
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
                <div className={styles.aboutMe}>
                    <div className={styles.title}>
                        <img src="/abelo/aboutMe.png" alt="Abelo Valis" />
                        <img src="/abelo/dni.png" alt="DNI Abelo Valis" />
                    </div>
                    <p>
                        ¡Hola! Soy Abelo Valis, <span>actor, músico y diseñador de ropa español</span>. Mi arte y talento hablan por sí solos: cada actuación, cada nota y cada diseño lleva mi sello único e inigualable. 
                        Con años de experiencia, me he convertido en un <span>referente en cada disciplina que toco</span>. La pasión y dedicación que pongo en todo lo que hago te garantizan una experiencia inigualable. 
                        Si buscas excelencia y autenticidad, puedes confiar en mí para superar tus expectativas. <span>Gracias por creer en el verdadero arte</span>.
                    </p>
                    <div class={styles.gpt}>Con ayuda de <img src="/images/icons/chatgpt.webp" alt="ChatGPT" /></div>
                </div>
            </div>
        </Draggable>
    )
})

export default AboutMe