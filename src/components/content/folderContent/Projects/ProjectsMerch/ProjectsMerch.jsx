import React, { forwardRef, useEffect, useState } from 'react'
import styles from './ProjectsMerch.module.css'
import Draggable from 'react-draggable'

const ProjectsMerch = forwardRef(({
    isFolderProjectsMerchOpen,
    closeFolderProjectsMerch,
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
            title: 'Viva Vigo para Siempre me Cago en Tal de Abelo Valis',
            subtitles: ['20€', 'On sale'],
            description: `
            Compra ya la camiseta Viva Vigo para Siempre de Abelo Valis
                - Cuello redondo
                - Manga corta
                - Composición: 100% Algodón
                - Tallaje amplio
                - Prenda unisex

                El concepto es el concepto.
                Made in Galicia.

                Esto es un preorder, hasta que se cierre no se harán envíos.
                Entre 14-30 días.

                Más info en mi perfil:
                www.instagram.com/abelovalis
            `,
            imgs: ['/projects/merch/1/abel5.webp', '/projects/merch/1/abel22.webp'],
            links: {
                bigcartel: 'https://abelovalis.bigcartel.com/product/viva-vigo-para-siempre-abelo-valis',
            }
        },
        {
            id: 2,
            title: 'San Valistin con Abelo Valis',
            subtitles: ['€90.00 - €27,000.00', 'On sale'],
            description: `
            Hola, soy Abelo Valis.
                Os hablo porque ha llegado mi día favorito del año, San Valistin.
                Un día para que cualquier persona que no esté enamorada, lo esté.

                Y por eso, hoy vengo a ofrecerme a todo aquel que pueda permitirse mi compañía. Me pongo a disposición de toda mujer u hombre que pueda pagar mis servicios.

                TARIFAS:

                Por el módico precio de 90 EUROS podemos pasear juntos de la mano y mantener una amena y excitante conversación sobre cine, música, arte, secretos inconfesables (prometo tener mucha verdad) o sobre la simpleza y la banalidad de la vida.
                DURACIÓN APROX: 90 MIN.

                Por 180 EUROS toda persona que lo desee...
            `,
            imgs: ['/projects/merch/2/abel.webp', '/projects/merch/2/abelo.webp'],
            links: {
                bigcartel: 'https://abelovalis.bigcartel.com/product/san-valistin-con-abelo-valis',
            }
        },
        {
            id: 3,
            title: 'Licor Café Original de Abelo Valis',
            subtitles: ['€7.00', 'Sold out'],
            description: `
            El Licor Café Original Abelo Valis es un aguardiente elaborado a partir de la destilación de bagazo y macerado con café de Colombia.

            Los granos de café colombiano han sido seleccionadas minuciosamente por nuestros expertos y "traídos a Galicia de la forma más legal posible".

            Al tratarse de una botella pequeña, es perfecta para regalar o para llevar de viaje.
            También lo es para aquellas personas que no toman esta bebida habitualmente.
            El Licor Café Abelo Valis se presenta en botella de vidrio de 20cl.

            Nunca se ha visto un aguardiente más humilde y a la vez con más nobleza que éste.

            Elaborado y embotellado en Galicia.
            `,
            imgs: ['/projects/merch/3/licor.webp', '/projects/merch/3/licor2.webp'],
            links: {
                bigcartel: 'https://abelovalis.bigcartel.com/product/licor-cafe-original-de-abelo-valis',
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
                    visibility: isFolderProjectsMerchOpen ? "visible" : "hidden",
                }}
            >
                <div className={styles.left_inner_wrapper}>
                    <div className={styles.left_corner_buttons}>
                        <img
                            onClick={closeFolderProjectsMerch}
                            onTouchStart={handleTouchStart(closeFolderProjectsMerch)}
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
                        <p className={styles.left_text}>Ropa & Objetos</p>
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
                                    {project.links.bigcartel && (
                                    <div onClick={() => window.open(project.links.bigcartel)}onTouchStart={handleTouchStart(() => window.open(project.links.bigcartel))}>Shop</div>
                                )}
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
                                        {project.imgs[2] && <img src={project.imgs[2]} alt="" onClick={() => setMainImg(project.imgs[2])} onTouchStart={handleTouchStart(() => setMainImg(project.imgs[2]))} /> }
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
                                </div>
                                <div className={styles.panel_info}>Información</div>
                                <div className={styles.finder_table}>
                                    <div className={styles.finder_row}>
                                            <div>
                                                {project.description}
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

export default ProjectsMerch