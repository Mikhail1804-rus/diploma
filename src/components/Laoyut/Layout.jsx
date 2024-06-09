import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import styles from './Layout.module.scss';
import logo from '/public/assets/logo.png'

function Layout(props) {
    const linkClasses = ({isActive}) => {
        const classes = [styles.link]

        if (isActive) {
            classes.push(styles.active)
        }

        return classes.join(' ')
    }

    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                    <div className={styles.info}>
                        <NavLink className={[styles.link, styles.link_noHover]} to={'/'}>
                            <img className={styles.info__logo} src={logo} width="100" alt="Лого"/>
                        </NavLink>

                        <h1 className={styles.info__title}>Учебный центр "Интеллект"</h1>
                    </div>

                    <nav className={styles.links}>
                        <NavLink className={linkClasses} to={'/'}  >Главная</NavLink>
                        <NavLink className={linkClasses} to={'/courses'} >Курсы</NavLink>
                        <NavLink className={linkClasses} to={'/teachers'} >Преподаватели</NavLink>
                        <NavLink className={linkClasses} to={'/timesheet'} >Расписание</NavLink>
                        <NavLink className={linkClasses} to={'/contacts'} >Контакты</NavLink>
                    </nav>
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;