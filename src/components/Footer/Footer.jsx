import React from "react";
import IconButton from "../IconButton";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import "./styles.scss";

const Footer = ({ width, position }) => {
  return (
    <div className="Footer" style={{ width: width, position: position }}>
      <div className="FooterElement" style={{ paddingLeft: "2em" }}>@2018 Kelsey Williams</div>
      <div>
        <div className="FooterElement">
          <IconButton iconName={faInstagram} iconClass="InstagramIcon" />
          <a
            href="https://www.instagram.com/kelseyloves_art/?hl=en"
            style={{ textDecoration: "none", color: "black" }}
          >
            kelseyloves_art
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
