import React, { useState, forwardRef } from 'react';
import styles from './FolderDocuments.module.css';
import Draggable from 'react-draggable';

const FolderDocuments = forwardRef(({
  isFolderDocumentsOpen,
  closeFolderDocuments,
  maximizeApp,
  minimizeApp,
  onStartDrag,
  onStopDrag,
  openFolderProjects,
  openFolderDownloads,
  openCircGallery,
  openMakarradas,
  openInterviews,
  openFormations,
  openAboutMe
}, ref) => {

  const [folderOnfocus, setFolderOnfocus] = useState(null);

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
          visibility: isFolderDocumentsOpen ? "visible" : "hidden",
        }}
      >
        <div className={styles.left_inner_wrapper}>
          <div className={styles.left_corner_buttons}>
            <img
              onTouchStart={closeFolderDocuments}
              onClick={closeFolderDocuments}
              className={styles.left_corner_button_img}
              src="/images/icons/close.png"
              alt="icns"
            />
            <img
              onTouchStart={minimizeApp}
              onClick={minimizeApp}
              className={`${styles.left_corner_button_minimize} `}
              src="/images/icons/minimise.png"
              alt="icns"
            />
            <img
              onTouchStart={maximizeApp}
              onClick={maximizeApp}
              className={`${styles.left_corner_button_maximize} `}
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
              <li className={styles.left_li} onClick={openInterviews} onTouchStart={handleTouchStart(openInterviews)}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/files.png"
                  alt="files"
                />
                <p className={styles.left_li_text}>Prensa</p>
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
          </div>
        </div>
        <div className={styles.right_inner_wrapper}>
          <div className={styles.right_top_bar}>
            <div className={styles.right_top_bar_left}>
              <img src="/images/icons/left_arrow.png" alt="left_arrow" />
              <img src="/images/icons/right_arrow.png" alt="right_arrow" />
              <p className={styles.left_text}>Documentos</p>
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
              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('projects')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={openFolderProjects} onTouchStart={handleTouchStart(openFolderProjects)}>
                <img src="/images/folder.png" alt="folder" className={`${folderOnfocus === 'projects' ? styles.selectedIcon : ''}`} />
                <span className={`${folderOnfocus === 'projects' ? styles.selected : ''}`}>Proyectos</span>
              </div>
              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('press')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={openInterviews} onTouchStart={handleTouchStart(openInterviews)}>
                <img src="/images/customicons/sys-info.png" alt="folder" className={`${folderOnfocus === 'press' ? styles.selectedIcon : ''} w-16`} />
                <span className={`${folderOnfocus === 'press' ? styles.selected : ''}`}>Prensa</span>
              </div>
              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('formation')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={openFormations} onTouchStart={handleTouchStart(openFormations)}>
                <img src="/images/customicons/iterm-logo.webp" alt="folder" className={`${styles.file} ${folderOnfocus === 'formation' ? styles.selectedIcon : ''}`} />
                <span className={`${folderOnfocus === 'formation' ? styles.selected : ''}`}>Formación</span>
              </div>
              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('downloads')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={openFolderDownloads} onTouchStart={handleTouchStart(openFolderDownloads)}>
                <img src="/images/customicons/download-icon.webp" alt="folder" className={`${folderOnfocus === 'downloads' ? styles.selectedIcon : ''} w-16`} />
                <span className={`${folderOnfocus === 'downloads' ? styles.selected : ''}`}>Descargas</span>
              </div>
              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('about')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={openAboutMe} onTouchStart={handleTouchStart(openAboutMe)}>
                <img
                  className={`${styles.file} ${folderOnfocus === 'about' ? styles.selectedIcon : ''}`}
                  src="/images/customicons/txt-format.png"
                  alt="folder"
                />
                <span className={`${folderOnfocus === 'about' ? styles.selected : ''}`}>Sobre_mi.txt</span>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('cv')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={() => window.open('/files/AbeloValis_CV.pdf', '_blank')} onTouchStart={handleTouchStart(() => window.open('/files/AbeloValis_CV.pdf', '_blank'))}>
                <img
                  className={`${styles.file} ${folderOnfocus === 'cv' ? styles.selectedIcon : ''}`}
                  src="/images/customicons/pdf-format.png"
                  alt="folder"
                />
                <span className={`${folderOnfocus === 'cv' ? styles.selected : ''}`}>CV_2024.pdf</span>
              </div>
              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('photos')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={openCircGallery} onTouchStart={handleTouchStart(openCircGallery)}>
                <img src="/images/customicons/photos-icon.png" alt="folder" className={`${folderOnfocus === 'photos' ? styles.selectedIcon : ''} w-20`} />
                <span className={`${folderOnfocus === 'photos' ? styles.selected : ''}`}>Fotos</span>
              </div>
              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('makarradas')} onMouseLeave={() => setFolderOnfocus(null)} onDoubleClick={openMakarradas} onTouchStart={handleTouchStart(openMakarradas)}>
                <img className={`${styles.file} ${folderOnfocus === 'makarradas' ? styles.selectedIcon : ''}`} src="/images/customicons/gun.png" alt="folder" />
                <span className={`${folderOnfocus === 'makarradas' ? styles.selected : ''}`}>Makarrada$</span>
              </div>
            </div>
            <div className={styles.row}>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
});

export default FolderDocuments;
