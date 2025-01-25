import React, { useRef } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-scroll";
import { testimonials } from "../../source";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./Testimonial.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const container = useRef();

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
          ".section__header .title",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 }
        )
        .fromTo(
          ".section__header .description",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 }
        )
        .fromTo(
          ".section__header .btn",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5 }
        )
        .fromTo(
          ".testimonials .testimonial__card",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, stagger: 0.3, duration: 1 }
        );
    },
    { scope: container }
  );

  return (
    <section id="testimonials" ref={container}>
      <div className="container">
        <div className="section__header">
          <h3 className="title">Testimonials</h3>
          <p className="description">
          Hear from our satisfied clients who share their experiences and success stories with us.
          </p>
          <Link to="contact" className="btn primary">
            Let's talk now
            <FaArrowRight />
          </Link>
        </div>
        <div>
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            loop={true}
            autoplay={true}
            spaceBetween={15}
            speed={5000}
            modules={[Autoplay]}
            breakpoints={{
              700: { slidesPerView: 2 },
            }}
            className="testimonials"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide className="testimonial__card" key={index}>
                <div className="flex top">
                  <div className="profile">
                    <img src={item.image} alt="profile img" />
                  </div>
                  <div className="details">
                    <h4>{item.name}</h4>
                    <div className="flex star__container">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <p className="task">{item.task}</p>
                  <p className="muted">{item.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
