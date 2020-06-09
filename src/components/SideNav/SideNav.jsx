import React from 'react';

import spriteSVG from '../../img/sprite.svg';

const SideNav = ({ additionalClasses, svgType, caption }) => {
    return (
        <li className={`side-nav__item ${additionalClasses}`}>
            <a href="/#" className="side-nav__link">
                <svg className="side-nav__icon">
                    <use xlinkHref={`${spriteSVG}#${svgType}`} />
                </svg>
                <span>{caption}</span>
            </a>
        </li>
    )
}

export default SideNav;