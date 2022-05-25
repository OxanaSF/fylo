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
        <h1>
          All your files in one secure location, <br></br>
          accessible anywhere.
        </h1>
        <p className="intro-paragraph">
          Fylo stores all your most important files in one secure location.
          <br></br>
          Access them wherever you need, share and collaborate with<br></br>
          friends family, and co-workers.
        </p>
        <button>Get Started</button>
      </div>
    </IntroStyled>
  );
};

const IntroStyled = styled.section`
  /* height: 100vh; */
  background-color: hsl(217, 28%, 15%);
  background-image: url(${bgCurvyDesktopImg});
  background-repeat: no-repeat;
  background-position: bottom;
  padding-bottom: 15rem;

  .intro-contents {
    text-align: center;
  }

  h1 {
    line-height: 3rem;
    margin: 1.7rem 0;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  p {
    line-height: 1.3rem;
    margin-top: 2.5rem;
    margin-bottom: 1.7rem;
    letter-spacing: 1px;
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
`;

export default Intro;
