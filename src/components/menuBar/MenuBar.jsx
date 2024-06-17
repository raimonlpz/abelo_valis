import React, { useState } from 'react'
import styles from './MenuBar.module.css'
import menuBarData from './menuBarData'

export default function MenuBar({ openFolderContent, openPhotoBooth, openGMaps, openSketch, openMusic }) {
    
 const [menuBarOpen, setMenuBarOpen] = useState(false)
 const [clickedMenuItem, setClickedMenuItem] = useState(0)

 const handleMouseEnter = () => {
    setMenuBarOpen(!menuBarOpen)
 }

 const handleMouseLeave = () => {
    setMenuBarOpen(!menuBarOpen)
 }

 const onMenuChange = (id) => {
    setClickedMenuItem(id)
    setTimeout(() => {
        setClickedMenuItem(0)
    }, 5000)

    if (id === '1') {
        openFolderContent()
    }

    if (id === '2') {
        // Calendar
    }

    if (id === '3') {
        // Abelo Store
        window.open('https://abelovalis.bigcartel.com/', '_blank');
    }

    if (id === '4') {
        // Music / Spoti 
        openMusic()
    }

    if (id === '5') {
        // GMaps
        openGMaps()
    }
    
    if (id === '6') {
        // Agenda
    }

    if (id === '7') {
        // Mail
        window.open('mailto:abelovalis@gmail.com', '_blank')
    }

    if (id === '8') {
        // PhotoBooth
        openPhotoBooth()
    }

    if (id === '9') {
        // Sketch
        openSketch()
    }

    if (id === '10') {
        // AboutMe / Notes
    }
 }

//  if (!menuBarOpen) {
//     return (
//         <div
//             className={styles.wrapperHidden}
//             onMouseEnter={handleMouseEnter}
//         ></div>
//     )
//  }

  return (
    <>
        <div className={styles.wrapper} onMouseLeave={handleMouseLeave}>
            <ul className={styles.ul}>
                {menuBarData.map((data) => (
                    <li
                        style={{ textAlign: 'center' }}
                        key={data.id}
                        id={data.id}
                        onClick={() => onMenuChange(data.id)}
                    >
                        <img 
                            className={
                                clickedMenuItem === data.id ? styles.bounceAnimation : ""
                            }
                            src={data.image}
                            alt="image_alt"
                        />
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}
