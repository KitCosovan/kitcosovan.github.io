import './burgerMenu.scss';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BurgerMenu = ({ handleSwitchVisible }) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    let btn_class = 'standart';
    let menu_class = 'hidden';

    if (isActive) {
        btn_class = 'active';
        menu_class = 'visible';
    }

    return (
        <div className="burgerMenu">
            <div className="burgerMenu_container" onClick={() => {handleClick(); handleSwitchVisible()}}>
                <div className={`burgerMenu_btn ${btn_class}`}></div>
            </div>
            <div className={`burgerMenu_list ${menu_class}`}>
                <ul className="burgerMenu_menu">
                        <li className='burgerMenu_menu__item' onClick={() => {handleClick(); handleSwitchVisible()}}><NavLink to={'/'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>home</NavLink></li>
                        <li className='burgerMenu_menu__item' onClick={() => {handleClick(); handleSwitchVisible()}}><NavLink to={'/works'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>works</NavLink></li>
                        <li className="burgerMenu_menu__item" onClick={() => {handleClick(); handleSwitchVisible()}}><NavLink to={'/about'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>about-me</NavLink></li>
                        <li className="burgerMenu_menu__item" onClick={() => {handleClick(); handleSwitchVisible()}}><NavLink to={'/contacts'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>contacts</NavLink></li>
                </ul>
                <ul className="burgerMenu_lang">
                    <li className="burgerMenu_lang_item active">EN</li>
                    <li className="burgerMenu_lang_item">RU</li>
                    <li className="burgerMenu_lang_item">RO</li>
                </ul>
            </div>
        </div>
    )
}

export default BurgerMenu;