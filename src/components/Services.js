import Circle from '../images/circle.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ServicesComp = (props) => {
    return (
        <div className='serviceWrapper'>
            <div id='circleAndLetter'>
                <img className='circleImage' src={Circle} />
                <div className='letterInCircle'>{props.letter}</div>
            </div>
            <div className='shortDescription'><p>{props.shortDescription1}</p><p>{props.shortDescription}</p></div>
            <div className='longDescription'>
                <div className='longDesText'>
                    {props.longDescription}
                </div>
            </div>
        </div>
    )
}

const longDescriptionFormation =
    <p>Nous créons des<strong> expériences d’apprentissage en ligne</strong> sur mesure favorisant l’immersion et l’engagement de vos collaborateurs.</p>

const longDescriptionCommunication =
    <p>Nous déployons des <strong>stratégies multimédia innovantes</strong> pour dynamiser vos communications internes et externes, et accompagner la gestion du changement.</p>

const longDescriptionMultimedia =
    <p>Que ce soit pour vos projets de <strong>formation </strong>, de <strong>communication </strong>ou pour des <strong>événements corporatifs haut de gamme </strong>, le <strong>multimédia </strong>est toujours intégré dans nos solutions <strong>innovantes</strong>.</p>

function Services() {
    AOS.init();
    return (
        <>
            <div className='row'>
                <div className='col-xl-4 col-lg-12' data-aos='slide-right' data-aos-duration='1000'>
                    <ServicesComp letter='F' longDescription={longDescriptionFormation} shortDescription='Formation' />
                </div>

                <div className='col-xl-4 col-lg-12' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='400'>
                    <ServicesComp letter='C' longDescription={longDescriptionCommunication} shortDescription='Communication' />
                </div>

                <div className='col-xl-4 col-lg-12' data-aos='slide-left' data-aos-duration='1000'>
                    <ServicesComp letter='M' longDescription={longDescriptionMultimedia} shortDescription='Multimédia' />
                </div>
            </div>
        </>
    )

}

export default Services;