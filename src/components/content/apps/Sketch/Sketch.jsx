import React, { forwardRef, useState } from 'react'
import styles from './Sketch.module.css'
import Canvas from './Canvas'
import Draggable from 'react-draggable';

const Sketch = forwardRef(({
  isSketchOpen,
  closeSketch,
  maximizeApp,
  minimizeApp,
  onStartDrag,
  onStopDrag,
}, ref) => {

  const [brushSize, setBrushSize] = useState(3);
  const [brushColor, setBrushColor] = useState('white');


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
              <div className={styles.appTitle}></div>
            </div>
          </div>
          <div className={styles.sketch}>
            {/* <label>
              Brush Size:
              <input
                  type="range"
                  min="1"
                  max="50"
                  value={brushSize}
                  onChange={(e) => setBrushSize(e.target.value)}
                />
              </label>
              <label>
                Brush Color:
                <input
                  type="color"
                  value={brushColor}
                  onChange={(e) => setBrushColor(e.target.value)}
                />
              </label> */}
                          <Canvas brushSize={brushSize} brushColor={brushColor} />
            </div>
          </div>
    </Draggable>
  )
})

export default Sketch
