import React from 'react';

import Legal from '../../components/Legal/Legal';
import SideNav from '../../components/SideNav/SideNav';

const Sidebar = () => {
    return (
        <nav className="sidebar">


            <ul className="side-nav">

                <SideNav
                    additionalClasses={`side-nav__item--active`}
                    svgType={`icon-home`}
                    caption={`Hotel`}
                />


                <SideNav
                    svgType={`icon-airplane`}
                    caption={`Flight`}
                />


                <SideNav
                    svgType={`icon-key`}
                    caption={`Car rental`}
                />


                <SideNav
                    svgType={`icon-map2`}
                    caption={`Tours`}
                />

            </ul >

            <Legal />
            
        </nav >
    )
}

export default Sidebar;