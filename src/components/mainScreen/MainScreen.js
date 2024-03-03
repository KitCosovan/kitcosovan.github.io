import './mainScreen.scss';

import photo from '../../img/first.png';
import dots from '../../img/dots.png';
import shape from '../../img/shape.png';

const MainScreen = () => {
    return (
        <div className="mainScreen">
            <div className="mainScreen_info">
                <div className="mainScreen_title">Hello! My name is Kit Cosovan and I'm a <span>web-developer</span> from Chisinau.</div>
                <div className="mainScreen_subtitle">I build high quality web applications. Take a look around here to familiarize yourself with my work.</div>
                <button className="mainScreen_btn">Contact me!</button>
            </div>
            <div className="mainScreen_images">
                <div className="mainScreen_photo">
                    <img src={photo} alt="It's me" />
                </div>
                <div className="mainScreen_shape">
                    <img src={shape} alt="shape" />
                </div>
                <div className="mainScreen_dots">
                    <img src={dots} alt="dots" />
                </div>
            </div>
            <div className="mainScreen_ocupation">Currently working on <span>Portfolio</span></div>
        </div>
    )
}

export default MainScreen;