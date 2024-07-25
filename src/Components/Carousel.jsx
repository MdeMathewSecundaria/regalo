// Carousel.js
import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images, mensajes, años }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % 6;
        setCurrentIndex(nextIndex);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-image">
                <img src={images[currentIndex]} />
            </div>
            <button onClick={handleNext} className="carousel-button">
                <span className='boton-text'>{mensajes[currentIndex]}</span>
                <span className='boton-text2'>{años[currentIndex]}</span>
            </button>
        </div>
    );
};

export default Carousel;