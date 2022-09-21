import './ContactSection.scss'
import emailjs from '@emailjs/browser';
import React, {useRef} from 'react';

function ContactSection() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cykm9kh', 'template_zf5bcjb', form.current, 'AQBI2BVMPmfvtufFP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <h2 className='contact-section__heading'>Contact</h2>

            <div>
                <form 
                    className='contact-section__form'
                    id='email-form'
                    onSubmit={sendEmail}
                    ref={form}
                >
                    <input placeholder='Enter your name' type='text' name='name'/>
                    <input placeholder='Enter the subject' type='text' name='subject'/>
                    <input placeholder='Enter your email' type='text' name='email'/>
                    <textarea placeholder='Enter your message' name='message'/>
                </form>
                <button type='submit' form='email-form'>Send</button>
            </div>
        </>
    );
}

export default ContactSection;