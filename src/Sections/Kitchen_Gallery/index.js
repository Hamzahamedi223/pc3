import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { bathroom1, kitchen1 } from "../../assets";

import "./Gallery.css";

import { EffectCards, Pagination } from "swiper/modules";

export default function Gallery() {
  return (
    <section id="Gallery2">
      <div className="overlay">
        <h1 className="title_gallery2">Kitchen</h1>
        <div className="container">
          <div className="cubeimg">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[EffectCards, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={bathroom1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={kitchen1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bathroom1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={kitchen1} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="text">
            Renovating your kitchen can significantly boost both its
            functionality and aesthetic appeal. Whether you're modernizing
            outdated features or reconfiguring the layout for better flow, our
            kitchen renovation services are designed to transform your space.
            From upgrading appliances to expanding storage and creating a more
            open, inviting atmosphere, a well-planned renovation enhances your
            kitchen’s usability. By partnering with a skilled contractor, you
            can ensure the project stays within budget and delivers lasting,
            high-quality results.
          </div>
        </div>
      </div>
    </section>
  );
}
