import './about.scss';

import photo from '../../img/second.png';

const About = () => {
    return (
        <div className="about">
            <div className="about_title"><span>#</span>about</div>
            <div className="about_divider"></div>
            <div className="about_text">
                <p>Hi! If you are looking for an expert in creating web applications or websites for your business, then I am ready to offer you my services. My name is <span>Kit</span> and I specialize in developing quality web products, from simple websites to complex web applications.</p>

                <p>I strive to create solutions that meet your unique needs and business goals. Whether it's a corporate website, an online store, or a back-end business process management application, I'm ready to turn your ideas into reality.</p>

                <p>In this day and age, web presence is becoming a key factor in the success of any business. I am ready to help you create a modern and functional web resource that will attract customers, improve your performance and help your business grow.</p>

                <p>Entrust your web presence to me and I will provide you with a high quality product that will meet the highest standards.</p>
            </div>
            <div className="about_img">
                    <img src={photo} alt="It's also me" />
            </div>
        </div>
    )
}

export default About;