import './projectCard.scss';

import temp from '../../img/temp.png';
import weatherApp from '../../img/weatherApp.png';
import onlineStore from '../../img/onlineStore.png';
import marvelBase from '../../img/marvelBase.png';

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
                    <img src={weatherApp} alt="project template" />
                </div>
                <div className="project_stack">
                    <div className="project_stack__tag">Pure JS</div>
                    <div className="project_stack__tag">HTML+CSS</div>
                </div>
                <div className="project_title">Weather App</div>
                <div className="project_desc">Unfortunately this project has not yet been finalized. I am currently at the stage of creating an adaptive layout. I also need to finalize the work with third-party API.</div>
                <div className="project_btns">
                    <div className="project_demo"><a href="https://kitcosovan.github.io/weatherApp.github.io/" target='blank'>Demo &lt;~&gt;</a></div>
                    <div className="project_github"><a href="https://github.com/KitCosovan/weatherApp.github.io" target='blank'>GitHub &ge;</a></div>
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
                <div className="project_desc">The project I'm working on at the moment.</div>
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
                    <div className="project_demo"><a href="https://kitcosovan.github.io/marvelBase.github.io/" target='blank'>Demo &lt;~&gt;</a></div>
                    <div className="project_github"><a href="https://github.com/KitCosovan/marvelBase.github.io/tree/main" target='blank'>GitHub &ge;</a></div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;