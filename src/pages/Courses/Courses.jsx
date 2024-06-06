import React from 'react';
import s from './Courses.module.scss'
import {coursesData} from "./data.js";

function Courses (props) {
    const courses = coursesData

    return (
        <div className={s.courses}>
            <h1 className={s.courses__title}>Курсы</h1>
            <div className={s.courses__content}>
                {
                    courses.length && courses.map(course => (
                        <div key={course.title} className={s.course}>
                            <h3 className={s.course__title}>{course.title}</h3>
                            <div className={s.course__content}>
                                <div className={s.info}>
                                    <p className={s.info__description}>{course.description}</p>
                                    <div className={s.info__details}>
                                        <p className={s.info__duration}>Длительность курса {course.duration} часов</p>
                                        <p className={s.info__price}>Стоимость: {course.price}</p>
                                    </div>
                                </div>

                                <div className={s.banner}>
                                <img className={s.banner__image} src={course.banner} alt=""/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Courses;