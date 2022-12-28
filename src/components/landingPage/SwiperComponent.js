import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./swiper.css";
// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper";

import logo1 from "../../asserts/logos/ashesi.webp";
import logo2 from "../../asserts/logos/accra aca.webp";
import logo3 from "../../asserts/logos/gimpa.webp";
import logo4 from "../../asserts/logos/knust.webp";
import logo5 from "../../asserts/logos/koforidua.webp";
import logo6 from "../../asserts/logos/legon .webp";
import logo7 from "../../asserts/logos/ucc.webp";
import logo8 from "../../asserts/logos/uds.webp";
import logo9 from "../../asserts/logos/uniba.webp";
import logo10 from "../../asserts/logos/upsa.webp";
import logo11 from "../../asserts/logos/winconson.webp";

export function SwiperComponent() {
  return (
    <div className="swiperbody">
      <Swiper
        effect={"cube"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={logo10} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo11} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo8} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
