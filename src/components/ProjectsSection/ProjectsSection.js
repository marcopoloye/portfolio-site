import './ProjectsSection.scss'

function ProjectsSection() {
    return (
        <>
            <h2 className='projects-section__heading'>Projects</h2>
            <section className="projects-section">
                <div className='projects-section__thumbnail'>
                    <div id='thumbnail-one'></div>
                </div>
                <div className='projects-section__thumbnail'>
                    <div id='thumbnail-two'></div>
                </div>
                <div className='projects-section__thumbnail'>
                    <div id='thumbnail-three'></div>
                </div>
                <div className='projects-section__thumbnail'>
                    <div id='thumbnail-four'></div>
                </div>
            </section>
        </>
    );
}

export default ProjectsSection;