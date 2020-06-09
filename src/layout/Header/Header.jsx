import React from 'react';

import logo from '../../img/logo.png';

import Search from '../../components/Search/Search';
import UserNav from '../../components/UserNav/UserNav';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="trillo logo" className="logo" />

            <Search />

            <UserNav />
        </header >
    )
}

export default Header;