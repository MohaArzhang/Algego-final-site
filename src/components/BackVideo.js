import HeaderImage from '../images/contact-header-image.png'
import UpTypeWriterMainHome from './UpTypeWriterMainHome'
import UpTypeWriterOther from './UpTypeWriterOther'
import { useLocation } from 'react-router-dom';
import FetchVideoAccueil from './FetchVideoAccueil';

export default function BackVideo() {
  let TypeElement;
  const location = useLocation();

  if (location.pathname === '/') {
    TypeElement = <UpTypeWriterMainHome />
  } else if (location.pathname === '/home') {
    TypeElement = <UpTypeWriterOther />
  }
  return (
    <>
      <div className='upTypeWriterContainer'>
        {TypeElement}
        <FetchVideoAccueil />
        <img className='secondHeadBack' style={{ objectFit: 'contain', width: '100vw' }} src={HeaderImage} alt='Header Image'></img>
      </div>
    </>
  )
}