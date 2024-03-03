import './skills.scss'

import html from '../../img/skills/html5.svg';
import css from '../../img/skills/css3.svg';
import js from '../../img/skills/js.svg';
import jquery from '../../img/skills/jquery.svg';
import react from '../../img/skills/react.svg';
import node from '../../img/skills/node.js.svg';
import mongo from '../../img/skills/mongo.db.svg';

const Skills = () => {
    return (
        <div className="skills">
            <div className="skills_name"><span>#</span>skills</div>
            <div className="skills_divider"></div>
            <div className="skills_list">
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={html} alt="HTML" />
                    </div>
                    <div className="skills_item__title">HTML</div>
                    <div className="skills_item__desc">It's what creates the framework of your website or app, and version five will allow me to create a more SEO-optimized structure for your product</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={css} alt="CSS" />
                    </div>
                    <div className="skills_item__title">CSS</div>
                    <div className="skills_item__desc">This style language allows me to create absolutely any look and feel for your website or app. Everything is limited only by your imagination!</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={js} alt="JavaScript" />
                    </div>
                    <div className="skills_item__title">JavaScript</div>
                    <div className="skills_item__desc">This programming language allows you to animate anything: sliders, windows, tooltips, tabs, receiving data from the server, and more</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={jquery} alt="jQuery" />
                    </div>
                    <div className="skills_item__title">jQuery</div>
                    <div className="skills_item__desc">The Jquery library will speed up development. We will not integrate it into the project without necessity, but we have the skill to work with it</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={react} alt="React" />
                    </div>
                    <div className="skills_item__title">React</div>
                    <div className="skills_item__desc">This library allows you to create web applications. We can create the most interactive product exactly for your purposes</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={node} alt="Node.js" />
                    </div>
                    <div className="skills_item__title">Node.js</div>
                    <div className="skills_item__desc">This platform allows you to create a backend for your product - the "brains" that will perform actions that the user doesn't see</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={mongo} alt="mongo.db" />
                    </div>
                    <div className="skills_item__title">Mongo.db</div>
                    <div className="skills_item__desc">This is a non-relational database that will store your website or application data</div>
                </div>
            </div>
        </div>
    )
}

export default Skills;