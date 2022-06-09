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
            <div className='container'>
                <div className='realisationWrapper'>
                    <div className='graySection1'
                        data-aos='slide-right'
                        data-aos-duration='1200'
                        data-aos-once="true"
                        data-aos-anchor=".realisation1"
                    >
                        <div className='row'>
                            <div className='col-xl-6'>
                                <div className='realisation realisation1'
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay='200'
                                    data-aos-once="true"
                                    data-aos-anchor='.realisation2'
                                >
                                    <div>
                                        <img className='realisationImage' src={Test1}></img>
                                    </div>
                                    <div className='realisationText'>
                                        <div className='btn btn-danger visionerBtn'>
                                            Visioner
                                        </div>
                                        <div>
                                            Vous avez un projet de formation en ligne ou en mode hybride qui nécessite de la production vidéo el et du multimédia ? Nos experts assionnés (techno-pédagogues, réalisateurs, program meurs, modélisateurs 3D) ont hâte d'en iaser avec vous !
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6'>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6'>
                                <div className='realisation realisation2'
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay='400'
                                    data-aos-once="true"
                                >
                                    <div>
                                        <img className='realisationImage' src={Test2}></img>
                                    </div>
                                    <div className='realisationText'>
                                        <div className='btn btn-danger visionerBtn'>
                                            Visioner
                                        </div>
                                        <div>
                                            Vous avez un projet de formation en ligne ou en mode hybride qui nécessite de la production vidéo el et du multimédia ? Nos experts assionnés (techno-pédagogues, réalisateurs, program meurs, modélisateurs 3D) ont hâte d'en iaser avec vous !
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6'>
                            </div>
                        </div>
                    </div>
                    <div id='realisationTitleWrapper'>
                        <p id='realisationTitleRotate'>Quelques réalisations</p>
                    </div>
                </div>
                <div className='realisationWrapper'>
                    <div className='graySection2'
                        data-aos='slide-right'
                        data-aos-duration='1200'
                        data-aos-once="true"
                        data-aos-anchor=".realisation3"
                    >
                        <div className='row realisationSecondRow'>
                            <div className='col-xl-6'>
                                <div className='realisation realisation3'
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay='300'
                                    data-aos-once="true"
                                    data-aos-anchor='.realisation4'
                                >
                                    <div>
                                        <img className='realisationImage' src={Test3}></img>
                                    </div>
                                    <div className='realisationText'>
                                        <div className='btn btn-danger visionerBtn'>
                                            Visioner
                                        </div>
                                        <div>
                                            Vous avez un projet de formation en ligne ou en mode hybride qui nécessite de la production vidéo el et du multimédia ? Nos experts assionnés (techno-pédagogues, réalisateurs, program meurs, modélisateurs 3D) ont hâte d'en iaser avec vous !
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6'>
                                <div className='realisation realisation4'
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    // data-aos-delay='600'
                                    data-aos-once="true"
                                    data-aos-anchor='.realisation5'
                                >
                                    <div>
                                        <img className='realisationImage' src={Test4}></img>
                                    </div>
                                    <div className='realisationText'>
                                        <div className='btn btn-danger visionerBtn'>
                                            Visioner
                                        </div>
                                        <div>
                                            Vous avez un projet de formation en ligne ou en mode hybride qui nécessite de la production vidéo el et du multimédia ? Nos experts assionnés (techno-pédagogues, réalisateurs, program meurs, modélisateurs 3D) ont hâte d'en iaser avec vous !
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6'>
                                <div className='realisation realisation5'
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay='600'
                                    data-aos-once="true"
                                    data-aos-anchor='.realisation6'
                                >
                                    <div>
                                        <img className='realisationImage' src={Test5}></img>
                                    </div>
                                    <div className='realisationText'>
                                        <div className='btn btn-danger visionerBtn'>
                                            Visioner
                                        </div>
                                        <div>
                                            Vous avez un projet de formation en ligne ou en mode hybride qui nécessite de la production vidéo el et du multimédia ? Nos experts assionnés (techno-pédagogues, réalisateurs, program meurs, modélisateurs 3D) ont hâte d'en iaser avec vous !
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6'>
                                <div className='realisation realisation6'
                                    data-aos='zoom-in'
                                    data-aos-duration='1200'
                                    data-aos-delay='900'
                                    data-aos-once="true"
                                >
                                    <div>
                                        <img className='realisationImage' src={Test6}></img>
                                    </div>
                                    <div className='realisationText'>
                                        <div className='btn btn-danger visionerBtn'>
                                            Visioner
                                        </div>
                                        <div>
                                            Vous avez un projet de formation en ligne ou en mode hybride qui nécessite de la production vidéo el et du multimédia ? Nos experts assionnés (techno-pédagogues, réalisateurs, program meurs, modélisateurs 3D) ont hâte d'en iaser avec vous !
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='realisationTitleWrapper'>
                    </div>
                </div>
            </div>
        </>
    )
}
