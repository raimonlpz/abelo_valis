
import { useEffect, useRef, useState } from 'react'
import './App.css'
import FolderContent from './components/content/folderContent/FolderContent'
import Folders from './components/content/folders/Folders'
import StatusBar from './components/statusBar/StatusBar'
import AppleMenu from './components/content/appleMenu/AppleMenu'
import MenuBar from './components/menuBar/MenuBar'
/**
 * Apps
 */
import PhotoBooth from './components/content/apps/PhotoBooth/PhotoBooth'
import GMaps from './components/content/apps/GMaps/GMaps'
import Sketch from './components/content/apps/Sketch/Sketch'
import Music from './components/content/apps/Music/Music'
import CircGallery from './components/content/apps/CircGallery/CircGallery'

function App() {

  const [appRefs, setAppRefs] = useState([])

  const circGalleryAppRef = useRef()
  const photoboothAppRef = useRef()
  const baseFolderRef = useRef()
  const sketchAppRef = useRef()
  const gmapsAppRef = useRef() 
  const musicAppRef = useRef()

  /**
   * Base Folder
   */
  const [isFolderOpen, setIsFolderOpen] = useState(false) 
  const [isAppleMenuOpen, setIsAppleMenuOpen] = useState(false)

  /**
   * Apps
   */
  const [isCircGalleryOpen, setIsCircGalleryOpen] = useState(false)
  const [isPhotoBoothOpen, setIsPhotoBoothOpen] = useState(false)
  const [isSketchOpen, setIsSketchOpen] = useState(false)
  const [isGMapsOpen, setIsGMapsOpen] = useState(false)
  const [isMusicOpen, setIsMusicOpen] = useState(false)


  useEffect(() => {
    if (
      circGalleryAppRef.current &&
      photoboothAppRef.current &&
      baseFolderRef.current &&
      sketchAppRef.current &&
      gmapsAppRef.current &&
      musicAppRef.current
    ) {
      setAppRefs([
        circGalleryAppRef.current,
        photoboothAppRef.current,
        baseFolderRef.current,
        sketchAppRef.current,
        gmapsAppRef.current,
        musicAppRef.current
      ])
    }
  }, [])

  const toggleAppleMenu = () => {
    setIsAppleMenuOpen(!isAppleMenuOpen)
  }

  const closeAppleMenu = () => {
    if (isAppleMenuOpen) {
      setIsAppleMenuOpen(false)
    }
  }

  /**
   * Base Folder
   */
  const openFolderContent = () => {
    setIsFolderOpen(true)
    editZIndex('BaseFolder')
    unMinimizeApp(baseFolderRef)
  }

  const closeFolderContent = () => {
    setIsFolderOpen(false)
  }

  /**
   * GMaps
   */
  const openGMaps = () => {
    setIsGMapsOpen(true)
    editZIndex('GMaps')
    unMinimizeApp(gmapsAppRef)
  }
  
  const closeGMaps = () => {
    setIsGMapsOpen(false)
  }

  /**
   * PhotoBooth
   */
  const openPhotoBooth = () => {
    setIsPhotoBoothOpen(true)
    editZIndex('PhotoBooth')
    unMinimizeApp(photoboothAppRef)
  }

  const closePhotoBooth = () => {
    setIsPhotoBoothOpen(false)
  }

  /**
   * Sketch
   */
  const openSketch = () => {
    setIsSketchOpen(true)
    editZIndex('Sketch')
    unMinimizeApp(sketchAppRef)
  }

  const closeSketch = () => {
    setIsSketchOpen(false)
  }

  /**
   * Music / Spoti
   */
  const openMusic = () => {
    setIsMusicOpen(true)
    editZIndex('Music')
    unMinimizeApp(musicAppRef)
  }

  const closeMusic = () => {
    setIsMusicOpen(false)
  }

  /**
   * Circ. Gallery
   */
  const openCircGallery = () => {
    setIsCircGalleryOpen(true)
    editZIndex('CircGallery')
    unMinimizeApp(circGalleryAppRef)
  }

  const closeCircGallery = () => {
    setIsCircGalleryOpen(false)
  }

  /**
   * Utils
   */
  const editZIndex = (appSel) => {
    appRefs.forEach((app) => {
      app.style.zIndex = 1
      app.style.transition = 'none'
    })
    switch (appSel) {
      case 'GMaps':
        gmapsAppRef.current.style.zIndex = 2
        break
      case 'PhotoBooth':
        photoboothAppRef.current.style.zIndex = 2
        break
      case 'BaseFolder':
        baseFolderRef.current.style.zIndex = 2
        break
      case 'Sketch':
        sketchAppRef.current.style.zIndex = 2
        break
      case 'Music':
        musicAppRef.current.style.zIndex = 2
        break
      case 'CircGallery':
        circGalleryAppRef.current.style.zIndex = 2
        break
      default:
        break
    }
  }

  const onStopDrag = () => {
    appRefs.forEach((app) => {
      app.style.transition = 'all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1)'
    })
  }

  const minimizeApp = (appRef) => {
    if (appRef === baseFolderRef) {
      appRef.current.style.top = 'calc(100vh - 370px)';
      appRef.current.style.left = '62%'
    } else {
      appRef.current.style.top = 'calc(100vh - 305px)';
      appRef.current.style.left = '75%'
    }
    appRef.current.style.transform = 'scale(0.15)';
    onStopDrag()
  }


  const unMinimizeApp = (appRef) => {
    if (appRef.current.style.transform === 'scale(0.15)') {
      appRef.current.style.top = '10%';
      appRef.current.style.left = '10%'
      appRef.current.style.transform = 'scale(1)';
    }
    onStopDrag()
  }
  
  const maximizeApp = (appRef) => {
    appRef.current.style.top = '-40px' 
    appRef.current.style.left = 0
    appRef.current.style.width = '100vw'
    appRef.current.style.height = '100vh'
  }

  return (
    <>
    <div className="wrapper">
    <video id="background-video" autoPlay loop disablePictureInPicture controlsList="nodownload">
      <source src="/videos/reel.mp4" type="video/mp4" />
    </video>

      <StatusBar toggleAppleMenu={toggleAppleMenu} />

      <div className="inner_wrapper" onClick={closeAppleMenu}>
        
        <Folders openFolderContent={openFolderContent} openCircGallery={openCircGallery}  />

        <FolderContent 
          ref={baseFolderRef} 
          isFolderOpen={isFolderOpen} 
          closeFolderContent={closeFolderContent}
          maximizeApp={() => maximizeApp(baseFolderRef)}
          minimizeApp={() => minimizeApp(baseFolderRef)}  
          onStartDrag={() => editZIndex('BaseFolder')} 
          onStopDrag={onStopDrag}
        />

        <CircGallery
          ref={circGalleryAppRef}
          isCircGalleryOpen={isCircGalleryOpen}
          closeCircGallery={closeCircGallery}
          maximizeApp={() => maximizeApp(circGalleryAppRef)}
          minimizeApp={() => minimizeApp(circGalleryAppRef)}
          onStartDrag={() => editZIndex('CircGallery')}
          onStopDrag={onStopDrag}
        />
        
        <PhotoBooth 
          ref={photoboothAppRef} 
          isPhotoBoothOpen={isPhotoBoothOpen} 
          closePhotoBooth={closePhotoBooth}
          maximizeApp={() => maximizeApp(photoboothAppRef)}
          minimizeApp={() => minimizeApp(photoboothAppRef)} 
          onStartDrag={() => editZIndex('PhotoBooth')} 
          onStopDrag={onStopDrag}
        />
        <GMaps 
          ref={gmapsAppRef} 
          isGMapsOpen={isGMapsOpen} 
          closeGMaps={closeGMaps} 
          maximizeApp={() => maximizeApp(gmapsAppRef)}
          minimizeApp={() => minimizeApp(gmapsAppRef)}
          onStartDrag={() => editZIndex('GMaps')} 
          onStopDrag={onStopDrag}
        />
        <Sketch 
          ref={sketchAppRef}
          isSketchOpen={isSketchOpen}
          closeSketch={closeSketch}
          maximizeApp={() => maximizeApp(sketchAppRef)}
          minimizeApp={() => minimizeApp(sketchAppRef)} 
          onStartDrag={() => editZIndex('Sketch')}
          onStopDrag={onStopDrag}
        />
        <Music 
          ref={musicAppRef}
          isMusicOpen={isMusicOpen}
          closeMusic={closeMusic}
          maximizeApp={() => maximizeApp(musicAppRef)}
          minimizeApp={() => minimizeApp(musicAppRef)}
          onStartDrag={() => editZIndex('Music')}
          onStopDrag={onStopDrag}
        />

        <AppleMenu isAppleMenuOpen={isAppleMenuOpen} />
      </div>

      <MenuBar openPhotoBooth={openPhotoBooth} openGMaps={openGMaps} openSketch={openSketch} openMusic={openMusic} />
    </div>
    </>
  )
}

export default App
