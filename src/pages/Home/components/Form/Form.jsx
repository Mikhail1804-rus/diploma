import React from 'react';
import s from "./Form.module.scss";
import {useForm} from "react-hook-form";

function Form() {
    const { register, clearErrors, reset, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            fio: '',
            name: '',
            email: '',
            phone: '',
            text: ''
        }
    });

    function isEmail(emailAdress){
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        return !!emailAdress.match(regex);
    }

    function isPhone(emailAdress){
        let regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

        return !!emailAdress.match(regex);
    }

    const submit = (data) => {
        const url = 'http://localhost:3000/api/requests/add'

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                clearErrors()
                reset()
            })
            .catch(err => console.error(err));
    }

    return (
        <div className={s.form}>
            <h3 className={s.form__title}>Отправьте быструю заявку на обучение</h3>
            <form className={s.form__content} onSubmit={handleSubmit(submit)}>
                <div className={s.inputs}>
                    <input {...register('fio', {required: true})} className={s.inputs__item} type="text" placeholder="ФИО" aria-invalid={!!errors.fio}/>
                    <input {...register('name', {required: true})} className={s.inputs__item} type="text" placeholder="Название организации" aria-invalid={!!errors.name}/>
                    <input {...register('email', {required: true, validate: isEmail})} className={s.inputs__item} type="text" placeholder="E-mail" aria-invalid={!!errors.email}/>
                    <input {...register('phone', {required: true, validate: isPhone})} className={s.inputs__item} type="text" placeholder="Телефон" aria-invalid={!!errors.phone}/>
                </div>

                <textarea placeholder="Текст обращения" className={s.form__textarea} name="" id="" cols="30"
                          rows="10" {...register('text', {required: true})} aria-invalid={!!errors.text}></textarea>

                <button type="submit" className={s.form__button}>Отправить</button>
            </form>
        </div>
    );
}

export default Form;