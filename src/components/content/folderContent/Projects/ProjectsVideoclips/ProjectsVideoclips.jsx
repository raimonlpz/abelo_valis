import React, { forwardRef, useState } from 'react'
import styles from './ProjectsVideoclips.module.css'
import Draggable from 'react-draggable'

const ProjectsVideoclips = forwardRef(({
    isFolderProjectsVideoclipsOpen,
    closeFolderProjectsVideoclips,
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
            title: 'Alizzz: Dónde estás',
            subtitles: ['Music Video', '2024', '4m'],
            info: {
                director: 'Félix Bollaín',
                stars: ['Abelo Valis, Alizz, Ferran Gisbert, Claudia Traisac'],
                storyline: "Music video for Alizzz's song 'Dónde estás' from his album Conducción Temeraria. Directed by Félix Bollain.",
                release: 'May 3, 2024 (Spain)',
                language: 'Spanish',
                locations: "Plaza de Azca, Madrid, Madrid, Spain (Square)",
                company: 'Roma'
            },
            imgs: ['/projects/videoclips/alizz1.png', '/projects/videoclips/alizz2.png', '/projects/videoclips/alizz3.png']
        },
        {
            id: 2,
            title: 'New Order - Be a Rebel',
            subtitles: ['Music Video', '2020', '3m'],
            info: {
                director: 'Nysu',
                stars: ['Abelo Valis', 'Jennifer Bucovineanu'],
                storyline: "Music video for New Order's song 'Be a Rebel'.",
                release: 'December 2, 2020 (UK)',
                language: 'English',
                locations: "United Kingdom",
                company: 'Garage Films'
            },
            imgs: ['/projects/videoclips/no2.png', '/projects/videoclips/no1.png', '/projects/videoclips/no3.png']
        }
    ]
    
    const [project, setProject] = useState(data[0])

    return (
        <Draggable
            onStart={onStartDrag}
            onStop={onStopDrag}
        >
            <div
                ref={ref}
                className={styles.wrapper}
                style={{
                    visibility: isFolderProjectsVideoclipsOpen ? "visible" : "hidden",
                }}
            >
                <div className={styles.left_inner_wrapper}>
                    <div className={styles.left_corner_buttons}>
                        <img
                            onClick={closeFolderProjectsVideoclips}
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
                        <h5 className={styles.menu_title}>Favoritos</h5>
                        <ul className={styles.left_ul}>
                            <li className={styles.left_li} onClick={openFolderProjects}>
                                <img
                                    className={styles.blue_icon_img}
                                    src="/images/blueicons/star.png"
                                    alt="star"
                                />
                                <p className={styles.left_li_text}>Proyectos</p>
                            </li>
                            <li className={styles.left_li} onClick={() => window.open('/files/AbeloValis_CV.pdf', '_blank')}>
                            <img
                                className={styles.blue_icon_img}
                                src="/images/blueicons/file.png"
                                alt="file"
                            />
                            <p className={styles.left_li_text}>CV_2024</p>
                            </li>
                            <li className={styles.left_li} onClick={openAboutMe}>
                            <img
                                className={styles.blue_icon_img}
                                src="/images/blueicons/clock.png"
                                alt="clock"
                            />
                            <p className={styles.left_li_text}>Sobre Mi</p>
                            </li>
                            <li className={styles.left_li} onClick={openFormations}>
                            <img
                                className={styles.blue_icon_img}
                                src="/images/blueicons/file.png"
                                alt="file"
                            />
                            <p className={styles.left_li_text}>Formación</p>
                            </li>
                            <li className={styles.left_li} onClick={openFolderDocuments}>
                            <img
                                className={styles.blue_icon_img}
                                src="/images/blueicons/files.png"
                                alt="files"
                            />
                            <p className={styles.left_li_text}>Documentos</p>
                            </li>
                            <li className={styles.left_li} onClick={openCircGallery}>
                            <img
                                className={styles.blue_icon_img}
                                src="/images/blueicons/folder.png"
                                alt="folder"
                            />
                            <p className={styles.left_li_text}>Fotos</p>
                            </li>
                            <li className={styles.left_li} onClick={openFolderDownloads}>
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
                            <li className={styles.left_li} onClick={openMakarradas}>
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
                        <p className={styles.left_text}>Videoclips</p>
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
                                <div className={styles.panel_main_photo}>
                                    <img src={project.imgs[0]} alt="" />
                                </div>
                                <div className={styles.panel_gallery}>
                                    <div>
                                        Vídeos & Fotos
                                    </div>
                                    <div>
                                        <img src={project.imgs[0]} alt="" />
                                        <img src={project.imgs[1]} alt="" />
                                        <img src={project.imgs[2]} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.finder_panel_right}>
                                <div className={styles.panel_title}>
                                    <h5>{project.title}</h5>
                                    <span>{project.subtitles[0]}</span>
                                    <span>{project.subtitles[1]}</span>
                                    <span>{project.subtitles[2]}</span>
                                </div>
                                <div className={styles.panel_info}>Información</div>
                                <div className={styles.finder_table}>
                                    <div className={styles.finder_row}>
                                            <div className={styles.finder_cell}>
                                                Director
                                            </div>
                                            <div>
                                                {project.info.director}
                                            </div>
                                    </div>
                                    <div className={styles.finder_row}>
                                            <div className={styles.finder_cell}>
                                                Stars
                                            </div>
                                            <div>
                                                {project.info.stars}
                                            </div>
                                    </div>
                                    <div className={styles.finder_row}>
                                            <div className={styles.finder_cell}>
                                                Storyline
                                            </div>
                                            <div>
                                                {project.info.storyline}
                                            </div>
                                    </div>
                                    <div className={styles.finder_row}>
                                            <div className={styles.finder_cell}>
                                                Release Date
                                            </div>
                                            <div>
                                            {project.info.release}
                                            </div>
                                    </div>
                                    <div className={styles.finder_row}>
                                            <div className={styles.finder_cell}>
                                                Language
                                            </div>
                                            <div>
                                                {project.info.language}
                                            </div>
                                    </div>
                                    <div className={styles.finder_row}>
                                            <div className={styles.finder_cell}>
                                                Filming Locations
                                            </div>
                                            <div>
                                                {project.info.locations}
                                            </div>
                                    </div>
                                    <div className={styles.finder_row}>
                                            <div className={styles.finder_cell}>
                                                Production Company
                                            </div>
                                            <div>
                                                {project.info.company}
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Draggable>
    )
})


export default ProjectsVideoclips