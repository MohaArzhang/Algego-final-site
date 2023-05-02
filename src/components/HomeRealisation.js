import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog'
import { IconButton, Toolbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import DialogComp from './DialogComp'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function HomeRealisation() {
    AOS.init();

    const [homeRealisation, setHomeRealisation] = useState([])
    useEffect(() => {
        fetch('https://gestion.contenu.algego.com/wp-json/wp/v2/realisation_accueil')
            .then(response => response.json())
            .then(data => setHomeRealisation(data))
    }, [])

    const category = []
    const image = []
    const client = []

    homeRealisation.map((real, index) => {
        return (
            <>
                {category[index] = homeRealisation[index].acf.realisation_categorie}
                {image[index] = homeRealisation[index].acf.image_de_realisation.url}
                {client[index] = homeRealisation[index].acf.realisation_client}
            </>
        )
    })

    const [open, setOpen] = useState(false);
    const [selectedReal, setSelectedReal] = useState(null);

    const handleClickOpen = (eachReal) => {
        setSelectedReal(eachReal)
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false);
    };

    const RealisationComp = (props) => {
        return (
            <>
                <div>
                    <img className='realisationImage' src={props.imageLink} alt={props.client}></img>
                </div>
                <div className='realisationText'>
                    <div className='realisationDes'>{props.category}</div>
                    <div className='realisationClient'>{props.client}</div>
                    <button onClick={props.click} className='btn btn-danger submitBtn decouvrirBtn'>
                        Découvrir
                    </button>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='realisationQuery'>
                <div className='realisationAndTitle'>
                    <div className='realisationTitleQuery'>
                        <p >Quelques réalisations</p>
                        <div className='row'>
                            <div className='col-12 col-sm-6 col-lg-6'>
                                <div
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay=''
                                    data-aos-once="true"
                                    className='realisation'>
                                    <RealisationComp imageLink={image[0]} category={category[0]} client={client[0]} click={() => handleClickOpen(homeRealisation[0])} />
                                </div>
                                <div className='graySectionQuery graySectionResponsive'></div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-6'>
                                <div
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay='200'
                                    data-aos-once="true"
                                    className='realisation'>
                                    <RealisationComp imageLink={image[1]} category={category[1]} client={client[1]} click={() => handleClickOpen(homeRealisation[1])} />
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-6'>
                                <div
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay=''
                                    data-aos-once="true"
                                    className='realisation'>
                                    <RealisationComp imageLink={image[2]} category={category[2]} client={client[2]} click={() => handleClickOpen(homeRealisation[2])} />
                                </div>
                                <div className='graySectionQuery graySectionResponsive'></div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-6'>
                                <div
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay='200'
                                    data-aos-once="true"
                                    className='realisation'>
                                    <RealisationComp imageLink={image[3]} category={category[3]} client={client[3]} click={() => handleClickOpen(homeRealisation[3])} />
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-6'>
                                <div
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay=''
                                    data-aos-once="true"
                                    className='realisation'>
                                    <RealisationComp imageLink={image[4]} category={category[4]} client={client[4]} click={() => handleClickOpen(homeRealisation[4])} />
                                </div>
                                <div className='graySectionQuery'></div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-6'>
                                <div
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay='200'
                                    data-aos-once="true"
                                    className='realisation'>
                                    <RealisationComp imageLink={image[5]} category={category[5]} client={client[5]} click={() => handleClickOpen(homeRealisation[5])} />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay=''
                                    data-aos-once="true"
                                    className='realisation'>
                                    <RealisationComp imageLink={image[6]} category={category[6]} client={client[6]} click={() => handleClickOpen(homeRealisation[6])} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div id='realisationEndingQuery'>
                            Voir d'autres réalisations
                            <a href='/realisations'>
                                <div className="round">
                                    <div id="arrowContainer">
                                        <span className="arrow primary next "></span>
                                        <span className="arrow secondary next "></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container realisationContainer'>
                <div className='realisationAndTitle'>
                    <div id='forSticky'>
                        <div id='realisationTitleRotateWrapper'>
                            <p >Quelques réalisations</p>
                        </div>
                    </div>
                    <div>
                        <div className='realisationWrapper'>
                            <div className='graySection1'
                                data-aos='slide-right'
                                data-aos-duration='1200'
                                data-aos-once="true"
                            >
                                <div className='row realisationRow'>
                                    <div className='col-xl-6'>
                                        <div className='realisation'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay='1000'
                                            data-aos-once="true"
                                        >
                                            <RealisationComp imageLink={image[0]} category={category[0]} client={client[0]} click={() => handleClickOpen(homeRealisation[0])} />
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='realisation'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay='1200'
                                            data-aos-once="true"
                                        >
                                            <RealisationComp imageLink={image[1]} category={category[1]} client={client[1]} click={() => handleClickOpen(homeRealisation[1])} />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xl-12'>
                                        <div className='realisation'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay='800'
                                            data-aos-once="true"
                                        >
                                            <RealisationComp imageLink={image[2]} category={category[2]} client={client[2]} click={() => handleClickOpen(homeRealisation[2])} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='realisationWrapper'>
                            <div className='graySection2'
                                data-aos='slide-right'
                                data-aos-duration='1200'
                                data-aos-once="true"
                            >
                                <div className='row realisationRow'>
                                    <div className='col-xl-6'>
                                        <div className='realisation'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay='1000'
                                            data-aos-once="true"
                                        >
                                            <RealisationComp imageLink={image[3]} category={category[3]} client={client[3]} click={() => handleClickOpen(homeRealisation[3])} />
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='realisation'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay='1200'
                                            data-aos-once="true"
                                        >
                                            <RealisationComp imageLink={image[4]} category={category[4]} client={client[4]} click={() => handleClickOpen(homeRealisation[4])} />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xl-6'>
                                        <div className='realisation'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-once="true"
                                        >
                                            <RealisationComp imageLink={image[5]} category={category[5]} client={client[5]} click={() => handleClickOpen(homeRealisation[5])} />
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='realisation'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay='400'
                                            data-aos-once="true"
                                        >
                                            <RealisationComp imageLink={image[6]} category={category[6]} client={client[6]} click={() => handleClickOpen(homeRealisation[6])} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='realisationEnding'>
                            Voir d'autres réalisations
                            <a href='/realisations'>
                                <div className="round">
                                    <div id="arrowContainer">
                                        <span className="arrow primary next "></span>
                                        <span className="arrow secondary next "></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                {selectedReal &&
                    <DialogComp category={selectedReal.acf.realisation_categorie}
                        client={selectedReal.acf.realisation_client}
                        mandat={selectedReal.acf.texte_de_dialog.mandat}
                        defi={selectedReal.acf.texte_de_dialog.defi}
                        solutions={selectedReal.acf.texte_de_dialog.solutions}
                        type={selectedReal.acf.media_de_dialog_box.selectionner_le_type_de_media}
                        videoLink={selectedReal.acf.media_de_dialog_box.lien_video}
                        imageLink={selectedReal.acf.media_de_dialog_box.lien_image}
                        iframeVideo={selectedReal.acf.media_de_dialog_box.iframe_video}
                    />
                }
            </Dialog>
        </>
    )
}