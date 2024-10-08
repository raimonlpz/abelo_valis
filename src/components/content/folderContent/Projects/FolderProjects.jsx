import React, { useState, forwardRef } from 'react'
import styles from './FolderProjects.module.css'
import Draggable from 'react-draggable';

const FolderProjects = React.forwardRef(({
    isFolderProjectsOpen, 
    closeFolderProjects, 
    maximizeApp, 
    minimizeApp, 
    onStartDrag, 
    onStopDrag,
    //
    openFolderProjectsVideoclips,
    openFolderProjectsMovies,
    openFolderProjectsTV,
    openFolderProjectsShorts,
    openFolderProjectsPubli,
    openFolderProjectsMerch,
    //
    openFolderDownloads,
    openFolderDocuments,
    openMakarradas,
    openCircGallery,
    openInterviews,
    openFormations,
    openAboutMe
}, ref) => {
  const [folderOnfocus, setFolderOnfocus] = useState(null)

  const handleTouchStart = (callback) => (e) => {
    e.preventDefault();
    callback();
  };

  return (
    <Draggable onStart={onStartDrag} onStop={onStopDrag}>
      <div
        ref={ref}
        className={styles.wrapper}
        style={{
          visibility: isFolderProjectsOpen ? "visible" : "hidden",
        }}
      >
        <div className={styles.left_inner_wrapper}>
          <div className={styles.left_corner_buttons}>
            <img
              onTouchStart={handleTouchStart(closeFolderProjects)}
              onClick={closeFolderProjects}
              className={styles.left_corner_button_img}
              src="/images/icons/close.png"
              alt="icns"
            />
            <img
              onTouchStart={handleTouchStart(minimizeApp)}
              onClick={minimizeApp}
              className={styles.left_corner_button_minimize}
              src="/images/icons/minimise.png"
              alt="icns"
            />
            <img
              onTouchStart={handleTouchStart(maximizeApp)}
              onClick={maximizeApp}
              className={styles.left_corner_button_maximize}
              src="/images/icons/zoom.png"
              alt="icns"
            />
            <div className={styles.closeX}>&#10005;</div>
            <div className={styles.miniX}>-</div>
          </div>
          <div className={styles.left_menu_wrapper}>
            <h5 className={styles.menu_title}>Favoritos</h5>
            <ul className={styles.left_ul}>
            <li className={styles.left_li} onClick={openFolderDocuments} onTouchStart={handleTouchStart(openFolderDocuments)}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/cloud.png"
                  alt="star"
                />
                        <p className={styles.left_li_text}>Documentos</p>
              </li>
              <li className={styles.left_li} onClick={() => window.open('/files/AbeloValis_CV.pdf', '_blank')} onTouchStart={handleTouchStart(() => window.open('/files/AbeloValis_CV.pdf', '_blank'))}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/file.png"
                  alt="file"
                />
                <p className={styles.left_li_text}>CV_2024</p>
              </li>
              <li className={styles.left_li} onClick={openAboutMe} onTouchStart={handleTouchStart(openAboutMe)}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/clock.png"
                  alt="clock"
                />
                <p className={styles.left_li_text}>Sobre Mi</p>
              </li>
              <li className={styles.left_li} onClick={openFormations} onTouchStart={handleTouchStart(openFormations)}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/file.png"
                  alt="file"
                />
                <p className={styles.left_li_text}>Formación</p>
              </li>
              <li className={styles.left_li} onClick={openFolderDocuments} onTouchStart={handleTouchStart(openFolderDocuments)}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/files.png"
                  alt="files"
                />
                <p className={styles.left_li_text}>Documentos</p>
              </li>
              <li className={styles.left_li} onClick={openCircGallery} onTouchStart={handleTouchStart(openCircGallery)}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/folder.png"
                  alt="folder"
                />
                <p className={styles.left_li_text}>Fotos</p>
              </li>
              <li className={styles.left_li} onClick={openFolderDownloads} onTouchStart={handleTouchStart(openFolderDownloads)}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/download.png"
                  alt="download"
                />
                <p className={styles.left_li_text}>Descargas</p>
              </li>
            </ul>
            <h5 className={styles.menu_title}>iCloud</h5>
            <ul className={styles.left_ul}>
              <li className={styles.left_li} onClick={openMakarradas} onTouchStart={handleTouchStart(openMakarradas)}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/cloud.png"
                  alt="cloud"
                />
                <p className={styles.left_li_text}>Makarrada$</p>
              </li>
            </ul>
            {/* <h5 className={styles.menu_title}>Tags</h5>
                    <ul className={styles.left_ul}> */}
            {/* <li className={styles.left_li}>
                        <img
                            className={styles.blue_icon_img}
                            src="/images/blueicons/orangeTag.png"
                            alt="orangeTag"
                        />
                        <p className={styles.left_li_text}>Orange Tag</p>
                        </li>
                        <li className={styles.left_li}>
                        <img
                            className={styles.blue_icon_img}
                            src="/images/blueicons/blueTag.png"
                            alt="blueTag"
                        />
                        <p className={styles.left_li_text}>Blue Tag</p>
                        </li>
                        <li className={styles.left_li}>
                        <img
                            className={styles.blue_icon_img}
                            src="/images/blueicons/greenTag.png"
                            alt="greenTag"
                        />
                        <p className={styles.left_li_text}>Green Tag</p>
                        </li> */}
            {/* <li className={styles.left_li}>
                        <img
                            className={styles.blue_icon_img}
                            src="/images/blueicons/allTags.png"
                            alt="allTags"
                        />
                        <p className={styles.left_li_text}>All Tags</p>
                        </li>
                    </ul> */}
          </div>
        </div>
        <div className={styles.right_inner_wrapper}>
          <div className={styles.right_top_bar}>
            <div className={styles.right_top_bar_left}>
              <img src="/images/icons/left_arrow.png" alt="left_arrow" />
              <img src="/images/icons/right_arrow.png" alt="right_arrow" />
              <p className={styles.left_text}>Proyectos</p>
            </div>
            <div className={styles.right_top_bar_right}>
              <img src="/images/icons/windows.png" alt="windows" />
              <img src="/images/icons/menu.png" alt="menu" />
              <img src="/images/icons/cols.png" alt="cols" />
              <img src="/images/icons/dots.png" alt="dots" />
              <img src="/images/icons/exp.png" alt="exp" />
              <img src="/images/icons/badge.png" alt="badge" />
              <img src="/images/icons/right_arrow2.png" alt="right_arrow2" />
              <img src="/images/icons/search_icon.png" alt="search_icon" />
            </div>
          </div>
          <div className={styles.right_inner_content}>
            <div className={styles.row}>
              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('pelis')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={openFolderProjectsMovies} onTouchStart={handleTouchStart(openFolderProjectsMovies)}>
                <img
                  src="/images/folder.png"
                  alt="folder"
                  style={{ 'width': '70px' }}
                  className={`${folderOnfocus === 'pelis' ? styles.selectedIcon : ''}`}
                />
                <span className={`${folderOnfocus === 'pelis' ? styles.selected : ''}`}>Películas</span>
              </div>
              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('series')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={openFolderProjectsTV} onTouchStart={handleTouchStart(openFolderProjectsTV)}>
                <img
                  src="/images/folder.png"
                  alt="folder"
                  style={{ 'width': '70px' }}
                  className={`${folderOnfocus === 'series' ? styles.selectedIcon : ''}`}
                />
                <span className={`${folderOnfocus === 'series' ? styles.selected : ''}`}>Series</span>
              </div>
              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('musica')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={openFolderProjectsMerch} onTouchStart={handleTouchStart()}>
                <img
                  src="/images/folder.png"
                  alt="folder"
                  style={{ 'width': '70px' }}
                  className={`${folderOnfocus === 'musica' ? styles.selectedIcon : ''}`}
                />
                <span className={`${folderOnfocus === 'musica' ? styles.selected : ''}`}>Ropa & Objetos</span>
              </div>

              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('videoclips')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={openFolderProjectsVideoclips} onTouchStart={handleTouchStart(openFolderProjectsVideoclips)}>
                <img
                  src="/images/folder.png"
                  alt="folder"
                  style={{ 'width': '70px' }}
                  className={`${folderOnfocus === 'videoclips' ? styles.selectedIcon : ''}`}
                />
                <span className={`${folderOnfocus === 'videoclips' ? styles.selected : ''}`}>Videoclips</span>
              </div>
            </div>


            <div className={styles.row}>

              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('shorts')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={openFolderProjectsShorts} onTouchStart={handleTouchStart(openFolderProjectsShorts)}>
                <img
                  src="/images/folder.png"
                  alt="folder"
                  style={{ 'width': '70px' }}
                  className={`${folderOnfocus === 'shorts' ? styles.selectedIcon : ''}`}
                />
                <span className={`${folderOnfocus === 'shorts' ? styles.selected : ''}`}>Cortos</span>
              </div>

              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('publi')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={openFolderProjectsPubli} onTouchStart={handleTouchStart(openFolderProjectsPubli)}>
                <img
                  src="/images/folder.png"
                  alt="folder"
                  style={{ 'width': '70px' }}
                  className={`${folderOnfocus === 'publi' ? styles.selectedIcon : ''}`}
                />
                <span className={`${folderOnfocus === 'publi' ? styles.selected : ''}`}>Publi</span>
              </div>

              <div className={styles.folderWrapper} >
               
              </div>

              <div className={styles.folderWrapper} >
               
              </div>

              <div className={styles.folderWrapper} >
               
              </div>
              
            </div>

            <div className={styles.row}>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  )
})

export default FolderProjects