/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../store/hooks';

import 'swiper/css';

import cl from './Carousel.module.css';

interface CarouselProps {
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ className }) => {
  const { sliderPics } = useAppSelector((store) => store.hotel);

  return (
    <div className={[cl.slider, className].join(' ')}>
      <Swiper className={cl.slider} spaceBetween={0} slidesPerView={3.3} loop>
        {sliderPics.map((url) => (
          <SwiperSlide key={url} className={cl.slide}>
            <img src={url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Carousel.defaultProps = {
  className: '',
};

export default Carousel;
