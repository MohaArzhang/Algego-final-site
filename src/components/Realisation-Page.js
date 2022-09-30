import NavigationMenu from "./NavigationMenu"
import { useState } from 'react'
import RealisationTypeWriter from './RealisationTypeWriter'
import Contact from "./Contact"
import Clients from "./Clients"
import AOS from 'aos'
import 'aos/dist/aos.css'
import AllRealisations from "./AllRealisations"
import SEO from './SEO'

export default function RealisationPage() {
    AOS.init();

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <SEO title='Réalisations - ALGEGO' description='Description for Realisation page' language='FR' link='https://algego.com/realisations' />
            <div>
                <NavigationMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
            <div className="container-fluid realisationPageWrapper">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="textTypeRealisation">
                            <RealisationTypeWriter />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid realisationPageMain">
                <div className="realisationPageGray">
                    <div className="realisationPageForGray">
                        <AllRealisations />
                    </div>
                </div>
                <div className="queryAllRealisations">
                    <AllRealisations />
                </div>
            </div>
            <Contact />
            <div className='clientsInRealisation'>
                <Clients />
            </div>
        </>
    )
}