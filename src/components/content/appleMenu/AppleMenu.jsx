import React from 'react'
import styles from './AppleMenu.module.css'

export default function AppleMenu({ 
  isAppleMenuOpen, 
  onShutDown,
  // 
  openAboutMe, 
  openSettings, 
  openFolderDocuments, 
  closeFolderDocuments
}) {
    return (
      <>
        <div
          className={styles.wrapper}
          style={{
            visibility: isAppleMenuOpen ? "visible" : "hidden",
          }}
        >
          <ul className={styles.ul}>
            <li className={styles.li} onClick={openAboutMe}>
              <p className={styles.p}>About Me</p>
            </li>
  
            <div className={styles.border}></div>
  
            <li className={styles.li} onClick={openSettings}>
              <p className={styles.p}>System Settings</p>
            </li>
  
            <li className={styles.li} 
                onClick={() => window.open('https://abelovalis.bigcartel.com/', '_blank')}
                onTouchStart={() => window.open('https://abelovalis.bigcartel.com/', '_blank')}>
              <p className={styles.p}>Abel Store</p>
              <span className={styles.appStoreSpan}>3 updates</span>
            </li>
  
            <div className={styles.border}></div>
  
            <li className={styles.li} onClick={openFolderDocuments}>
              <p className={styles.p}>Recent Items</p>
            </li>
  
            <div className={styles.border}></div>
  
            <li className={styles.li} onClick={closeFolderDocuments}>
              <p className={styles.p}>Force Quit Finder</p>
              <span className={styles.chars}>
                &#x2318; &#x21e7; &#x2325; &#x2303;
              </span>
            </li>
  
            <div className={styles.border}></div>
  
            <li className={styles.li} onClick={onShutDown}>
              <p className={styles.p}>Sleep</p>
            </li>
  
            <li className={styles.li} onClick={onShutDown}>
              <p className={styles.p}>Restart</p>
            </li>
  
            <li className={styles.li} onClick={onShutDown}>
              <p className={styles.p}>Shut Down...</p>
            </li>
  
            <div className={styles.border}></div>
  
            <li className={styles.li} onClick={onShutDown}>
              <p className={styles.p}>Lock Screen</p>
              <span className={styles.chars}>&#x21e7; &#x2318; Q</span>
            </li>
            <li className={styles.li} onClick={onShutDown}>
              <p className={styles.p}>Log Out User...</p>
              <span className={styles.chars}>&#x2318; &#x21e7; Q</span>
            </li>
          </ul>
        </div>
      </>
    );
  };
