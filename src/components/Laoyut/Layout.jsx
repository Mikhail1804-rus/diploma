import React from 'react';
import {Link, Outlet} from "react-router-dom";
import styles from './Layout.module.scss';

function Layout(props) {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                    <div className={styles.info}>
                        <img className={styles.info__logo} src="/public/assets/logo.png" width="100" alt="Лого"/>
                        <h1 className={styles.info__title}>Учебный центр "Интеллект"</h1>
                    </div>

                    <nav className={styles.links}>
                        <Link className={styles.link} to={'/'}>Главная</Link>
                        <Link className={styles.link} to={'/courses'}>Курсы</Link>
                        <Link className={styles.link} to={'/teachers'}>Преподаватели</Link>
                        <Link className={styles.link} to={'/timesheet'}>Расписание</Link>
                        <Link className={styles.link} to={'/contacts'}>Контакты</Link>
                    </nav>
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;