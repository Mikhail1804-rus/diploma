import React from 'react';
import s from './Timesheet.module.scss'
import {timesheetData} from "./data.js";

function Timesheet(props) {
    const timesheet = timesheetData

    return (
        <div className={s.timesheet}>
            <h1 className={s.timesheet__title}>Расписание</h1>
            <div className={s.timesheet__content}>
                <h3 className={s.date}>Июнь 2024 г.</h3>
                <div className={s.table}>
                    <div className={s.table__header}>
                        <div>Специальность</div>
                        <div>Числа месяца</div>
                        <div>Время</div>
                    </div>
                    {
                        timesheet.length && timesheet.map((item) => (
                            <div className={s.table__row}>
                                <div>{item.name}</div>
                                <div>
                                    {item.dates.length && item.dates.map((date, index) => {
                                        const mappedDate = date
                                        if (index !== item.dates.length - 1) {
                                            return date + ', '
                                        }

                                        return <span>{mappedDate}</span>
                                    })}
                                </div>
                                <div>{item.time}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Timesheet;