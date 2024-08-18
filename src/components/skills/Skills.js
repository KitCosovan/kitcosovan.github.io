import './skills.scss'

import { useContext } from 'react';

import { LangContext } from '../context/context';

import html from '../../img/skills/html5.svg';
import css from '../../img/skills/css3.svg';
import js from '../../img/skills/js.svg';
import jquery from '../../img/skills/jquery.svg';
import react from '../../img/skills/react.svg';
import php from '../../img/skills/php.svg';
import sql from '../../img/skills/sql.svg';
import bootstrap from '../../img/skills/bootstrap.svg';
import tsc from '../../img/skills/typescript-svgrepo-com.svg';

const Skills = () => {

    const { contextValue } = useContext(LangContext);

    const changeLang = (arg, sub = false) => {
        if (sub) {
            return translations[contextValue][arg][sub];
        }

        return translations[contextValue][arg];
    }

    const translations = {
        "en": {
            skills: "skills",
            html: "It's what creates the framework of your website or app, and version five will allow me to create a more SEO-optimized structure for your product",
            css: "This style language allows me to create absolutely any look and feel for your website or app. Everything is limited only by your imagination!",
            JS: "This programming language allows you to animate anything: sliders, windows, tooltips, tabs, receiving data from the server, and more",
            TS: "TypeScript is a programming language that extends JavaScript by adding static types.",
            react: "This library allows you to create web applications. We can create the most interactive product exactly for your purposes",
            jq: "The Jquery library will speed up development. We will not integrate it into the project without necessity, but we have the skill to work with it",
            php: "It allows you to interact with databases, manage user sessions, handle forms, process data, and more.",
            sql: "It allows you to retrieve, insert, update, and delete data, create and modify database structures, manage user permissions, and perform complex queries to analyze and process data.",
            bootstrap: "It provides pre-designed CSS styles, components, and JavaScript plugins, allowing you to quickly build layouts, navigation bars, buttons, forms, and more with minimal effort."
        },
        "ru": {
            skills: "навыки",
            html: "Это то, что создает каркас вашего сайта или приложения, и пятая версия позволит мне создать более SEO-оптимизированную структуру для вашего продукта",
            css: "Этот язык стилей позволяет мне создать абсолютно любой внешний вид и ощущение для вашего сайта или приложения. Все ограничивается только вашим воображением!",
            JS: "Этот язык программирования позволяет анимировать что угодно: слайдеры, окна, всплывающие подсказки, вкладки, получение данных с сервера и многое другое",
            TS: "TypeScript - это язык программирования, расширяющий JavaScript за счет добавления статических типов",
            react: "Эта библиотека позволяет создавать веб-приложения. Мы можем создать максимально интерактивный продукт именно для ваших целей",
            jq: "Библиотека Jquery ускорит разработку. Мы не будем интегрировать ее в проект без необходимости, но у нас есть навыки работы с ней",
            php: "Она позволяет взаимодействовать с базами данных, управлять сессиями пользователей, работать с формами, обрабатывать данные и многое другое",
            sql: "Он позволяет получать, вставлять, обновлять и удалять данные, создавать и изменять структуры баз данных, управлять правами пользователей и выполнять сложные запросы для анализа и обработки данных",
            bootstrap: "Предоставляет готовые стили CSS, компоненты и плагины JavaScript, позволяющие быстро создавать макеты, навигационные панели, кнопки, формы и многое другое с минимальными усилиями."
        },
        "ro": {
            skills: "abilități",
            html: "Este ceea ce creează cadrul site-ului sau aplicației dvs., iar versiunea cinci îmi va permite să creez o structură mai optimizată pentru SEO pentru produsul dvs.",
            css: "Acest limbaj de stil îmi permite să creez absolut orice aspect și senzație pentru site-ul sau aplicația dumneavoastră. Totul este limitat doar de imaginația ta!",
            JS: "Acest limbaj de programare vă permite să animați orice: glisoare, ferestre, tooltips, file, primirea de date de pe server și multe altele",
            TS: "TypeScript este un limbaj de programare care extinde JavaScript prin adăugarea de tipuri statice",
            react: "Această bibliotecă vă permite să creați aplicații web. Putem crea cel mai interactiv produs exact pentru scopurile dvs.",
            jq: "Biblioteca Jquery va accelera dezvoltarea. Nu o vom integra în proiect fără necesitate, dar avem abilitatea de a lucra cu ea",
            php: "Vă permite să interacționați cu bazele de date, să gestionați sesiunile utilizatorilor, să gestionați formularele, să procesați datele și multe altele.",
            sql: "Vă permite să preluați, să introduceți, să actualizați și să ștergeți date, să creați și să modificați structuri de baze de date, să gestionați permisiunile utilizatorilor și să efectuați interogări complexe pentru a analiza și procesa date",
            bootstrap: "Oferă stiluri CSS predefinite, componente și pluginuri JavaScript, permițându-vă să creați rapid layout-uri, bare de navigare, butoane, formulare și multe altele cu un efort minim."
        }
    }

    return (
        <div className="skills">
            <div className="skills_name"><span>#</span>{changeLang("skills")}</div>
            <div className="skills_divider"></div>
            <div className="skills_list">
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={html} alt="HTML" />
                    </div>
                    <div className="skills_item__title">HTML</div>
                    <div className="skills_item__desc">{changeLang("html")}</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={css} alt="CSS" />
                    </div>
                    <div className="skills_item__title">CSS</div>
                    <div className="skills_item__desc">{changeLang("css")}</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={js} alt="JavaScript" />
                    </div>
                    <div className="skills_item__title">JavaScript</div>
                    <div className="skills_item__desc">{changeLang("JS")}</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={tsc} alt="TypeScript" />
                    </div>
                    <div className="skills_item__title">TypeScript</div>
                    <div className="skills_item__desc">{changeLang("TS")}</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={react} alt="React" />
                    </div>
                    <div className="skills_item__title">React</div>
                    <div className="skills_item__desc">{changeLang("react")}</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={jquery} alt="jQuery" />
                    </div>
                    <div className="skills_item__title">jQuery</div>
                    <div className="skills_item__desc">{changeLang("jq")}</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={php} alt="Php" />
                    </div>
                    <div className="skills_item__title">PHP</div>
                    <div className="skills_item__desc">{changeLang("php")}</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={sql} alt="SQL" />
                    </div>
                    <div className="skills_item__title">SQL</div>
                    <div className="skills_item__desc">{changeLang("sql")}</div>
                </div>
                <div className="skills_item">
                    <div className="skills_item__icon">
                        <img src={bootstrap} alt="Bootstrap" />
                    </div>
                    <div className="skills_item__title">Bootstrap</div>
                    <div className="skills_item__desc">{changeLang("bootstrap")}</div>
                </div>
            </div>
        </div>
    )
}

export default Skills;