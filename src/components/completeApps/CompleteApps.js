import './completeApps.scss';

import { useMediaQuery } from 'react-responsive';

import ProjectCard from '../projectCard/ProjectCard';

const CompleteApps = ({ isVisible }) => {

    const is576Max = useMediaQuery({ query: '(max-width: 576px)' });

    const inline_style_for_xl = {
        marginTop: '160px'
    }

    const inline_style_for_s = {
        marginTop: '240px'
    }

    return (
        <div className="caWrap" style={(isVisible && is576Max) ? inline_style_for_s : isVisible ? inline_style_for_xl : null}>
            <div className="caWrap_title"><span>#</span>complete-apps</div>
            <div className="caWrap_apps">
                <ProjectCard/>
            </div>
        </div>
    )
}

export default CompleteApps;