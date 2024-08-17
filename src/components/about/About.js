import './about.scss';

import { useContext } from 'react';

import LangContext from '../context/context';

import { useMediaQuery } from 'react-responsive';

import photo from '../../img/second.png';

const About = ({ isVisible }) => {

    const { contextValue } = useContext(LangContext);

    const is576Max = useMediaQuery({ query: '(max-width: 576px)' });

    const inline_style_for_xl = {
        marginTop: '90px'
    }

    const inline_style_for_s = {
        marginTop: '240px'
    }

    const changeLang = (arg, sub = false) => {
        if (sub) {
            return translations[contextValue][arg][sub];
        }

        return translations[contextValue][arg];
    }

    const translations = {
        "en": {
            title: "about",
            name: "Kit",
            p1: {
                first: "Hi! If you are looking for an expert in creating web applications or websites for your business, then I am ready to offer you my services. My name is ",
                second: " and I specialize in developing quality web products, from simple websites to complex web applications."
            },
            p2: "I strive to create solutions that meet your unique needs and business goals. Whether it's a corporate website, an online store, or a back-end business process management application, I'm ready to turn your ideas into reality.",
            p3: "In this day and age, web presence is becoming a key factor in the success of any business. I am ready to help you create a modern and functional web resource that will attract customers, improve your performance and help your business grow.",
            p4: "Entrust your web presence to me and I will provide you with a high quality product that will meet the highest standards."
        },
        "ru": {
            title: "обо-мне",
            name: "Кит",
            p1: {
                first: "Привет! Если вы ищете специалиста по созданию веб-приложений или сайтов для вашего бизнеса, то я готов предложить вам свои услуги. Меня зовут ",
                second: " и я специализируюсь на разработке качественных веб-продуктов, от простых сайтов до сложных веб-приложений."
            },
            p2: "Я стремлюсь создавать решения, которые отвечают вашим уникальным потребностям и бизнес-целям. Будь то корпоративный сайт, интернет-магазин или приложение для управления внутренними бизнес-процессами, я готов воплотить ваши идеи в реальность.",
            p3: "В наше время присутствие в Интернете становится ключевым фактором успеха любого бизнеса. Я готов помочь вам создать современный и функциональный веб-ресурс, который будет привлекать клиентов, повышать эффективность работы и способствовать росту вашего бизнеса.",
            p4: "Доверьте свое веб-присутствие мне, и я предоставлю вам высококачественный продукт, отвечающий самым высоким стандартам"
        },
        "ro": {
            title: "despre-mine",
            name: "Kit",
            p1: {
                first: "Salut! Dacă sunteți în căutarea unui expert în crearea de aplicații web sau site-uri web pentru afacerea dumneavoastră, atunci sunt gata să vă ofer serviciile mele. Mă numesc ",
                second: " și sunt specializat în dezvoltarea de produse web de calitate, de la site-uri web simple la aplicații web complexe."
            },
            p2: "Mă străduiesc să creez soluții care să vă satisfacă nevoile unice și obiectivele de afaceri. Fie că este vorba de un site web corporativ, un magazin online sau o aplicație back-end de gestionare a proceselor de afaceri, sunt gata să vă transform ideile în realitate.",
            p3: "În zilele noastre, prezența pe web devine un factor cheie în succesul oricărei afaceri. Sunt gata să vă ajut să creați o resursă web modernă și funcțională care să atragă clienți, să vă îmbunătățească performanța și să vă ajute afacerea să crească.",
            p4: "Încredințați-mi prezența dvs. web și vă voi oferi un produs de înaltă calitate care va îndeplini cele mai înalte standarde."
        }
    }

    return (
        <div className="about" style={(isVisible && is576Max) ? inline_style_for_s : isVisible ? inline_style_for_xl : null}>
            <div className="about_title"><span>#</span>{changeLang("title")}</div>
            <div className="about_divider"></div>
            <div className="about_text">
                <p>{changeLang("p1", "first")}<span>{changeLang("name")}</span>{changeLang("p1", "second")}</p>

                <p>{changeLang("p2")}</p>

                <p>{changeLang("p3")}</p>

                <p>{changeLang("p4")}</p>
            </div>
            <div className="about_img">
                    <img src={photo} alt="It's also me" />
            </div>
        </div>
    )
}

export default About;