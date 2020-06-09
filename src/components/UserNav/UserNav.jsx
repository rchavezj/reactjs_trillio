import React from 'react';

import userImg from '../../img/user.jpg';
import spriteSVG from '../../img/sprite.svg';

const UserNav = () => {
    return (
        <nav className="user-nav">
            <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                    <use xlinkHref={`${spriteSVG}#icon-bookmark`} />
                </svg>
                <span className="user-nav__notification">?</span>
            </div>

            <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                    <use xlinkHref={`${spriteSVG}#icon-star`} />
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
    )
}

export default UserNav;