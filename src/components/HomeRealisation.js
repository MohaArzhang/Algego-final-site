import React, { useState } from 'react'
import Image1 from '../images/realisation/enviroCompetences_realisation.jpg'
import Image2 from '../images/realisation/Desjardins_Force_E.jpg'
import Image3 from '../images/realisation/plasti_motion_realisation.jpg'
import Image4 from '../images/realisation/aqf_realisation.jpg'
import Image5 from '../images/realisation/loto_quebec_realisation.jpg'
import Image6 from '../images/realisation/plasti_e_learning_realisation.jpg'
import Image7 from '../images/realisation/bonduelle_palteforme_realisation.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog'
import { IconButton, Toolbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import LogoBlack from '../images/circle-black.png'
import ContactForm from './ContactForm'
import Image_mandat2 from '../images/mandats/Desjardins_Force_E.jpg'
import Image_mandat4 from '../images/mandats/AQF_Plateforme_LMS.jpg'
import Image_mandat5 from '../images/mandats/loto_quebec_mandat.jpg'


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
                    <img className='realisationImage' src={props.image} alt={props.alt}></img>
                </div>
                <div className='realisationText'>
                    <div className='realisationDes'>{props.description}</div>
                    <div className='realisationClient'>{props.client}</div>
                    <button onClick={props.click} className='btn btn-danger submitBtn decouvrirBtn'>
                        D??couvrir
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

    const client1 = 'EnviroComp??tences'
    const client2 = 'Desjardins'
    const client3 = 'PlastiComp??tences'
    const client4 = 'AQF'
    const client5 = 'Loto-Qu??bec'
    const client6 = 'PlastiComp??tences'
    const client7 = 'Bonduelle'

    const dialogTitle1 = 'Communication'
    const dialogTitle2 = 'Formation'
    const dialogTitle3 = 'Formation'
    const dialogTitle4 = 'Formation'
    const dialogTitle5 = 'Formation'
    const dialogTitle6 = 'Formation'
    const dialogTitle7 = 'Communication'

    const dialogSub1 = 'EnviroComp??tences'
    const dialogSub2 = 'Desjardins'
    const dialogSub3 = 'PlastiComp??tences'
    const dialogSub4 = 'AQF'
    const dialogSub5 = 'Loto-Qu??bec'
    const dialogSub6 = 'PlastiComp??tences'
    const dialogSub7 = 'Bonduelle'

    const alt1 = 'EnviroComp??tences'
    const alt2 = 'Desjardins'
    const alt3 = 'PlastiComp??tence'
    const alt4 = 'AQF'
    const alt5 = 'Loto Quebec'
    const alt6 = 'PlastiComp??tence'
    const alt7 = 'Bonduelle'

    const link1 = <iframe src="https://player.vimeo.com/video/678893128?h=fd32598d78&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>
    const link2 = <img className='dialogImg' style={{ marginTop: '50px', marginBottom: '50px' }} src={Image_mandat2} alt={alt2} width="565" />
    const link3 = <iframe src="https://player.vimeo.com/video/563706535?h=6348db9387&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>
    const link4 = <img className='dialogImg' style={{ marginTop: '50px', marginBottom: '50px' }} src={Image_mandat4} width="565" alt={alt4} />
    const link5 = <img className='dialogImg' style={{ marginTop: '50px', marginBottom: '50px' }} src={Image_mandat5} width="565" alt={alt5} />
    const link6 = <iframe src="https://player.vimeo.com/video/553482930?h=be7535dd1d" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="NOBIS"></iframe>
    const link7 = <iframe src="https://player.vimeo.com/video/408662085?h=2e784450bb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>

    const mandat1 = 'Promouvoir des m??tiers du secteur de l???environnement aupr??s des jeunes et des populations immigr??es par l???interm??diaire de bornes interactives multim??dia.'
    const mandat2 = 'Concevoir une strat??gie de communication et un parcours de formation en ligne pour accompagner le lancement d???un nouveau CRM.'
    const mandat3 = 'Optimiser l???appropriation des PAMT traditionnels aupr??s des employ??s par l???int??gration de capsules vid??o immersives.'
    const mandat4 = 'Transposer des formations pr??sentielles du CQF en formation e-learning, et d??velopper une plateforme LMS int??grant un catalogue de vente en ligne des formations.'
    const mandat5 = 'Mettre en place un guide d???accueil vid??o pour accueillir les nouveaux employ??s et leur transmettre une vision globale de l???entreprise, dans une approche cr??ateur d?????motion.'
    const mandat7 = 'Animer et accompagner la gestion de changement li??e au projet de rassembler en seul lieu trois sites de l???entreprise g??ographiquement distincts.'
    const mandat6 = <span>Transposer une formation en pr??sentiel en formation <em>e-learning.</em></span>

    const defi1 = 'Valoriser des m??tiers peu connus ou mal per??us (pr??jug??s n??gatifs). Cr??er une exp??rience immersive pour favoriser l???engagement des publics cibles vers les m??tiers de l???environnement.'
    const defi2 = 'Convaincre les employ??s ?? changer leurs habitudes de travail et ?? adopter le nouveau CRM.'
    const defi3 = 'Montrer les environnements de travail ainsi que les cha??nes de production en usine pour faciliter l???apprentissage des nouveaux employ??s.'
    const defi4 = "Adapter le contenu p??dagogique en structure d'enseignement en ligne, en collaboration avec les formateurs et les experts de contenu du CQF."
    const defi5 = 'Stimuler l???int??r??t et l???engagement des nouveaux employ??s sur le positionnement de Loto-Qu??bec, et pr??senter les diff??rentes activit??s du groupe.'
    const defi6 =
        <ul>
            <li>Trouver une solution face ?? l???impossibilit?? de se rendre dans les usines pour filmer les machines en raison de la pand??mie
            </li>
            <li>Trouver une alternative engageante avec un budget et  des d??lais de livraison raisonnables</li>
        </ul>
    const defi7 = 'Engager les employ??s dans la mise en place et l???appropriation des changements structurels et organisationnels ?? venir.'
    const solutions1 =
        <ul>
            <li>Analyse des m??tiers pour cr??er des parcours de journ??es types</li>
            <li>Conception  de l'univers sc??naristique (d??cors, personnages, ambiances, etc.) propre ?? chaque m??tier et  les principes d'interactivit??</li>
            <li>Production des univers 3D (mod??lisation des environnements de travail et cr??ation de personnages en <em>motion capture</em>)</li>
            <li>Programmation des parcours m??tiers en mode jeu vid??o</li>
            <li>D??veloppement et int??gration d???une application des bornes interactives en tourn??e au Qu??bec (??coles secondaires, c??geps, salons
                de l???emploi, etc.)</li>
        </ul>
    const solutions2 =
        <ul>
            <li>D??veloppement d'une plateforme de diffusion hybride multim??dia r??pondant ?? deux objectifs simultan??s : communication (webs??rie) et formation (LMS)</li>
            <li>Production d'une webs??rie avec St??phane Bellavance pour sensibiliser le public cible sur l'importance de changer ses habitudes de travail en vue de l'adoption du nouveau CRM</li>
            <li>Programmation de capsules de formation en ligne pour faciliter l'aquisition des nouvelles fonctionnalit??s du nouveau CRM</li>
        </ul>
    const solutions3 =
        <ul>
            <li>Faire une analyse technop??dagogique des PAMT avec des experts de contenu pour identifier les points d'apprentissage essentiels</li>
            <li>Mod??liser en animation 3D toutes les machines outils et leurs composantes pour cr??er une exp??rience immersive afin d'augmenter la compr??hension des ??tapes de production et favoriser la m??morisation des acquis</li>
        </ul>
    const solutions4 =
        <ul>
            <li>Conception d???un parcours de formation adapt?? ?? la formation en ligne</li>
            <li>Production de capsules vid??o avec animateur professionnel UDA et int??gration de contenu infographique</li>
            <li>D??veloppement et int??gration d'une plateforme LMS Learndash sur le site Wordpress du client et programmation du plugin WooCommerce pour d??velopper la vente en ligne des formations</li>
        </ul>
    const solutions5 =
        <ul>
            <div style={{ marginLeft: '-40px' }}>Conception et production d'une s??rie de capsules vid??o interactives autonomes :</div>
            <li>Divertissante : pour favoriser l???immersion des nouveaux employ??s dans la dynamique d???une entreprise ax??e sur le jeu et le divertissement</li>
            <li>??motionnelle : pour cr??er un sentiment d???appartenance et stimuler l???engagement</li>
            <li>Informative : pour donner une vision globale d???une entreprise aux activit??s multiples</li>
        </ul>
    const solutions6 =
        <ul>
            <li>Mod??lisation 3D des machines</li>
            <li>Conception d???un personnage-expert 3D cr???? avec la technologie <em>motion capture</em></li>
            <li>Dynamisation du parcours gr??ce ?? la coanimation entre le formateur </li>
        </ul>
    const solutions7 =
        <ul>
            <li>D??veloppement d???une plateforme de communication multim??dia</li>
            <li>Conception d???une approche strat??gique de communication et mise en place d???une ligne ??ditoriale</li>
            <li>Production d???une webs??rie interactive et de contenus multim??dia</li>
            <li>Production d???un clip de fiction parodiant les films de suspense</li>
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
                <div className='dialogDescription dialogDescriptionTitle'>D??fi</div>
                <div className='dialogDescription'>{props.defi}</div>
                <div className='dialogDescription dialogDescriptionTitle'>Solutions</div>
                <div className='dialogDescription'>{props.solutions}</div>
                <div className='categoryImg'><img src={LogoBlack} alt='Logo ALGEGO' />{props.category}</div>
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
                        <p >Quelques r??alisations</p>
                        <div className='row'>
                            <div className='col-12 col-sm-6 col-lg-6'>
                                <div
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay=''
                                    data-aos-once="true"
                                    className='realisation'>
                                    <RealisationComp image={Image1} alt={alt1} description={description1} client={client1} click={handleClickOpen1} />
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
                                    <RealisationComp image={Image2} alt={alt2} description={description2} client={client2} click={handleClickOpen2} />
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-6'>
                                <div
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay=''
                                    data-aos-once="true"
                                    className='realisation'>
                                    <RealisationComp image={Image3} alt={alt3} description={description3} client={client3} click={handleClickOpen3} />
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
                                    <RealisationComp image={Image4} alt={alt4} description={description4} client={client4} click={handleClickOpen4} />
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-6'>
                                <div
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay=''
                                    data-aos-once="true"
                                    className='realisation'>
                                    <RealisationComp image={Image5} alt={alt5} description={description5} client={client5} click={handleClickOpen5} />
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
                                    <RealisationComp image={Image6} alt={alt6} description={description6} client={client6} click={handleClickOpen6} />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay=''
                                    data-aos-once="true"
                                    className='realisation'>
                                    <RealisationComp image={Image7} alt={alt7} description={description7} client={client7} click={handleClickOpen7} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div id='realisationEndingQuery'>
                            Voir d'autres r??alisations
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
                            <p >Quelques r??alisations</p>
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
                            Voir d'autres r??alisations
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