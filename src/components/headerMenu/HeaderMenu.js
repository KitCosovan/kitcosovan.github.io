import './headerMenu.scss';
import logo from '../../img/logo_32.png';
import BurgerMenu from '../burgerMenu/BurgerMenu';

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

const HeaderMenu = ({ handleSwitchVisible }) => {

    const [activeClass, setActiveClass] = useState(false);
    const [thirdItem, setThirdItem] = useState(false);

    useEffect(() => {
        if (activeClass) {
            const timer = setTimeout(() => {
                setThirdItem(true);
            }, 300)

            return () => clearTimeout(timer);
        } else {
            setThirdItem(false);
        }
    }, [activeClass]);

    const handleClick = () => {
        setActiveClass(!activeClass);
    }

    const classActive = 'active-bar';
    const allLangs = 'active-lang';
    const classHidden = 'hide';

    const is992Max = useMediaQuery({ query: '(max-width: 992px)' });

    return (
        <div className="menu">
            <div className="menu_logo">
                <img src={logo} alt="logo" className="menu_logo_img" />
                <span>Kit Cosovan</span>
            </div>
            { (is992Max) ? (
                    <BurgerMenu handleSwitchVisible={handleSwitchVisible} />
            ) : (
                <div className="menu_info">
                    <ul className="menu_list">
                        <li className='menu_item'><NavLink to={'/'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>home</NavLink></li>
                        <li className='menu_item'><NavLink to={'/works'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>works</NavLink></li>
                        <li className="menu_item"><NavLink to={'/about'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>about-me</NavLink></li>
                        <li className="menu_item"><NavLink to={'/contacts'} className={({isActive}) => isActive ? 'active' : ''}><span>#</span>contacts</NavLink></li>
                    </ul>
                    <ul className={`menu_lang ${activeClass ? allLangs : ''}`}>
                        <li className="menu_lang_item" onClick={() => handleClick()}><a href="#">EN</a></li>
                        <li className={`menu_lang_item ${activeClass ? classActive : classHidden}`} onClick={() => handleClick()}><a href="#">RU</a></li>
                        <li className={`menu_lang_item ${thirdItem ? classActive : classHidden}`} onClick={() => handleClick()}><a href="#">RO</a></li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default HeaderMenu;