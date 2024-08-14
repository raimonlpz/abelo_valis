import React, { useState, useEffect } from 'react';
import styles from './Notification.module.css';

export default function Notification({ onClose }) {
    const [isExiting, setIsExiting] = useState(false);

    const handleClose = () => {
        setIsExiting(true);
    };

    useEffect(() => {
        if (isExiting) {
            const timer = setTimeout(() => {
                onClose();
            }, 300); // Debe coincidir con el tiempo de transición en CSS
            return () => clearTimeout(timer);
        }
    }, [isExiting, onClose]);

    return (
        <div className={`${styles.modalOverlay} ${isExiting ? styles.hidden : ''}`}>
            <div className={`${styles.modalContent} ${isExiting ? styles.hidden : ''}`}>
                <p>
                    Escríbeme si quieres trabajar conmigo, parezco caro, de hecho soy muy caro pero seguro que podemos encontrar la forma.
                    PD. Vísitame en un 🖥.
                </p>
                {/* <p>Esta página web tiene una mejor visualización en ordenador, recomendamos cambiar de dispositivo.</p> */}
                <button onClick={handleClose} className={styles.closeButton}>Cerrar</button>
            </div>
        </div>
    );
}
