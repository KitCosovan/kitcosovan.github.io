import './projectCard.scss';

import { useContext } from 'react';

import LangContext from '../context/context';

import temp from '../../img/temp.png';
import onlineStore from '../../img/onlineStore.png';
import marvelBase from '../../img/marvelBase.png';
import framework from '../../img/framework.jpg';

const ProjectCard = () => {

    const { contextValue } = useContext(LangContext);

    const changeTitle = (arg) => {
        return translations[contextValue][arg]["title"];
    }

    const changeText = (arg) => {
        return translations[contextValue][arg]["text"];
    }

    const translations = {
        "en": {
            portfolio: {
                title: "My portfolio",
                text: "You can view my portfolio here."
            },
            framework: {
                title: "Base Frame",
                text: "My personal framework for quick website building. Based on the MVC pattern. Easy to use, allows you to quickly solve lightweight tasks."
            },
            mdstore: {
                title: "Online shoes store",
                text: "One of the first projects on React."
            },
            marvel: {
                title: "Marvel Base",
                text: "Work with API."
            }
        },
        "ru": {
            portfolio: {
                title: "Мое портфолио",
                text: "Вы можете посмотреть мое портфолио здесь."
            },
            framework: {
                title: "Base Frame",
                text: "Мой личный фреймворк для быстрого создания сайтов. Основан на паттерне MVC. Прост в использовании, позволяет быстро решать легкие задачи."
            },
            mdstore: {
                title: "Интернет-магазин обуви",
                text: "Один из первых проектов на React."
            },
            marvel: {
                title: "Marvel Base",
                text: "Работа с API"
            }
        },
        "ro": {
            portfolio: {
                title: "Portofoliul meu",
                text: "Puteți vizualiza portofoliul meu aici."
            },
            framework: {
                title: "Base Frame",
                text: "Framework meu personal pentru construirea rapidă de site-uri web. Bazat pe modelul MVC. Ușor de utilizat, vă permite să rezolvați rapid sarcini ușoare."
            },
            mdstore: {
                title: "Magazin online de încălțăminte",
                text: "Unul dintre primele proiecte pe React."
            },
            marvel: {
                title: "Marvel Base",
                text: "Lucru cu API."
            }
        }
    }

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
                <div className="project_title">{changeTitle("portfolio")}</div>
                <div className="project_desc">{changeText("portfolio")}</div>
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
                <div className="project_title">{changeTitle("framework")}</div>
                <div className="project_desc">{changeText("framework")}</div>
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
                <div className="project_title">{changeTitle("mdstore")}</div>
                <div className="project_desc">{changeText("mdstore")}</div>
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
                <div className="project_title">{changeTitle("marvel")}</div>
                <div className="project_desc">{changeText("marvel")}</div>
                <div className="project_btns">
                    <div className="project_github"><a href="https://github.com/KitCosovan/marvelBase.github.io/tree/main" target='blank'>GitHub &ge;</a></div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;