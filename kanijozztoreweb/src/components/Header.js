import React from 'react'
import kanijoz from '../assets/img/kanijoz.png'
import style from '../module/header.module.css'


const Header = () => {
    return (
        <>
            <header className={style.header}>
                <div className={style.logo}>
                    <img src={kanijoz} alt="Logo"/>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="*" className={style.textoPrimario}>Inicio</a>
                        </li>
                        <li>
                            <a href="*" className={style.textoPrimario}>Tienda</a>
                        </li>
                        <li>
                            <a href="*" className={style.textoPrimario}>Index</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>);
}

export default Header;