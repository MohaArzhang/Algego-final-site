import AnimatedLogo from '../images/circle-logo.gif';
import Expire from '../components/Expire';
import HomeWithoutLogo from './HomeWithotLogo';
import {useEffect} from 'react';

const FirstLogo = () => {
    return (
        <>
            <div className='firstLogo'>
                <img src={AnimatedLogo} alt='Logo ALGEGO'/>
            </div>
        </>
    )
}

export default function Home() {

    useEffect(() => {
        document.title = "ALGEGO";  
      }, []);

    window.pageName = "MainHome"
    return (
        <>
            <Expire delay="3000">
                <FirstLogo />
            </Expire>
            <HomeWithoutLogo />
        </>
    )
}