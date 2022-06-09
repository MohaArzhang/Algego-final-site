import Logo from '../images/circle.png'

export default function footer() {
    return (
        <div className="footerWrapper">
            <div className='footerTxt'>
                ACCUEIL
            </div>
            <div className='footerTxt'>
                L'AGENCE
            </div>
            <div className='footerTxt'>
                EXPERTISES
            </div>
            <div id='footerLogo'>
                <img src={Logo}></img>
            </div>
            <div className='footerTxt'>
                RÉALISATIONS
            </div>
            <div className='footerTxt'>
                ACTUALITÉS
            </div>
            <div className='footerTxt'>
                CONTACT
            </div>
        </div>
    )
}
