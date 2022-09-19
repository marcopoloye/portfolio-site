import './ProjectsSection.scss'

function ProjectsSection() {
    return (
        <>
            <section className="projects-section">
                <div className='projects-section__thumbnail'>
                    <div id='thumbnail-one'></div>
                </div>
                <div className='projects-section__thumbnail'>
                    <div id='thumbnail-two'></div>
                </div>
                <div className='projects-section__thumbnail' id='thumbnail-three'>
                    <div id='thumbnail-three'></div>
                </div>
                <div className='projects-section__thumbnail' id='thumbnail-three'>
                    <div id='thumbnail-four'></div>
                </div>
            </section>
        </>
    );
}

export default ProjectsSection;