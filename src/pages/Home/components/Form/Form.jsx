import React from 'react';
import s from "./Form.module.scss";

function Form(props) {
    return (
        <div className={s.form}>
            <h3 className={s.form__title}>Отправьте быструю заявку на обучение</h3>
            <form className={s.form__content}>
                <div className={s.inputs}>
                    <input className={s.inputs__item} type="text" placeholder="ФИО"/>
                    <input className={s.inputs__item} type="text" placeholder="Название организации"/>
                    <input className={s.inputs__item} type="text" placeholder="E-mail"/>
                    <input className={s.inputs__item} type="text" placeholder="Телефон"/>
                </div>

                <textarea placeholder="Текст обращения" className={s.form__textarea} name="" id="" cols="30"
                          rows="10"></textarea>

                <label className={s.form__checkbox}>
                    <input type="checkbox"/>
                    Согласие на передачу персональных данных
                </label>

                <button className={s.form__button}>Отправить</button>
            </form>
        </div>
    );
}

export default Form;