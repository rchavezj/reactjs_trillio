import React from 'react';

import svgLogo from '../../img/sprite.svg'

const Overview = () => {
    return (
        <>
            <h1 className="overview__heading">
                Hotel Las Palmas
            </h1>

            <div className="overview__stars">
                <svg className="overview__icon-star">
                    <use xlinkHref={`${svgLogo}#icon-full-star`}></use>
                </svg>
                <svg className="overview__icon-star">
                    <use xlinkHref={`${svgLogo}#icon-full-star`}></use>
                </svg >
                <svg className="overview__icon-star">
                    <use xlinkHref={`${svgLogo}#icon-full-star`}></use>
                </svg >
                <svg className="overview__icon-star">
                    <use xlinkHref={`${svgLogo}#icon-full-star`}></use>
                </svg >
                <svg className="overview__icon-star">
                    <use xlinkHref={`${svgLogo}#icon-full-star`}></use>
                </svg >
            </div >

            <div className="overview__location">
                <svg className="overview__icon-location">
                    <use xlinkHref={`${svgLogo}#icon-location2`}></use>
                </svg>

                <button className="btn-inline">
                    Albufeira, Portugal
                </button>
            </div >

            <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">429 votes</div>
            </div>
        </>
    )
}


export default Overview;