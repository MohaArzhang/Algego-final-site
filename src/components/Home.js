import AnimatedLogo from '../images/circle-logo.gif';
import Expire from '../components/Expire';
import HomeWithoutLogo from './HomeWithotLogo';
import SEO from './SEO'

const FirstLogo = () => {
    return (
        <>
            <div className='firstLogo'>
                <img src={AnimatedLogo} alt='Logo ALGEGO' />
            </div>
        </>
    )
}

export default function Home() {
    return (
        <>
            <SEO title='Accueil - ALGEGO' description='ALGEGO | formation - communication - multimédia. Partenaire complice de vos projets : de l’idée à la solution, ALGEGO a la solution.' language='FR' link='https://algego.com/' />
            <Expire delay="3000">
                <FirstLogo />
            </Expire>
            <HomeWithoutLogo />
        </>
    )
}