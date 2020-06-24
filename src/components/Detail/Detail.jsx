import React from 'react';

import friend1 from '../../img/user-3.jpg';
import friend2 from '../../img/user-4.jpg';
import friend3 from '../../img/user-5.jpg';
import friend4 from '../../img/user-6.jpg';

import user1 from '../../img/user-1.jpg';
import user2 from '../../img/user-2.jpg';

import List from '../List/List';
import Paragraph from '../Paragraph/Paragraph';

const Detail = () => {
    return (
        <>
            <div class="description">
                <Paragraph
                    paragraph={
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                    quia aliquid? Minus quis illum ad nesciunt beatae qui cumque?
                    Quae.`
                    }
                />
                <Paragraph
                    paragraph={
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, necessitatibus. Illo, dolore. Sapiente, distinctio
                    reprehenderit?`
                    }
                />

                <ul class="list">
                    <List caption={`Close to the beach`} />
                    <List caption={`Breakfast include`} />
                    <List caption={`Free airport shuttle`} />
                    <List caption={`Free wifi in all rooms`} />
                    <List caption={`A/C and headtin`} />
                    <List caption={`Pets allowed`} />
                    <List caption={`We speak all language`} />
                    <List caption={`Perfect for families`} />
                </ul>


                <div class="recommend">
                    <p class="recommend__count">
                        Lucy and 3 other frineds recommend this hotel.
                    </p>

                    <div class="recommend__friends">
                        <img
                            src={friend1}
                            alt="friend 1"
                            class="recommend__photo"
                        />
                        <img
                            src={friend2}
                            alt="friend 2"
                            class="recommend__photo"
                        />
                        <img
                            src={friend3}
                            alt="friend 3"
                            class="recommend__photo"
                        />
                        <img
                            src={friend4}
                            alt="friend 4"
                            class="recommend__photo"
                        />
                    </div>
                </div>


            </div>



            <div class="user-reviews">
                <figure class="review">
                    <blockquote class="review__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Maxime a ex iusto officiis tenetur!
                    </blockquote>

                    <figcaption class="review__user">
                        <img
                            src={user1}
                            alt="user 1"
                            class="review__photo"
                        />
                        <div class="review__user-box">
                            <p class="review__user-name">Nick Smith</p>
                            <p class="review__user-date">Feb 23rd, 2017</p>
                        </div>

                        <div class="review__rating">7.8</div>
                    </figcaption>
                </figure>

                <figure class="review">
                    <blockquote class="review__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Maxime a ex iusto officiis tenetur!
                    </blockquote>

                    <figcaption class="review__user">
                        <img
                            src={user2}
                            alt="user 2"
                            class="review__photo"
                        />
                        <div class="review__user-box">
                            <p class="review__user-name">Mary Thomas</p>
                            <p class="review__user-date">Sept 19th, 2017</p>
                        </div>

                        <div class="review__rating">8.2</div>
                    </figcaption>
                </figure>

                <button class="btn-inline">
                    Show all
                    <span>&rarr;</span>
                </button>
            </div>

        </>
    )
}

export default Detail;