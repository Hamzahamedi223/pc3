import React, { useRef } from "react";
import SocialHandles from "../../components/socialhandles";
import { Link } from "react-scroll";
import { FaArrowTurnDown } from "react-icons/fa6";
import { hero } from "../../assets";
import WhyChooseUs from "../../components/WhyChooseUs";
import "./Header.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
const Header = () => {
  const container = useRef();
  useGSAP(()=>{
  gsap.timeline({delay:0.5}).fromTo([".heading",".description"],
    {y:-30,opacity:0},
    {y:0,opacity:1,stagger:0.5}
  )
  .fromTo([".social__handles",".btn"],
    {x:-50,opacity:0},
    {x:0,opacity:1,stagger:0.5}
  ).fromTo(".image__contain",{x:50,opacity:0},{x:0,opacity:1})
  .fromTo([".why_choose_us",".why__item"],
    {y:100,opacity:0},
    {y:0,opacity:1,stagger:0.5}
  )
}
,{scope:container})
  return (
    
<section id="header" className="blur__effect" ref={container}>
      <div className="overlay">
        <div className="container">
          <div className="grid">
            <div className="content">
             <h1 className="heading"> We make your dreams reality</h1>
             <p  className="description">We deliver complete construction solutions, ensuring quality and reliability from start to finish.</p>
            <SocialHandles/>
            <Link to="contact" smooth={true} className="btn primary">
            Get a Quote<FaArrowTurnDown/></Link>
            </div>
            <div className="image__contain">
                <img src={hero} alt="hero"/>
            </div>
          </div>
          <WhyChooseUs/>
        </div>
      </div>
    </section>
  );
};
export default Header;