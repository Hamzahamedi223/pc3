import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { businessImages } from "../../source"; 
import "./Gallery.css";
import { EffectCards, Pagination } from "swiper/modules";

export default function Gallery2() {
  return (
    <section id="Gallery1">
      <div className="overlay">
        <h1 className="title_gallery1">Business Renovations</h1>
        <div className="container">
          <div className="text">
            Renovating your business space is key to staying competitive and
            appealing to your clients. Whether you’re remodeling a storefront,
            office, or commercial facility, our business renovation services
            focus on functionality, aesthetics, and sustainability. We provide
            modern solutions that enhance your space, optimize workflow, and create
            an inviting atmosphere for your customers and employees alike. With
            our expertise and attention to detail, your business space will reflect
            your brand's identity and goals.
          </div>
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
              {businessImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Business ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
