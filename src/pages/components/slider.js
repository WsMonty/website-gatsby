import React, { useState } from 'react';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';
import { StaticImage } from 'gatsby-plugin-image';

const Slider = () => {
  const [curImg, setImg] = useState(0);
  const slides = [1, 2, 3];
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

      <StaticImage
        className={
          0 === curImg ? 'slider_img slide-active' : 'slider_img slide'
        }
        src="../../imgs/GG4tet4_NEW.jpg"
        alt="Gilles Grethen Quartet 1"
        placeholder="blurred"
      />
      <StaticImage
        className={
          1 === curImg ? 'slider_img slide-active' : 'slider_img slide'
        }
        src="../../imgs/GG4tet-LAJM.jpeg"
        alt="Gilles Grethen Quartet 2"
        placeholder="blurred"
      />
      <StaticImage
        className={
          2 === curImg ? 'slider_img slide-active' : 'slider_img slide'
        }
        src="../../imgs/gilles-LAJM.jpeg"
        alt="Gilles Grethen Quartet 3"
        placeholder="blurred"
      />
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
