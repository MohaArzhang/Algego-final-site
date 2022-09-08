import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import style from './style.module.css';
import css from "classnames";



const ContactForm = () => {
    const [alertShow, setAlertShow] = useState(false);
    const [successtShow, setSuccessShow] = useState(false);

    function Alert({ children, type, message }) {
        const [isShow, setIsShow] = useState(true);

        const renderElAlert = function () {
            return React.cloneElement(children);
        };

        const handleClose = (e) => {
            e.preventDefault();
            setAlertShow(false);
            setIsShow(false);
            setSuccessShow(false)
            setFormSent(false)
        };

        console.log(alertShow)

        return (
            <div className={css(style.alert, style[type], !isShow && style.hide)}>
                <span className={style.closebtn} onClick={handleClose}>
                    &times;
                </span>
                {children ? renderElAlert() : message}
            </div>
        );
    }
    const form = useRef();
    const [formSent, setFormSent] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');

    function EmptyFields() {
        setName('');
        setEmail('');
        setMessage('');
        setPhone('');
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (name && email && message && phone) {

            emailjs.sendForm('service_th07hao', 'template_mpyv7nk', form.current, 'Gdkhs9f-oEEJq9mtZ')
                .then((result) => {
                    console.log(result.text);
                    setFormSent(true);
                    setAlertShow(true)
                    EmptyFields();
                }, (error) => {
                    console.log(error.text);
                });

        } else {
            setAlertShow(true);
        }
    };

    return (
        <>
            <div className={alertShow === true ? 'showMessage' : 'hideMessage'}>
                <Alert type="error" message="Merci de compléter tous les champs." />
            </div>
            <div className={formSent === true ? 'showMessage' : 'hideMessage'}>
                <Alert type="success">
                    <p>Votre message a été envoyé.</p>
                </Alert>
            </div>
            <div className='contactForm'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='formInput'>
                        <input type="text" name="user_name" placeholder='Nom complet' value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='formInput'>
                        <input type="email" name="user_email" placeholder='Courriel' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='formInput'>
                        <input type="tel" placeholder='Téléphone' value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div className='formInput' id='contactMessage'>
                        <textarea name="message" placeholder='Message' value={message} onChange={e => setMessage(e.target.value)} />
                    </div>
                    <div className='formButton'>
                        <input type="submit" value="Envoyer" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm