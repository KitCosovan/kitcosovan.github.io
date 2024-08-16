import './projectCard.scss';

import temp from '../../img/temp.png';
import onlineStore from '../../img/onlineStore.png';
import marvelBase from '../../img/marvelBase.png';
import framework from '../../img/framework.jpg';

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
                <div className="project_title">My portfolio</div>
                <div className="project_desc">You can view my portfolio here. Unfortunately, it is not completely finished yet, as I am in the process of improvement and preparing new projects. You can find a few of them on my page.</div>
                <div className="project_btns">
                    <div className="project_demo"><a href="https://kitcosovan.github.io/" target='blank'>Demo &lt;~&gt;</a></div>
                    <div className="project_github"><a href="https://github.com/KitCosovan/kitcosovan.github.io" target='blank'>GitHub &ge;</a></div>
                </div>
            </div>

            <div className="project">
                <div className="project_img">
                    <img src={framework} alt="project template" />
                </div>
                <div className="project_stack">
                    <div className="project_stack__tag">php</div>
                </div>
                <div className="project_title">Base Frame</div>
                <div className="project_desc">My personal framework for quick website building. Based on the MVC pattern. Easy to use, allows you to quickly solve lightweight tasks.</div>
                <div className="project_btns">
                    <div className="project_github"><a href="https://github.com/KitCosovan/frameworkPHP" target='blank'>GitHub &ge;</a></div>
                </div>
            </div>

            <div className="project">
                <div className="project_img">
                    <img src={onlineStore} alt="project template" />
                </div>
                <div className="project_stack">
                    <div className="project_stack__tag">React</div>
                    <div className="project_stack__tag">HTML+CSS</div>
                </div>
                <div className="project_title">Online shoes store</div>
                <div className="project_desc">One of the first projects on React.</div>
                <div className="project_btns">
                    <div className="project_demo"><a href="https://kitcosovan.github.io/mdStore.github.io/" target='blank'>Demo &lt;~&gt;</a></div>
                    <div className="project_github"><a href="https://github.com/KitCosovan/mdStore.github.io" target='blank'>GitHub &ge;</a></div>
                </div>
            </div>

            <div className="project">
                <div className="project_img">
                    <img src={marvelBase} alt="project template" />
                </div>
                <div className="project_stack">
                    <div className="project_stack__tag">React</div>
                    <div className="project_stack__tag">HTML+CSS</div>
                </div>
                <div className="project_title">Marvel Base</div>
                <div className="project_desc">Work with API.</div>
                <div className="project_btns">
                    <div className="project_github"><a href="https://github.com/KitCosovan/marvelBase.github.io/tree/main" target='blank'>GitHub &ge;</a></div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;