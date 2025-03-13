import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Carousel = () => {
  const logos = [
    "https://img.logoipsum.com/331.svg",
    "https://img.logoipsum.com/257.svg",
    "https://img.logoipsum.com/289.svg",
    "https://img.logoipsum.com/242.svg",
    "https://img.logoipsum.com/330.svg",
    "https://img.logoipsum.com/321.svg",
    "https://img.logoipsum.com/216.svg",
    "https://img.logoipsum.com/288.svg",
    "https://img.logoipsum.com/237.svg",
    "https://img.logoipsum.com/265.svg",
  ];

  return (
    <div className="u-wrapper">
    <div className="c-carousel">
      <Swiper
        spaceBetween={0}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="c-carousel__wrapper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="c-carousel__item">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  );
};

export default Carousel;
