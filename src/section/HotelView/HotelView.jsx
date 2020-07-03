import React from 'react';

import Detail from '../../components/Detail/Detail';
import Gallery from '../../components/Gallery/Gallery';
import Overview from '../../components/Overview/Overview';

import hotel1 from '../../img/hotel-1.jpg';
import hotel2 from '../../img/hotel-2.jpg';
import hotel3 from '../../img/hotel-3.jpg';

const HotelView = () => {
    return (
        <div className="hotel-view">


            <div class="gallery">
                <Gallery
                    imgSrc={hotel1}
                    altCaption={`Photo of hotel 1`}
                />
                <Gallery
                    imgSrc={hotel2}
                    altCaption={`Photo of hotel 2`}
                />
                <Gallery
                    imgSrc={hotel3}
                    altCaption={`Photo of hotel 3`}
                />
            </div>



            <div className="overview">
                <Overview />
            </div>


            <div className="detail">
                <Detail />
            </div>


            <div class="cta">
                <h2 class="cta__book-now">
                    Good news! We have 4 free rooms for your selected dates!
                </h2>
                <button class="btn">
                    <span class="btn__visible">Book now</span>
                    <span class="btn__invisible">Only 4 rooms left</span>
                </button>
            </div>


        </div>

    )
}
export default HotelView;




