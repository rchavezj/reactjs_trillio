import React from 'react';

import logo from '../../img/logo.png';
import userImg from '../../img/user.jpg';
import spriteSVG from '../../img/sprite.svg';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="trillo logo" className="logo" />

            <form action="#" className="search">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Search hotels"
                />
                <button className="search__button">
                    <svg className="search__icon">
                        xlink only work with webserver
                        <use xlinkHref={`${spriteSVG}#icon-search`} />
                    </svg>
                </button>
            </form>

            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref={`${spriteSVG}#icon-bookmark`} />
                    </svg>
                    <span className="user-nav__notification">?</span>
                </div>

                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref={`${spriteSVG}#icon-whatsapp`} />
                    </svg>
                    <span className="user-nav__notification">?</span>
                </div >

                <div className="user-nav__user">
                    <img
                        src={userImg}
                        alt="yolo"
                        className="user-nav__user-photo"
                    />
                    <span className="user-nav__user-name">Dinh Vu</span>
                </div>
            </nav >
        </header >
    )
}

export default Header;