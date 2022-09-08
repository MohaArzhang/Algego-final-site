import AnimatedLogo from '../images/circle-logo.gif'
import Expire from '../components/Expire';
import HomeWithoutLogo from './HomeWithotLogo';

const FirstLogo = () => {
    return (
        <>
            <div className='firstLogo'>
                <img src={AnimatedLogo} />
            </div>
        </>
    )
}

export default function Home() {
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