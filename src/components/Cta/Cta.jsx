import React from 'react';

import Btn from '../Btn/Btn'

const Cta = () => {
    return (
        <>
            <h2 class="cta__book-now">
                Good news! We have 4 free rooms for your selected dates!
            </h2>
            <Btn caption={`Book Now!`} numOfRooms={4}/>
        </>
    )
}

export default Cta;