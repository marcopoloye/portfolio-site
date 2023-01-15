import './ProjectsSection.scss';

function ProjectsSection() {
    return (
        <section className='projects-section'>
            <h2 className='projects-section__heading reveal'>Projects</h2>
            <div className='projects-section__card-container'>
                <div className='projects-section__card reveal'>
                    <div className='projects-section__thumbnail' title="Don't Forget logo" alt="Don't Forget logo">
                        <div id='thumbnail-one'></div>
                    </div>
                    <p className='projects-section__text'>
                        Don't Forget is a checklist app designed to help forgetful travelers remember what to pack based on the destination.
                    </p>
                    <p className='projects-section__text'><b>Stack:</b> React, HTML/CSS, Sass, Node, Express, MySQL, OpenWeatherMap API</p>
                    <div className='projects-section__icon-container'>
                        <div className='projects-section__icon-git' onClick={()=> window.open('https://github.com/marcopoloye/dont-forget', '_blank')} title='GitHub repo' alt='GitHub icon'></div>
                        <div className='projects-section__icon-link' onClick={()=> window.open('https://dontforget.netlify.app/', '_blank')} title='Open link' alt='External link icon'></div>
                    </div>
                </div>

                <div className='projects-section__card reveal'>
                    <div className='projects-section__thumbnail' title="Google Health Connect logo" alt="Google Health Connect logo">
                        <div id='thumbnail-two'></div>
                    </div>
                    <p className='projects-section__text'>
                        Google Health Connect is an online portal that connects healthcare providers to patients with a focus on accessibility. 
                    </p>
                    <p className='projects-section__text'><b>Stack:</b> React, HTML/CSS, Sass, Node</p>
                    <div className='projects-section__icon-container'>
                        <div className='projects-section__icon-git' onClick={()=> window.open('https://github.com/marcopoloye/googleHackathon', '_blank')} title='GitHub repo' alt='GitHub icon'></div>
                        <div className='projects-section__icon-link' onClick={()=> window.open('https://googlehealthconnect.netlify.app/', '_blank')} title='Open link' alt='External link icon'></div>
                    </div>
                </div>

                <div className='projects-section__card reveal'>
                    <div className='projects-section__thumbnail' title="InStock logo" alt="InStock logo">
                        <div id='thumbnail-three'></div>
                    </div>
                    <p className='projects-section__text'>
                        InStock is a mock inventory management system with CRUD operations.
                    </p>
                    <p className='projects-section__text'><b>Stack:</b> React, HTML/CSS, Sass, Node, Express</p>
                    <div className='projects-section__icon-container'>
                        <div className='projects-section__icon-git' onClick={()=> window.open('https://github.com/marcopoloye/instock', '_blank')} title='GitHub repo' alt='GitHub icon'></div>
                        <div className='projects-section__icon-link' onClick={()=> window.open('https://instock7.netlify.app/warehouse', '_blank')}></div>
                    </div>
                </div>

                <div className='projects-section__card reveal'>
                    <div className='projects-section__thumbnail' title="BrainFlix logo" alt="BrainFlix logo">
                        <div id='thumbnail-four'></div>
                    </div>
                    <p className='projects-section__text'>
                        BrainFlix is a mock video streaming platform with video uploading and commenting capabilities.
                    </p>
                    <p className='projects-section__text'><b>Stack:</b> React, HTML/CSS, Sass, Node, APIs</p>
                    <div className='projects-section__icon-container'>
                        <div className='projects-section__icon-git' onClick={()=> window.open('https://github.com/marcopoloye/brainflix', '_blank')} title='GitHub repo' alt='GitHub icon'></div>
                        <div className='projects-section__icon-link' onClick={()=> window.open('https://brainflix-2022.herokuapp.com/', '_blank')} title='Open link' alt='External link icon'></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;