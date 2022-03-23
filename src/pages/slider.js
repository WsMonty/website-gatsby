import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';
import slides from './slider-imgs';
import React, { useState } from 'react';

const Slider = () => {
  const [curImg, setImg] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setImg(curImg === 0 ? length - 1 : curImg - 1);
  };

  const nextSlide = () => {
    setImg(curImg === length - 1 ? 0 : curImg + 1);
  };

  const goToSlide = (e) => {
    setImg(+e.target.id);
  };

  return (
    <div className="slider">
      <BsArrowLeftSquare
        className="slider-btn slider-btn-left"
        onClick={prevSlide}
      />
      <BsArrowRightSquare
        className="slider-btn slider-btn-right"
        onClick={nextSlide}
      />

      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === curImg ? 'slide active' : 'slide'}
          >
            {index === curImg && (
              <img src={slide.url} alt="GG4tet" className="img_quartet" />
            )}
          </div>
        );
      })}
      <div className="dots">
        {slides.map((_, i) => {
          return (
            <button
              aria-label="btn-slider-dots"
              key={i}
              id={i}
              className={
                i === curImg ? 'dots_dot dots_dot--active' : 'dots_dot'
              }
              onClick={(e) => goToSlide(e)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
