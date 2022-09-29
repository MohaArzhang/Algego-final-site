import AMCQ from '../images/Logos/amcq.png'
import AMS from '../images/Logos/ams.png'
import Barreau from '../images/Logos/barreau.png'
import Bell from '../images/Logos/bell.png'
import Bixi from '../images/Logos/bixi.png'
import Bonduelle from '../images/Logos/bonduelle.png'
import Concordia from '../images/Logos/concordia.png'
import CQF from '../images/Logos/cqf.png'
import Desjardins from '../images/Logos/desjardins.png'
import Enviro from '../images/Logos/enviro.png'
import Floralies from '../images/Logos/floralies.png'
import Giant from '../images/Logos/giant.png'
import Hema from '../images/Logos/hema.png'
import Ikea from '../images/Logos/ikea.png'
import Loto from '../images/Logos/loto.png'
import Maillon from '../images/Logos/maillon.png'
import Moet from '../images/Logos/moet.png'
import Notaires from '../images/Logos/notaires.png'
import OPDQ from '../images/Logos/opdq.png'
import Plasti from '../images/Logos/plasti.png'
import Riopelle from '../images/Logos/riopelle.png'
import Wolff from '../images/Logos/wolff.png'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    713: { items: 2 },
    750: { items: 3 },
    1024: { items: 6 },
};

const items = [
  <img src={AMCQ} className="clientImage" onDragStart={handleDragStart} alt="AMCQ" />,
  <img src={AMS} className="clientImage" onDragStart={handleDragStart} alt="AMS"/>,
  <img src={Barreau} className="clientImage" onDragStart={handleDragStart} alt="Barreau"/>,
  <img src={Bell} className="clientImage" onDragStart={handleDragStart} alt="Bell"/>,
  <img src={Bixi} className="clientImage" onDragStart={handleDragStart} alt="Bixi"/>,
  <img src={Bonduelle} className="clientImage" onDragStart={handleDragStart} alt="Bonduelle"/>,
  <img src={Concordia} className="clientImage" onDragStart={handleDragStart} alt="Université Concordia"/>,
  <img src={CQF} className="clientImage" onDragStart={handleDragStart} alt="CQF"/>,
  <img src={Desjardins} className="clientImage" onDragStart={handleDragStart} alt="Desjardins"/>,
  <img src={Enviro} className="clientImage" onDragStart={handleDragStart} alt="EnviroCompétences"/>,
  <img src={Floralies} className="clientImage" onDragStart={handleDragStart} alt="Résidences Floralies"/>,
  <img src={Giant} className="clientImage" onDragStart={handleDragStart} alt="Giant inc"/>,
  <img src={Hema} className="clientImage" onDragStart={handleDragStart} alt="Héma-Québec"/>,
  <img src={Ikea} className="clientImage" onDragStart={handleDragStart} alt="IKEA"/>,
  <img src={Loto} className="clientImage" onDragStart={handleDragStart} alt="Loto Québec"/>,
  <img src={Maillon} className="clientImage" onDragStart={handleDragStart} alt="Maillon d'Or"/>,
  <img src={Moet} className="clientImage" onDragStart={handleDragStart} alt="Moët Hennessy"/>,
  <img src={Notaires} className="clientImage" onDragStart={handleDragStart} alt="Chambre des notaires"/>,
  <img src={OPDQ} className="clientImage" onDragStart={handleDragStart} alt="OPDQ"/>,
  <img src={Plasti} className="clientImage" onDragStart={handleDragStart} alt="PlastiCompétences"/>,
  <img src={Riopelle} className="clientImage" onDragStart={handleDragStart} alt="Fondation Riopelle"/>,
  <img src={Wolff} className="clientImage" onDragStart={handleDragStart} alt="Wolff e-bikes"/>,
];

const Clients = () => {
  return (
    <AliceCarousel 
    mouseTracking
    items={items}
    responsive={responsive}
    animationDuration={900}
    autoPlay={true}
    autoPlayInterval={1200}
    autoPlayDirection='ltr'
    infinite={true}
    disableDotsControls={true}
    />
  );
}

export default Clients