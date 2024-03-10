import './headerMenu.scss';
import logo from '../../img/logo_32.png';
import BurgerMenu from '../burgerMenu/BurgerMenu';

import { useMediaQuery } from 'react-responsive';

const HeaderMenu = ( {handleSwitchVisible} ) => {

    const is992Max = useMediaQuery({ query: '(max-width: 992px)' });

    return (
        <div className="menu">
            <div className="menu_logo">
                <img src={logo} alt="logo" className="menu_logo_img" />
                <span>Kit Cosovan</span>
            </div>
            { (is992Max) ? (
                    <BurgerMenu handleSwitchVisible={handleSwitchVisible}/>
            ) : (
                <div className="menu_info">
                    <ul className="menu_list">
                        <li className="menu_item active"><span>#</span>home</li>
                        <li className="menu_item"><span>#</span>works</li>
                        <li className="menu_item"><span>#</span>about-me</li>
                        <li className="menu_item"><span>#</span>contacts</li>
                    </ul>
                    <ul className="menu_lang">
                        <li className="menu_lang_item">EN</li>
                        <li className="menu_lang_item hide">RU</li>
                        <li className="menu_lang_item hide">RO</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default HeaderMenu;