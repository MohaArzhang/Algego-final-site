import React, { useState } from 'react'
import Image1 from '../images/realisation/enviroCompetences_realisation.jpg'
import Image2 from '../images/realisation/Desjardins_Force_E.jpg'
import Image3 from '../images/realisation/plasti_motion_realisation.jpg'
import Image4 from '../images/realisation/aqf_realisation.jpg'
import Image5 from '../images/realisation/loto_quebec_realisation.jpg'
import Image6 from '../images/realisation/plasti_e_learning_realisation.jpg'
import Image7 from '../images/realisation/bonduelle_palteforme_realisation.jpg'
import Image8 from '../images/realisation/bixi_realisation.jpg'
import Image9 from '../images/realisation/desjardins_realisation.jpg'
import Image10 from '../images/realisation/barreau_realisation.jpg'
import Image11 from '../images/realisation/cqf_realisation.jpg'
import Image12 from '../images/realisation/amcq_realisation.jpg'
import Image13 from '../images/realisation/riopelle_realisation.jpg'
import Image14 from '../images/realisation/floralies_realisation.jpg'
import Image15 from '../images/realisation/bonduelle_video_realisation.jpg'
import Image_mandat2 from '../images/mandats/Desjardins_Force_E.jpg'
import Image_mandat4 from '../images/mandats/AQF_Plateforme_LMS.jpg'
import Image_mandat5 from '../images/mandats/loto_quebec_mandat.jpg'
import Image_mandat8 from '../images/mandats/Bixi_mandat.jpg'
import Image_mandat12 from '../images/mandats/amcqf_mandat.jpg'
import Dialog from '@mui/material/Dialog'
import { IconButton, Toolbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import LogoBlack from '../images/circle-black.png'
import ContactForm from "./ContactForm"
import Slide from '@mui/material/Slide'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AllRealisations() {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);
    const [open13, setOpen13] = useState(false);
    const [open14, setOpen14] = useState(false);
    const [open15, setOpen15] = useState(false);

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
    const handleClickOpen8 = () => {
        setOpen8(true);
    };
    const handleClose8 = () => {
        setOpen8(false);
    };
    const handleClickOpen9 = () => {
        setOpen9(true);
    };
    const handleClose9 = () => {
        setOpen9(false);
    };
    const handleClickOpen10 = () => {
        setOpen10(true);
    };
    const handleClose10 = () => {
        setOpen10(false);
    };
    const handleClickOpen11 = () => {
        setOpen11(true);
    };
    const handleClose11 = () => {
        setOpen11(false);
    };
    const handleClickOpen12 = () => {
        setOpen12(true);
    };
    const handleClose12 = () => {
        setOpen12(false);
    };
    const handleClickOpen13 = () => {
        setOpen13(true);
    };
    const handleClose13 = () => {
        setOpen13(false);
    };
    const handleClickOpen14 = () => {
        setOpen14(true);
    };
    const handleClose14 = () => {
        setOpen14(false);
    };
    const handleClickOpen15 = () => {
        setOpen15(true);
    };
    const handleClose15 = () => {
        setOpen15(false);
    };
    const RealisationComp = (props) => {
        return (
            <>
                <div>
                    <img className='realisationPageImage' src={props.image} alt={props.alt}></img>
                </div>
                <div className='realisationPageText'>
                    <div className='realisationPageDes'>{props.description}</div>
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
    const description8 = 'Formation'
    const description9 = 'Communication'
    const description10 = 'Communication'
    const description11 = '??v??nement'
    const description12 = '??v??nement'
    const description13 = 'Communication'
    const description14 = 'Communication'
    const description15 = 'Formation'

    const client1 = 'EnviroComp??tences'
    const client2 = 'Desjardins'
    const client3 = 'PlastiComp??tences'
    const client4 = 'AQF'
    const client5 = 'Loto-Qu??bec'
    const client6 = 'PlastiComp??tences'
    const client7 = 'Bonduelle'
    const client8 = 'Bixi Montr??al'
    const client9 = 'Desjardins'
    const client10 = 'Barreau du Qu??bec'
    const client11 = 'CQF'
    const client12 = 'AMCQ'
    const client13 = 'Fondation Riopelle'
    const client14 = 'R??sidences Floralies'
    const client15 = 'Bonduelle'

    const dialogTitle1 = 'Communication'
    const dialogTitle2 = 'Formation'
    const dialogTitle3 = 'Formation'
    const dialogTitle4 = 'Formation'
    const dialogTitle5 = 'Formation'
    const dialogTitle6 = 'Formation'
    const dialogTitle7 = 'Communication'
    const dialogTitle8 = 'Formation'
    const dialogTitle9 = 'Communication'
    const dialogTitle10 = 'Communication'
    const dialogTitle11 = '??v??nement'
    const dialogTitle12 = '??v??nement'
    const dialogTitle13 = 'Communication'
    const dialogTitle14 = 'Communication'
    const dialogTitle15 = 'Formation'

    const dialogSub1 = 'EnviroComp??tences'
    const dialogSub2 = 'Desjardins'
    const dialogSub3 = 'PlastiComp??tences'
    const dialogSub4 = 'AQF'
    const dialogSub5 = 'Loto-Qu??bec'
    const dialogSub6 = 'PlastiComp??tences'
    const dialogSub7 = 'Bonduelle'
    const dialogSub8 = 'Bixi Montr??al'
    const dialogSub9 = 'Desjardins'
    const dialogSub10 = 'Barreau du Qu??bec'
    const dialogSub11 = 'CQF'
    const dialogSub12 = 'AMCQ'
    const dialogSub13 = 'Fondation Riopelle'
    const dialogSub14 = 'R??sidences Floralies'
    const dialogSub15 = 'Bonduelle'

    const alt1 = 'EnviroComp??tences'
    const alt2 = 'Desjardins'
    const alt3 = 'Plasticompetence'
    const alt4 = 'AQF'
    const alt5 = 'Loto Quebec'
    const alt6 = 'Plasticompetence'
    const alt7 = 'Bonduelle'
    const alt8 = 'BIXI'
    const alt9 = 'Desjardins'
    const alt10 = 'Barreau'
    const alt11 = 'CQF'
    const alt12 = 'AMCQF'
    const alt13 = 'Riopelle'
    const alt14 = 'Maison Floralies'
    const alt15 = 'Bonduelle'

    const link1 = <iframe src="https://player.vimeo.com/video/678893128?h=fd32598d78&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>
    const link2 = <img className='dialogImg' src={Image_mandat2} alt={alt2} width="565" />
    const link3 = <iframe src="https://player.vimeo.com/video/563706535?h=6348db9387&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>
    const link4 = <img className='dialogImg' src={Image_mandat4} alt={alt4} width="565" />
    const link5 = <img className='dialogImg' src={Image_mandat5} alt={alt5} width="565" />
    const link6 = <iframe src="https://player.vimeo.com/video/553482930?h=be7535dd1d" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="NOBIS"></iframe>
    const link7 = <iframe src="https://player.vimeo.com/video/408662085?h=2e784450bb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>
    const link8 = <img className='dialogImg' src={Image_mandat8} alt={alt8} width="565" />
    const link9 = <iframe src="https://player.vimeo.com/video/296545782?h=92c853ce9b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>
    const link10 = <iframe src="https://player.vimeo.com/video/559765735?h=4934f1725b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay" title=""></iframe>
    const link11 = <iframe className='dialogImg' src="https://dj5ag5n6bpdxo.cloudfront.net/experience/S2Drl5l" width="560" height="315" frameborder="0" allow="autoplay" title=""></iframe>
    const link12 = <img className='dialogImg' src={Image_mandat12} alt={alt12} width="565" />
    const link13 = <iframe src="https://player.vimeo.com/video/654168302?h=90fdaf7f73&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>
    const link14 = <iframe src="https://player.vimeo.com/video/641487272?h=a519f8443d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>
    const link15 = <iframe src="https://player.vimeo.com/video/746225971?h=1c83dd1e65&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Bonduelle"></iframe>

    const mandat1 = 'Promouvoir des m??tiers du secteur de l???environnement aupr??s des jeunes et des populations immigr??es par l???interm??diaire de bornes interactives multim??dia.'
    const mandat2 = 'Concevoir une strat??gie de communication et un parcours de formation en ligne pour accompagner le lancement d???un nouveau CRM.'
    const mandat3 = 'Optimiser l???appropriation des PAMT traditionnels aupr??s des employ??s par l???int??gration de capsules vid??o immersives.'
    const mandat4 = 'Transposer des formations pr??sentielles du CQF en formation e-learning, et d??velopper une plateforme LMS int??grant un catalogue de vente en ligne des formations.'
    const mandat5 = 'Mettre en place un guide d???accueil vid??o pour accueillir les nouveaux employ??s et leur transmettre une vision globale de l???entreprise, dans une approche cr??ateur d?????motion.'
    const mandat6 = <span>Transposer une formation en pr??sentiel en formation <em>e-learning.</em></span>
    const mandat7 = 'Animer et accompagner la gestion de changement li??e au projet de rassembler en seul lieu trois sites de l???entreprise g??ographiquement distincts.'
    const mandat8 = 'Concevoir et produire des vid??os de formation autoportantes pour permettre aux employ??s saisonniers d???acqu??rir les connaissances essentielles ?? leur mission de d??ploiement de la flotte de v??los Bixi.'
    const mandat9 = 'Accompagner le d??m??nagement de Desjardins ?? la Tour Olympique de Montr??al et le changement de culture au sein de l???entreprise.'
    const mandat10 = 'Convertir la version papier du magazine mensuel du barreau du Qu??bec en une version num??rique.'
    const mandat11 = 'Transposer un ??v??nement de prestige se d??roulant en pr??sentiel depuis de nombreuses ann??es, en un ??v??nement en mode hybride (virtuel et physique).'
    const mandat12 = 'Transposer au format virtuel le gala de reconnaissance.'
    const mandat13 = 'Pr??senter les activit??s du centenaire lors de la conf??rence de presse du Centenaire RIOPELLE.'
    const mandat14 = 'Faire vivre une exp??rience immersive aux utilisateurs pour leur faire d??couvrir la vie des r??sidents et des professionnels des R??sidences Floralies.'
    const mandat15 = 'Sensibiliser les employ??s aux nouvelles r??gles de vie.'

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
    const defi8 = 'Acqu??rir le savoir faire et les meilleures pratiques des anciens employ??s  pour cr??er des mini-capsules vid??o de formation.'
    const defi9 = 'Toucher et int??resser une jeune g??n??ration d???employ??s, peu sensibles aux canaux traditionnels  de communication.'
    const defi10 = 'D??velopper une exp??rience utilisateur adapt??e aux habitudes traditionnelles de lecture (papier) des avocats et accompagner le changement en cr??ant de nouvelles habitudes d???acc??s ?? l???information.'
    const defi11 = 'Conserver la magie, l?????motion et l???engagement d???un gala malgr?? la distance physique.'
    const defi12 = 'Offrir une c??l??bration professionnelle et originale malgr?? le format virtuel.'
    const defi13 = 'Synth??tiser et harmoniser un grand nombre de contenus.'
    const defi14 = 'Tourner dans une RPA en pleine pand??mie.'
    const defi15 = 'Les bureaux ??taient en cours de construction et ne pouvaient donc pas ??tre film??s.'

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
    const solutions8 =
        <ul>
            <li>D??coupage des op??rations de d??ploiement de la flotte de v??los Bixi en ??tape</li>
            <li>Sc??narisation des capsules de formation ?? partir des savoir-faire des employ??s experts</li>
            <li>Tournage et postproduction des capules</li>
        </ul>
    const solutions9 =
        <ul>
            <li>Cr??ation d???une webs??rie interactive (sous le format d???un journal TV) pr??sent??e par un jeune animateur correspondant au public vis?? (autour de 30 ans) avec l'int??gration de reporters maison</li>
            <li>Conception et production d???une plateforme s??curis??e de diffusion multim??dia</li>
            <li>D??veloppement d???une web-application pour favoriser l???int??gration des employ??s dans leurs nouveaux bureaux</li>
        </ul>
    const solutions10 =
        <ul>
            <li>Conception d???une nouvelle ligne ??ditoriale</li>
            <li>D??veloppement d???une plateforme web d???actualit?? multim??dia ??volutive aliment??e en information continue</li>
            <li>Mise en place d???un processus de production de contenu multim??dia</li>
        </ul>
    const solutions11 =
        <ul>
            <li>Cr??ation, production et animation d???un ??v??nement hybride avec la diffusion de contenu multim??dia en direct et en diff??r?? pour assurer une qualit?? optimum</li>
            <li>Planification et gestion de la diffusion de l?????v??nement sur Facebook Live</li>
        </ul>
    const solutions12 =
        <ul>
            <li>Vid??os pr??-enregistr??es diffus??es en direct avec pr??sentateur professionnel</li>
        </ul>
    const solutions13 =
        <ul>
            <li>production d???une vid??o corporative tr??s dynamique</li>
        </ul>
    const solutions14 =
        <ul>
            <li>webs??rie r??alis??e en 4 ??pisodes, produite avec et pour les r??sidents</li>
            <li>donner aux r??sidents le r??le d???acteur de leur propre vie pour permettre de faire d??couvrir et de valoriser ces lieux de vie trop souvent stigmatis??s</li>
        </ul>
    const solutions15 =
        <ul>
            <li>Conception et sc??narisation d???une capsule en <em>motion design</em> accompagn??e d???un guide ??crit des r??gles de vie</li>
        </ul>

    const category1 = 'Communication'
    const category2 = 'Formation'
    const category3 = 'Formation'
    const category4 = 'Formation'
    const category5 = 'Formation'
    const category6 = 'Formation'
    const category7 = 'Communication'
    const category8 = 'Formation'
    const category9 = 'Communication'
    const category10 = 'Communication'
    const category11 = '??v??nement'
    const category12 = '??v??nement'
    const category13 = 'Communication'
    const category14 = 'Communication'
    const category15 = 'Formation'

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
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-4 realisationMarginTop">
                    <div
                        data-aos='zoom-in'
                        data-aos-duration='1200'
                        data-aos-delay="0"
                        data-aos-once="true"
                        className="realisationPage">
                        <RealisationComp image={Image1} alt={alt1} description={description1} client={client1} click={handleClickOpen1} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div
                        data-aos='zoom-in'
                        data-aos-duration='1200'
                        data-aos-delay="200"
                        data-aos-once="true"
                        className="realisationPage">
                        <RealisationComp image={Image2} alt={alt2} description={description2} client={client2} click={handleClickOpen2} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 realisationMarginTop">
                    <div
                        data-aos='zoom-in'
                        data-aos-duration='1200'
                        data-aos-delay="400"
                        data-aos-once="true"
                        className="realisationPage">
                        <RealisationComp image={Image3} alt={alt3} description={description3} client={client3} click={handleClickOpen3} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 realisationMarginTop">
                    <div
                        data-aos='zoom-in'
                        data-aos-duration='1200'
                        data-aos-delay="0"
                        data-aos-once="true"
                        className="realisationPage">
                        <RealisationComp image={Image4} alt={alt4} description={description4} client={client4} click={handleClickOpen4} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div
                        data-aos='zoom-in'
                        data-aos-duration='1200'
                        data-aos-delay="200"
                        data-aos-once="true"
                        className="realisationPage">
                        <RealisationComp image={Image5} alt={alt5} description={description5} client={client5} click={handleClickOpen5} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 realisationMarginTop">
                    <div
                        data-aos='zoom-in'
                        data-aos-duration='1200'
                        data-aos-delay="400"
                        data-aos-once="true"
                        className="realisationPage">
                        <RealisationComp image={Image6} alt={alt6} description={description6} client={client6} click={handleClickOpen6} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 realisationMarginTop">
                    <div
                        data-aos='zoom-in'
                        data-aos-duration='1200'
                        data-aos-delay="0"
                        data-aos-once="true"
                        className="realisationPage">
                        <RealisationComp image={Image7} alt={alt7} description={description7} client={client7} click={handleClickOpen7} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div
                        data-aos='zoom-in'
                        data-aos-duration='1200'
                        data-aos-delay="200"
                        data-aos-once="true"
                        className="realisationPage">
                        <RealisationComp image={Image8} alt={alt8} description={description8} client={client8} click={handleClickOpen8} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 realisationMarginTop">
                    <div
                        data-aos='zoom-in'
                        data-aos-duration='1200'
                        data-aos-delay="400"
                        data-aos-once="true"
                        className="realisationPage">
                        <RealisationComp image={Image9} alt={alt9} description={description9} client={client9} click={handleClickOpen9} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 realisationMarginTop">
                    <div
                        data-aos='zoom-in'
                        data-aos-duration='1200'
                        data-aos-delay="0"
                        data-aos-once="true"
                        className="realisationPage">
                        <RealisationComp image={Image10} alt={alt10} description={description10} client={client10} click={handleClickOpen10} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div
                        data-aos='zoom-in'
                        data-aos-duration='1200'
                        data-aos-delay="200"
                        data-aos-once="true"
                        className="realisationPage">
                        <RealisationComp image={Image11} alt={alt11} description={description11} client={client11} click={handleClickOpen11} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 realisationMarginTop">
                    <div
                        data-aos='zoom-in'
                        data-aos-duration='1200'
                        data-aos-delay="400"
                        data-aos-once="true"
                        className="realisationPage">
                        <RealisationComp image={Image12} alt={alt12} description={description12} client={client12} click={handleClickOpen12} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 realisationMarginTop">
                    <div
                        data-aos='zoom-in'
                        data-aos-duration='1200'
                        data-aos-delay="0"
                        data-aos-once="true"
                        className="realisationPage">
                        <RealisationComp image={Image13} alt={alt13} description={description13} client={client13} click={handleClickOpen13} />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div
                        data-aos='zoom-in'
                        data-aos-duration='1200'
                        data-aos-delay="200"
                        data-aos-once="true"
                        className="realisationPage">
                        <RealisationComp image={Image14} alt={alt14} description={description14} client={client14} click={handleClickOpen14} />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-4 realisationMarginTop">
                    <div
                        data-aos='zoom-in'
                        data-aos-duration='1200'
                        data-aos-delay="400"
                        data-aos-once="true"
                        className="realisationPage">
                        <RealisationComp image={Image15} alt={alt15} description={description15} client={client15} click={handleClickOpen15} />
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
            <Dialog
                open={open8}
                onClose={handleClose8}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose8}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <DialogComp className="dialogFirstDesc" dialogTitle={dialogTitle8} dialogSub={dialogSub8} videoLink={link8} mandat={mandat8} defi={defi8} solutions={solutions8} category={category8}
                />
            </Dialog>
            <Dialog
                open={open9}
                onClose={handleClose9}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose9}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <DialogComp className="dialogFirstDesc" dialogTitle={dialogTitle9} dialogSub={dialogSub9} videoLink={link9} mandat={mandat9} defi={defi9} solutions={solutions9} category={category9}
                />
            </Dialog>
            <Dialog
                open={open10}
                onClose={handleClose10}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose10}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <DialogComp className="dialogFirstDesc" dialogTitle={dialogTitle10} dialogSub={dialogSub10} videoLink={link10} mandat={mandat10} defi={defi10} solutions={solutions10} category={category10}
                />
            </Dialog>
            <Dialog
                open={open11}
                onClose={handleClose11}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose11}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <DialogComp className="dialogFirstDesc" dialogTitle={dialogTitle11} dialogSub={dialogSub11} videoLink={link11} mandat={mandat11} defi={defi11} solutions={solutions11} category={category11}
                />
            </Dialog>
            <Dialog
                open={open12}
                onClose={handleClose12}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose12}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <DialogComp className="dialogFirstDesc" dialogTitle={dialogTitle12} dialogSub={dialogSub12} videoLink={link12} mandat={mandat12} defi={defi12} solutions={solutions12} category={category12}
                />
            </Dialog>
            <Dialog
                open={open13}
                onClose={handleClose13}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose13}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <DialogComp className="dialogFirstDesc" dialogTitle={dialogTitle13} dialogSub={dialogSub13} videoLink={link13} mandat={mandat13} defi={defi13} solutions={solutions13} category={category13}
                />
            </Dialog>
            <Dialog
                open={open14}
                onClose={handleClose14}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose14}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <DialogComp className="dialogFirstDesc" dialogTitle={dialogTitle14} dialogSub={dialogSub14} videoLink={link14} mandat={mandat14} defi={defi14} solutions={solutions14} category={category14}
                />
            </Dialog>
            <Dialog
                open={open15}
                onClose={handleClose15}
                TransitionComponent={Transition}
                transitionDuration={800}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose15}
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <DialogComp className="dialogFirstDesc" dialogTitle={dialogTitle15} dialogSub={dialogSub15} videoLink={link15} mandat={mandat15} defi={defi15} solutions={solutions15} category={category15}
                />
            </Dialog>
        </>
    )
}