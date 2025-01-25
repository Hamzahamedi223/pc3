import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { bathroom1, kitchen1 } from "../../assets";
import "./Gallery.css"

import { EffectCards, Pagination } from "swiper/modules";

export default function Gallery2() {
  return (
    <section id="Gallery"  >
      <div className="overlay">
      <h1 className="title_gallery">bathroom</h1>
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
        Renovating your bathroom is a great way to enhance its functionality and style, whether you’re updating an old design or optimizing the space for better use. Our bathroom renovation services are tailored to meet your needs, improving both comfort and value. Whether it’s upgrading fixtures, expanding storage, or creating a modern, spa-like atmosphere, a well-executed renovation can transform your bathroom into a more enjoyable and efficient space. Working with an experienced contractor ensures the project stays on track, within budget, and delivers lasting results.
        </div>
      </div>
      </div>
    </section>
  );
}
