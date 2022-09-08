import Logo from '../images/circle.png'

export default function footer() {
    return (
        <>
            <div className='footerShow'>
                <div className="footerWrapper">
                    <div className='footerInner'>
                        <div className='row'>
                            <div className='col-12 col-sm-4'>
                                <div className='footerTxtLeft'>
                                    <p><strong>Siège social</strong></p>
                                    <p>2407-199 rue de la Rotonde</p>
                                    <p>Verdun, Qc H3E 0C1</p>
                                    <p className='footerTxt'>
                                        &#xa9; ALGEGO 2022
                                    </p>
                                    <p>&#xa0;</p>
                                </div>
                            </div>
                            <div className='col-12 col-sm-4'>
                                <div id='footerLogo'>
                                    <a href='/home'>
                                        <img src={Logo} alt='Logo ALGEGO'></img>
                                    </a>
                                </div>
                            </div>
                            <div className='col-12 col-sm-4'>
                                <div className='footerTxtRight'>
                                    <p><strong>Bureaux</strong></p>
                                    <p>3970, rue Saint-Ambroise</p>
                                    <p>Montréal, Qc H4C 2C7</p>
                                    <p>(514) 360-7711</p>
                                    <p>&#xa0;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footerHide'>
                <div className="footerWrapper">
                    <div className='footerInner'>
                        <div className='row'>
                            <div className='col-12 col-sm-4'>
                                <div className='footerTxtLeft'>
                                    <p><strong>Siège social</strong></p>
                                    <p>2407-199 rue de la Rotonde</p>
                                    <p>Verdun, Qc H3E 0C1</p>
                                </div>
                            </div>
                            <div className='col-12 col-sm-4'>
                                <div className='footerTxtRight'>
                                    <p><strong>Bureaux</strong></p>
                                    <p>3970, rue Saint-Ambroise</p>
                                    <p>Montréal, Qc H4C 2C7</p>
                                    <p>(514) 360-7711</p>
                                    <p>&#xa0;</p>
                                </div>
                            </div>
                            <div className='col-12 col-sm-4'>
                                <div id='footerLogo'>
                                    <a href='/home'>
                                        <img src={Logo} alt='Logo ALGEGO'></img>
                                    </a>
                                </div>
                                <div className='footerTxt'>
                                    &#xa9; ALGEGO 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
