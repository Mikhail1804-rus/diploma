import React from 'react';
import s from './Contacts.module.scss'
import {contactsData} from "./data.js";

function Contacts(props) {
    const data = contactsData

    return (
        <section className={s.contacts}>
            <h1 className={s.contacts__title}>Контакты</h1>
            <div className={s.contacts__content}>
                <div className={s.contacts__info}>
                    {
                        data.length && data.map((item) => (
                            <div className={s.info} key={item.title}>
                                <h5 className={s.info__title}>{item.title}:</h5>
                                {
                                    item.content.length && item.content.map((content) => (
                                        <p key={content} className={s.info__content}>{content}</p>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>

                <div className={s.contacts__map}>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa43057bfe2cd0a059030be4976e22034e66f774aadc317858377720935d84ae0&amp;source=constructor"
                        width="600" height="500" frameBorder="0"></iframe>
                </div>
            </div>
        </section>
    );
}

export default Contacts;