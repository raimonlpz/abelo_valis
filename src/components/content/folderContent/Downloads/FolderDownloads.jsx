import React, { useState, forwardRef } from 'react'
import styles from './FolderDownloads.module.css'
import Draggable from 'react-draggable';

const FolderDownloads = React.forwardRef(({
  isFolderDownloadsOpen,
  closeFolderDownloads,
  maximizeApp,
  minimizeApp,
  onStartDrag,
  onStopDrag,
  //
  openFolderProjects,
  openFolderDocuments,
  openCircGallery,
  openMakarradas,
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
    <>
      <Draggable onStart={onStartDrag} onStop={onStopDrag}>
        <div
          ref={ref}
          className={styles.wrapper}
          style={{
            visibility: isFolderDownloadsOpen ? "visible" : "hidden",
          }}
        >
          <div className={styles.left_inner_wrapper}>
            <div className={styles.left_corner_buttons}>
              <img
                onTouchStart={closeFolderDownloads}
                onClick={closeFolderDownloads}
                className={styles.left_corner_button_img}
                src="/images/icons/close.png"
                alt="icns"
              />
              <img
                onTouchStart={minimizeApp}
                onClick={minimizeApp}
                className={styles.left_corner_button_minimize}
                src="/images/icons/minimise.png"
                alt="icns"
              />
              <img
                onTouchStart={maximizeApp}
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
                <li className={styles.left_li} onClick={openFolderProjects} onTouchStart={handleTouchStart(openFolderProjects)}>
                  <img
                    className={styles.blue_icon_img}
                    src="/images/blueicons/star.png"
                    alt="star"
                  />
                  <p className={styles.left_li_text}>Proyectos</p>
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
                <li className={styles.left_li} onClick={openInterviews} onTouchStart={handleTouchStart(openInterviews)}>
                  <img
                    className={styles.blue_icon_img}
                    src="/images/blueicons/download.png"
                    alt="download"
                  />
                  <p className={styles.left_li_text}>Prensa</p>
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
              </ul>*/}
            </div>
          </div>
          <div className={styles.right_inner_wrapper}>
            <div className={styles.right_top_bar}>
              <div className={styles.right_top_bar_left}>
                <img src="/images/icons/left_arrow.png" alt="left_arrow" />
                <img src="/images/icons/right_arrow.png" alt="right_arrow" />
                <p className={styles.left_text}>Descargas</p>
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
                <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('libros')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={() => window.open('https://archive.org/', '_blank')} onTouchStart={handleTouchStart(() => window.open('https://archive.org/', '_blank'))}>
                  <img
                    src="/images/icons/archiveorg.png"
                    alt="folder"
                    style={{ 'width': '80px' }}
                    className={`${folderOnfocus === 'libros' ? styles.selectedIcon : ''}`}
                  />
                  <span className={`${folderOnfocus === 'libros' ? styles.selected : ''}`}>Libros</span>
                </div>
                <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('emule')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={() => window.open('https://audiotools.in/', '_blank')} onTouchStart={handleTouchStart(() => window.open('https://audiotools.in/', '_blank'))}>
                  <img
                    src="/images/icons/emule.png"
                    alt="folder"
                    style={{ 'width': '80px' }}
                    className={`${folderOnfocus === 'emule' ? styles.selectedIcon : ''}`}
                  />
                  <span className={`${folderOnfocus === 'emule' ? styles.selected : ''}`}>Música/Plugins</span>
                </div>
                <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('utorrent')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={() => window.open('https://www.utorrent.com/', '_blank')} onTouchStart={handleTouchStart(() => window.open('https://www.utorrent.com/', '_blank'))}>
                  <img
                    src="/images/icons/utorrent.png"
                    alt="folder"
                    style={{ 'width': '80px' }}
                    className={`${folderOnfocus === 'utorrent' ? styles.selectedIcon : ''}`}
                  />
                  <span className={`${folderOnfocus === 'utorrent' ? styles.selected : ''}`}>xxx</span>
                </div>
                <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('pirate')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={() => window.open('https://thepiratebay3.co/', '_blank')} onTouchStart={handleTouchStart(() => window.open('https://thepiratebay3.co/', '_blank'))}>
                  <img
                    src="/images/icons/piratebay.png"
                    alt="folder"
                    style={{ 'width': '80px' }}
                    className={`${folderOnfocus === 'pirate' ? styles.selectedIcon : ''}`}
                  />
                  <span className={`${folderOnfocus === 'pirate' ? styles.selected : ''}`}>🚬🥃💊</span>
                </div>
                {/* <div className={styles.folderWrapper}>
                  <img src="/images/folder.png" alt="folder" />
                  <span>Education</span>
                </div>
                <div className={styles.folderWrapper}>
                  <img src="/images/folder.png" alt="folder" />
                  <span>React JS</span>
                </div>
                <div className={styles.folderWrapper}>
                  <img src="/images/folder.png" alt="folder" />
                  <span>Javascript</span>
                </div>
                <div className={styles.folderWrapper}>
                  <img src="/images/folder.png" alt="folder" />
                  <span>Codersbite</span>
                </div> */}
              </div>
              <div className={styles.row}>
                <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('stremio')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={() => window.open('https://www.stremio.com/', '_blank')} onTouchStart={handleTouchStart(() => window.open('https://www.stremio.com/', '_blank'))}>
                  <img
                    src="/images/icons/stremio.ico"
                    alt="folder"
                    style={{ 'width': '80px' }}
                    className={`${folderOnfocus === 'stremio' ? styles.selectedIcon : ''}`}
                  />
                  <span className={`${folderOnfocus === 'stremio' ? styles.selected : ''}`}>Pelis</span>
                </div>
                {/* <div className={styles.folderWrapper}>
                  <img src="/images/folder.png" alt="folder" />
                  <span>Music Files</span>
                </div>
                <div className={styles.folderWrapper}>
                  <img src="/images/folder.png" alt="folder" />
                  <span>Weather</span>
                </div>
                <div className={styles.folderWrapper}>
                  <img
                    className={styles.file}
                    src="/images/graph.png"
                    alt="folder"
                  />
                  <span>Kessy</span>
                </div>
                <div className={styles.folderWrapper}>
                  <img
                    className={styles.file}
                    src="/images/mov.png"
                    alt="folder"
                  />
                  <span>Hond</span>
                </div>
                <div className={styles.folderWrapper}>
                  <img
                    className={styles.file}
                    src="/images/image_file.png"
                    alt="folder"
                  />
                  <span>Bird</span>
                </div> */}
              </div>
              <div className={styles.row}>
                {/* <div className={styles.folderWrapper}>
                  <img
                    className={styles.file}
                    src="/images/image_file.png"
                    alt="folder"
                  />
                  <span>Lion</span>
                </div>
                <div className={styles.folderWrapper}>
                  <img
                    className={styles.file}
                    src="/images/image_file.png"
                    alt="folder"
                  />
                  <span>Tiger</span>
                </div>
                <div className={styles.folderWrapper}>
                  <img
                    className={styles.file}
                    src="/images/mov.png"
                    alt="folder"
                  />
                  <span>Trees</span>
                </div>
                <div className={styles.folderWrapper}>
                  <img src="/images/folder.png" alt="folder" />
                  <span>Wallpapers</span>
                </div>
                <div className={styles.folderWrapper}>
                  <img src="/images/folder.png" alt="folder" />
                  <span>Github</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

      </Draggable>
    </>
  );
});

export default FolderDownloads