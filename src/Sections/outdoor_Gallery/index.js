import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { outdoorImages } from "../../source"; // Importing the outdoorImages array
import "./Gallery.css";

import { EffectCards, Pagination } from "swiper/modules";

export default function Gallery() {
  return (
    <section id="Gallery2">
      <div className="overlay">
        <h1 className="title_gallery2">Outdoor Spaces</h1>
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
              {outdoorImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Outdoor  ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="text">
            Outdoor space renovations can transform your home’s exterior into
            a beautiful and functional area. Whether it’s landscaping, decking,
            or creating a comfortable outdoor living space, our services help
            you maximize your outdoor areas. We specialize in designs that
            enhance both aesthetics and functionality, creating spaces for
            relaxation, entertainment, or gardening. Let us help you turn your
            outdoor vision into reality with expert craftsmanship and creative
            solutions.
          </div>
        </div>
      </div>
    </section>
  );
}
