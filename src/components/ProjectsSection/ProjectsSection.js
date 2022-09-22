import './ProjectsSection.scss';
import gitsvg from '../../assets/icons/gitsvg.svg';
import linksvg from '../../assets/icons/linksvg.svg';

function ProjectsSection() {
    return (
        <>
            <h2 className='projects-section__heading'>Projects</h2>
            <section className="projects-section">

                <div className='projects-section__card'>
                    <div className='projects-section__thumbnail'>
                        <div id='thumbnail-one'></div>
                    </div>
                    <p className='projects-section__text'>
                        Don't Forget is a checklist app designed to help forgetful travelers remember what to pack.
                    </p>
                    <div className='projects-section__icons'>
                        <img 
                            id='icon-git'
                            src={gitsvg}
                            onClick={()=> window.open('https://github.com/marcopoloye/dont-forget', '_blank')}
                        />
                        <img 
                            id='icon-link'
                            src={linksvg}
                            onClick={()=> window.open('https://dont-forget-2022.herokuapp.com/', '_blank')}
                        />
                    </div>
                </div>

                <div className='projects-section__card'>
                    <div className='projects-section__thumbnail'>
                        <div id='thumbnail-two'></div>
                    </div>
                    <p className='projects-section__text'>
                        Google Health Connect is an online portal that connects healthcare providers to patients with a focus on accessibility. 
                    </p>
                    <div className='projects-section__icons'>
                        <img 
                            id='icon-git'
                            src={gitsvg}
                            onClick={()=> window.open('https://github.com/marcopoloye/googleHackathon', '_blank')}
                        />
                        <img 
                            id='icon-link'
                            src={linksvg}
                            onClick={()=> window.open('', '_blank')}
                        />
                    </div>
                </div>

                <div className='projects-section__card'>
                    <div className='projects-section__thumbnail'>
                        <div id='thumbnail-three'></div>
                    </div>
                    <p className='projects-section__text'>
                        InStock is a mock inventory management system with CRUD operations.
                    </p>
                    <div className='projects-section__icons'>
                        <img 
                            id='icon-git'
                            src={gitsvg}
                            onClick={()=> window.open('https://github.com/freeHashBrown/instock-silentdebuggers', '_blank')}
                        />
                        {/* <img 
                            id='icon-link'
                            src={linksvg}
                            onClick={()=> window.open('', '_blank')}
                        /> */}
                    </div>
                </div>

                <div className='projects-section__card'>
                    <div className='projects-section__thumbnail'>
                        <div id='thumbnail-four'></div>
                    </div>
                    <p className='projects-section__text'>
                        BrainFlix is a mock video streaming platform with video uploading and commenting capabilities.
                    </p>
                    <div className='projects-section__icons bottom'>
                        <img 
                            id='icon-git'
                            src={gitsvg}
                            onClick={() => window.open('https://github.com/marcopoloye/brainflix', '_blank')}
                        />
                        <img 
                            id='icon-link'
                            src={linksvg}
                            onClick={()=> window.open('', '_blank')}
                        />
                    </div>
                </div>

            </section>
        </>
    );
}

export default ProjectsSection;