import MainScreen from '../../mainScreen/MainScreen';
import ProjectsList from '../../projectsList/ProjectsList';
import Skills from '../../skills/Skills';
import About from '../../about/About';
import ContactForm from '../../contactForm/ContactForm';

const HomePage = ({ isVisible }) => {
    return (
        <>
            <MainScreen isVisible={isVisible}/>
            <ProjectsList/>
            <Skills/>
            <About/>
            <ContactForm/>
        </>
    )
}

export default HomePage;