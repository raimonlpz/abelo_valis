import React from 'react'
import styles from './Folders.module.css'
import Draggable from 'react-draggable'

export default function Folders({ openFolderContent }) {
  return (
    <>
       <div className={styles.wrapper_left}>
       <Draggable >
            <div className={styles.folderWrapper}>
                  <img 
                    src="/images/menubarimages/3.png" 
                    alt="folder" 
                    draggable="false"
                    onDoubleClick={openFolderContent} 
                  />
                  <span className={styles.folderText}>&nbsp;Abel Store</span>
            </div>
          </Draggable>

          <div className={styles.marginBottom20}>
            </div>


          <Draggable >
            <div className={styles.folderWrapper}>
                  <img 
                    src="/images/folder.png" 
                    alt="folder" 
                    draggable="false"
                    onDoubleClick={openFolderContent} 
                  />
                  <span className={styles.folderText}>&nbsp; 2021-2024</span>
            </div>
          </Draggable>

          <div className={styles.marginBottom20}>
            </div>

          <Draggable >
            <div className={styles.folderWrapper}>
                  <img 
                    src="/images/folder.png" 
                    alt="folder" 
                    draggable="false"
                    onDoubleClick={openFolderContent} 
                  />
                  <span className={styles.folderText}>&nbsp;Entrevistas</span>
            </div>
          </Draggable>

       </div>

      <div className={styles.wrapper_rand1}>
          <Draggable>
            <div className={styles.folderWrapper}>
                  <img 
                    src="/images/customicons/txt-format.png" 
                    alt="folder" 
                    draggable="false"
                    onDoubleClick={openFolderContent} 
                  />
                  <span className={styles.folderText}>&nbsp;Sobre mi.txt</span>
            </div>
          </Draggable>
      </div>

      <div className={styles.wrapper_rand2}>
          <Draggable>
            <div  className={styles.folderWrapper}>
                  <img 
                    src="/images/customicons/pdf-format.png" 
                    alt="folder" 
                    draggable="false"
                    onDoubleClick={openFolderContent} 
                  />
                  <span className={styles.folderText}>&nbsp;CV_2024.pdf</span>
            </div>
          </Draggable>
      </div>

      <div className={styles.wrapper_rand3}>
          <Draggable>
            <div  className={styles.folderWrapper}>
                  <img 
                    src="/images/customicons/insta-logo.webp" 
                    alt="folder" 
                    draggable="false"
                    onDoubleClick={openFolderContent} 
                  />
                  {/* <span className={styles.folderText}>&nbsp;CV_2024.pdf</span> */}
            </div>
          </Draggable>
      </div>

        <div className={styles.wrapper_right}>
  
          <Draggable >
            <div className={styles.folderWrapper}>
                  <img 
                    src="/images/folder.png" 
                    alt="folder" 
                    draggable="false"
                    onDoubleClick={openFolderContent} 
                  />
                  <span className={styles.folderText}>Downloads</span>
            </div>
          </Draggable>
     
            <div className={styles.marginBottom20}>
            </div>

            <Draggable>
              <div className={styles.folderWrapper}>
                  <img 
                    src="/images/folder.png" 
                    draggable="false"
                    alt="folder" 
                    onDoubleClick={openFolderContent}  
                  />
                  <span  className={styles.folderText}>Documents</span>
              </div>
            </Draggable>

            
            
            <div className={styles.marginBottom20}>
            </div>

            <Draggable>
              <div className={styles.folderWrapper}>
                  <img 
                    src="/images/customicons/gun.png"
                    draggable="false"
                    alt="folder" 
                    onDoubleClick={openFolderContent}  
                  />
                  <span  className={styles.folderText}>Macarrada$</span>
              </div>
            </Draggable>

            <div className={styles.marginBottom20}>
            </div>

            <Draggable>
              <div className={styles.folderWrapper}>
                  <img 
                        src="/images/folder.png" 
                    draggable="false"
                    alt="folder" 
                    onDoubleClick={openFolderContent}  
                  />
                  <span  className={styles.folderText}>&nbsp; Book :p</span>
              </div>
            </Draggable>
        </div>
    </>
  )
}
