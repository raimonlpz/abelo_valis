import React, { useState, useEffect, useRef } from 'react';
import styles from './MenuBar.module.css';
import menuBarData from './menuBarData';

export default function MenuBar({ 
    openFolderContent, 
    openPhotoBooth, 
    openSettings,
    openSketch, 
    openGMaps, 
    openMusic,
    openCalendar,
    openNotes,
    openTrash,
    openAgenda,
    isHideBar
}) {
    const [menuBarOpen, setMenuBarOpen] = useState(false);
    const [clickedMenuItem, setClickedMenuItem] = useState(0);
    const containerRef = useRef(null);

    const handleMouseEnter = () => setMenuBarOpen(true);
    const handleMouseLeave = () => setMenuBarOpen(false);

    const onMenuChange = (id) => {
        setClickedMenuItem(id);
        setTimeout(() => setClickedMenuItem(0), 5000);

        switch (id) {
            case 'finder': openFolderContent(); break;
            case '2': openCalendar(); break;
            case '3': window.open('https://abelovalis.bigcartel.com/', '_blank'); break;
            case '4': openMusic(); break;
            case '5': openGMaps(); break;
            case '6': openAgenda(); break;
            case '7': window.open('mailto:valisattitude@gmail.com', '_blank'); break;
            case '8': openPhotoBooth(); break;
            case '9': openSketch(); break;
            case '10': openNotes(); break;
            case 'settings': openSettings(); break;
            case '12': openTrash(); break;
            default: break;
        }
    }

    const handleDragStart = (e) => {
        containerRef.current.startX = e.touches[0].pageX;
    }

    const handleDragMove = (e) => {
        const dx = e.touches[0].pageX - containerRef.current.startX;
        containerRef.current.scrollLeft -= dx;
        containerRef.current.startX = e.touches[0].pageX;
    }

    useEffect(() => {
        const container = containerRef.current;
        container.addEventListener('touchstart', handleDragStart);
        container.addEventListener('touchmove', handleDragMove);
        return () => {
            container.removeEventListener('touchstart', handleDragStart);
            container.removeEventListener('touchmove', handleDragMove);
        }
    }, []);

    if (!menuBarOpen && isHideBar) {
        return <div className={styles.wrapperHidden} onMouseEnter={handleMouseEnter}></div>;
    }

    return (
        <div className={styles.wrapper} onMouseLeave={handleMouseLeave}>
            <ul className={styles.ul} ref={containerRef}>
                {menuBarData.map((data) => (
                    <li
                        key={data.id}
                        id={data.id}
                        onClick={() => onMenuChange(data.id)}
                        className={`${clickedMenuItem === data.id ? styles.bounceAnimation : ''} ${['5', '8', '2', '9'].includes(data.id) ? styles['hide-mobile'] : ''}`}
                    >
                        <img src={data.image} alt="image_alt" />
                    </li>
                ))}
            </ul>
        </div>
    );
}
