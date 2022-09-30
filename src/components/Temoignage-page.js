import NavigationMenu from "./NavigationMenu"
import { useState } from 'react'
import TemoignageTypeWriter from './TemoignageTypeWriter'
import Desjardins from '../images/Logos/desjardins.png'
import Enviro from '../images/Logos/enviro.png'
import Plasti from '../images/Logos/plasti.png'
import CQF from '../images/Logos/cqf.png'
import BIXI from '../images/Logos/bixi.png'
import Contact from "./Contact"
import Clients from "./Clients"
import AOS from 'aos'
import 'aos/dist/aos.css'
import SEO from './SEO'

export default function Temoignage() {
    AOS.init();

    const [showMenu, setShowMenu] = useState(false);

    const link1 = "https://player.vimeo.com/video/746228594?h=37803e625b;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    const link2 = "https://player.vimeo.com/video/746229373?h=cc8c2a8c40;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    const link3 = "https://player.vimeo.com/video/746229365?h=1db4fb26e4;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    const link4 = "https://player.vimeo.com/video/746229796?h=ec1f840d19;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    const link5 = "https://player.vimeo.com/video/746230012?h=2ef43f3648;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"

    const title1 = "EnviroCompétences"
    const title2 = "Desjardins"
    const title3 = "Plasticompetence"
    const title4 = "CQF"
    const title5 = "Bixi"

    const alt1 = "EnviroCompétences"
    const alt2 = "Desjardins"
    const alt3 = "Plasticompetence"
    const alt4 = "CQF"
    const alt5 = "Bixi"

    const description1 = "Communication | bornes interactives"
    const description2 = "Formation | websérie-studio virtuel 3D"
    const description3 = <span>Formation | transposition en <em>e-learning</em></span>
    const description4 = "Communication | événement hybride"
    const description5 = "Formation | LMS avec tutoriels vidéo"

    const TemoignageComp = (props) => {
        return (
            <>
                <div className="temoigangeResponsive">
                    <div className="temoignageCard">
                        <iframe src={props.link} width="348" height="197" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title={props.title}></iframe>
                        <div className="temoigangeImage">
                            <img src={props.image} alt={props.alt}></img>
                        </div>
                        <div className="temoignageVideoSub">
                            {props.description}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <SEO title='Temoignages - ALGEGO' description='Description for Temoignage page' language='FR' link='https://algego.com/temoignage' />
            <div>
                <NavigationMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
            <div className="textTypeRealisation">
                <TemoignageTypeWriter />
            </div>
            <div className="forIframeSize">
                <iframe className="temoignageVideo" src="https://player.vimeo.com/video/746221857?h=1a9a5dd8c3;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title={title1}></iframe>
            </div>
            <div className="temoignageSecondTitle">
                <h1>Cliquer pour visionner les témoignages complets :</h1>
            </div>
            <div className="container temoignageContainer">
                <div
                    data-aos='slide-right'
                    data-aos-duration='1200'
                    data-aos-once="true"
                    className="temoignageGray">
                    <div className="temoignageForGray">
                        <div className="row temoignageRow">
                            <div
                                data-aos='zoom-in'
                                data-aos-duration='1200'
                                data-aos-delay='600'
                                data-aos-once="true"
                                className="col-xl-4 col-lg-6 temoignageCol temoignageRowUp">
                                <div className="temoigangeResponsive">
                                    <div className="temoignageCard temoignageRowUpLeft">
                                        <iframe src={link1} width="348" height="197" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title={title1}></iframe>
                                        <div className="temoigangeImage">
                                            <img src={Enviro} alt={alt1}></img>
                                        </div>
                                        <div className="temoignageVideoSub">
                                            {description1}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-aos='zoom-in'
                                data-aos-duration='1200'
                                data-aos-delay='800'
                                data-aos-once="true"
                                className="col-xl-4 col-lg-6 temoignageCol temoignageRowUp">
                                <div className="temoignageCard temoignageRowUpRight">
                                    <iframe src={link2} width="348" height="197" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title={title2}></iframe>
                                    <div className="temoigangeImage">
                                        <img src={Desjardins} alt={alt2}></img>
                                    </div>
                                    <div className="temoignageVideoSub">
                                        {description2}
                                    </div>
                                </div>
                            </div>
                            <div
                                data-aos='zoom-in'
                                data-aos-duration='1200'
                                data-aos-delay='1000'
                                data-aos-once="true"
                                className="col-xl-4 col-lg-12 temoignageCol">
                                <TemoignageComp link={link3} title={title3} image={Plasti} alt={alt3} description={description3} />
                            </div>
                        </div>
                        <div className="row temoignageRow">
                            <div
                                data-aos='zoom-in'
                                data-aos-duration='1200'
                                data-aos-delay='800'
                                data-aos-once="true"
                                className="col-lg-6">
                                <div className="temoigangeResponsive">
                                    <div className="temoignageCard temoignageCardLeft">
                                        <iframe src={link4} width="348" height="197" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title={title4}></iframe>
                                        <div className="temoigangeImage">
                                            <img src={CQF} alt={alt4}></img>
                                        </div>
                                        <div className="temoignageVideoSub">
                                            {description4}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-aos='zoom-in'
                                data-aos-duration='1200'
                                data-aos-delay='1000'
                                data-aos-once="true"
                                className="col-lg-6">
                                <div className="temoigangeResponsive">
                                    <div className="temoignageCard temoignageCardRight">
                                        <iframe src={link5} width="348" height="197" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title={title5}></iframe>
                                        <div className="temoigangeImage">
                                            <img src={BIXI} alt={alt5}></img>
                                        </div>
                                        <div className="temoignageVideoSub">
                                            {description5}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <div className='clientsInRealisation'>
                <Clients />
            </div>
        </>
    )
}
