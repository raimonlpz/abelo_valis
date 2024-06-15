import React, { useRef, useEffect } from 'react'
import p5 from 'p5'
import styles from './Sketch.module.css'

const Canvas = ({ brushSize, brushColor }) => {
    const sketchRef = useRef();

    useEffect(() => {
        const sketch = (p) => {
            let x = 0;
            let y = 0;
            let currentBrushSize = brushSize; 
            let currentBrushColor = brushColor;

            p.setup = () => {
                p.createCanvas(490, 390).parent(sketchRef.current)
                p.background('#19011C')
            }

            p.draw = () => {
                if (p.mouseOver) {
                    p.stroke(currentBrushColor)
                    p.strokeWeight(currentBrushSize)
                    p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
                }
            }

            p.mouseOver = () => {
                if (p.keyIsPressed && p.key === 'c') {
                    p.background(255);
                }
            }


            p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
                if (props.brushSize) {
                    currentBrushSize = props.brushSize
                }
                if (props.brushColor) {
                    currentBrushColor = props.brushColor
                }
            }
        }

        const p5Instance = new p5(sketch);

        return () => {
            p5Instance.remove();
        };
    }, [brushColor, brushSize])

    return <div ref={sketchRef} className={styles.canvas} />;
}

export default Canvas