import React, { forwardRef, useEffect, useState } from 'react'
import styles from './ProjectsTV.module.css'
import Draggable from 'react-draggable'

const ProjectsTV = forwardRef(({
    isFolderProjectsTVOpen,
    closeFolderProjectsTV,
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
    const data = [
        {
            id: 1,
            title: 'El pueblo',
            subtitles: ['TV Series', '2019-2023', '4 temporadas'],
            info: {
                director: 'Alberto & Laura Caballero',
                stars: ['Abelo Valis, Santi Millán, Carlos Areces, Ingrid Rubio, Ruth Díaz, María Hervás'],
                storyline: "People answer a Newspaper ad to move from City Life, get a house and start living at the abandoned town of Penafría.",
                release: 'May 4, 2019 (Spain)',
                language: 'Spanish',
                locations: "Valdelavilla (Soria, Spain)",
                company: 'Contubernio Films'
            },
            imgs: ['/projects/tv/pueblo1.png', '/projects/tv/pueblo2.png', '/projects/tv/pueblo3.png'],
            links: {
                youtube: 'https://www.youtube.com/watch?v=ABCbAdUX4Dk',
                imdb: 'https://www.imdb.com/title/tt8038148'
            }
        }
    ]

    const [indexProject, setIndexProject] = useState(0)
    const [project, setProject] = useState(data[indexProject])
    const [mainImg, setMainImg] = useState(data[indexProject].imgs[0])

    const changeProjectPlus = () => {
        if (indexProject < data.length - 1) {
            setIndexProject(indexProject + 1)
            setProject(data[indexProject + 1])
        } else {
            setIndexProject(0)
            setProject(data[0])
        }
    }

    const changeProjectMinus = () => {
        if (indexProject > 0) {
            setIndexProject(indexProject - 1)
            setProject(data[indexProject - 1])
        } else {
            setIndexProject(data.length - 1)
            setProject(data[data.length - 1])
        }
    }

    useEffect(() => {
        setMainImg(data[indexProject].imgs[0])
    }, [indexProject])

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
                    visibility: isFolderProjectsTVOpen ? "visible" : "hidden",
                }}
            >
                <div className={styles.left_inner_wrapper}>
                    <div className={styles.left_corner_buttons}>
                        <img
                            onClick={closeFolderProjectsTV}
                            onTouchStart={closeFolderProjectsTV}
                            className={styles.left_corner_button_img}
                            src="/images/icons/close.png"
                            alt="icns"
                        />
                        <img
                            onClick={minimizeApp}
                            className={styles.left_corner_button_minimize}
                            src="/images/icons/minimise.png"
                            alt="icns"
                        />
                        <img
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
                            <img src="/images/icons/left_arrow.png" alt="left_arrow" onClick={changeProjectMinus} />
                            <img src="/images/icons/right_arrow.png" alt="right_arrow" onClick={changeProjectPlus} />
                            <p className={styles.left_text}>Series / TV</p>
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
                        <div className={styles.finder_panel}>
                            <div className={styles.finder_panel_left}>
                                <div className={styles.panel_links}>
                                    <div onClick={() => window.open(project.links.youtube)} onTouchStart={handleTouchStart(() => window.open(project.links.youtube))}>Youtube</div>
                                    <div onClick={() => window.open(project.links.imdb)} onTouchStart={handleTouchStart(() => window.open(project.links.imdb))}>IMDB</div>
                                </div>
                                <div className={styles.panel_main_photo}>
                                    <img src={mainImg} alt="" />
                                </div>
                                <div className={styles.panel_gallery}>
                                    <div>
                                        Más Fotos
                                    </div>
                                    <div>
                                        <img src={project.imgs[0]} alt="" onClick={() => setMainImg(project.imgs[0])} onTouchStart={handleTouchStart(() => setMainImg(project.imgs[0]))} />
                                        <img src={project.imgs[1]} alt="" onClick={() => setMainImg(project.imgs[1])} onTouchStart={handleTouchStart(() => setMainImg(project.imgs[1]))} />
                                        <img src={project.imgs[2]} alt="" onClick={() => setMainImg(project.imgs[2])} onTouchStart={handleTouchStart(() => setMainImg(project.imgs[2]))} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.finder_panel_right}>
                                <div className={styles.panel_title}>
                                    <h5>{project.title}</h5>
                                    <div className={styles.panel_main_photo_mobile}>
                                        <img src={mainImg} alt="" />
                                    </div>
                                    <span>{project.subtitles[0]}</span>
                                    <span>{project.subtitles[1]}</span>
                                    <span>{project.subtitles[2]}</span>
                                </div>
                                <div className={styles.panel_info}>Información</div>
                                <div className={styles.finder_table}>
                                    <div className={styles.finder_row}>
                                        <div className={styles.finder_cell}>
                                        Dirección
                                        </div>
                                        <div>
                                            {project.info.director}
                                        </div>
                                    </div>
                                    <div className={styles.finder_row}>
                                        <div className={styles.finder_cell}>
                                        Reparto
                                        </div>
                                        <div>
                                            {project.info.stars}
                                        </div>
                                    </div>
                                    <div className={styles.finder_row}>
                                        <div className={styles.finder_cell}>
                                        Sinopsis
                                        </div>
                                        <div>
                                            {project.info.storyline}
                                        </div>
                                    </div>
                                    <div className={styles.finder_row}>
                                        <div className={styles.finder_cell}>
                                        Fecha
                                        </div>
                                        <div>
                                            {project.info.release}
                                        </div>
                                    </div>
                                    <div className={styles.finder_row}>
                                        <div className={styles.finder_cell}>
                                        V.O
                                        </div>
                                        <div>
                                            {project.info.language}
                                        </div>
                                    </div>
                                    <div className={styles.finder_row}>
                                        <div className={styles.finder_cell}>
                                        Localizaciones
                                        </div>
                                        <div>
                                            {project.info.locations}
                                        </div>
                                    </div>
                                    <div className={styles.finder_row}>
                                        <div className={styles.finder_cell}>
                                        Producción
                                        </div>
                                        <div>
                                            {project.info.company}
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.panel_links_nav}>
                                    <div onClick={changeProjectMinus} onTouchStart={handleTouchStart(changeProjectMinus)}>&#8676; Anterior</div>
                                    <div onClick={changeProjectPlus} onTouchStart={handleTouchStart(changeProjectPlus)}>Siguiente &#8677;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Draggable>
    )
})

export default ProjectsTV