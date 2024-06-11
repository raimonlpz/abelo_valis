
import { useState } from 'react'
import './App.css'
import FolderContent from './components/content/folderContent/FolderContent'
import Folders from './components/content/folders/Folders'
import StatusBar from './components/statusBar/StatusBar'
import AppleMenu from './components/content/appleMenu/AppleMenu'
import MenuBar from './components/menuBar/MenuBar'
import PhotoBooth from './components/content/apps/PhotoBooth'

function App() {

  const [isFolderOpen, setIsFolderOpen] = useState(false) 
  const [isAppleMenuOpen, setIsAppleMenuOpen] = useState(false)

  // Apps 
  const [isPhotoBoothOpen, setIsPhotoBoothOpen] = useState(false)

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
  }

  const closeFolderContent = () => {
    setIsFolderOpen(false)
  }

  const openPhotoBooth = () => {
    setIsPhotoBoothOpen(true)
  }

  const closePhotoBooth = () => {
    setIsPhotoBoothOpen(false)
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

        <FolderContent isFolderOpen={isFolderOpen} closeFolderContent={closeFolderContent} />
        <PhotoBooth isPhotoBoothOpen={isPhotoBoothOpen} closePhotoBooth={closePhotoBooth} />


        <AppleMenu isAppleMenuOpen={isAppleMenuOpen} />
      </div>

      <MenuBar openApp={openPhotoBooth} />
    </div>
    </>
  )
}

export default App
