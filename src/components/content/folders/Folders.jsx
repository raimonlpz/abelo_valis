import React, { useState } from 'react'
import styles from './Folders.module.css'
import Draggable from 'react-draggable'
import { isTouchDevice } from '../../../utils/isTouchDevice'

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

  const [folderOnfocus, setFolderOnfocus] = useState(null)

  return (
    <div className={styles.inner_wrapper}>
       <div className={styles.wrapper_left}>
          <Draggable >
            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('abel_store')} onMouseLeave={() => setFolderOnfocus(null)}>
                <img 
                    src="/images/menubarimages/3.png" 
                    alt="folder" 
                    draggable="false"
                    onTouchStart={isTouchDevice() ? () => window.open('https://abelovalis.bigcartel.com/', '_blank') : null}
                    onDoubleClick={() => window.open('https://abelovalis.bigcartel.com/', '_blank')} 
                    className={`${styles.folderText} ${folderOnfocus === 'abel_store' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'abel_store' ? styles.selected : ''} `}>&nbsp; &nbsp;Abel Store</span>
            </div>
          </Draggable>
          <div className={styles.marginBottom20}></div>

          <Draggable >
            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('2021')} onMouseLeave={() => setFolderOnfocus(null)}>
                  <img 
                    src="/images/folder.png" 
                    alt="folder" 
                    draggable="false"
                    onTouchStart={isTouchDevice() ? openCircGallery : null}
                    onDoubleClick={openCircGallery} 
                    className={`${styles.folderText} ${folderOnfocus === '2021' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === '2021' ? styles.selected : ''} `}>&nbsp; &nbsp; &nbsp; &nbsp; Fotos</span>
            </div>
          </Draggable>
          <div className={styles.marginBottom20}></div>

          <Draggable >
            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('entrevistas')} onMouseLeave={() => setFolderOnfocus(null)}>
                  <img 
                    src="/images/folder.png" 
                    alt="folder" 
                    draggable="false"
                    onTouchStart={isTouchDevice() ? openInterviews : null}
                    onDoubleClick={openInterviews} 
                    className={`${styles.folderText} ${folderOnfocus === 'entrevistas' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'entrevistas' ? styles.selected : ''} `}>&nbsp; &nbsp; &nbsp; Prensa</span>
            </div>
          </Draggable>
          <div className={styles.marginBottom20}></div>

          <Draggable>
            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('projects')} onMouseLeave={() => setFolderOnfocus(null)}>
                  <img 
                    src="/images/folder.png" 
                    alt="folder" 
                    draggable="false"
                    onTouchStart={isTouchDevice() ? openFolderProjects : null}
                    onDoubleClick={openFolderProjects} 
                    className={`${styles.folderText} ${folderOnfocus === 'projects' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'projects' ? styles.selected : ''} `}>&nbsp; &nbsp;Proyectos</span>
            </div>
          </Draggable>
       </div>

      <div className={styles.wrapper_rand1}>
          <Draggable>
            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('sobre_mi')} onMouseLeave={() => setFolderOnfocus(null)}>
                  <img 
                    src="/images/customicons/txt-format.png" 
                    alt="folder" 
                    draggable="false"
                    onTouchStart={isTouchDevice() ? openAboutMe : null}
                    onDoubleClick={openAboutMe} 
                    className={`${styles.folderText} ${folderOnfocus === 'sobre_mi' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'sobre_mi' ? styles.selected : ''} `}>&nbsp;Sobre mi.txt</span>
            </div>
          </Draggable>
      </div>

      <div className={styles.wrapper_rand2}>
          <Draggable>
            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('cv')} onMouseLeave={() => setFolderOnfocus(null)}>
                  <img 
                    src="/images/customicons/pdf-format.png" 
                    alt="folder" 
                    draggable="false"
                    onTouchStart={isTouchDevice() ? () => window.open('/files/AbeloValis_CV.pdf', '_blank') : null}
                    onDoubleClick={() => window.open('/files/AbeloValis_CV.pdf', '_blank')} 
                    className={`${styles.folderText} ${folderOnfocus === 'cv' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'cv' ? styles.selected : ''} `}>&nbsp;CV_2024.pdf</span>
            </div>
          </Draggable>
      </div>

      <div className={styles.wrapper_rand3}>
          <Draggable>
            <div  className={styles.folderWrapper} onClick={() => setFolderOnfocus('insta')} onMouseLeave={() => setFolderOnfocus(null)}> 
                 
                    <img 
                      src="/images/customicons/insta-logo.webp" 
                      alt="folder" 
                      draggable="false"
                      onTouchStart={isTouchDevice() ? () => window.open('https://www.instagram.com/abelovalis', '_blank') : null}
                      onDoubleClick={() => window.open('https://www.instagram.com/abelovalis', '_blank')} 
                      className={`${styles.folderText} ${folderOnfocus === 'insta' ? styles.selectedIcon : ''} `}
                    />
                    <span id="ig_text" className={`${styles.folderText} ${folderOnfocus === 'insta' ? styles.selected : ''} `}>&nbsp;&nbsp;&nbsp;Instagram</span>
                
            </div>
          </Draggable>
      </div>

      <div className={styles.wrapper_rand4}>
          <Draggable>
            <div  className={styles.folderWrapper} onClick={() => setFolderOnfocus('videbook')} onMouseLeave={() => setFolderOnfocus(null)}> 
                    <img 
                      src="/images/mov.png" 
                      alt="folder" 
                      draggable="false"
                      onTouchStart={isTouchDevice() ? openVideobook : null}
                      onDoubleClick={openVideobook} 
                      className={`${styles.folderText} ${folderOnfocus === 'videbook' ? styles.selectedIcon : ''} `}
                    />
                    <span className={`${styles.folderText} ${folderOnfocus === 'videbook' ? styles.selected : ''} `}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Reel</span>
            </div>
          </Draggable>
      </div>

      <div className={styles.wrapper_right}>

          <Draggable>
            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('downloads')} onMouseLeave={() => setFolderOnfocus(null)}>
                  <img 
                    src="/images/folder.png" 
                    alt="folder" 
                    draggable="false"
                    onTouchStart={isTouchDevice() ? openFolderDownloads : null}
                    onDoubleClick={openFolderDownloads} 
                    className={`${styles.folderText} ${folderOnfocus === 'downloads' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'downloads' ? styles.selected : ''} `}>Descargas</span>
            </div>
          </Draggable>

          <div className={styles.marginBottom20}></div>

          <Draggable>
            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('formaciones')} onMouseLeave={() => setFolderOnfocus(null)}>
                  <img 
                    src="/images/customicons/iterm-logo.webp" 
                    alt="folder" 
                    draggable="false"
                    onTouchStart={isTouchDevice() ? openFormations : null}
                    onDoubleClick={openFormations} 
                    className={`${styles.folderText} ${folderOnfocus === 'formaciones' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'formaciones' ? styles.selected : ''} `}>Formaciones</span>
            </div>
          </Draggable>

          <div className={styles.marginBottom20}></div>

          <Draggable>
            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('makarradas')} onMouseLeave={() => setFolderOnfocus(null)}>
                  <img 
                    src="/images/customicons/gun.png" 
                    alt="folder" 
                    draggable="false"
                    onTouchStart={isTouchDevice() ? openLinearGallery : null}
                    onDoubleClick={openLinearGallery} 
                    className={`${styles.folderText} ${folderOnfocus === 'makarradas' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'makarradas' ? styles.selected : ''} `}>Makarrada$</span>
            </div>
          </Draggable>

          <div className={styles.marginBottom20}></div>


          <Draggable>
            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('documents')} onMouseLeave={() => setFolderOnfocus(null)}>
                  <img 
                    src="/images/folder.png" 
                    alt="folder" 
                    draggable="false"
                    onTouchStart={isTouchDevice() ? openFolderDocuments : null}
                    onDoubleClick={openFolderDocuments} 
                    className={`${styles.folderText} ${folderOnfocus === 'documents' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'documents' ? styles.selected : ''} `}>Documentos</span>
            </div>
          </Draggable>
      </div>
    </div>
  )
}
