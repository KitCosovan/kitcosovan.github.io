import './burgerMenu.scss';

import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { LangContext } from '../context/context';

const BurgerMenu = ({ handleSwitchVisible }) => {

    const [isActive, setIsActive] = useState(false);

    const { contextValue, setContextValue } = useContext(LangContext);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    const toggleLang = (lang) => {
        setContextValue(lang);
    }

    let btn_class = 'standart';
    let menu_class = 'hidden';

    if (isActive) {
        btn_class = 'active';
        menu_class = 'visible';
    }

    const translations = {
        "en": {
            name: "Kit Cosovan",
            homeLink: "home",
            worksLink: "works",
            aboutLink: "about-me",
            contactsLink: "contacts"
        },
        "ru": {
            name: "Кит Косован",
            homeLink: "главная",
            worksLink: "работы",
            aboutLink: "обо-мне",
            contactsLink: "контакты"
        },
        "ro": {
            name: "Kit Cosovan",
            homeLink: "principală",
            worksLink: "lucrări",
            aboutLink: "despre-mine",
            contactsLink: "contacte"
        }
    }

    const changeLang = (arg) => {
        return translations[contextValue][arg];
    }

    return (
        <div className="burgerMenu">
            <div className="burgerMenu_container" onClick={() => {handleClick(); handleSwitchVisible()}}>
                <div className={`burgerMenu_btn ${btn_class}`}></div>
            </div>
            <div className={`burgerMenu_list ${menu_class}`}>
                <ul className="burgerMenu_menu">
                        <li className='burgerMenu_menu__item' onClick={() => {handleClick(); handleSwitchVisible()}}><NavLink to={'/'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>{changeLang("homeLink")}</NavLink></li>
                        <li className='burgerMenu_menu__item' onClick={() => {handleClick(); handleSwitchVisible()}}><NavLink to={'/works'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>{changeLang("worksLink")}</NavLink></li>
                        <li className="burgerMenu_menu__item" onClick={() => {handleClick(); handleSwitchVisible()}}><NavLink to={'/about'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>{changeLang("aboutLink")}</NavLink></li>
                        <li className="burgerMenu_menu__item" onClick={() => {handleClick(); handleSwitchVisible()}}><NavLink to={'/contacts'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>{changeLang("contactsLink")}</NavLink></li>
                </ul>
                <ul className="burgerMenu_lang">
                    <li className={`burgerMenu_lang_item ${contextValue === "en" ? "active" : ""}`} onClick={() => toggleLang("en")}>EN</li>
                    <li className={`burgerMenu_lang_item ${contextValue === "ru" ? "active" : ""}`} onClick={() => toggleLang("ru")}>RU</li>
                    <li className={`burgerMenu_lang_item ${contextValue === "ro" ? "active" : ""}`} onClick={() => toggleLang("ro")}>RO</li>
                </ul>
            </div>
        </div>
    )
}

export default BurgerMenu;