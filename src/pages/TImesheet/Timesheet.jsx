import React, {useEffect, useState} from 'react';
import s from './Timesheet.module.scss'

function Timesheet(props) {
    const [timesheet, setTimesheet] = useState([]);

    const url = 'http://localhost:3000/api/timesheet/getList'

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setTimesheet(data))
            .catch(err => console.error(err));
    }, []);

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
                            <div key={item.courseName} className={s.table__row}>
                                <div>{item.courseName}</div>
                                <div> {item.dates}</div>
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