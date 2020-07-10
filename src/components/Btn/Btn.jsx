import React from 'react';

const Btn = ({ caption, numOfRooms }) => {
    return (
        <button class="btn">
            <span class="btn__visible">{`${caption}`}</span>
            <span class="btn__invisible">{`Only ${numOfRooms} rooms left`}</span>
        </button>
    )
}

export default Btn;