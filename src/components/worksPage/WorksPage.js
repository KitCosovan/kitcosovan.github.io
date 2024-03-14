import CompleteApps from "../completeApps/CompleteApps";
import SmallProjects from "../smallProjects/SmallProjects";

const WorksPage = ({ isVisible }) => {
    return (
        <>
            <CompleteApps isVisible={isVisible}/>
            <SmallProjects />
        </>
    )
}

export default WorksPage;