import './ContactSection.scss';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

function ContactSection() {
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [emailSent, setEmailSent] = useState('');

    // checks if form inputs are empty before sending email
    const sendEmail = (e) => {
        e.preventDefault();
        
        if (e.target[0].value) {
            setNameError('');
        } else {
            setNameError('Please enter a name');
        }

        if (e.target[1].value && e.target[1].value.includes('@')) {
            setEmailError('');
        } else {
            setEmailError('Please enter a valid email');
        }

        if (e.target[2].value) {
            setSubjectError('');
        } else {
            setSubjectError('Please enter a subject');
        }

        if (e.target[3].value) {
            setMessageError('');
        } else {
            setMessageError('Please enter a message');
        }

        if (e.target[0].value && e.target[1].value && e.target[1].value.includes('@') && e.target[2].value && e.target[3].value) {
            emailjs.sendForm('service_cykm9kh', 'template_zf5bcjb', e.target, 'AQBI2BVMPmfvtufFP')
                .then((result) => {
                    console.log(result.text);
                    setEmailSent('Email was sent!');
                }, (error) => {
                    console.log(error.text);
                    setEmailSent('Email was not sent! Try again later!')
                });

            e.target.reset();
        }
    };
    const clearSuccess = () => {
        setEmailSent('')
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <section className='contact-section'>
            <h2 className='contact-section__heading reveal'>Contact</h2>

            <div className='contact-section__form-container reveal'>
                <form className='contact-section__form' id='email-form' onSubmit={sendEmail}>
                    <label className='contact-section__form-label' htmlFor='name'>Name:</label>
                    <input placeholder='Enter your name' type='text' name='name' id='name' onClick={clearSuccess}/>
                    <label className='contact-section__form-label-error' htmlFor='name'>{nameError}</label>                

                    <label className='contact-section__form-label' htmlFor='email'>Email:</label>
                    <input placeholder='Enter your email' type='text' name='email' id='email'/>
                    <label className='contact-section__form-label-error' htmlFor='email'>{emailError}</label>

                    <label className='contact-section__form-label' htmlFor='subject'>Subject:</label>
                    <input placeholder='Enter the email subject' type='text' name='subject' id='subject'/>
                    <label className='contact-section__form-label-error' htmlFor='subject'>{subjectError}</label>

                    <label className='contact-section__form-label' htmlFor='message'>Message:</label>        
                    <textarea placeholder='Enter your message' name='message' id='message' rows="8"/>
                    <label className='contact-section__form-label-error' htmlFor='message'>{messageError}</label>
                </form>
                <button className='contact-section__form-button' type='submit' form='email-form'>Send</button>
                <label className='contact-section__form-email-success'>{emailSent}</label>
            </div>

            <div className='contact-section__top-button' onClick={scrollToTop}>Back to Top ↑</div>
            <div className='contact-section__icon-container'>
                <div className='contact-section__icon-linkedin' onClick={()=> window.open('https://www.linkedin.com/in/marcoye/', '_blank')} title='LinkedIn profile' alt='LinkedIn icon'></div>
                <div className='contact-section__icon-github' onClick={()=> window.open('https://github.com/marcopoloye', '_blank')} title='GitHub profile' alt='GitHub icon'></div>
            </div>
        </section>
    );
}

export default ContactSection;