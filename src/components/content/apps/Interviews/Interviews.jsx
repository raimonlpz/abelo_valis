import React, { forwardRef } from 'react'
import styles from './Interviews.module.css'
import Draggable from 'react-draggable'

const Interviews = forwardRef(({ isInterviewsOpen, closeInterviews, maximizeApp, minimizeApp, onStartDrag, onStopDrag }, ref) => {

    const data = [
        { name: 'https://www.neo2.com/abelo-valis-moda-canalla/', kind: 'Neo2', date: '2019-11-06' },
        { name: 'https://www.neo2.com/descubriendo-al-artista-multidisciplinar-abelo-valis/', kind: 'Neo2', date: '2020-07-03' },
        { name: 'https://www.lavozdegalicia.es/noticia/vigo/2023/12/27/mejor-obra-/0003_202312V27C8991.htm', kind: 'La Voz de Galicia', date: '2023-12-27' },
        { name: 'https://troiscontactblog.wordpress.com/portfolio/blooper-abelo-valis/', kind: 'TroisContact Blog', date: 'Unknown' },
        { name: 'https://www.laregion.es/articulo/ourense/abelo-valis-ribadaviense-enamoro-camara/20170910153750735002.html', kind: 'La Región', date: '2017-09-11' },
      ];

    return (
        <Draggable
            onStart={onStartDrag}
            onStop={onStopDrag}
        >
            <div
                ref={ref}
                className={styles.wrapper}
                style={{
                    visibility: isInterviewsOpen ? "visible" : "hidden",
                }}
            >
                <div className={styles.left_inner_wrapper}>
                    <div className={styles.left_corner_buttons}>
                        <img
                            onClick={closeInterviews}
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
                    </div>
                    <div className={styles.left_menu_wrapper}>
                        <h5 className={styles.menu_title}>Favourites</h5>
                        <ul className={styles.left_ul}>
                            <li className={styles.left_li}>
                                <img
                                    className={styles.blue_icon_img}
                                    src="/images/blueicons/star.png"
                                    alt="star"
                                />
                                <p className={styles.left_li_text}>Proyectos</p>
                            </li>
                            <li className={styles.left_li}>
                            <img
                                className={styles.blue_icon_img}
                                src="/images/blueicons/file.png"
                                alt="file"
                            />
                            <p className={styles.left_li_text}>CV_2024</p>
                            </li>
                            <li className={styles.left_li}>
                            <img
                                className={styles.blue_icon_img}
                                src="/images/blueicons/clock.png"
                                alt="clock"
                            />
                            <p className={styles.left_li_text}>Sobre Mi</p>
                            </li>
                            <li className={styles.left_li}>
                            <img
                                className={styles.blue_icon_img}
                                src="/images/blueicons/file.png"
                                alt="file"
                            />
                            <p className={styles.left_li_text}>Formación</p>
                            </li>
                            <li className={styles.left_li}>
                            <img
                                className={styles.blue_icon_img}
                                src="/images/blueicons/files.png"
                                alt="files"
                            />
                            <p className={styles.left_li_text}>Documentos</p>
                            </li>
                            <li className={styles.left_li}>
                            <img
                                className={styles.blue_icon_img}
                                src="/images/blueicons/folder.png"
                                alt="folder"
                            />
                            <p className={styles.left_li_text}>Fotos</p>
                            </li>
                            <li className={styles.left_li}>
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
                            <li className={styles.left_li}>
                            <img
                                className={styles.blue_icon_img}
                                src="/images/blueicons/cloud.png"
                                alt="cloud"
                            />
                            <p className={styles.left_li_text}>Makarrada$</p>
                            </li>
                        </ul>
                        <h5 className={styles.menu_title}>Tags</h5>
                        <ul className={styles.left_ul}>
                            <li className={styles.left_li}>
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
                            </li>
                            <li className={styles.left_li}>
                            <img
                                className={styles.blue_icon_img}
                                src="/images/blueicons/allTags.png"
                                alt="allTags"
                            />
                            <p className={styles.left_li_text}>All Tags</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.right_inner_wrapper}>
            <div className={styles.right_top_bar}>
              <div className={styles.right_top_bar_left}>
                <img src="/images/icons/left_arrow.png" alt="left_arrow" />
                <img src="/images/icons/right_arrow.png" alt="right_arrow" />
                <p className={styles.left_text}>Prensa</p>
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
              <div className={styles.finder_table}>
                <div className={styles.finder_header}>
                    <div className={styles.finder_cell}>Name</div>
                    <div className={styles.finder_cell}>Kind</div>
                    <div className={styles.finder_cell}>Size</div>
                    <div className={styles.finder_cell}>Date</div>
                </div>
                {data.map((item, index) => (
                    <div key={index} className={styles.finder_row}>
                    <div className={styles.finder_cell}>
                        <a href={item.name} target='_blank' >{item.name}</a>
                    </div>
                    <div className={styles.finder_cell}>{item.kind}</div>
                    <div className={styles.finder_cell}>--</div>
                    <div className={styles.finder_cell}>{item.date}</div>
                    </div>
                ))}
                </div>
            </div>
          </div>
            </div>
        </Draggable>
    )
})


export default Interviews