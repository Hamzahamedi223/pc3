import React, { useState, useRef } from "react";
import "./Services.css";
import { Link } from "react-scroll";
import { sketch } from "../../assets";
import { services } from "../../source";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const [activeService, setActiveService] = useState(null); // To store the clicked service
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Store index for image swiping
  const container = useRef();

  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "20%% bottom",
            end: "bottom top",
          },
        })
        .fromTo(
          [".section__header .sub__heading", ".section__header .description"],
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.5 }
        )
        .fromTo(
          ".section__header .btn",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1 }
        )
        .fromTo(".image__contain", { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(".service", { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5 });
    },
    { scope: container }
  );

  const handleCheckWork = (service) => {
    setActiveService(service); // Set the active service to show its images
    setCurrentImageIndex(0); // Reset to the first image
  };

  const handleCloseModal = () => {
    setActiveService(null); // Close the modal
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % activeService.images.length); // Go to the next image
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + activeService.images.length) % activeService.images.length
    ); // Go to the previous image
  };

  return (
    <section id="services" ref={container}>
      <div className="overlay">
        <div className="container">
          <div className="grid">
            <div className="section__header">
              <h2 className="sub__heading">Building Dream, Crafting Reality</h2>
              <p className="description">
                We turn visions into reality. Hear from our clients about how we bring their dreams to life with precision, passion, and excellence.
              </p>
              <Link to="contact" smooth={true} className="btn primary">
                Contact Us
              </Link>
            </div>
            <div className="image__contain">
              <img src={sketch} alt="image_service" />
            </div>
          </div>
          <div className="grid services">
            {services.map((service, index) => (
              <div className="service" key={index}>
                <div className="flex top">
                  <div className="flex__center icon__container">
                    {service.icon}
                  </div>
                  <h4 className="title">{service.title}</h4>
                </div>
                <div className="middle">
                  <p className="description">{service.description}</p>
                </div>
                <div className="flex bottom">
                  <Link to="contact" smooth={true} className="btn">
                    Reach out
                  </Link>
                  <button
                    className="btn view"
                    onClick={() => handleCheckWork(service)} // Open images for this service
                  >
                    Check our work
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for displaying service images */}
      {activeService && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              X
            </button>
            <h3>{activeService.title}</h3>
            <div className="image-gallery">
              <button className="nav-btn prev" onClick={handlePrevImage}>❮</button>
              <img
                src={activeService.images[currentImageIndex]}
                alt={`${activeService.title} ${currentImageIndex}`}
                className="large-image"
              />
              <button className="nav-btn next" onClick={handleNextImage}>❯</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Service;
