import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

/// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Hero from "../../pages/Frontend/Home/Hero";

export default () => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y, Autoplay,Parallax]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      parallax={true}
      effect={Parallax}
      
    >
      <SwiperSlide>
        <Hero />
      </SwiperSlide>
      <SwiperSlide>
        <Hero />
      </SwiperSlide>
    </Swiper>
  );
};
