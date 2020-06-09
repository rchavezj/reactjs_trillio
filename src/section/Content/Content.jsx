import React from 'react';

import HotelView from '../HotelView/HotelView';
import Sidebar from '../../layout/Sidebar/Sidebar';

const Content = () => {
    return (
        <div className="content">
            <Sidebar />
            <HotelView />
        </div>
    )
}

export default Content;