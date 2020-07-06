import React from 'react';

const Cta = () => {
    return (
        <>
            <h2 class="cta__book-now">
                Good news! We have 4 free rooms for your selected dates!
            </h2>
            <button class="btn">
                <span class="btn__visible">Book now</span>
                <span class="btn__invisible">Only 4 rooms left</span>
            </button>
        </>
    )
}

export default Cta;