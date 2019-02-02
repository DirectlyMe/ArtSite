import React from "react";
import classnames from "classnames";
import IconButton from "../IconButton";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import "./styles.scss";

const Footer = ({ width, position }) => {
  return (
    <div className="footer" style={{ width: width, position: position }}>
      <div className={classnames("footer-element", "footer-tag")}>@2019 Kelsey Williams</div>
      <div>
        <div className="footer-element">
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
