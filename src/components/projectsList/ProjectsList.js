import './projectsList.scss';

import { NavLink } from 'react-router-dom';

import ProjectCard from '../projectCard/ProjectCard';
import { useContext } from 'react';
import { LangContext } from '../context/context';

const ProjectsList = () => {

    const { contextValue } = useContext(LangContext);

    const translations = {
        "en": {
            projects: "projects",
            btn: "View all"
        },
        "ru": {
            projects: "проекты",
            btn: "     Все"
        },
        "ro": {
            projects: "proiecte",
            btn: "   Toate"
        }
    }

    return (
        <div className="wrap">
            <div className="wrap_title"><span>#</span>{translations[contextValue]["projects"]}</div>
            <div className="wrap_divider"></div>
            <div className="wrap_view"><NavLink to={'/works'}>{translations[contextValue]["btn"]} ~~&gt;</NavLink></div>
            <div className="projects">
                <ProjectCard/>
            </div>
        </div>
    )
}

export default ProjectsList;