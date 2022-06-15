import React, {useState} from 'react'
import Test1 from '../images/test-1.png'
import Test2 from '../images/test-2.png'
import Test3 from '../images/test-3.png'
import Test4 from '../images/test-4.png'
import Test5 from '../images/test-5.png'
import Test6 from '../images/test-6.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog'
import { IconButton, Toolbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Realisation() {
    AOS.init();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const RealisationComp = (props) => {
        return (
            <>
                <div>
                    <img className='realisationImage' src={props.image}></img>
                </div>
                <div className='realisationText'>
                    <button onClick={handleClickOpen} className='btn btn-danger visionerBtn'>
                        Visioner
                    </button>
                    <div>{props.description}</div>
                </div>
            </>
        )
    }

    const link = <iframe src="https://player.vimeo.com/video/294021357?h=13d87d8029&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>

    const DialogComp = (props) => {
        return (
            <div className='container dialogWrapper'>
                <h1 className='dialogTitle'>{props.dialogTitle}</h1>
                <div className='dialogSubtitle'>{props.dialogSub}</div>
                <div className='clipPlayerSite'>
                    {props.videoLink}
                </div>
                <div className='dialogDescription'>{props.dialogDescription}</div>
            </div>
        )
    }

    return (
        <>
            <div className='container'>
                <div className='realisationAndTitle'>
                    <div>
                        <div className='realisationWrapper'>
                            <div className='graySection1'
                                data-aos='slide-right'
                                data-aos-duration='1200'
                                data-aos-once="true"
                                data-aos-anchor=".realisation1"
                            >
                                <div className='row realisationRow'>
                                    <div className='col-xl-6'>
                                        <div className='realisation realisation1'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay="800"
                                            data-aos-once="true"
                                            data-aos-anchor=".realisation2"
                                        >
                                            <RealisationComp image={Test1} description="Vous avez un projet de formation en ligne ou en mode hybride qui nécessite de la production vidéo el et du multimédia ? Nos experts assionnés (techno-pédagogues, réalisateurs, program meurs, modélisateurs 3D) ont hâte d'en iaser avec vous !" />
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='realisation realisation2'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay="500"
                                            data-aos-once="true"
                                            data-aos-anchor=".realisation3"
                                        >
                                            <RealisationComp image={Test6} description="Vous avez un projet de formation en ligne ou en mode hybride qui nécessite de la production vidéo el et du multimédia ? Nos experts assionnés (techno-pédagogues, réalisateurs, program meurs, modélisateurs 3D) ont hâte d'en iaser avec vous !" />
                                        </div>
                                    </div>
                                    {/* <div className='col-xl-6'>
                            </div> */}
                                </div>
                                <div className='row'>
                                    <div className='col-xl-12'>
                                        <div className='realisation realisation3'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay="700"
                                            data-aos-once="true"
                                        >
                                            <RealisationComp image={Test2} description="Vous avez un projet de formation en ligne ou en mode hybride qui nécessite de la production vidéo el et du multimédia ? Nos experts assionnés (techno-pédagogues, réalisateurs, program meurs, modélisateurs 3D) ont hâte d'en iaser avec vous !" />
                                        </div>
                                    </div>
                                    {/* <div className='col-xl-6'>
                            </div> */}
                                </div>
                            </div>
                        </div>
                        <div className='realisationWrapper'>
                            <div className='graySection2'
                                data-aos='slide-right'
                                data-aos-duration='1200'
                                data-aos-once="true"
                                data-aos-anchor=".realisation4"
                            >
                                <div className='row realisationRow'>
                                    <div className='col-xl-6'>
                                        <div className='realisation realisation4'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay='800'
                                            data-aos-once="true"
                                            data-aos-anchor='.realisation5'
                                        >
                                            <RealisationComp image={Test3} description="Vous avez un projet de formation en ligne ou en mode hybride qui nécessite de la production vidéo el et du multimédia ? Nos experts assionnés (techno-pédagogues, réalisateurs, program meurs, modélisateurs 3D) ont hâte d'en iaser avec vous !" />
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='realisation realisation5'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay='500'
                                            data-aos-once="true"
                                            data-aos-anchor='.realisation6'
                                        >
                                            <RealisationComp image={Test4} description="Vous avez un projet de formation en ligne ou en mode hybride qui nécessite de la production vidéo el et du multimédia ? Nos experts assionnés (techno-pédagogues, réalisateurs, program meurs, modélisateurs 3D) ont hâte d'en iaser avec vous !" />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xl-6'>
                                        <div className='realisation realisation6'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay='700'
                                            data-aos-once="true"
                                            data-aos-anchor='.realisation7'
                                        >
                                            <RealisationComp image={Test5} description="Vous avez un projet de formation en ligne ou en mode hybride qui nécessite de la production vidéo el et du multimédia ? Nos experts assionnés (techno-pédagogues, réalisateurs, program meurs, modélisateurs 3D) ont hâte d'en iaser avec vous !" />
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='realisation realisation7'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay='900'
                                            data-aos-once="true"
                                        >
                                            <RealisationComp image={Test6} description="Vous avez un projet de formation en ligne ou en mode hybride qui nécessite de la production vidéo el et du multimédia ? Nos experts assionnés (techno-pédagogues, réalisateurs, program meurs, modélisateurs 3D) ont hâte d'en iaser avec vous !" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='realisationEnding'>
                            Voir d'autres réalisations
                            <div class="round">
                                <div id="arrowContainer">
                                    <span class="arrow primary next "></span>
                                    <span class="arrow secondary next "></span>
                                </div>
                            </div>
                            <div className="arrowWrapper">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div id='forSticky'>
                        <div id='realisationTitleRotateWrapper'>
                            <p >Quelques réalisations</p>
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
                <DialogComp dialogTitle="Desjardins" dialogSub='Une courte vidéo pour Desjardin' videoLink={link} dialogDescription="Vous avez un projet de formation en ligne ou en mode hybride qui nécessite de la production vidéo el et du multimédia ? Nos experts assionnés (techno-pédagogues, réalisateurs, program meurs, modélisateurs 3D) ont hâte d'en iaser avec vous !" />
            </Dialog>
        </>
    )
}
