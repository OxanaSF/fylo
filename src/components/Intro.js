import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

import illustrationIntroImg from "../images/illustration-intro.png";
import bgCurvyDesktopImg from "../images/bg-curvy-desktop.svg";

const Intro = () => {
  return (
    <IntroStyled>
      <Nav />
      <div className="intro-contents">
        <img src={illustrationIntroImg} alt="illustration intro img" />
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p className="intro-paragraph">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button>Get Started</button>
      </div>
    </IntroStyled>
  );
};

const IntroStyled = styled.section`
  background-color: hsl(217, 28%, 15%);
  background-image: url(${bgCurvyDesktopImg});
  background-repeat: no-repeat;
  background-position: bottom;
  padding-bottom: 15rem;

  .intro-contents {
    text-align: center;
  }

  h1 {
    line-height: 2.5rem;
    margin: 1.7rem 0;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    width: 50%;
    margin: auto;
  }

  p {
    line-height: 1.3rem;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    letter-spacing: 1px;
    width: 50%;
    margin: auto;
  }

  button {
    width: 13rem;
    padding: 0.8rem 3rem;
    border-radius: 3rem;
    border: none;
    background-image: linear-gradient(
      to right,
      hsl(176, 68%, 64%),
      hsl(198, 60%, 50%)
    );
    color: hsl(0, 0%, 100%);
    font-weight: 700;
    font-size: 11px;
  }

  @media (max-width: 375px) {
    padding-bottom: 9rem;
    img {
      width: 85%;
    }

    h1 {
      font-size: 1.4rem;
      line-height: 1.3;
      font-weight: 700;
      width: 90%;
      margin-top: 2rem;
    }

    p {
      line-height: 1.7;
      letter-spacing: 1px;
      font-size: 13px;
      width: 80%;
      margin: auto;
      margin-bottom: 1.5rem;
    }

    button {
      width: 16rem;
      padding: 1.2rem 3rem;
    }
   
  }
`;

export default Intro;
