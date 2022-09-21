import './ContactsSection.scss'

function ContactsSection() {
    return (
        <>
            <h2 className='contacts-section__heading'>Contact</h2>

            <div>
                <form className='contacts-section__form'>
                    <input placeholder='Enter your name' type='text'></input>
                    <input placeholder='Enter your email' type='text'></input>
                    <textarea placeholder='Enter your message'></textarea>
                </form>
            </div>
        </>
    );
}

export default ContactsSection;