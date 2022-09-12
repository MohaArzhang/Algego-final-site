import NavigationMenu from "./NavigationMenu"
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
import React, { useState } from 'react'
import RealisationTypeWriter from './RealisationTypeWriter'
import LogoBlack from '../images/circle-black.png'
import Dialog from '@mui/material/Dialog'
import { IconButton, Toolbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import ContactForm from "./ContactForm"
import Contact from "./Contact"
import Clients from "./Clients"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function RealisationPage() {
    AOS.init();

    const [showMenu, setShowMenu] = useState(false);

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
    const description8 = 'Formation'
    const description9 = 'Communication'
    const description10 = 'Communication'
    const description11 = 'Événement'
    const description12 = 'Événement'
    const description13 = 'Communication'
    const description14 = 'Communication'
    const description15 = 'Formation'

    const client1 = 'EnviroCompétences'
    const client2 = 'Desjardins'
    const client3 = 'PlastiCompétences'
    const client4 = 'AQF'
    const client5 = 'Loto-Québec'
    const client6 = 'PlastiCompétences'
    const client7 = 'Bonduelle'
    const client8 = 'Bixi Montréal'
    const client9 = 'Desjardins'
    const client10 = 'Barreau du Québec'
    const client11 = 'CQF'
    const client12 = 'AMCQ'
    const client13 = 'Fondation Riopelle'
    const client14 = 'Résidences Floralies'
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
    const dialogTitle11 = 'Événement'
    const dialogTitle12 = 'Événement'
    const dialogTitle13 = 'Communication'
    const dialogTitle14 = 'Communication'
    const dialogTitle15 = 'Formation'

    const dialogSub1 = 'EnviroCompétences'
    const dialogSub2 = 'Desjardins'
    const dialogSub3 = 'PlastiCompétences'
    const dialogSub4 = 'AQF'
    const dialogSub5 = 'Loto-Québec'
    const dialogSub6 = 'PlastiCompétences'
    const dialogSub7 = 'Bonduelle'
    const dialogSub8 = 'Bixi Montréal'
    const dialogSub9 = 'Desjardins'
    const dialogSub10 = 'Barreau du Québec'
    const dialogSub11 = 'CQF'
    const dialogSub12 = 'AMCQ'
    const dialogSub13 = 'Fondation Riopelle'
    const dialogSub14 = 'Résidences Floralies'
    const dialogSub15 = 'Bonduelle'

    const link1 = <iframe src="https://player.vimeo.com/video/678893128?h=fd32598d78&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>
    const link2 = <img className='dialogImg' src={Image_mandat2} width="565" />
    const link3 = <iframe src="https://player.vimeo.com/video/563706535?h=6348db9387&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>
    const link4 = <img className='dialogImg' src={Image_mandat4} width="565" />
    const link5 = <img className='dialogImg' src={Image_mandat5} width="565" />
    const link6 = <iframe src="https://player.vimeo.com/video/553482930?h=be7535dd1d" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="NOBIS"></iframe>
    const link7 = <iframe src="https://player.vimeo.com/video/408662085?h=2e784450bb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>
    const link8 = <img className='dialogImg' src={Image_mandat8} width="565" />
    const link9 = <iframe src="https://player.vimeo.com/video/296545782?h=92c853ce9b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>
    const link10 = <iframe src="https://player.vimeo.com/video/559765735?h=4934f1725b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay" title=""></iframe>
    const link11 = <iframe className='dialogImg' src="https://dj5ag5n6bpdxo.cloudfront.net/experience/S2Drl5l" width="560" height="315" frameborder="0" allow="autoplay" title=""></iframe>
    const link12 = <img className='dialogImg' src={Image_mandat12} width="565" />
    const link13 = <iframe src="https://player.vimeo.com/video/654168302?h=90fdaf7f73&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Desjardins Assurances"></iframe>
    const link14 = <iframe className='dialogImg' width="560" height="315" src="https://www.youtube.com/embed/iLxZCL6xKmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const link15 = <iframe src="https://player.vimeo.com/video/746225971?h=1c83dd1e65&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Bonduelle"></iframe>

    const mandat1 = 'Promouvoir des métiers du secteur de l’environnement auprès des jeunes et des populations immigrées par l’intermédiaire de bornes interactives multimédia.'
    const mandat2 = 'Concevoir une stratégie de communication et un parcours de formation en ligne pour accompagner le lancement d’un nouveau CRM.'
    const mandat3 = 'Optimiser l’appropriation des PAMT traditionnels auprès des employés par l’intégration de capsules vidéo immersives.'
    const mandat4 = 'Transposer des formations présentielles du CQF en formation e-learning, et développer une plateforme LMS intégrant un catalogue de vente en ligne des formations.'
    const mandat5 = 'Mettre en place un guide d’accueil vidéo pour accueillir les nouveaux employés et leur transmettre une vision globale de l’entreprise, dans une approche créateur d’émotion.'
    const mandat6 = <span>Transposer une formation en présentiel en formation <em>e-learning.</em></span>
    const mandat7 = 'Animer et accompagner la gestion de changement liée au projet de rassembler en seul lieu trois sites de l’entreprise géographiquement distincts.'
    const mandat8 = 'Concevoir et produire des vidéos de formation autoportantes pour permettre aux employés saisonniers d’acquérir les connaissances essentielles à leur mission de déploiement de la flotte de vélos Bixi.'
    const mandat9 = 'Accompagner le déménagement de Desjardins à la Tour Olympique de Montréal et le changement de culture au sein de l’entreprise.'
    const mandat10 = 'Convertir la version papier du magazine mensuel du barreau du Québec en une version numérique.'
    const mandat11 = 'Transposer un événement de prestige se déroulant en présentiel depuis de nombreuses années, en un événement en mode hybride (virtuel et physique).'
    const mandat12 = 'Transposer au format virtuel le gala de reconnaissance.'
    const mandat13 = 'Présenter les activités du centenaire lors de la conférence de presse du Centenaire RIOPELLE.'
    const mandat14 = 'Faire vivre une expérience immersive aux utilisateurs pour leur faire découvrir la vie des résidents et des professionnels des Résidences Floralies.'
    const mandat15 = 'Sensibiliser les employés aux nouvelles règles de vie.'

    const alt1 = 'EnviroCompetences'
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

    const defi1 = 'Valoriser des métiers peu connus ou mal perçus (préjugés négatifs). Créer une expérience immersive pour favoriser l’engagement des publics cibles vers les métiers de l’environnement.'
    const defi2 = 'Convaincre les employés à changer leurs habitudes de travail et à adopter le nouveau CRM.'
    const defi3 = 'Montrer les environnements de travail ainsi que les chaînes de production en usine pour faciliter l’apprentissage des nouveaux employés.'
    const defi4 = "Adapter le contenu pédagogique en structure d'enseignement en ligne, en collaboration avec les formateurs et les experts de contenu du CQF."
    const defi5 = 'Stimuler l’intérêt et l’engagement des nouveaux employés sur le positionnement de Loto-Québec, et présenter les différentes activités du groupe.'
    const defi6 =
        <ul>
            <li>Trouver une solution face à l’impossibilité de se rendre dans les usines pour filmer les machines en raison de la pandémie
            </li>
            <li>Trouver une alternative engageante avec un budget et  des délais de livraison raisonnables</li>
        </ul>
    const defi7 = 'Engager les employés dans la mise en place et l’appropriation des changements structurels et organisationnels à venir.'
    const defi8 = 'Acquérir le savoir faire et les meilleures pratiques des anciens employés  pour créer des mini-capsules vidéo de formation.'
    const defi9 = 'Toucher et intéresser une jeune génération d’employés, peu sensibles aux canaux traditionnels  de communication.'
    const defi10 = 'Développer une expérience utilisateur adaptée aux habitudes traditionnelles de lecture (papier) des avocats et accompagner le changement en créant de nouvelles habitudes d’accès à l’information.'
    const defi11 = 'Conserver la magie, l’émotion et l’engagement d’un gala malgré la distance physique.'
    const defi12 = 'Offrir une célébration professionnelle et originale malgré le format virtuel.'
    const defi13 = 'Synthétiser et harmoniser un grand nombre de contenus.'
    const defi14 = 'Tourner dans une RPA en pleine pandémie.'
    const defi15 = 'Les bureaux étaient en cours de construction et ne pouvaient donc pas être filmés.'

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
            <li>Faire une analyse technopédagogique des PAMT avec des experts de contenu pour identifier les points d'apprentissage essentiels</li>
            <li>Modéliser en animation 3D toutes les machines outils et leurs composantes pour créer une expérience immersive afin d'augmenter la compréhension des étapes de production et favoriser la mémorisation des acquis</li>
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
            <li>Modélisation 3D des machines</li>
            <li>Conception d’un personnage-expert 3D créé avec la technologie <em>motion capture</em></li>
            <li>Dynamisation du parcours grâce à la coanimation entre le formateur </li>
        </ul>
    const solutions7 =
        <ul>
            <li>Développement d’une plateforme de communication multimédia</li>
            <li>Conception d’une approche stratégique de communication et mise en place d’une ligne éditoriale</li>
            <li>Production d’une websérie interactive et de contenus multimédia</li>
            <li>Production d’un clip de fiction parodiant les films de suspense</li>
        </ul>
    const solutions8 =
        <ul>
            <li>Découpage des opérations de déploiement de la flotte de vélos Bixi en étape</li>
            <li>Scénarisation des capsules de formation à partir des savoir-faire des employés experts</li>
            <li>Tournage et postproduction des capules</li>
        </ul>
    const solutions9 =
        <ul>
            <li>Création d’une websérie interactive (sous le format d’un journal TV) présentée par un jeune animateur correspondant au public visé (autour de 30 ans) avec l'intégration de reporters maison</li>
            <li>Conception et production d’une plateforme sécurisée de diffusion multimédia</li>
            <li>Développement d’une web-application pour favoriser l’intégration des employés dans leurs nouveaux bureaux</li>
        </ul>
    const solutions10 =
        <ul>
            <li>Conception d’une nouvelle ligne éditoriale</li>
            <li>Développement d’une plateforme web d’actualité multimédia évolutive alimentée en information continue</li>
            <li>Mise en place d’un processus de production de contenu multimédia</li>
        </ul>
    const solutions11 =
        <ul>
            <li>Création, production et animation d’un évènement hybride avec la diffusion de contenu multimédia en direct et en différé pour assurer une qualité optimum</li>
            <li>Planification et gestion de la diffusion de l’évènement sur Facebook Live</li>
        </ul>
    const solutions12 =
        <ul>
            <li>Vidéos pré-enregistrées diffusées en direct avec présentateur professionnel</li>
        </ul>
    const solutions13 =
        <ul>
            <li>production d’une vidéo corporative très dynamique</li>
        </ul>
    const solutions14 =
        <ul>
            <li>websérie réalisée en 4 épisodes, produite avec et pour les résidents</li>
            <li>donner aux résidents le rôle d’acteur de leur propre vie pour permettre de faire découvrir et de valoriser ces lieux de vie trop souvent stigmatisés</li>
        </ul>
    const solutions15 =
        <ul>
            <li>Conception et scénarisation d’une capsule en <em>motion design</em> accompagnée d’un guide écrit des règles de vie</li>
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
    const category11 = 'Événement'
    const category12 = 'Événement'
    const category13 = 'Communication'
    const category14 = 'Communication'
    const category15 = 'Formation'

    function AllRealisations() {
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
            </>
        )
    }


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
            <div>
                <NavigationMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
            <div className="container-fluid realisationPageWrapper">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="textTypeRealisation">
                            <RealisationTypeWriter />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid realisationPageMain">
                <div className="realisationPageGray">
                    <div className="realisationPageForGray">
                        <AllRealisations />
                    </div>
                </div>
                <div className="queryAllRealisations">
                    <AllRealisations />
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
            <Contact />
            <div className='clientsInRealisation'>
                <Clients />
            </div>
        </>
    )
}