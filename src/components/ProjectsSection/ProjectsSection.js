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
                        <a href='https://github.com/marcopoloye/dont-forget' target='_blank'>
                            <img id='icon-git' src={gitsvg}/>
                        </a>
                        <a href='https://dont-forget-2022.herokuapp.com/' target='_blank'>
                            <img id='icon-link' src={linksvg}/>
                        </a>
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
                        <a href='https://github.com/marcopoloye/googleHackathon' target='_blank'>
                            <img id='icon-git' src={gitsvg}/>
                        </a>
                        <a href='' target='_blank'>
                            <img id='icon-link' src={linksvg}/>
                        </a>
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
                        <a href='https://github.com/freeHashBrown/instock-silentdebuggers' target='_blank'>
                            <img id='icon-git' src={gitsvg}/>
                        </a>
                        <a href='' target='_blank'>
                            <img id='icon-link' src={linksvg}/>
                        </a>
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
                        <a href='https://github.com/marcopoloye/brainflix' target='_blank'>
                            <img id='icon-git' src={gitsvg}/>
                        </a>
                        <a href='' target='_blank'>
                            <img id='icon-link' src={linksvg}/>
                        </a>
                    </div>
                </div>

            </section>
        </>
    );
}

export default ProjectsSection;