import MidTypeWriter from '../components/MidTypeWriter'
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Services from '../components/Services'
import EndTypeWriter from '../components/EndTypeWriter';
import HomeRealisation from '../components/HomeRealisation';
import Contact from '../components/Contact';
import Associations from '../components/Associations';
import Clients from '../components/Clients';
import Navigation from '../components/Navigation';
import { useLocation } from 'react-router-dom';
import SEO from './SEO'

export default function HomeWithoutLogo() {
    const location = useLocation
    const PageNameClass = location.pathname === '/' ? 'afterHeaderWrapper' : 'afterHeaderWrapperNoDelay'
    const [showMenu, setShowMenu] = useState(false)
    const { ref: typeRefMid, inView: typeViewMid } = useInView();
    const { ref: typeRefEnd, inView: typeViewEnd } = useInView();
    return (
        <>
            <SEO title='Accueil - ALGEGO' description='ALGEGO | formation - communication - multimédia. Partenaire complice de vos projets : de l’idée à la solution, ALGEGO a la solution.' language='FR' link='https://algego.com/home' />
            <Navigation showMenu={showMenu} setShowMenu={setShowMenu} />
            <div id={PageNameClass}>
                <div className='textTypeWriter' ref={typeRefMid}>
                    {typeViewMid ? <MidTypeWriter /> : ''}
                </div>
                <Services />
                <div id='realisationSection' ref={typeRefEnd}>
                    {typeViewEnd ? <EndTypeWriter /> : ''}
                </div>
            </div>
            <HomeRealisation />
            <div>
                <Contact />
            </div>
            <div className='clientSection'>
                <Clients />
            </div>
            <div className='associationSection'>
                <Associations />
            </div>
        </>
    )
}