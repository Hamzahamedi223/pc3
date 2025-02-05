import React, { useRef } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "./About.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aboutImages } from "../../source";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();

  // GSAP animations for the about section
  useGSAP(
    () => {
      const timeline = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "20% bottom",
          end: "bottom top",
        },
      });

      timeline
        .fromTo(
          ".section__header-about .title-about",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 }
        )
        .fromTo(
          ".section__header-about .description-about",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 }
        )
        .fromTo(
          ".about-item-about",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, stagger: 0.3, duration: 1 }
        );
    },
    { scope: container }
  );

  return (
    <section id="about" ref={container}>
      <div className="container-about">
        <div className="section__header-about">
          <h3 className="title-about">About us</h3>
          <p className="description-about">
          Hello, I am H. Turki, a civil engineer with extensive experience in building and groundwork. After working with various companies in France and the UK, I decided to establish my own company, COMFOROOMS LTD. I am supported by a dedicated and skilled team that shares my commitment to high-quality work. We take great pride in our jobs, always respecting our customers and striving to deliver results that are both clean and professional. As the director of COMFOROOMS LTD, I personally guarantee satisfaction with every project, and we offer a warranty for all the work we complete. I look forward to hearing from you soon.
          </p><br/><p classname="test1about"> Explore our curated collection of civil engineering projects. Browse
            through our recent works and see the impact of thoughtful design and
            innovation.
            </p>
         
        </div>
        <div className="about-about">
        <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true} // Prevent misalignment
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={{ clickable: true }}
  modules={[EffectCoverflow, Pagination, Autoplay]}
  className="about-carousel-about"
  breakpoints={{
    1200: { slidesPerView: 5, spaceBetween: 20 }, 
    930: { slidesPerView: 3, spaceBetween: 15 },  
    600: { slidesPerView: 2, spaceBetween: 10 },  
    400: { slidesPerView: 1.3, spaceBetween: 10 }, 
    300: { slidesPerView: 1, spaceBetween: 0 }, 
  }}
>


            {aboutImages.map((item, index) => (
              <SwiperSlide className="about-item-about" key={index}>
                <div className="image-container-about">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="about-image-about"
                  />
                </div>
                <div className="details-about">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
