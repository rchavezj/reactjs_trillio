import React from 'react';

const Review = ({ reviewText, img, userNum, name, date, reviewRating }) => {
    return (
        <figure class="review">
            <blockquote class="review__text">
                {reviewText}
            </blockquote>

            <figcaption class="review__user">
            <img src={img} alt={`user ${userNum}`} class="review__photo" />
            <div class="review__user-box">
                <p class="review__user-name">{name}</p>
                <p class="review__user-date">{date}</p>
            </div>

                <div class="review__rating">{reviewRating}</div>
            </figcaption>
        </figure>
    );
}

export default Review;