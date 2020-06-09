import React from 'react';

const Gallery = ({ imgSrc, altCaption }) => {
    return (
        <figure class="gallery__item">
            <img
                src={imgSrc}
                alt={altCaption}
                class="gallery__photo"
            />
        </figure>
    )
}

export default Gallery;