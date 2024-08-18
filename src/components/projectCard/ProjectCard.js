import './projectCard.scss';

import { useContext } from 'react';

import { LangContext, useProjects } from '../context/context';

const ProjectCard = () => {

    const { contextValue } = useContext(LangContext);

    const changeTitle = (arg) => {
        return translations[contextValue][arg]["title"];
    }

    const changeText = (arg) => {
        return translations[contextValue][arg]["text"];
    }

    const projects = useProjects();

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
            {Object.entries(projects).map(([key, project]) => (
                <div className="project" key={key}>
                    <div className="project_img">
                        <img src={project.img} alt="project template" />
                    </div>
                    <div className="project_stack">
                        {project.tags.map((tag) => (
                            <div className="project_stack__tag">{tag}</div>
                        ))}
                    </div>
                    <div className="project_title">{changeTitle(key)}</div>
                    <div className="project_desc">{changeText(key)}</div>
                    <div className="project_btns">
                        {Object.entries(project.links).map(([key, link]) => (
                            key === "demo" ? (
                                <div className="project_demo"><a href={link} target='blank'>Demo &lt;~&gt;</a></div>
                            ) : (
                                <div className="project_github"><a href={link} target='blank'>GitHub &ge;</a></div>
                            )
                            ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProjectCard;