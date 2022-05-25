import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";

import iconLocation from "../images/icon-location.svg";
import iconPhone from "../images/icon-phone.svg";
import iconEmail from "../images/icon-email.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="logo">
        <Logo />
      </div>

      <div className="footer-content">
        <div className="footer-description">
          <img
            className="icon-location"
            src={iconLocation}
            alt="icon location"
          />
          <p className="location-description">
            Lorem ipsum dolor sit amet, consectetur<br></br>
            adipiscing elit, sed do eiusmod tempor<br></br>
            incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="footer-contact">
          <div className="phone">
            <img src={iconPhone} alt="icon phone" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="gmail">
            <img src={iconEmail} alt="icon email" />
            <p>example@fylo.com</p>
          </div>
        </div>

        <ul className="links-about">
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>

        <ul className="links-contact">
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>

        <div className="social-icons">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </div>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  background: hsl(216, 53%, 9%);
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  .logo {
    margin-left: 4.5rem;
  }

  .footer-content {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  .footer-contact,
  .links-about,
  .links-contact {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    list-style-type: none;
  }

  .footer-description {
    display: flex;
    gap: 1.2rem;
  }

  .icon-location {
    align-self: flex-start;
  }

  .location-description {
    line-height: 1.5;
  }

  .phone,
  .gmail {
    display: flex;
    gap: 1.5rem;
  }

  .social-icons {
      display: flex;
      gap: 1rem;
  }

  .icon {
    width: 0.7rem;
    height: 0.7rem;
    border: 0.1rem solid hsl(0, 0%, 100%);
    padding: 0.3rem;
    border-radius: 50%;
  }
`;

export default Footer;
