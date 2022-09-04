/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import { useAppSelector } from '../../store/hooks';

import cl from './Carousel.module.css';

interface CarouselProps {
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ className }) => {
  const { sliderPics } = useAppSelector((store) => store.hotel);
  const settings = {
    slidesToShow: 3,
    swipeToSlide: true,
    touchThreshold: 100000,
    arrows: false,
  };
  return (
    <div className={[cl.slider, className].join(' ')}>
      <Slider {...settings} className={cl.slider}>
        {sliderPics.map((url) => (
          <div key={url} className={cl.slide}>
            <img src={url} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

Carousel.defaultProps = {
  className: '',
};

export default Carousel;
