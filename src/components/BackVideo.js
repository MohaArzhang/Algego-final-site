import Teaser from '../video/video_page_accueil_finale.mp4'
import HeaderImage from '../images/contact-header-image.png'
import UpTypeWriterMainHome from './UpTypeWriterMainHome'
import UpTypeWriterOther from './UpTypeWriterOther'

export default function BackVideo() {
  let TypeElement
  if (window.pageName == 'MainHome') {
    TypeElement = <UpTypeWriterMainHome />
  } else {
    TypeElement = <UpTypeWriterOther />
  }
  return (
    <>
      <div className='upTypeWriterContainer'>
        {TypeElement}
        <video className='firstHeadBack'
          autoPlay
          loop
          muted
          style={{
            positioin: 'absolute',
            left: '50%',
            top: '50%',
            width: '100%',
            objectFit: 'cover',
            zIndex: '-1'
          }}
        >
          <source src={Teaser} type='video/mp4' />
        </video>
        <img className='secondHeadBack' style={{ objectFit: 'contain', width: '100vw' }} src={HeaderImage} alt='Header Image'></img>
      </div>
    </>
  )
}