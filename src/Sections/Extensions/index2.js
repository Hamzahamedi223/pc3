import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { extensionImages } from "../../source"; 
import "./Gallery.css";
import { EffectCards, Pagination } from "swiper/modules";

export default function Gallery4() {
  return (
    <section id="Gallery1">
    <div className="overlay">
      <h1 className="title_gallery1">Extensions</h1> {/* Update title */}
      <div className="container">
        <div className="text">
          Extending your business or home space allows for more functionality and comfort. Our extension services are tailored to meet your unique needs, whether it’s adding a new room, expanding your office space, or enhancing your property’s value. We combine modern design principles with quality construction to deliver extensions that not only look great but also improve the flow and usability of your space. Let us help you maximize your property’s potential with stylish and functional extensions.
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
            {extensionImages.map((image, index) => (  
              <SwiperSlide key={index}>
                <img src={image} alt={`Extension ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </section>
  );
}
