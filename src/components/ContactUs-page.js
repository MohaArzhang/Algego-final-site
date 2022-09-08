import React, { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import Envelope from '../images/envelope.png';
import Phone from '../images/phone.png';
import ContactPopUp from './ContactForm';

const ContactUs = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div>
                <NavigationMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
            <div className='contactImage'>
                <div className='contactImageInner'><h1>Un projet ? Jasons ensemble !<br/> De l'idée è la diffusion ALGEGO a la solution.</h1></div>
            </div>
            <div className='container contactUsWrapper'>
                <div className='row'>
                    <div className='col-xl-6'>
                        <div className='contactAddress'>
                            <p>3970, rue Saint-Ambroise</p>
                            <p>Montréal, QC H4C 2C7</p>
                            <br></br>
                            <div><img src={Phone} alt='Téléphone' />(514) 360-7711</div>
                            <div><img src={Envelope} alt='Courriel' />info@algego.com</div>
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <ContactPopUp/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs