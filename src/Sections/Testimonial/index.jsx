import React, { useRef, useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-scroll";
import { testimonials } from "../../source";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./Testimonial.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import emailjs from "@emailjs/browser"; // Use the same import as in your first code

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const container = useRef();
  const [showForm, setShowForm] = useState(false);
  const reviewForm = useRef(); // Reference for the review form

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

  // EmailJS function for review submission
  const sendReview = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y9g2szk", // Your EmailJS service ID
        "template_g73lfnu", // Your EmailJS review template ID
        reviewForm.current, // Reference to the form
        "OKw0E-U3qNWJvJQVs" // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Review Sent Successfully!", result.text);
          alert("Your review has been submitted for approval!");
          setShowForm(false); // Close the form after submission
        },
        (error) => {
          console.log("Failed to send review...", error.text);
          alert("Error submitting review, please try again.");
        }
      );
  };

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
          <button className="btn secondary Review" onClick={() => setShowForm(true)}>
            Leave a Review
          </button>
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
                  {/* <div className="profile">
                    <img src={item.image} alt="profile img" />
                  </div> */}
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

        {/* Review submission popup */}
        {showForm && (
          <div className="popup">
            <div className="popup-inner">
              <h3>Submit Your Review</h3>
              <form ref={reviewForm} onSubmit={sendReview}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="text" name="task" placeholder="Task Performed" required />
                <textarea name="review" placeholder="Your Review" required />
                <button type="submit">Submit for Approval</button>
                <button type="button" className="close-btn" onClick={() => setShowForm(false)}>
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
