import React from 'react'
import Test1 from '../images/test-1.png'
import Test2 from '../images/test-2.png'
import Test3 from '../images/test-3.png'
import Test4 from '../images/test-4.png'
import Test5 from '../images/test-5.png'
import Test6 from '../images/test-6.png'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Realisation() {
    AOS.init();
    return (
        <>
            <div className='row realisationRow'>
                <div
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    className='col-4'>
                    <img className='realisatoin' src={Test1}></img>
                </div>
                <div
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-delay='200'
                    className='col-4'>
                    <img className='realisatoin' src={Test2}></img>
                </div>
                <div
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-delay='400'
                    className='col-4'>
                    <img className='realisatoin' src={Test3}></img>
                </div>
            </div>
            <div className='row realisationRow'>
                <div
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    className='col-4'>
                    <img className='realisatoin' src={Test4}></img>
                </div>
                <div
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-delay='200'
                    className='col-4'>
                    <img className='realisatoin' src={Test5}></img>
                </div>
                <div
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-delay='400'
                    className='col-4'>
                    <img className='realisatoin' src={Test6}></img>
                </div>
            </div>
            <div className='container'>
                <div id='realisationTitle'>
                    Voir d'autres réalisations
                </div>
            </div>
            <a href='#'>
                <div className='row'>
                    <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </a>
        </>
    )
}
