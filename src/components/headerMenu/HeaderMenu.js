import './headerMenu.scss';
import logo from '../../img/logo_32.png';
import BurgerMenu from '../burgerMenu/BurgerMenu';

import { useState, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { LangContext } from '../context/context';

const HeaderMenu = ({ handleSwitchVisible }) => {

    const [activeClass, setActiveClass] = useState(false);

    const { contextValue, setContextValue } = useContext(LangContext);

    const toggleLang = (lang) => {
        setContextValue(lang);
    }

    const handleClick = () => {
        setActiveClass(!activeClass);
    }

    const classActive = 'active-bar';
    const allLangs = 'active-lang';
    const classHidden = 'hide';

    const is992Max = useMediaQuery({ query: '(max-width: 992px)' });

    const langs = ["en", "ru", "ro"];

    const filteredLangs = langs.filter(lang => lang !== contextValue);

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
        <div className="menu">
            <div className="menu_logo">
                <img src={logo} alt="logo" className="menu_logo_img" />
                <span>{changeLang("name")}</span>
            </div>
            { (is992Max) ? (
                    <BurgerMenu handleSwitchVisible={handleSwitchVisible} />
            ) : (
                <div className="menu_info">
                    <ul className="menu_list">
                        <li className='menu_item'><NavLink to={'/'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>{changeLang("homeLink")}</NavLink></li>
                        <li className='menu_item'><NavLink to={'/works'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>{changeLang("worksLink")}</NavLink></li>
                        <li className="menu_item"><NavLink to={'/about'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>{changeLang("aboutLink")}</NavLink></li>
                        <li className="menu_item"><NavLink to={'/contacts'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>{changeLang("contactsLink")}</NavLink></li>
                    </ul>
                    <ul className={`menu_lang ${activeClass ? allLangs : ''}`}>
                        <li className="menu_lang_item" onClick={handleClick}>{contextValue.toUpperCase()}</li>
                        {filteredLangs.map((lang, index) => (
                            <li key={index}
                                className={`menu_lang_item ${activeClass ? classActive : classHidden}`}
                                onClick={() => { handleClick(); toggleLang(lang); }}>
                                {lang.toUpperCase()}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default HeaderMenu;