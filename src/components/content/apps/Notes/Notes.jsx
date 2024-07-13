import React, { forwardRef, useMemo } from 'react'
import styles from './Notes.module.css'
import Draggable from 'react-draggable'
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import Paragraph from "@yoopta/paragraph";

const plugins = [Paragraph];

const Notes = forwardRef(({ isNotesOpen, closeNotes, maximizeApp, minimizeApp, onStartDrag, onStopDrag }, ref) => {
    const editor = useMemo(() => createYooptaEditor(), []);

    return (
        <Draggable
            onStart={onStartDrag}
            onStop={onStopDrag}
        >
            <div 
                ref={ref} 
                className={styles.wrapper}
                style={{
                    visibility: isNotesOpen ? 'visible' : 'hidden'
                }}
            >
                <div className={styles.left_inner_wrapper}>
                    <div className={styles.left_corner_buttons}>
                        <img
                            onClick={closeNotes}
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
                <div
                    className={styles.editor}
                >
                        <div className={styles.quotes}>
                            <p>Un buen artista roba, un mal artista copia</p>
                            <p>Sin lluvia las flores no crecen</p>
                            <p>Haz el bien y no mires a quien</p>
                            <p>Hacerme rico, dormir hasta el mediodía y joderlos a todos</p>
                            <p>Los sueños solo son ruido</p>
                            <p>Tu novio te pone a 4 yo A24 </p>
                            <p>Yo humilde no soy pero me encanta la humildad</p>
                        </div>
                 
                        <YooptaEditor
                            editor={editor}
                            plugins={plugins}
                            placeholder=""
                        />
                </div>
            </div>

        </Draggable>
    )
})

export default Notes