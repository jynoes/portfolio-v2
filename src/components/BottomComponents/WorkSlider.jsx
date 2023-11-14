import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const WorkSlider = () => {
  return (
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div style={{height: "500px"}}>Slide 1</div></SwiperSlide>
        <SwiperSlide><div style={{height: "500px"}}>Slide 2</div></SwiperSlide>
        <SwiperSlide><div style={{height: "500px"}}>Slide 3</div></SwiperSlide>
        <SwiperSlide><div style={{height: "500px"}}>Slide 4</div></SwiperSlide>
        <SwiperSlide><div style={{height: "500px"}}>Slide 5</div></SwiperSlide>
        <SwiperSlide><div style={{height: "500px"}}>Slide 6</div></SwiperSlide>
        <SwiperSlide><div style={{height: "500px"}}>Slide 7</div></SwiperSlide>
        <SwiperSlide><div style={{height: "500px"}}>Slide 8</div></SwiperSlide>
        <SwiperSlide><div style={{height: "500px"}}>Slide 9</div></SwiperSlide>
      </Swiper>
  )
}

export default WorkSlider