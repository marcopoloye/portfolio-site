import './SkillsSection.scss';

function SkillsSection () {
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
      
        for (let i = 0; i < reveals.length; i++) {
          const windowHeight = window.innerHeight;
          const elementTop = reveals[i].getBoundingClientRect().top;
          const elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
    return (
        <section className='skills-section'>
            <h2 className='skills-section__heading reveal'>Skills</h2>

            <div className='skills-section__icon-container'>
                <div className='skills-section__icon-html reveal' title='HTML'></div>
                <div className='skills-section__icon-css reveal' title='CSS'></div>
                <div className='skills-section__icon-js reveal' title='JavaScript'></div>
                <div className='skills-section__icon-sass reveal' title='Sass'></div>
                <div className='skills-section__icon-ts reveal' title='TypeScript'></div>
                <div className='skills-section__icon-react reveal' title='ReactJS'></div>
                <div className='skills-section__icon-node reveal' title='NodeJS'></div>
                <div className='skills-section__icon-express reveal' title='express'></div>
                <div className='skills-section__icon-mysql reveal' title='MySQL'></div>
            </div>
        </section>
    );
}

export default SkillsSection ;