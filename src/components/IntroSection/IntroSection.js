import './IntroSection.scss'

function IntroSection () {
    return (
        <section className='intro-section'>
            <div className='intro-section__heading-photo-container'>
                <h2 className='intro-section__heading'>Marco Ye</h2>
                <div className='intro-section__photo'></div>
            </div>

            <div className='intro-section__body'>
                <p className='intro-section__text'>Hi I'm Marco! I'm a full stack web developer with an interest in front end development.</p>
                <p className='intro-section__text'>I have a background in biology, chemistry, and data visualisation, and in August 2022 I graduated from BrainStation's Web Dev Bootcamp and have been coding ever since.</p>
                <p className='intro-section__text bottom-border'>Below is some of my work and contact info, let's connect!</p>
            </div>     
        </section>
    );
}

export default IntroSection ;