import './burgerMenu.scss';

import { useState } from 'react';

const BurgerMenu = ({ handleSwitchVisible, handleItemClick, activeItem }) => {

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
                        <li className={`burgerMenu_menu__item ${activeItem === 'home' ? 'active' : null}`} onClick={() => handleItemClick('home')}><span>#</span>home</li>
                        <li className={`burgerMenu_menu__item ${activeItem === 'works' ? 'active' : null}`} onClick={() => handleItemClick('works')}><span>#</span>works</li>
                        <li className="burgerMenu_menu__item"><span>#</span>about-me</li>
                        <li className="burgerMenu_menu__item"><span>#</span>contacts</li>
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