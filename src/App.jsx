
import { createRef, useEffect, useRef, useState } from 'react'
import './App.css'
import FolderContent from './components/content/folderContent/FolderContent'
import Folders from './components/content/folders/Folders'
import StatusBar from './components/statusBar/StatusBar'
import AppleMenu from './components/content/appleMenu/AppleMenu'
import MenuBar from './components/menuBar/MenuBar'
import PhotoBooth from './components/content/apps/PhotoBooth'
import GMaps from './components/content/apps/GMaps'

function App() {

  const [appRefs, setAppRefs] = useState([])
  const baseFolderRef = createRef()
  const photoboothAppRef = useRef()
  const gmapsAppRef = useRef() 

  const [isFolderOpen, setIsFolderOpen] = useState(false) 
  const [isAppleMenuOpen, setIsAppleMenuOpen] = useState(false)

  // Apps 
  const [isPhotoBoothOpen, setIsPhotoBoothOpen] = useState(false)
  const [isGMapsOpen, setIsGMapsOpen] = useState(false)


  useEffect(() => {
    if (
      baseFolderRef.current &&
      gmapsAppRef.current &&
      photoboothAppRef 
    ) {
      setAppRefs([
        baseFolderRef.current,
        gmapsAppRef.current,
        photoboothAppRef.current
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

  const openFolderContent = () => {
    setIsFolderOpen(true)
    editZIndex('BaseFolder')
  }

  const closeFolderContent = () => {
    setIsFolderOpen(false)
  }

  const openGMaps = () => {
    setIsGMapsOpen(true)
    editZIndex('GMaps')
  }
  
  const closeGMaps = () => {
    setIsGMapsOpen(false)
  }

  const openPhotoBooth = () => {
    setIsPhotoBoothOpen(true)
    editZIndex('PhotoBooth')
  }

  const closePhotoBooth = () => {
    setIsPhotoBoothOpen(false)
  }

  const editZIndex = (appSel) => {
    appRefs.forEach((app) => {
      app.style.zIndex = 1
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
      default:
        break
    }
  }

  return (
    <>
    <div className="wrapper">
    <video id="background-video" autoPlay loop disablePictureInPicture controlsList="nodownload">
      <source src="/videos/reel.mp4" type="video/mp4" />
    </video>

      <StatusBar toggleAppleMenu={toggleAppleMenu} />

      <div className="inner_wrapper" onClick={closeAppleMenu}>
        
        <Folders openFolderContent={openFolderContent} />

        <FolderContent ref={baseFolderRef} isFolderOpen={isFolderOpen} closeFolderContent={closeFolderContent} onStartDrag={() => editZIndex('BaseFolder')} />
        <PhotoBooth ref={photoboothAppRef} isPhotoBoothOpen={isPhotoBoothOpen} closePhotoBooth={closePhotoBooth} onStartDrag={() => editZIndex('PhotoBooth')} />
        <GMaps ref={gmapsAppRef} isGMapsOpen={isGMapsOpen} closeGMaps={closeGMaps} onStartDrag={() => editZIndex('GMaps')} />

        <AppleMenu isAppleMenuOpen={isAppleMenuOpen} />
      </div>

      <MenuBar openPhotoBooth={openPhotoBooth} openGMaps={openGMaps} />
    </div>
    </>
  )
}

export default App
