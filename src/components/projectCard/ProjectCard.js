import './projectCard.scss';

import temp from '../../img/temp.png';

const ProjectCard = () => {
    return (
        <>
            <div className="project">
                <div className="project_img">
                    <img src={temp} alt="project template" />
                </div>
                <div className="project_stack">
                    <div className="project_stack__tag">React</div>
                    <div className="project_stack__tag">HTML+CSS</div>
                </div>
                <div className="project_title">Card template</div>
                <div className="project_desc">Some description</div>
                <div className="project_btns">
                    <div className="project_demo">Demo &lt;~&gt;</div>
                    <div className="project_github">GitHub &ge;</div>
                </div>
            </div>

            <div className="project">
                <div className="project_img">
                    <img src={temp} alt="project template" />
                </div>
                <div className="project_stack">
                    <div className="project_stack__tag">React</div>
                    <div className="project_stack__tag">HTML+CSS</div>
                </div>
                <div className="project_title">Card template</div>
                <div className="project_desc">Some description more description about</div>
                <div className="project_btns">
                    <div className="project_demo">Demo &lt;~&gt;</div>
                    <div className="project_github">GitHub &ge;</div>
                </div>
            </div>

            <div className="project">
                <div className="project_img">
                    <img src={temp} alt="project template" />
                </div>
                <div className="project_stack">
                    <div className="project_stack__tag">React</div>
                    <div className="project_stack__tag">HTML+CSS</div>
                </div>
                <div className="project_title">Card template</div>
                <div className="project_desc">Some description more and more description about this projects. It's for testing flexibility of my card.</div>
                <div className="project_btns">
                    <div className="project_demo">Demo &lt;~&gt;</div>
                    <div className="project_github">GitHub &ge;</div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;