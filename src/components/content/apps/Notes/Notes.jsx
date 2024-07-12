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
                        <YooptaEditor
                            editor={editor}
                            plugins={plugins}
                            placeholder="Un buen artista roba, un mal artista copia / Un buen artista roba, un mal artista copia / Un buen artista roba, un mal artista copia / Un buen artista roba, un mal artista copia / Un buen artista roba, un mal artista copia"
                        />
                </div>
            </div>

        </Draggable>
    )
})

export default Notes