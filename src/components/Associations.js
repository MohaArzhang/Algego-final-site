import Marquee from "react-marquee-slider"
import AQT from '../images/associations/aqt.png';
import CQF from '../images/associations/cqf.png';
import Manufacturier from '../images/associations/manufacturier.png';
import RPFQ from '../images/associations/rpfq.png';
import SRC from '../images/associations/src.png';
import XN from '../images/associations/xn.png';

export default function Associations() {
    return (
        <>
            <h2 className='associationsTitle'>Membre enthousiaste de</h2>
            <div>
                <Marquee velocity={15} minScale={0.7} resetAfterTries={200} scatterRandomly={false} direction={"ltr"}>
                    <div className="clientWrapper">
                        <a href="https://www.aqt.ca" target="_blank"><img className="associationImage" src={AQT} alt="AQT"></img></a>
                    </div>
                    <div className="clientWrapper">
                        <a href="https://cqf.ca" target="_blank"><img className="associationImage" src={CQF} alt="CQF"></img></a>
                    </div>
                    <div className="clientWrapper">
                        <a href="https://www.manufacturier.quebec/fr" target="_blank"><img className="associationImage" src={Manufacturier} alt="Manufacturier"></img></a>
                    </div>
                    <div className="clientWrapper">
                        <a href="https://rpfq.com/holo/authentification" target="_blank"><img className="associationImage" src={RPFQ} alt="RPFQ"></img></a>
                    </div>
                    <div className="clientWrapper">
                        <a href="https://www.ccifcmtl.ca/" target="_blank"><img className="associationImage" src={SRC} alt="SRC"></img></a>
                    </div>
                    <div className="clientWrapper">
                        <a href="https://www.xnquebec.co" target="_blank"><img className="associationImage" src={XN} alt="XN"></img></a>
                    </div>
                </Marquee>
            </div>
        </>
    );
}