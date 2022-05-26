import React from "react";
import styled from "styled-components";

import ServiceCardDisplay from "./ServiceCardDisplay";
import TestimonialsDisplay from "./TestimonialsDisplay";
import SubscribeModal from "./SubscribeModal";

import illustrationStayProductiveImg from "../images/illustration-stay-productive.png";

const Main = () => {
  return (
    <MainStyled>
      <ServiceCardDisplay />

      <div className="main-info">
        <img
          src={illustrationStayProductiveImg}
          alt="illustration stay productive"
        />
        <div className="description">
          <h1>Stay productive, wherever you are</h1>

          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>

          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
      </div>

      <TestimonialsDisplay />
      <SubscribeModal />
    </MainStyled>
  );
};

const MainStyled = styled.section`
  background-color: hsl(218, 28%, 13%);

  .main-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding-top: 8rem;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    font-weight: 400;
  }

  p {
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media (max-width: 375px) {
    .main-info {
      padding-top: 3rem;
      display: flex;
      flex-direction: column;

      img {
        width: 85%;
      }
    }

    .description {
      padding: 0 2rem;

      h1 {
        font-size: 1.1rem;
        font-weight: 700;
      }
    }
  }
`;

export default Main;
