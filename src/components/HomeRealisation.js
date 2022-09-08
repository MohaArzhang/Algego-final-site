import React, { useState } from 'react'
import Image1 from '../images/realisation/EnviroCompétences_Bornes_interactives.png'
import Image2 from '../images/realisation/Desjardins_Force_E.png'
import Image3 from '../images/realisation/Plasti_Hybride_avec_modélisation_3D.png'
import Image4 from '../images/realisation/AQF_Plateforme_LMS.png'
import Image5 from '../images/realisation/Loto-Québec_Vidéos_interactives.png'
import Image6 from '../images/realisation/PlastiCompétences_PAMT_motion_capture.png'
import Image7 from '../images/realisation/Bonduelle_plateforme-multimédia.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog'
import { IconButton, Toolbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import LogoBlack from '../images/circle-black.png'
import ContactForm from './ContactForm'
import Image_mandat2 from '../images/mandats/Desjardins_Force_E.png'
import Image_mandat4 from '../images/mandats/AQF_Plateforme_LMS.png'
import Image_mandat5 from '../images/mandats/Loto-Québec_Vidéos_interactives.png'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Realisation() {
    AOS.init();

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleClickOpen3 = () => {
        setOpen3(true);
    };
    const handleClose3 = () => {
        setOpen3(false);
    };
    const handleClickOpen4 = () => {
        setOpen4(true);
    };
    const handleClose4 = () => {
        setOpen4(false);
    };
    const handleClickOpen5 = () => {
        setOpen5(true);
    };
    const handleClose5 = () => {
        setOpen5(false);
    };
    const handleClickOpen6 = () => {
        setOpen6(true);
    };
    const handleClose6 = () => {
        setOpen6(false);
    };
    const handleClickOpen7 = () => {
        setOpen7(true);
    };
    const handleClose7 = () => {
        setOpen7(false);
    };

    const RealisationComp = (props) => {
        return (
            <>
                <div>
                    <img className='realisationImage' src={props.image}></img>
                </div>
                <div className='realisationText'>
                    <div className='realisationDes'>{props.description}</div>
                    <div className='realisationClient'>{props.client}</div>
                    <button onClick={props.click} className='btn btn-danger submitBtn decouvrirBtn'>
                        Découvrir
                    </button>
                </div>
            </>
        )
    }

    const description1 = 'Communication'
    const description2 = 'Formation'
    const description3 = 'Formation'
    const description4 = 'Formation'
    const description5 = 'Formation'
    const description6 = 'Formation'
    const description7 = 'Communication'

    const client1 = 'EnviroCompétences'
    const client2 = 'Desjardins'
    const client3 = 'PlastiCompétences'
    const client4 = 'AQF'
    const client5 = 'Loto-Québec'
    const client6 = 'PlastiCompétences'
    const client7 = 'Bonduelle'

    const dialogTitle1 = 'Communication'
    const dialogTitle2 = 'Formation'
    const dialogTitle3 = 'Formation'
    const dialogTitle4 = 'Formation'
    const dialogTitle5 = 'Formation'
    const dialogTitle6 = 'Formation'
    const dialogTitle7 = 'Communication'

    const dialogSub1 = 'EnviroCompétences'
    const dialogSub2 = 'Desjardins'
    const dialogSub3 = 'PlastiCompétences'
    const dialogSub4 = 'AQF'
    const dialogSub5 = 'Loto-Québec'
    const dialogSub6 = 'PlastiCompétences'
    const dialogSub7 = 'Bonduelle'

    const link1 = <iframe src="https://player.vimeo.com/video/678893128?h=fd32598d78&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>
    const link2 = <img className='dialogImg' style={{ marginTop: '50px', marginBottom: '50px' }} src={Image_mandat2} width="565" />
    const link3 = <iframe src="https://player.vimeo.com/video/563706535?h=6348db9387&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>
    const link4 = <img className='dialogImg' style={{ marginTop: '50px', marginBottom: '50px' }} src={Image_mandat4} width="565" alt='AQF'/>
    const link5 = <img className='dialogImg' style={{ marginTop: '50px', marginBottom: '50px' }} src={Image_mandat5} width="565" alt='Loto Quebec' />
    const link6 = <iframe src="https://player.vimeo.com/video/553482930?h=be7535dd1d" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="NOBIS"></iframe>
    const link7 = <iframe src="https://player.vimeo.com/video/408662085?h=2e784450bb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>

    const mandat1 = 'Promouvoir des métiers du secteur de l’environnement auprès des jeunes et des populations immigrées par l’intermédiaire de bornes interactives multimédia.'
    const mandat2 = 'Concevoir une stratégie de communication et un parcours de formation en ligne pour accompagner le lancement d’un nouveau CRM.'
    const mandat3 = 'Transposer une formation en présentiel en formation e-learning.'
    const mandat4 = 'Transposer des formations présentielles du CQF en formation e-learning, et développer une plateforme LMS intégrant un catalogue de vente en ligne des formations.'
    const mandat5 = 'Mettre en place un guide d’accueil vidéo pour accueillir les nouveaux employés et leur transmettre une vision globale de l’entreprise, dans une approche créateur d’émotion.'
    const mandat6 = 'Optimiser l’appropriation des PAMT traditionnels auprès des employés par l’intégration de capsules vidéo immersives.'
    const mandat7 = 'Animer et accompagner la gestion de changement liée au projet de rassembler en seul lieu trois sites de l’entreprise géographiquement distincts.'

    const defi1 = 'Valoriser des métiers peu connus ou mal perçus (préjugés négatifs). Créer une expérience immersive pour favoriser l’engagement des publics cibles vers les métiers de l’environnement.'
    const defi2 = 'Convaincre les employés à changer leurs habitudes de travail et à adopter le nouveau CRM.'
    const defi3 =
        <ul>
            <li>Trouver une solution face à l’impossibilité de se rendre dans les usines pour filmer les machines en raison de la pandémie
            </li>
            <li>Trouver une alternative engageante avec un budget et  des délais de livraison raisonnables</li>
        </ul>
    const defi4 = "Adapter le contenu pédagogique en structure d'enseignement en ligne, en collaboration avec les formateurs et les experts de contenu du CQF."
    const defi5 = 'Stimuler l’intérêt et l’engagement des nouveaux employés sur le positionnement de Loto-Québec, et présenter les différentes activités du groupe.'
    const defi6 = 'Montrer les environnements de travail ainsi que les chaînes de production en usine pour faciliter l’apprentissage des nouveaux employés.'
    const defi7 = 'Engager les employés dans la mise en place et l’appropriation des changements structurels et organisationnels à venir.'

    const solutions1 =
        <ul>
            <li>Analyse des métiers pour créer des parcours de journées types</li>
            <li>Conception  de l'univers scénaristique (décors, personnages, ambiances, etc.) propre à chaque métier et  les principes d'interactivité</li>
            <li>Production des univers 3D (modélisation des environnements de travail et création de personnages en <em>motion capture</em>)</li>
            <li>Programmation des parcours métiers en mode jeu vidéo</li>
            <li>Développement et intégration d’une application des bornes interactives en tournée au Québec (écoles secondaires, cégeps, salons
                de l’emploi, etc.)</li>
        </ul>
    const solutions2 =
        <ul>
            <li>Développement d'une plateforme de diffusion hybride multimédia répondant à deux objectifs simultanés : communication (websérie) et formation (LMS)</li>
            <li>Production d'une websérie avec Stéphane Bellavance pour sensibiliser le public cible sur l'importance de changer ses habitudes de travail en vue de l'adoption du nouveau CRM</li>
            <li>Programmation de capsules de formation en ligne pour faciliter l'aquisition des nouvelles fonctionnalités du nouveau CRM</li>
        </ul>
    const solutions3 =
        <ul>
            <li>Modélisation 3D des machines</li>
            <li>Conception d’un personnage-expert 3D créé avec la technologie <em>motion capture</em></li>
            <li>Dynamisation du parcours grâce à la coanimation entre le formateur </li>
        </ul>
    const solutions4 =
        <ul>
            <li>Conception d’un parcours de formation adapté à la formation en ligne</li>
            <li>Production de capsules vidéo avec animateur professionnel UDA et intégration de contenu infographique</li>
            <li>Développement et intégration d'une plateforme LMS Learndash sur le site Wordpress du client et programmation du plugin WooCommerce pour développer la vente en ligne des formations</li>
        </ul>
    const solutions5 =
        <ul>
            <div style={{ marginLeft: '-40px' }}>Conception et production d'une série de capsules vidéo interactives autonomes :</div>
            <li>Divertissante : pour favoriser l’immersion des nouveaux employés dans la dynamique d’une entreprise axée sur le jeu et le divertissement</li>
            <li>Émotionnelle : pour créer un sentiment d’appartenance et stimuler l’engagement</li>
            <li>Informative : pour donner une vision globale d’une entreprise aux activités multiples</li>
        </ul>
    const solutions6 =
        <ul>
            <li>Faire une analyse technopédagogique des PAMT avec des experts de contenu pour identifier les points d'apprentissage essentiels</li>
            <li>Modéliser en animation 3D toutes les machines outils et leurs composantes pour créer une expérience immersive afin d'augmenter la compréhension des étapes de production et favoriser la mémorisation des acquis</li>
        </ul>
    const solutions7 =
        <ul>
            <li>Développement d’une plateforme de communication multimédia</li>
            <li>Conception d’une approche stratégique de communication et mise en place d’une ligne éditoriale</li>
            <li>Production d’une websérie interactive et de contenus multimédia</li>
            <li>Production d’un clip de fiction parodiant les films de suspense</li>
        </ul>

    const category1 = 'Communication'
    const category2 = 'Formation'
    const category3 = 'Formation'
    const category4 = 'Formation'
    const category5 = 'Formation'
    const category6 = 'Formation'
    const category7 = 'Communication'

    const DialogComp = (props) => {
        return (
            <div className='container dialogWrapper'>
                <h1 className='dialogTitle'>{props.dialogTitle}</h1>
                <div className='dialogSubtitle'>{props.dialogSub}</div>
                <div className='clipPlayerSite'>
                    {props.videoLink}
                </div>
                <div className='dialogDescription dialogDescriptionTitle'>Mandat</div>
                <div className='dialogDescription'>{props.mandat}</div>
                <div className='dialogDescription dialogDescriptionTitle'>Défi</div>
                <div className='dialogDescription'>{props.defi}</div>
                <div className='dialogDescription dialogDescriptionTitle'>Solutions</div>
                <div className='dialogDescription'>{props.solutions}</div>
                <div className='categoryImg'><img src={LogoBlack} alt='logo' />{props.category}</div>
                <div className='accordion' id="dialogAccordion">
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span className="accordionTxt">Jasons ensemble !</span>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#dialogAccordion">
                            <div className="card-body">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='realisationQuery'>
                <div className='realisationAndTitle'>
                    <div className='realisationTitleQuery'>
                        <p >Quelques réalisations</p>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='realisation'>
                                    <RealisationComp image={Image1} description={description1} client={client1} click={handleClickOpen1} />
                                </div>
                                <div className='graySectionQuery'></div>
                            </div>
                            <div className='col-12'>
                                <div className='realisation'>
                                    <RealisationComp image={Image2} description={description2} client={client2} click={handleClickOpen2} />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='realisation'>
                                    <RealisationComp image={Image3} description={description3} client={client3} click={handleClickOpen3} />
                                </div>
                                <div className='graySectionQuery'></div>
                            </div>
                            <div className='col-12'>
                                <div className='realisation'>
                                    <RealisationComp image={Image4} description={description4} client={client4} click={handleClickOpen4} />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='realisation'>
                                    <RealisationComp image={Image5} description={description5} client={client5} click={handleClickOpen5} />
                                </div>
                                <div className='graySectionQuery'></div>
                            </div>
                            <div className='col-12'>
                                <div className='realisation'>
                                    <RealisationComp image={Image6} description={description6} client={client6} click={handleClickOpen6} />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='realisation'>
                                    <RealisationComp image={Image7} description={description7} client={client7} click={handleClickOpen7} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div id='realisationEndingQuery'>
                            Voir d'autres réalisations
                            <a href='/realisation'>
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
                                            <RealisationComp image={Image1} description={description1} client={client1} click={handleClickOpen1} />
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='realisation'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay='1200'
                                            data-aos-once="true"
                                        >
                                            <RealisationComp image={Image2} description={description2} client={client2} click={handleClickOpen2} />
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
                                            <RealisationComp image={Image3} description={description3} client={client3} click={handleClickOpen3} />
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
                                            <RealisationComp image={Image4} description={description4} client={client4} click={handleClickOpen4} />
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='realisation'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay='1200'
                                            data-aos-once="true"
                                        >
                                            <RealisationComp image={Image5} description={description5} client={client5} click={handleClickOpen5} />
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
                                            <RealisationComp image={Image6} description={description6} client={client6} click={handleClickOpen6} />
                                        </div>
                                    </div>
                                    <div className='col-xl-6'>
                                        <div className='realisation'
                                            data-aos='zoom-in'
                                            data-aos-duration='1200'
                                            data-aos-delay='400'
                                            data-aos-once="true"
                                        >
                                            <RealisationComp image={Image7} description={description7} client={client7} click={handleClickOpen7} />
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
                open={open1}
                onClose={handleClose1}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose1}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <DialogComp className="dialogFirstDesc" dialogTitle={dialogTitle1} dialogSub={dialogSub1} videoLink={link1} mandat={mandat1} defi={defi1} solutions={solutions1} category={category1}
                />
            </Dialog>
            <Dialog
                open={open2}
                onClose={handleClose2}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose2}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <DialogComp className="dialogFirstDesc" dialogTitle={dialogTitle2} dialogSub={dialogSub2} videoLink={link2} mandat={mandat2} defi={defi2} solutions={solutions2} category={category2}
                />
            </Dialog>
            <Dialog
                open={open3}
                onClose={handleClose3}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose3}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <DialogComp className="dialogFirstDesc" dialogTitle={dialogTitle3} dialogSub={dialogSub3} videoLink={link3} mandat={mandat3} defi={defi3} solutions={solutions3} category={category3}
                />
            </Dialog>
            <Dialog
                open={open4}
                onClose={handleClose4}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose4}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <DialogComp className="dialogFirstDesc" dialogTitle={dialogTitle4} dialogSub={dialogSub4} videoLink={link4} mandat={mandat4} defi={defi4} solutions={solutions4} category={category4}
                />
            </Dialog>
            <Dialog
                open={open5}
                onClose={handleClose5}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose5}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <DialogComp className="dialogFirstDesc" dialogTitle={dialogTitle5} dialogSub={dialogSub5} videoLink={link5} mandat={mandat5} defi={defi5} solutions={solutions5} category={category5}
                />
            </Dialog>
            <Dialog
                open={open6}
                onClose={handleClose6}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose6}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <DialogComp className="dialogFirstDesc" dialogTitle={dialogTitle6} dialogSub={dialogSub6} videoLink={link6} mandat={mandat6} defi={defi6} solutions={solutions6} category={category6}
                />
            </Dialog>
            <Dialog
                open={open7}
                onClose={handleClose7}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose7}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <DialogComp className="dialogFirstDesc" dialogTitle={dialogTitle7} dialogSub={dialogSub7} videoLink={link7} mandat={mandat7} defi={defi7} solutions={solutions7} category={category7}
                />
            </Dialog>
        </>
    )
}