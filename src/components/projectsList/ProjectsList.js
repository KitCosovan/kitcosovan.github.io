import './projectsList.scss';

import ProjectCard from '../projectCard/ProjectCard';

const ProjectsList = () => {
    return (
        <div className="wrap">
            <div className="wrap_title"><span>#</span>projects</div>
            <div className="wrap_divider"></div>
            <div className="wrap_view">View all ~~&gt;</div>
            <div className="projects">
                <ProjectCard/>
            </div>
        </div>
    )
}

export default ProjectsList;