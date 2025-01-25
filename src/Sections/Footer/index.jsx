import React from "react";
import Logo from "../../components/Logo";
import { footer } from "../../source";
import "./Footer.css";
const Footer = () => {
  return (
    <section id="footer">
      <div className="overlay">
        <div className="container">
          <div className="column">
            <Logo />
            <p>
            We provide top-notch services with a commitment to excellence. Get in touch for more details!
            </p>
          </div>
          {footer.map((foot, index) => (
            <div className="column" key={index}>
              <h4 className="title">{foot.title}</h4>
              {foot.routes.map((route, index) => (
                <a href={route.href} className="route" key={index}>
                  {route.name}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer__bottom">
            <p>Copyright &copy; ComfoRooms LTD
            </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
