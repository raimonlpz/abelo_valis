import React, { forwardRef, useState, useEffect } from 'react'
import styles from './Sketch.module.css'
import Canvas from './Canvas'
import Draggable from 'react-draggable';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomSize = () => {
  return Math.floor(Math.random() * 50) + 1; // Random size between 1 and 50
};

const Sketch = forwardRef(({
  isSketchOpen,
  closeSketch,
  maximizeApp,
  minimizeApp,
  onStartDrag,
  onStopDrag,
}, ref) => {

  const [brushSize, setBrushSize] = useState(getRandomSize());
  const [brushColor, setBrushColor] = useState(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setBrushSize(getRandomSize());
      setBrushColor(getRandomColor());
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Draggable
      onStart={onStartDrag}
      onStop={onStopDrag}
    >
      <div
            ref={ref}
            className={styles.wrapper}
            style={{
                visibility: isSketchOpen ? "visible" : "hidden",
            }}
      >

        <div className={styles.left_inner_wrapper}>
            <div className={styles.left_corner_buttons}>
              <img
                onClick={closeSketch}
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
              <div className={styles.appTitle}></div>
            </div>
          </div>
          <div className={styles.sketch}>
                <Canvas brushSize={brushSize} brushColor={brushColor} />
            </div>
          </div>
    </Draggable>
  )
})

export default Sketch
