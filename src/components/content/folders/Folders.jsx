import React, { useState } from 'react';
import styles from './Folders.module.css';
import Draggable from 'react-draggable';
import { isTouchDevice } from '../../../utils/isTouchDevice';

export default function Folders({
  openFolderDocuments,
  openFolderDownloads,
  openFolderProjects,
  openCircGallery,
  openLinearGallery,
  openInterviews,
  openFormations,
  openAboutMe,
  openVideobook
}) {

  const [folderOnfocus, setFolderOnfocus] = React.useState(null);
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = (callback) => (e) => {
      e.preventDefault();
      if (!isTouched) {
          callback(); 
          setIsTouched(true);
          // setTimeout(() => setIsTouched(false), 500);
      }
  };

  const handleClick = (callback) => () => {
    callback();
  };
  

  return (
    <div className={styles.inner_wrapper}>
      <div className={styles.wrapper_left}>
        <Draggable>
          <div className={`${styles.folderWrapper} ${styles.folder_abel_store}`}
          onClick={handleClick(() => window.open('https://abelovalis.bigcartel.com/', '_blank'))}
          onMouseLeave={() => setFolderOnfocus(null)} 
          id="store"
          // onTouchStart={handleTouchStart(() => window.open('https://abelovalis.bigcartel.com/', '_blank'))}
          >
            <img
              src="/images/menubarimages/3.png"
              alt="folder"
              draggable="false"
              onTouchStart={handleTouchStart(() => window.open('https://abelovalis.bigcartel.com/', '_blank'))}
              onDoubleClick={() => window.open('https://abelovalis.bigcartel.com/', '_blank')}
              className={`${styles.folderText} ${folderOnfocus === 'abel_store' ? styles.selectedIcon : ''}`}
            />
            <span className={`${styles.folderText} ${folderOnfocus === 'abel_store' ? styles.selected : ''}`}>Abel Store</span>
          </div>
        </Draggable>
        <div className={styles.marginBottom20}></div>

        <Draggable>
          <div className={`${styles.folderWrapper} ${styles.folder_fotos}`}
            onClick={() => setFolderOnfocus('2021')} onMouseLeave={() => setFolderOnfocus(null)}
            onTouchStart={handleTouchStart(openCircGallery)} id="photos"
            >
            <img
              src="/images/folder.png"
              alt="folder"
              draggable="false"
              onTouchStart={handleTouchStart(openCircGallery)}
              onDoubleClick={openCircGallery}
              className={`${styles.folderText} ${folderOnfocus === '2021' ? styles.selectedIcon : ''}`}
            />
            <span className={`${styles.folderText} ${folderOnfocus === '2021' ? styles.selected : ''}`}>Fotos</span>
          </div>
        </Draggable>
        <div className={styles.marginBottom20}></div>

        <Draggable>
          <div className={`${styles.folderWrapper} ${styles.folder_prensa}`}
            onClick={() => setFolderOnfocus('entrevistas')} onMouseLeave={() => setFolderOnfocus(null)} id="press"
            onTouchStart={ handleTouchStart(openInterviews) }
            >
            <img
              src="/images/folder.png"
              alt="folder"
              draggable="false"
              onTouchStart={handleTouchStart(openInterviews)}
              onDoubleClick={openInterviews}
              className={`${styles.folderText} ${folderOnfocus === 'entrevistas' ? styles.selectedIcon : ''}`}
            />
            <span className={`${styles.folderText} ${folderOnfocus === 'entrevistas' ? styles.selected : ''}`}>Prensa</span>
          </div>
        </Draggable>
        <div className={styles.marginBottom20}></div>

        <Draggable>
          <div className={`${styles.folderWrapper} ${styles.folder_proyectos}`}
            onClick={() => setFolderOnfocus('projects')} onMouseLeave={() => setFolderOnfocus(null)} id="projects"
            onTouchStart={handleTouchStart(openFolderProjects)}
            >
            <img
              src="/images/folder.png"
              alt="folder"
              draggable="false"
              onTouchStart={handleTouchStart(openFolderProjects)}
              onDoubleClick={openFolderProjects}
              className={`${styles.folderText} ${folderOnfocus === 'projects' ? styles.selectedIcon : ''}`}
            />
            <span className={`${styles.folderText} ${folderOnfocus === 'projects' ? styles.selected : ''}`}>Proyectos</span>
          </div>
        </Draggable>
      </div>

      <div className={styles.wrapper_rand1}>
        <Draggable>
          <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('sobre_mi')} onMouseLeave={() => setFolderOnfocus(null)}
          onTouchStart={() => handleTouchStart(openAboutMe)}
          >
            <img
              src="/images/customicons/txt-format.png"
              alt="folder"
              draggable="false"
              onTouchStart={handleTouchStart(openAboutMe)}
              onDoubleClick={openAboutMe}
              className={`${styles.folderText} ${folderOnfocus === 'sobre_mi' ? styles.selectedIcon : ''}`}
            />
            <span className={`${styles.folderText} ${folderOnfocus === 'sobre_mi' ? styles.selected : ''}`}>Sobre mi.txt</span>
          </div>
        </Draggable>
      </div>

      <div className={styles.wrapper_rand2}>
        <Draggable>
          <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('cv')} onMouseLeave={() => setFolderOnfocus(null)}
          onTouchStart={() => handleTouchStart(() => window.open('/files/AbeloValis_CV.pdf', '_blank'))}>
            <img
              src="/images/customicons/pdf-format.png"
              alt="folder"
              draggable="false"
              onTouchStart={handleTouchStart(() => window.open('/files/AbeloValis_CV.pdf', '_blank'))}
              onDoubleClick={() => window.open('/files/AbeloValis_CV.pdf', '_blank')}
              className={`${styles.folderText} ${folderOnfocus === 'cv' ? styles.selectedIcon : ''}`}
            />
            <span className={`${styles.folderText} ${folderOnfocus === 'cv' ? styles.selected : ''}`}>CV_2024.pdf</span>
          </div>
        </Draggable>
      </div>

      <div className={styles.wrapper_rand3}>
      <Draggable>
            <div
                className={styles.folderWrapper}
                onClick={() => setFolderOnfocus('insta')}
                onMouseLeave={() => setFolderOnfocus(null)}
                id='insta'
                onTouchStart={handleTouchStart(() => window.open('https://www.instagram.com/abelovalis', '_blank'))}
            >
                <img
                    src="/images/customicons/insta-logo.webp"
                    alt="folder"
                    draggable="false"
                    className={`${styles.folderText} ${folderOnfocus === 'insta' ? styles.selectedIcon : ''}`}
                    onClick={() => window.open('https://www.instagram.com/abelovalis', '_blank')}
                    onTouchStart={handleTouchStart(() => window.open('https://www.instagram.com/abelovalis', '_blank'))}
                />
                <span
                    id="ig_text"
                    className={`${styles.folderText} ${folderOnfocus === 'insta' ? styles.selected : ''}`}
                >
                    Instagram
                </span>
            </div>
        </Draggable>
      </div>

      <div className={styles.wrapper_rand4}>
        <Draggable>
          <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('videbook')} onMouseLeave={() => setFolderOnfocus(null)} id="reel"
          onTouchStart={handleTouchStart(openVideobook)}
          >
            <img
              src="/images/mov.png"
              alt="folder"
              draggable="false"
              onTouchStart={handleTouchStart(openVideobook)}
              onDoubleClick={openVideobook}
              className={`${styles.folderText} ${folderOnfocus === 'videbook' ? styles.selectedIcon : ''}`}
            />
            <span className={`${styles.folderText} ${folderOnfocus === 'videbook' ? styles.selected : ''}`}>Reel</span>
          </div>
        </Draggable>
      </div>

      <div className={styles.wrapper_right}>
        <Draggable>
          <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('downloads')} onMouseLeave={() => setFolderOnfocus(null)}
          onTouchStart={handleTouchStart(openFolderDownloads)}
          >
            <img
              src="/images/folder.png"
              alt="folder"
              draggable="false"
              onTouchStart={handleTouchStart(openFolderDownloads)}
              onDoubleClick={openFolderDownloads}
              className={`${styles.folderText} ${folderOnfocus === 'downloads' ? styles.selectedIcon : ''}`}
            />
            <span className={`${styles.folderText} ${folderOnfocus === 'downloads' ? styles.selected : ''}`}>Descargas</span>
          </div>
        </Draggable>

        <div className={styles.marginBottom20}></div>

        <Draggable>
          <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('formaciones')} onMouseLeave={() => setFolderOnfocus(null)}
          onTouchStart={handleTouchStart(openFormations)}
          >
            <img
              src="/images/customicons/iterm-logo.webp"
              alt="folder"
              draggable="false"
              onTouchStart={handleTouchStart(openFormations)}
              onDoubleClick={openFormations}
              className={`${styles.folderText} ${folderOnfocus === 'formaciones' ? styles.selectedIcon : ''}`}
            />
            <span className={`${styles.folderText} ${folderOnfocus === 'formaciones' ? styles.selected : ''}`}>Formaciones</span>
          </div>
        </Draggable>

        <div className={styles.marginBottom20}></div>

        <Draggable>
          <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('makarradas')} onMouseLeave={() => setFolderOnfocus(null)} id="games"
          onTouchStart={handleTouchStart(openLinearGallery)}
          >
            <img
              src="/images/customicons/gun.png"
              alt="folder"
              draggable="false"
              onTouchStart={handleTouchStart(openLinearGallery)}
              onDoubleClick={openLinearGallery}
              className={`${styles.folderText} ${folderOnfocus === 'makarradas' ? styles.selectedIcon : ''}`}
            />
            <span className={`${styles.folderText} ${folderOnfocus === 'makarradas' ? styles.selected : ''}`}>Makarrada$</span>
          </div>
        </Draggable>

        <div className={styles.marginBottom20}></div>

        <Draggable>
          <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('documents')} onMouseLeave={() => setFolderOnfocus(null)} id="folder"
          onTouchStart={handleTouchStart(openFolderDocuments)}
          >
            <img
              src="/images/folder.png"
              alt="folder"
              draggable="false"
              onTouchStart={handleTouchStart(openFolderDocuments)}
              onDoubleClick={openFolderDocuments}
              className={`${styles.folderText} ${folderOnfocus === 'documents' ? styles.selectedIcon : ''}`}
            />
            <span className={`${styles.folderText} ${folderOnfocus === 'documents' ? styles.selected : ''}`}>Documentos</span>
          </div>
        </Draggable>
      </div>
    </div>
  );
}
