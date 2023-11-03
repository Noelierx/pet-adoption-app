import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const getSlides = () => (
    <div
      className={`your-card-class ${currentSlide === images.length ? 'active' : ''}`}
      role="group"
      aria-roledescription="slide"
    >
      <img
        className="your-image-class"
        src={images[currentSlide]}
        alt={`Slide #${currentSlide + 1}`}
        aria-label={`Slide #${currentSlide + 1}`}
      />
      <div className="your-content-class">
        <h2 className="your-heading-class" tabIndex="0">
          {`This is slide #${currentSlide + 1}`}
        </h2>
      </div>
    </div>
  );

  return (
    <div className="py3">
      <div className="carousel-container">{getSlides()}</div>
      <div className="controls">
        <button
          className="prev-button"
          onClick={handlePrev}
          disabled={currentSlide === 0}
          aria-label="Previous Slide"
        >
          Previous
        </button>
        <button
          className="next-button"
          onClick={handleNext}
          disabled={currentSlide === images.length - 1}
          aria-label="Next Slide"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
