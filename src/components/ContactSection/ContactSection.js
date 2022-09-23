import './ContactSection.scss'
import emailjs from '@emailjs/browser';

function ContactSection() {
    const sendEmail = (e) => {
        e.preventDefault();

        console.log(e.target)

        if (e.target[0].value && e.target[1].value && e.target[2].value && e.target[3].value) {
            // emailjs.sendForm('service_cykm9kh', 'template_zf5bcjb', e.target, 'AQBI2BVMPmfvtufFP')
            //     .then((result) => {
            //         console.log(result.text);
            //     }, (error) => {
            //         console.log(error.text);
            //     });

            e.target.reset()
        }
    };

    return (
        <div className='contact-section'>
            <h2 className='contact-section__heading'>Contact</h2>

            <div className='contact-section__form-container'>
                <form 
                    className='contact-section__form'
                    id='email-form'
                    onSubmit={sendEmail}
                >
                    <label className='contact-section__form-label' htmlFor='name'>Name:</label>
                    <input placeholder='Enter your name' type='text' name='name' id='name'/>
                    <label className='contact-section__form-label' htmlFor='email'>Email:</label>
                    <input placeholder='Enter your email' type='text' name='email' id='email'/>
                    <label className='contact-section__form-label' htmlFor='subject'>Subject:</label>
                    <input placeholder='Enter the email subject' type='text' name='subject' id='subject'/>
                    <label className='contact-section__form-label' htmlFor='message'>Message:</label>        
                    <textarea placeholder='Enter your message' name='message' id='message' rows="8"/>
                </form>
                <button className='contact-section__form-button' type='submit' form='email-form'>Send</button>
            </div>
        </div>
    );
}

export default ContactSection;