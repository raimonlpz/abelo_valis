import React, { forwardRef, useEffect, useRef, useState } from 'react'
import styles from './PhotoBooth.module.css'
import Draggable from 'react-draggable'
import ml5 from 'ml5'


const PhotoBooth = forwardRef(({ isPhotoBoothOpen, closePhotoBooth, maximizeApp, minimizeApp, onStartDrag, onStopDrag }, ref) => {

    const faceApiRef = useRef()
    const canvasRef = useRef()
    const videoRef = useRef()

    const [imgFilter, setImgFilter] = useState('facemesh.png')

    useEffect(() => {
      let stream = null;
      let animationFrameId = null;

      const image = new Image();
      image.src = `/images/customicons/${imgFilter}`;

        if (videoRef.current && isPhotoBoothOpen) {

            let mediaDevices = navigator.mediaDevices;
            
            videoRef.current.muted = true
            mediaDevices.getUserMedia({
                video: true, 
                audio: true
            })
            .then((mediaStream) => {
              stream = mediaStream
              videoRef.current.srcObject = stream
                videoRef.current.addEventListener('loadedmetadata', () => {
                    videoRef.current.play()
                })

                // Faceapi detection
                const canvas = canvasRef.current 
                const context = canvas.getContext('2d')
                canvas.width = videoRef.current.width
                canvas.height = videoRef.current.height

                const faceapi = ml5.faceApi(videoRef.current, { withLandmarks: true, withDescriptors: false }, () => {
                    detectFaces();
                });

                faceApiRef.current = faceapi

                const drawFilter = (context, box) => {
                  if (!box) return;
                  // Example: Draw a custom image over the detected face        
                  // Draw the image at the specified location and size
                  context.drawImage(image, box.x, box.y, box.width, box.height);
                }

                  const detectFaces = () => {
                 
                      faceapi.detect((err, results) => {

                        if (err) {
                          console.error('Face detection error:', err);
                          return;
                        }
                    
                        context.clearRect(0, 0, canvas.width, canvas.height);
                        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
              
                        if (results && results.length > 0) {
                          drawFilter(context, results[0].alignedRect._box);
                        }
              
                        animationFrameId = requestAnimationFrame(detectFaces);
                      });          
                  };
          
            })
            .catch(alert)
        }

        return () => {
          if (stream) {
            stream.getTracks().forEach(track => track.stop())
          }

          if (faceApiRef.current) {
            // faceApiRef.current.dispose()
          }

          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId)
          }
        }
    }, [isPhotoBoothOpen, imgFilter])


  const onFilterChange = (filter) => {
    setImgFilter(filter)
  }

  return (
    <Draggable onStart={onStartDrag} onStop={onStopDrag}>
        <div
          ref={ref}
          className={styles.wrapper}
          style={{
            visibility: isPhotoBoothOpen ? "visible" : "hidden",
          }}
        >
        <div className={styles.left_inner_wrapper}>
            <div className={styles.left_corner_buttons}>
              <img
                onClick={closePhotoBooth}
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

              <div className={styles.appTitle}>EgoBooth</div>
            </div>
          </div>
            <div className={styles.photobooth}>
                <video ref={videoRef} disablePictureInPicture width={600} height={450} ></video>
                <canvas ref={canvasRef}></canvas>
             </div>

            <div className={styles.commands}>
                <img src="/images/customicons/photobooth-shot.png" alt="" />
            </div>

            <div className={styles.effectGrid}>
              <div>
                <img  src="/images/customicons/facemesh.png" alt="" onClick={() => onFilterChange('facemesh.png')} />
              </div>
              <div>
                <img src="/images/customicons/facemesh3.png" alt="" onClick={() => onFilterChange('facemesh3.png')} />
              </div>
              <div>
                <img src="/images/customicons/facemesh4.webp" alt="" onClick={() => onFilterChange('facemesh4.webp')} />
              </div>
              <div>
                <img src="/images/customicons/facemesh5.webp" alt=""  onClick={() => onFilterChange('facemesh5.webp')} />  
              </div>
              <div>
                <img src="/images/customicons/facemesh6.webp" alt="" onClick={() => onFilterChange('facemesh6.webp')} />
              </div>
            </div>
        </div>
    </Draggable>
  )
})


export default PhotoBooth