import React from 'react';
import s from "./WhyUs.module.scss";
import {whyUsData} from "./data.js";

function WhyUs(props) {
    const whyUsItems = whyUsData

    return (
        <div className={s.whyUs}>
            <h3 className={s.whyUs__title}>
                Мы - Ваш первый шаг к новой профессии, Ваша безопасность и стабильность завтра!
            </h3>
            <div className={s.whyUs__options}>
                {
                    whyUsItems.length && whyUsItems.map((item) => (
                        <div className={s.option}>
                            <div className={s.option__image}>
                                <img src={"/src/assets/" + item.image} alt="img"/>
                            </div>
                            <div className={s.option__body}>
                                <div className={s.option__title}>{item.title}</div>
                                <div className={s.option__text}>{item.description}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={s.whyUs__mission}>
                Наша миссия: Мы помогаем людям повысить уровень знаний и
                навыков для обеспечения предприятий
                России высококвалифицированными и профессиональными кадрами.
            </div>
        </div>
    );
}

export default WhyUs;