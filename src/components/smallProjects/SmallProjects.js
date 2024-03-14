import './smallProjects.scss';

import ProjectCard from '../projectCard/ProjectCard';

const SmallProjects = () => {
    return (
        <div className="spWrap">
            <div className="spWrap_title"><span>#</span>small-projects</div>
            <div className="spWrap_apps">
                <ProjectCard/>
            </div>
        </div>
    )
}

export default SmallProjects;