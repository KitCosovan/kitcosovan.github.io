import { createContext, useContext } from "react";

import temp from '../../img/temp.png';
import onlineStore from '../../img/onlineStore.png';
import marvelBase from '../../img/marvelBase.png';
import framework from '../../img/framework.jpg';

const LangContext = createContext(null);

const ProjectsContext = createContext();

const useProjects = () => useContext(ProjectsContext);

const ProjectsProvider = ({ children }) => {
    const projects = {
        portfolio: {
            img: temp,
            tags: ["React", "HTML+CSS"],
            links: {
                demo: "https://kitcosovan.github.io/",
                github: "https://github.com/KitCosovan/kitcosovan.github.io"
            }
        },
        framework: {
            img: framework,
            tags: ["php"],
            links: {
                github: "https://github.com/KitCosovan/frameworkPHP"
            }
        },
        mdstore: {
            img: onlineStore,
            tags: ["React", "HTML+CSS"],
            links: {
                demo: "https://kitcosovan.github.io/mdStore.github.io/",
                github: "https://github.com/KitCosovan/mdStore.github.io"
            }
        },
        marvel: {
            img: marvelBase,
            tags: ["React", "HTML+CSS"],
            links: {
                github: "https://github.com/KitCosovan/marvelBase.github.io/tree/main"
            }
        }
    }

    return (
        <ProjectsContext.Provider value={projects}>
            {children}
        </ProjectsContext.Provider>
    )
}

export { LangContext, useProjects, ProjectsProvider };