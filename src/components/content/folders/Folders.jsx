import React, { useState } from 'react'
import styles from './Folders.module.css'
import Draggable from 'react-draggable'
import { isTouchDevice } from '../../../utils/isTouchDevice'

export default function Folders({ openFolderContent, openCircGallery, openLinearGallery }) {

  const [folderOnfocus, setFolderOnfocus] = useState(null)

  return (
    <>
       <div className={styles.wrapper_left}>
          <Draggable >
            <a rel="noopener noreferrer" href="https://abelovalis.bigcartel.com/" target="_blank" className={styles.folderWrapper} onClick={() => setFolderOnfocus('abel_store')} onMouseLeave={() => setFolderOnfocus(null)}>
      
                <img 
                    src="/images/menubarimages/3.png" 
                    alt="folder" 
                    draggable="false"
                    onTouchStart={isTouchDevice() ? openFolderContent : null}
                    onDoubleClick={openFolderContent} 
                    className={`${styles.folderText} ${folderOnfocus === 'abel_store' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'abel_store' ? styles.selected : ''} `}>&nbsp;Abel Store</span>

            </a>
          </Draggable>

          <div className={styles.marginBottom20}>
            </div>


          <Draggable >
            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('2021')} onMouseLeave={() => setFolderOnfocus(null)}>
                  <img 
                    src="/images/folder.png" 
                    alt="folder" 
                    draggable="false"
                    onTouchStart={isTouchDevice() ? openFolderContent : null}
                    onDoubleClick={openCircGallery} 
                    className={`${styles.folderText} ${folderOnfocus === '2021' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === '2021' ? styles.selected : ''} `}>&nbsp; 2021-2024</span>
            </div>
          </Draggable>

          <div className={styles.marginBottom20}>
            </div>

          <Draggable >
            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('entrevistas')} onMouseLeave={() => setFolderOnfocus(null)}>
                  <img 
                    src="/images/folder.png" 
                    alt="folder" 
                    draggable="false"
                    onTouchStart={isTouchDevice() ? openFolderContent : null}
                    onDoubleClick={openFolderContent} 
                    className={`${styles.folderText} ${folderOnfocus === 'entrevistas' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'entrevistas' ? styles.selected : ''} `}>&nbsp;Entrevistas</span>
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
                    onTouchStart={isTouchDevice() ? openFolderContent : null}
                    onDoubleClick={openFolderContent} 
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
                    onTouchStart={isTouchDevice() ? openFolderContent : null}
                    onDoubleClick={openFolderContent} 
                    className={`${styles.folderText} ${folderOnfocus === 'cv' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'cv' ? styles.selected : ''} `}>&nbsp;CV_2024.pdf</span>
            </div>
          </Draggable>
      </div>

      <div className={styles.wrapper_rand3}>
          <Draggable>
            <div  className={styles.folderWrapper} onClick={() => setFolderOnfocus('insta')} onMouseLeave={() => setFolderOnfocus(null)}> 
                  <a rel="noopener noreferrer" href="https://www.instagram.com/abelovalis" target="_blank">
                    <img 
                      src="/images/customicons/insta-logo.webp" 
                      alt="folder" 
                      draggable="false"
                      onClick={openFolderContent} 
                      className={`${styles.folderText} ${folderOnfocus === 'insta' ? styles.selectedIcon : ''} `}
                    />
                  </a>
                  {/* <span className={styles.folderText}>&nbsp;CV_2024.pdf</span> */}
            </div>
          </Draggable>
      </div>

        <div className={styles.wrapper_right}>
  
          <Draggable >
            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('downloads')} onMouseLeave={() => setFolderOnfocus(null)}>
                  <img 
                    src="/images/folder.png" 
                    alt="folder" 
                    draggable="false"
                    onTouchStart={isTouchDevice() ? openFolderContent : null}
                    onDoubleClick={openFolderContent} 
                    className={`${styles.folderText} ${folderOnfocus === 'downloads' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'downloads' ? styles.selected : ''} `}>Downloads</span>
            </div>
          </Draggable>
     
            <div className={styles.marginBottom20}>
            </div>

            <Draggable>
              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('documents')} onMouseLeave={() => setFolderOnfocus(null)}>
                  <img 
                    src="/images/folder.png" 
                    draggable="false"
                    alt="folder" 
                    onTouchStart={isTouchDevice() ? openFolderContent : null}
                    onDoubleClick={openFolderContent}  
                    className={`${styles.folderText} ${folderOnfocus === 'documents' ? styles.selectedIcon : ''} `}
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'documents' ? styles.selected : ''} `}>Documents</span>
              </div>
            </Draggable>

            
            
            <div className={styles.marginBottom20}>
            </div>

            <Draggable>
              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('macarradas')} onMouseLeave={() => setFolderOnfocus(null)}>
                  <img 
                    src="/images/customicons/gun.png"
                    draggable="false"
                    alt="folder"
                    onTouchStart={isTouchDevice() ? openFolderContent : null} 
                    onDoubleClick={openLinearGallery}
                    className={`${styles.folderText} ${folderOnfocus === 'macarradas' ? styles.selectedIcon : ''} `}  
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'macarradas' ? styles.selected : ''} `}>Macarrada$</span>
              </div>
            </Draggable>

            <div className={styles.marginBottom20}>
            </div>

            <Draggable>
              <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('book')} onMouseLeave={() => setFolderOnfocus(null)}>
                  <img 
                        src="/images/folder.png" 
                    draggable="false"
                    alt="folder" 
                    onTouchStart={isTouchDevice() ? openFolderContent : null}
                    onDoubleClick={openFolderContent}  
                    className={`${styles.folderText} ${folderOnfocus === 'book' ? styles.selectedIcon : ''} `}  
                  />
                  <span className={`${styles.folderText} ${folderOnfocus === 'book' ? styles.selected : ''} `}>&nbsp; Book :p</span>
              </div>
            </Draggable>
        </div>
    </>
  )
}
