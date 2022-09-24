import './SkillsSection.scss';

function SkillsSection () {
    return (
        <section className='skills-section'>
            <h2 className='skills-section__heading'>Skills</h2>

            <div className='skills-section__icon-container'>
                <div className='skills-section__icon-html'></div>
                <div className='skills-section__icon-css'></div>
                <div className='skills-section__icon-js'></div>
                <div className='skills-section__icon-sass'></div>
                <div className='skills-section__icon-ts'></div>
                <div className='skills-section__icon-react'></div>
                <div className='skills-section__icon-node'></div>
                <div className='skills-section__icon-express'></div>
                <div className='skills-section__icon-mysql'></div>
            </div>
        </section>
    );
}

export default SkillsSection ;