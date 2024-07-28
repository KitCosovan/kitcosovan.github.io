import './skills.scss'

import html from '../../img/skills/html5.svg';
import css from '../../img/skills/css3.svg';
import js from '../../img/skills/js.svg';
import jquery from '../../img/skills/jquery.svg';
import react from '../../img/skills/react.svg';
import php from '../../img/skills/php.svg';
import sql from '../../img/skills/sql.svg';
import bootstrap from '../../img/skills/bootstrap.svg';

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
                        <img src={php} alt="Php" />
                    </div>
                    <div className="skills_item__title">PHP</div>
                    <div className="skills_item__desc">It allows you to interact with databases, manage user sessions, handle forms, process data, and more.</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={sql} alt="SQL" />
                    </div>
                    <div className="skills_item__title">SQL</div>
                    <div className="skills_item__desc">It allows you to retrieve, insert, update, and delete data, create and modify database structures, manage user permissions, and perform complex queries to analyze and process data.</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={bootstrap} alt="Bootstrap" />
                    </div>
                    <div className="skills_item__title">Bootstrap</div>
                    <div className="skills_item__desc">It provides pre-designed CSS styles, components, and JavaScript plugins, allowing you to quickly build layouts, navigation bars, buttons, forms, and more with minimal effort.</div>
                </div>
            </div>
        </div>
    )
}

export default Skills;