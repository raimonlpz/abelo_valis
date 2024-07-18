
import { useEffect, useRef, useState } from 'react'
import './App.css'
import FolderDownloads from './components/content/folderContent/Downloads/FolderDownloads'
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
import Auth from './components/content/auth/Auth'
import LinearGallery from './components/content/apps/LinearGallery/LinearGallery'
import ValisMode from './components/valisMode/ValisMode'
import Interviews from './components/content/apps/Interviews/Interviews'
import Formations from './components/content/apps/Formation/Formation'
import AboutMe from './components/content/apps/AboutMe/AboutMe'
import FolderDocuments from './components/content/folderContent/Documents/FolderDocuments'
import Settings from './components/content/apps/Settings/Settings'
import Calendar from './components/content/apps/Calendar/Calendar'
import Videobook from './components/content/apps/Videobook/Videobook'
import Notes from './components/content/apps/Notes/Notes'
import Trash from './components/content/apps/Trash/Trash'
import Agenda from './components/content/apps/Agenda/Agenda'
import FolderProjects from './components/content/folderContent/Projects/FolderProjects'
import ProjectsVideoclips from './components/content/folderContent/Projects/ProjectsVideoclips/ProjectsVideoclips'
import ProjectsMovies from './components/content/folderContent/Projects/ProjectsMovies/ProjectsMovies'
import ProjectsTV from './components/content/folderContent/Projects/ProjectsTV/ProjectsTV'

function App() {

  const [appRefs, setAppRefs] = useState([])
  const [isAuth, setIsAuth] = useState(false)

  const downloadFolderRef = useRef()
  const documentFolderRef = useRef()
  const projectsFolderRef = useRef()
  const projectsMoviesFolderRef = useRef()
  const projectsTVFolderRef = useRef()
  const projectsVideoclipsFolderRef = useRef()

  const linearGalleryAppRef = useRef()
  const circGalleryAppRef = useRef()
  const photoboothAppRef = useRef()
  const formationsAppRef = useRef()
  const interviewsAppRef = useRef()
  const settingsAppRef = useRef()
  const calendarAppRef = useRef()
  const aboutMeAppRef = useRef()
  const sketchAppRef = useRef()
  const gmapsAppRef = useRef() 
  const musicAppRef = useRef()
  const videobookAppRef = useRef()
  const notesAppRef = useRef()
  const trashAppRef = useRef()
  const agendaAppRef = useRef()

  const wrapperRef = useRef()
  const videoBgRef = useRef()

  useEffect(() => {
    if (isAuth) {
      if (videoBgRef.current) {
        videoBgRef.current.play()
      }
      if (wrapperRef.current) {
        wrapperRef.current.style.filter = 'brightness(100%)'
      }
    }
  }, [isAuth])

  /**
   * Base Folders
   */
  const [isFolderDownloadsOpen, setIsFolderDownloadsOpen] = useState(false) 
  const [isFolderDocumentsOpen, setIsFolderDocumentsOpen] = useState(false)

  const [isFolderProjectsOpen, setIsFolderProjectsOpen] = useState(false)
  const [isFolderProjectsMoviesOpen, setIsFolderProjectsMoviesOpen] = useState(false)
  const [isFolderProjectsTVOpen, setIsFolderProjectsTVOpen] = useState(false)
  const [isFolderProjectsVideoclipsOpen, setIsFolderProjectsVideoclipsOpen] = useState(false)

  const [isAppleMenuOpen, setIsAppleMenuOpen] = useState(false)

  /**
   * Apps
   */
  const [isLinearGalleryOpen, setIsLinearGalleryOpen] = useState(false)
  const [isCircGalleryOpen, setIsCircGalleryOpen] = useState(false)
  const [isPhotoBoothOpen, setIsPhotoBoothOpen] = useState(false)
  const [isInterviewsOpen, setIsInterviewsOpen] = useState(false)
  const [isFormationsOpen, setIsFormationsOpen] = useState(false)
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false)
  const [isSketchOpen, setIsSketchOpen] = useState(false)
  const [isGMapsOpen, setIsGMapsOpen] = useState(false)
  const [isMusicOpen, setIsMusicOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [isVideobookOpen, setIsVideobookOpen] = useState(false) 
  const [isNotesOpen, setIsNotesOpen] = useState(false)
  const [isTrashOpen, setIsTrashOpen] = useState(false)
  const [isAgendaOpen, setIsAgendaOpen] = useState(false)

  /**
   * Settings Configs
   */
  const [isValisMode, setIsValisMode] = useState(false)
  const [isHideBar, setIsHideBar] = useState(false)


  useEffect(() => {
    if (
      linearGalleryAppRef.current &&
      circGalleryAppRef.current &&
      photoboothAppRef.current &&
      interviewsAppRef.current &&
      formationsAppRef.current &&
      aboutMeAppRef.current &&
      downloadFolderRef.current &&
      documentFolderRef.current &&
      projectsFolderRef.current &&
      projectsMoviesFolderRef.current &&
      projectsTVFolderRef.current &&
      projectsVideoclipsFolderRef.current &&
      sketchAppRef.current &&
      gmapsAppRef.current &&
      musicAppRef.current && 
      settingsAppRef.current &&
      calendarAppRef.current &&
      videobookAppRef.current &&
      notesAppRef.current &&
      trashAppRef.current &&
      agendaAppRef.current
    ) {
      setAppRefs([
        linearGalleryAppRef.current,
        circGalleryAppRef.current,
        photoboothAppRef.current,
        interviewsAppRef.current,
        formationsAppRef.current,
        aboutMeAppRef.current,
        downloadFolderRef.current,
        documentFolderRef.current,
        projectsFolderRef.current,
        projectsMoviesFolderRef.current,
        projectsTVFolderRef.current,
        projectsVideoclipsFolderRef.current,
        sketchAppRef.current,
        gmapsAppRef.current,
        musicAppRef.current,
        settingsAppRef.current,
        calendarAppRef.current,
        videobookAppRef.current,
        notesAppRef.current,
        trashAppRef.current,
        agendaAppRef.current
      ])
    }
  }, [isAuth])

  const toggleAppleMenu = () => {
    setIsAppleMenuOpen(!isAppleMenuOpen)
  }

  const closeAppleMenu = () => {
    if (isAppleMenuOpen) {
      setIsAppleMenuOpen(false)
    }
  }

  /**
   * Base Folders
   */
  // Downloads
  const openFolderDownloads = () => {
    setIsFolderDownloadsOpen(true)
    editZIndex('DownloadFolder')
    unMinimizeApp(downloadFolderRef)
  }

  const closeFolderDownloads = () => {
    setIsFolderDownloadsOpen(false)
  }
  // Documents
  const openFolderDocuments = () => {
    setIsFolderDocumentsOpen(true)
    editZIndex('DocumentFolder')
    unMinimizeApp(documentFolderRef)
  }

  const closeFolderDocuments = () => {
    setIsFolderDocumentsOpen(false)
  }
  // Projects
  const openFolderProjects = () => {
    setIsFolderProjectsOpen(true)
    editZIndex('ProjectsFolder')
    unMinimizeApp(projectsFolderRef)
  }

  const closeFolderProjects = () => {
    setIsFolderProjectsOpen(false)
  } 

    // Projects > Movies
    const openFolderProjectsMovies = () => {
      setIsFolderProjectsMoviesOpen(true)
      editZIndex('ProjectsMoviesFolder')
      unMinimizeApp(projectsMoviesFolderRef)
    }
  
    const closeFolderProjectsMovies = () => {
      setIsFolderProjectsMoviesOpen(false)
    } 

    // Projects > TV
    const openFolderProjectsTV = () => {
      setIsFolderProjectsTVOpen(true)
      editZIndex('ProjectsTVFolder')
      unMinimizeApp(projectsTVFolderRef)
    }
    
    const closeFolderProjectsTV = () => {
      setIsFolderProjectsTVOpen(false)
    } 

    // Projects > Movies
    const openFolderProjectsVideoclips = () => {
      setIsFolderProjectsVideoclipsOpen(true)
      editZIndex('ProjectsVideoclipsFolder')
      unMinimizeApp(projectsVideoclipsFolderRef)
    }
  
    const closeFolderProjectsVideoclips = () => {
      setIsFolderProjectsVideoclipsOpen(false)
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
   * Linear Gallery
   */
  const openLinearGallery = () => {
    setIsLinearGalleryOpen(true)
    editZIndex('LinearGallery')
    unMinimizeApp(linearGalleryAppRef)
  }

  const closeLinearGallery = () => {
    setIsLinearGalleryOpen(false)
  }

  /**
   * Interviews
   */
  const openInterviews = () => {
    setIsInterviewsOpen(true)
    editZIndex('Interviews')
    unMinimizeApp(interviewsAppRef)
  }

  const closeInterviews = () => {
    setIsInterviewsOpen(false)
  }

  /**
   * Formations
   */
  const openFormations = () => {
    setIsFormationsOpen(true)
    editZIndex('Formations')
    unMinimizeApp(formationsAppRef)
  }

  const closeFormations = () => {
    setIsFormationsOpen(false)
  }

  /**
   * About Me
   */
  const openAboutMe = () => {
    setIsAboutMeOpen(true)
    editZIndex('AboutMe')
    unMinimizeApp(aboutMeAppRef)
  }

  const closeAboutMe = () => {
    setIsAboutMeOpen(false)
  }

  /**
   * Settings 
   */
  const openSettings = () => {
    setIsSettingsOpen(true)
    editZIndex('Settings')
    unMinimizeApp(settingsAppRef)
  }

  const closeSettings = () => {
    setIsSettingsOpen(false)
  }

  /**
   * Calendar
   */
  const openCalendar = () => {
    setIsCalendarOpen(true)
    editZIndex('Calendar')
    unMinimizeApp(calendarAppRef)
  }

  const closeCalendar = () => {
    setIsCalendarOpen(false)
  }

  /**
   * Videobook
   */
  const openVideobook = () => {
    setIsVideobookOpen(true)
    editZIndex('Videobook')
    unMinimizeApp(videobookAppRef)
  }

  const closeVideobook = () => {
    setIsVideobookOpen(false)
  }

  /**
   * Notes
   */
  const openNotes = () => {
    setIsNotesOpen(true)
    editZIndex('Notes')
    unMinimizeApp(notesAppRef)
  }

  const closeNotes = () => {
    setIsNotesOpen(false)
  }

  /**
   * Trash
   */
  const openTrash = () => {
    setIsTrashOpen(true)
    editZIndex('Trash')
    unMinimizeApp(trashAppRef)
  }

  const closeTrash = () => {
    setIsTrashOpen(false)
  }

  /**
   * Agenda
   */
  const openAgenda = () => {
    setIsAgendaOpen(true)
    editZIndex('Agenda')
    unMinimizeApp(agendaAppRef)
  }

  const closeAgenda = () => {
    setIsAgendaOpen(false)
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
      case 'DownloadFolder':
        downloadFolderRef.current.style.zIndex = 2
        break
      case 'DocumentFolder':
        documentFolderRef.current.style.zIndex = 2
        break
      case 'ProjectsFolder':
        projectsFolderRef.current.style.zIndex = 2
        break
      case 'ProjectsMoviesFolder':
          projectsMoviesFolderRef.current.style.zIndex = 2
          break
      case 'ProjectsTVFolder':
          projectsTVFolderRef.current.style.zIndex = 2
          break
      case 'ProjectsVideoclipsFolder':
          projectsVideoclipsFolderRef.current.style.zIndex = 2
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
      case 'LinearGallery':
        linearGalleryAppRef.current.style.zIndex = 2
        break
      case 'Interviews':
        interviewsAppRef.current.style.zIndex = 2
        break
      case 'Formations':
        formationsAppRef.current.style.zIndex = 2
        break
      case 'AboutMe':
        aboutMeAppRef.current.style.zIndex = 2
        break
      case 'Settings':
        settingsAppRef.current.style.zIndex = 2
        break
      case 'Calendar':
        calendarAppRef.current.style.zIndex = 2
        break
      case 'Videobook':
        videobookAppRef.current.style.zIndex = 2 
        break
      case 'Notes':
        notesAppRef.current.style.zIndex = 2
        break
      case 'Trash':
        trashAppRef.current.style.zIndex = 2
        break
      case 'Agenda':
        agendaAppRef.current.style.zIndex = 2 
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
    if (appRef === downloadFolderRef || appRef === documentFolderRef || appRef === projectsFolderRef || appRef === interviewsAppRef || appRef === trashAppRef || appRef === projectsVideoclipsFolderRef || appRef === projectsMoviesFolderRef || appRef === projectsTVFolderRef) {
      appRef.current.style.top = 'calc(100vh - 370px)';
      appRef.current.style.left = '62%'
    } else if (appRef === circGalleryAppRef || appRef === linearGalleryAppRef ) {
      appRef.current.style.top = 'calc(100vh - 440px)';
      appRef.current.style.left = '50%'
    } else if (appRef === aboutMeAppRef) {
      appRef.current.style.top = 'calc(100vh - 460px)';
      appRef.current.style.left = '68%'
    } else if (appRef === calendarAppRef) {
      appRef.current.style.top = 'calc(100vh - 340px)';
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
    /*appRef.current.style.top = '-40px' 
    appRef.current.style.left = 0
    appRef.current.style.width = '100vw'
    appRef.current.style.height = '100vh'*/
  }

  const onSignin = () => {
    setIsAuth(true)
  }

  const onShutDown = () => {
    setIsAuth(false)
  }

  if (!isAuth) {
    return <Auth onSignin={onSignin} />
  } 

  return (
    <>
    <div className="wrapper" ref={wrapperRef}>
    <video id="background-video" autoPlay loop disablePictureInPicture controlsList="nodownload" ref={videoBgRef}>
      <source src="/videos/reel2.mp4" type="video/mp4" />
    </video>

      <StatusBar toggleAppleMenu={toggleAppleMenu} />

      <div className="inner_wrapper md:mt-20 lg:pt-0" onClick={closeAppleMenu}>
        
        <Folders 
          openFolderDocuments={openFolderDocuments}
          openFolderDownloads={openFolderDownloads} 
          openFolderProjects={openFolderProjects}
          openLinearGallery={openLinearGallery}
          openCircGallery={openCircGallery}  
          openInterviews={openInterviews}
          openFormations={openFormations}
          openAboutMe={openAboutMe}
          openVideobook={openVideobook}
        />

        <FolderDownloads 
          ref={downloadFolderRef} 
          isFolderDownloadsOpen={isFolderDownloadsOpen} 
          closeFolderDownloads={closeFolderDownloads}
          maximizeApp={() => maximizeApp(downloadFolderRef)}
          minimizeApp={() => minimizeApp(downloadFolderRef)}  
          onStartDrag={() => editZIndex('DownloadFolder')} 
          onStopDrag={onStopDrag}
          //
          openFolderProjects={openFolderProjects}
          openFolderDocuments={openFolderDocuments}
          openMakarradas={openLinearGallery}
          openCircGallery={openCircGallery}
          openInterviews={openInterviews}
          openFormations={openFormations}
          openAboutMe={openAboutMe}
        />

        <FolderDocuments 
          ref={documentFolderRef}
          isFolderDocumentsOpen={isFolderDocumentsOpen}
          closeFolderDocuments={closeFolderDocuments}
          maximizeApp={() => maximizeApp(documentFolderRef)}
          minimizeApp={() => minimizeApp(documentFolderRef)}
          onStartDrag={() => editZIndex('DocumentFolder')}
          onStopDrag={onStopDrag}
          //
          openFolderProjects={openFolderProjects}
          openFolderDownloads={openFolderDownloads} 
          openMakarradas={openLinearGallery}
          openCircGallery={openCircGallery}
          openInterviews={openInterviews}
          openFormations={openFormations}
          openAboutMe={openAboutMe}
        />

        <FolderProjects 
          ref={projectsFolderRef}
          isFolderProjectsOpen={isFolderProjectsOpen}
          closeFolderProjects={closeFolderProjects}
          maximizeApp={() => maximizeApp(projectsFolderRef)}
          minimizeApp={() => minimizeApp(projectsFolderRef)}
          onStartDrag={() => editZIndex('ProjectsFolder')}
          onStopDrag={onStopDrag}
          //
          openFolderProjectsVideoclips={openFolderProjectsVideoclips}
          openFolderProjectsMovies={openFolderProjectsMovies}
          openFolderProjectsTV={openFolderProjectsTV}
          //
          openFolderDocuments={openFolderDocuments}
          openFolderDownloads={openFolderDownloads}
          openMakarradas={openLinearGallery}
          openCircGallery={openCircGallery}
          openInterviews={openInterviews}
          openFormations={openFormations}
          openAboutMe={openAboutMe}
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

        <LinearGallery 
          ref={linearGalleryAppRef}
          isLinearGalleryOpen={isLinearGalleryOpen}
          closeLinearGallery={closeLinearGallery}
          maximizeApp={() => maximizeApp(linearGalleryAppRef)}
          minimizeApp={() => minimizeApp(linearGalleryAppRef)}
          onStartDrag={() => editZIndex('LinearGallery')}
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

        <Interviews 
          ref={interviewsAppRef}
          isInterviewsOpen={isInterviewsOpen}
          closeInterviews={closeInterviews}
          maximizeApp={() => maximizeApp(interviewsAppRef)}
          minimizeApp={() => minimizeApp(interviewsAppRef)}
          onStartDrag={() => editZIndex('Interviews')}
          onStopDrag={onStopDrag}
          //
          openFolderProjects={openFolderProjects}
          openFolderDocuments={openFolderDocuments}
          openFolderDownloads={openFolderDownloads}
          openMakarradas={openLinearGallery}
          openCircGallery={openCircGallery}
          openFormations={openFormations}
          openAboutMe={openAboutMe}
        />

        <Formations 
          ref={formationsAppRef}
          isFormationsOpen={isFormationsOpen}
          closeFormations={closeFormations}
          maximizeApp={() => maximizeApp(formationsAppRef)}
          minimizeApp={() => minimizeApp(formationsAppRef)}
          onStartDrag={() => editZIndex('Formations')}
          onStopDrag={onStopDrag}
        />

        <AboutMe 
          ref={aboutMeAppRef}
          isAboutMeOpen={isAboutMeOpen}
          closeAboutMe={closeAboutMe}
          maximizeApp={() => maximizeApp(aboutMeAppRef)}
          minimizeApp={() => minimizeApp(aboutMeAppRef)}
          onStartDrag={() => editZIndex('AboutMe')}
          onStopDrag={onStopDrag}
        />

        <Calendar 
          ref={calendarAppRef}
          isCalendarOpen={isCalendarOpen}
          closeCalendar={closeCalendar}
          maximizeApp={() => maximizeApp(calendarAppRef)}
          minimizeApp={() => minimizeApp(calendarAppRef)}
          onStartDrag={() => editZIndex('Calendar')}
          onStopDrag={onStopDrag}
        />

        <Videobook 
          ref={videobookAppRef}
          isVideobookOpen={isVideobookOpen}
          closeVideobook={closeVideobook}
          maximizeApp={() => maximizeApp(videobookAppRef)}
          minimizeApp={() => minimizeApp(videobookAppRef)}
          onStartDrag={() => editZIndex('Videobook')}
          onStopDrag={onStopDrag} 
        />
        
        <Settings 
          ref={settingsAppRef}
          isSettingsOpen={isSettingsOpen}
          closeSettings={closeSettings}
          maximizeApp={() => maximizeApp(settingsAppRef)}
          minimizeApp={() => minimizeApp(settingsAppRef)} 
          onStartDrag={() => editZIndex('Settings')}
          onStopDrag={onStopDrag}
          isValisMode={isValisMode}
          isHideBar={isHideBar}
          setIsValisMode={setIsValisMode}
          setIsHideBar={setIsHideBar}
        />

        <Notes 
          ref={notesAppRef}
          isNotesOpen={isNotesOpen}
          closeNotes={closeNotes}
          maximizeApp={() => maximizeApp(notesAppRef)}
          minimizeApp={() => minimizeApp(notesAppRef)}
          onStartDrag={() => editZIndex('Notes')}
          onStopDrag={onStopDrag}
        />

        <Agenda 
          ref={agendaAppRef}
          isAgendaOpen={isAgendaOpen}
          closeAgenda={closeAgenda}
          maximizeApp={() => maximizeApp(agendaAppRef)}
          minimizeApp={() => minimizeApp(agendaAppRef)}
          onStartDrag={() => editZIndex('Agenda')}
          onStopDrag={onStopDrag}
        />

        <Trash 
          ref={trashAppRef}
          isTrashOpen={isTrashOpen}
          closeTrash={closeTrash}
          maximizeApp={() => maximizeApp(trashAppRef)}
          minimizeApp={() => minimizeApp(trashAppRef)}
          onStartDrag={() => editZIndex('Trash')}
          onStopDrag={onStopDrag}
           //
           openFolderProjects={openFolderProjects}
           openFolderDocuments={openFolderDocuments}
           openFolderDownloads={openFolderDownloads}
           openMakarradas={openLinearGallery}
           openCircGallery={openCircGallery}
           openFormations={openFormations}
           openAboutMe={openAboutMe}
        />

        <ProjectsVideoclips 
          ref={projectsVideoclipsFolderRef}
          isFolderProjectsVideoclipsOpen={isFolderProjectsVideoclipsOpen}
          closeFolderProjectsVideoclips={closeFolderProjectsVideoclips}
          maximizeApp={() => maximizeApp(projectsVideoclipsFolderRef)}
          minimizeApp={() => minimizeApp(projectsVideoclipsFolderRef)}
          onStartDrag={() => editZIndex('ProjectsVideoclipsFolder')}
          onStopDrag={onStopDrag}
          //
          openFolderProjects={openFolderProjects}
          openFolderDocuments={openFolderDocuments}
          openFolderDownloads={openFolderDownloads}
          openMakarradas={openLinearGallery}
          openCircGallery={openCircGallery}
          openFormations={openFormations}
          openAboutMe={openAboutMe}
        />

        <ProjectsMovies 
          ref={projectsMoviesFolderRef}
          isFolderProjectsMoviesOpen={isFolderProjectsMoviesOpen}
          closeFolderProjectsMovies={closeFolderProjectsMovies}
          maximizeApp={() => maximizeApp(projectsMoviesFolderRef)}  
          minimizeApp={() => minimizeApp(projectsMoviesFolderRef)}
          onStartDrag={() => editZIndex('ProjectsMoviesFolder')}
          onStopDrag={onStopDrag}
          //
          openFolderProjects={openFolderProjects}
          openFolderDocuments={openFolderDocuments}
          openFolderDownloads={openFolderDownloads}
          openMakarradas={openLinearGallery}
          openCircGallery={openCircGallery}
          openFormations={openFormations}
          openAboutMe={openAboutMe}
        />

        <ProjectsTV 
          ref={projectsTVFolderRef}
          isFolderProjectsTVOpen={isFolderProjectsTVOpen}
          closeFolderProjectsTV={closeFolderProjectsTV}
          maximizeApp={() => maximizeApp(projectsTVFolderRef)}
          minimizeApp={() => minimizeApp(projectsTVFolderRef)}
          onStartDrag={() => editZIndex('ProjectsTVFolder')}
          onStopDrag={onStopDrag}
          //
          openFolderProjects={openFolderProjects}
          openFolderDocuments={openFolderDocuments}
          openFolderDownloads={openFolderDownloads}
          openMakarradas={openLinearGallery}
          openCircGallery={openCircGallery}
          openFormations={openFormations}
          openAboutMe={openAboutMe}
        />

        <AppleMenu 
          isAppleMenuOpen={isAppleMenuOpen} 
          onShutDown={onShutDown} 
          //
          openAboutMe={openAboutMe}
          openSettings={openSettings}
          openFolderDocuments={openFolderDocuments}
          closeFolderDocuments={closeFolderDocuments}
        />
      </div>

      <MenuBar 
        openFolderContent={openFolderDocuments} 
        openPhotoBooth={openPhotoBooth} 
        openGMaps={openGMaps} 
        openSketch={openSketch} 
        openMusic={openMusic} 
        openSettings={openSettings}
        openCalendar={openCalendar}
        openNotes={openNotes}
        openTrash={openTrash}
        openAgenda={openAgenda}
        isHideBar={isHideBar}
      />
    </div>

    {isValisMode && <ValisMode /> }

    </>
  )
}

export default App
