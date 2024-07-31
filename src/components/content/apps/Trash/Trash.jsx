import React, { forwardRef, useState } from 'react'
import styles from './Trash.module.css'
import Draggable from 'react-draggable'

const Trash = forwardRef(({
    isTrashOpen,
    closeTrash,
    maximizeApp,
    minimizeApp,
    onStartDrag,
    onStopDrag,
    //
    openFolderProjects,
    openFolderDocuments,
    openFolderDownloads,
    openMakarradas,
    openCircGallery,
    openFormations,
    openAboutMe
}, ref) => {

    const [folderOnfocus, setFolderOnfocus] = useState(null)

    const handleTouchStart = (callback) => (e) => {
        e.preventDefault();
        callback();
      };

    return (
        <Draggable
            onStart={onStartDrag}
            onStop={onStopDrag}
        >
            <div
                ref={ref}
                className={styles.wrapper}
                style={{
                    visibility: isTrashOpen ? "visible" : "hidden",
                }}
            >
                <div className={styles.left_inner_wrapper}>
                    <div className={styles.left_corner_buttons}>
                        <img
                            onClick={closeTrash}
                            className={styles.left_corner_button_img}
                            src="/images/icons/close.png"
                            alt="icns"
                        />
                        <img
                            onClick={minimizeApp}
                            className={styles.left_corner_button_img}
                            src="/images/icons/minimise.png"
                            alt="icns"
                        />
                        <img
                            onClick={maximizeApp}
                            className={styles.left_corner_button_img}
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
                    <ul className={styles.left_ul}>
                        <li className={styles.left_li}>
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
                            <p className={styles.left_text}>Papelera</p>
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
                            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('ex')} onMouseLeave={() => setFolderOnfocus(null)} >
                                <img
                                    src="/abelo/ex.png"
                                    alt="folder"
                                    style={{ 'width': '80px' }}
                                    className={`${folderOnfocus === 'ex' ? styles.selectedIcon : ''}`}
                                />
                                <span className={`${folderOnfocus === 'ex' ? styles.selected : ''}`}>Mis ex favoritas</span>
                            </div>
                            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('fakes')} onMouseLeave={() => setFolderOnfocus(null)} >
                                <img
                                    src="/abelo/no-rats.png"
                                    alt="folder"
                                    style={{ 'width': '65px', padding: '.25rem' }}
                                    className={`${folderOnfocus === 'fakes' ? styles.selectedIcon : ''} filter brightness-60 invert`}
                                />
                                <span style={{ textAlign: 'center' }} className={`${folderOnfocus === 'fakes' ? styles.selected : ''}`}>Amigxs que creía <br /> que eran mis amigxs<br />  y nunca fueron <br /> mis amigxs</span>
                            </div>
                            <div className={styles.folderWrapper} onClick={() => setFolderOnfocus('cast')} onMouseLeave={() => setFolderOnfocus(null)} >
                                <img
                                    src="/abelo/sims-cast.webp"
                                    alt="folder"
                                    style={{ 'width': '80px' }}
                                    className={`${folderOnfocus === 'cast' ? styles.selectedIcon : ''}`}
                                />
                                <span style={{ textAlign: 'center' }} className={`${folderOnfocus === 'cast' ? styles.selected : ''}`}>Directores <br /> de cásting varios</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Draggable>
    )
})

export default Trash