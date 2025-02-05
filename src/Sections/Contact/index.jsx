import React, { useRef } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser"; // Import EmailJS
import "./Contact.css";
import { area } from "../../assets";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef();
  const form = useRef(); // Add reference to form

  // GSAP animation (unchanged)
  useGSAP(
    () => {
      const tl = gsap.timeline({
        trigger: container.current,
        start: "20%% bottom",
        end: "bottom top",
      });

      tl.fromTo(
        ".form__top .sub__heading",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      )
        .fromTo(
          ".form__top .muted",
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 }
        )
        .fromTo(
          ".form__middle .control",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 }
        )
        .fromTo(
          ".form__bottom .btn",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5 }
        )
        .fromTo(
          ".contact__info",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.3 }
        );
    },
    { scope: container }
  );

  // EmailJS function
  const sendEmail = (e) => {
    e.preventDefault();

    // Send the form data using emailjs
    emailjs
      .sendForm(
        "service_y9g2szk", // Replace with your EmailJS service ID
        "template_gleiffr", // Replace with your EmailJS template ID
        form.current, // Reference to the form
        "OKw0E-U3qNWJvJQVs" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("There was an error sending your message.");
        }
      );
  };

  return (
    <section id="contact" ref={container}>
      <div className="container">
        <form className="form" ref={form} onSubmit={sendEmail}> {/* Add onSubmit handler */}
          <div className="form__top">
            <h3 className="sub__heading">Get in Touch</h3>
            <p className="muted">
              Get in touch with us for any inquiries or support. We're here to help with
              any questions you may have or assistance you need. Feel free to reach out,
              and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="form__middle">
            <input type="text" placeholder="Full name" name="fullName" className="control" />
            <input type="email" placeholder="Email address" name="email" className="control" />
            <input type="tel" placeholder="Phone number" name="phoneNumber" className="control" />
            <textarea name="message" placeholder="Your message" className="control"></textarea>
          </div>
          <div className="form__bottom">
            <button type="submit" className="btn primary">Send Message</button> {/* Add type="submit" */}
          </div>
        </form>
        <div className="contact__infos">
          <div className="flex contact__info">
            <div className="flex__center icon__container">
              <MdOutlineAlternateEmail />
            </div>
            <div className="details">
              <h4>Email Us</h4>
              <p className="muted">Fast and reliable service</p>
              <p>
                <a href="mailto:comforooms@yahoo.com">comforooms@yahoo.com</a>
              </p>
            </div>
          </div>
          <div className="flex contact__info">
            <div className="flex__center icon__container">
              <FaLocationCrosshairs />
            </div>
            <div className="details">
              <h4>Our Address</h4>
              <p className="muted">Come visit us in our office</p>
              <p>London</p>
            </div>
          </div>
          <div className="flex contact__info">
            <div className="flex__center icon__container">
              <FiPhoneCall />
            </div>
            <div className="details">
              <h4>Phone Number</h4>
              <p className="muted">Give us a call</p>
              <p>07856139957</p>
            </div>
          </div>
          <div className="contact__area">
            <img className="area" src={area} alt="Area Map" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
