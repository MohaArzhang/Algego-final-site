import UpTypeWriterMainHome from './UpTypeWriterMainHome'
import UpTypeWriterOther from './UpTypeWriterOther'
import { useLocation } from 'react-router-dom'
import React, { useRef, useEffect, useState } from "react"

export default function BackVideo() {
  let TypeElement;
  const location = useLocation();
  const [videoAccueil, setVideoAccueil] = useState([])
  useEffect(() => {
    fetch('https://gestion.contenu.algego.com/wp-json/wp/v2/video-accueil')
      .then(response => response.json())
      .then(data => setVideoAccueil(data))
  }, [])


  const videoLink = videoAccueil.map((video) => {
    return (
      video.content.rendered
    )
  })

  const videoLinkString = String(videoLink);
  const startIndex = videoLinkString.indexOf('src="') + 5;
  const endIndex = videoLinkString.indexOf('?_=1"');
  const extractedLink = videoLinkString.substring(startIndex, endIndex);

  function AutoPlaySilentVideo(props) {
    const videoRef = useRef(undefined);
    useEffect(() => {
      videoRef.current.defaultMuted = true;
    })
    return (
      <video
        className={props.className}
        ref={videoRef}
        loop
        autoPlay
        muted
        playsInline
        style={{
          // position: 'absolute',
          left: '50%',
          top: '50%',
          width: '100%',
          objectFit: 'cover',
          zIndex: '-1'
        }}>
        <source src={props.video} type="video/mp4" />
      </video>
    );
  }

  if (location.pathname === '/') {
    TypeElement = <UpTypeWriterMainHome />
  } else if (location.pathname === '/home') {
    TypeElement = <UpTypeWriterOther />
  }
  return (
    <>
      <div className='upTypeWriterContainer'>
        {TypeElement}
        <AutoPlaySilentVideo video={extractedLink} />
      </div>
    </>
  )
}