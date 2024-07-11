import React, { useRef, useEffect } from 'react';
import styles from './Sketch.module.css';

const Canvas = ({ brushSize, brushColor }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Set up canvas size and background
        context.canvas.width = 490;
        context.canvas.height = 390;
        context.fillStyle = '#19011C';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);


        const draw = (e) => {

            context.strokeStyle = brushColor;
            context.lineWidth = brushSize;
            context.lineCap = 'round';

            context.lineTo(e.offsetX, e.offsetY);
            context.stroke();
            context.beginPath();
            context.moveTo(e.offsetX, e.offsetY);
        };

        canvas.addEventListener('mousemove', draw);

        // Cleanup
        return () => {
            canvas.removeEventListener('mousemove', draw);
        };
    }, [brushSize, brushColor]);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}

export default Canvas;
