import { useEffect, useState } from 'react';

export default function FetchVideoAccueil() {
    const [videoAccueil, setVideoAccueil] = useState([])
    useEffect(() => {
        fetch('https://gestion.contenu.algego.com/wp-json/wp/v2/video-accueil')
            .then(response => response.json())
            .then(data => setVideoAccueil(data))
    }, [])
    return (
        <>
            {videoAccueil.map(vid => {
                const videoSrc = vid.content.rendered.match(/src="(.+?)"/)[1];
                return (
                    <video className='firstHeadBack' key={vid.id}
                        src={videoSrc}
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
                    </video>
                )
            })}
        </>
    )
}