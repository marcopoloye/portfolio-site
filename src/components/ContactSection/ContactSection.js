import './ContactSection.scss'

function ContactSection() {
    return (
        <>
            <h2 className='contact-section__heading'>Contact</h2>

            <div>
                <form className='contact-section__form'>
                    <input placeholder='Enter your name' type='text'></input>
                    <input placeholder='Enter your email' type='text'></input>
                    <textarea placeholder='Enter your message'></textarea>
                </form>
            </div>
        </>
    );
}

export default ContactSection;