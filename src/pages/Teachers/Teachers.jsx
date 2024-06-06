import React from 'react';
import s from './Teachers.module.scss'
import {subjectsData} from "./data.js";


function Teachers(props) {
    const subjects = subjectsData

    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Преподаватели</h1>
            {
                subjects.length && subjects.map(subject => (
                    <div className={s.subject} key={subject.title}>
                        <h3 className={s.subject__title}>{subject.title}</h3>
                        <div className={s.subject__teachers}>
                            {
                                subject.teachers.map(teacher => (
                                    <div key={teacher.name} className={s.teacher}>
                                        <img className={s.teacher__image} src={teacher.img} alt=""/>
                                        <p className={s.teacher__name}>{teacher.name}</p>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                ))
            }
        </div>
    );
}

export default Teachers;