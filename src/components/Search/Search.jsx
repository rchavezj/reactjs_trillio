import React from 'react';


const Search = () => {
    return (
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
    )
}

export default Search;