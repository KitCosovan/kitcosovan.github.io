import './mainScreen.scss';

import { useContext } from 'react';

import { LangContext } from '../context/context';

import { useMediaQuery } from 'react-responsive';

import photo from '../../img/first.png';
import dots from '../../img/dots.png';
import shape from '../../img/shape.png';

const MainScreen = ({ isVisible }) => {

    const { contextValue } = useContext(LangContext);

    const is576Max = useMediaQuery({ query: '(max-width: 576px)' });

    const inline_style_for_xl = {
        marginTop: '90px'
    }

    const inline_style_for_s = {
        marginTop: '170px'
    }

    const translations = {
        "en": {
            title: {
                main: "Hello! My name is Kit Cosovan and I'm a ",
                location: " from Chisinau."
            },
            subtitle: "I build high quality web applications. Take a look around here to familiarize yourself with my work.",
            btn: "Contact me!",
            ocupation: "Currently working on ",
        },
        "ru": {
            title: {
                main: "Привет! Меня зовут Кит Косован и я ",
                location: " из Кишинева."
            },
            subtitle: "Я создаю высококачественные веб-приложения. Ознакомьтесь с моими работами здесь.",
            btn: "Обращайтесь!",
            ocupation: "В настоящее время работаю над ",
        },
        "ro": {
            title: {
                main: "Salut! Mă numesc Kit Cosovan și sunt  ",
                location: " din Chișinău."
            },
            subtitle: "Construiesc aplicații web de înaltă calitate. Aruncați o privire pe aici pentru a vă familiariza cu munca mea.",
            btn: "Contactați-mă!",
            ocupation: "În prezent lucrez la ",
        }
    }

    const changeLang = (arg, sub = false) => {
        if (sub) {
            return translations[contextValue][arg][sub];
        }

        return translations[contextValue][arg];
    }

    return (
        <div className="mainScreen">
            <div className="mainScreen_info" style={(isVisible && is576Max) ? inline_style_for_s : isVisible ? inline_style_for_xl : null}>
                <div className="mainScreen_title">{changeLang("title", "main")}<span>web-developer</span>{changeLang("title", "location")}</div>
                <div className="mainScreen_subtitle">{changeLang("subtitle")}</div>
                <a href="#contact"><button className="mainScreen_btn">{changeLang("btn")}</button></a>
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
            <div className="mainScreen_ocupation">{changeLang("ocupation")}<span>trello clone</span></div>
        </div>
    )
}

export default MainScreen;