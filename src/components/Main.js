import React from "react";
import styled from "styled-components";

import CardDisplay from "./CardDisplay";
import TestimonialsDisplay from "./TestimonialsDisplay";

import illustrationStayProductiveImg from '../images/illustration-stay-productive.png'

const Main = () => {
  return (
    <MainStyled>
      
        <CardDisplay />
  
      <div className="main-info">
        <img src={illustrationStayProductiveImg} alt="illustration stay productive" />
        <div className="description">
          <h2>
            Stay productive,<br></br>
            wherever you are
          </h2>

          <p>
            Never let location be an issue when accessing your files. Fylo has
            you<br></br>
            covered for all of your file storage needs.
          </p>

          <p>
            Securely share files and folders with friends, family and colleagues
            for live<br></br>
            collaboration. No email attachments required.
          </p>
        </div>
      </div>

    <TestimonialsDisplay />

    </MainStyled>
  );
};

const MainStyled = styled.section`
  min-height: 110vh;
  background-color: hsl(218, 28%, 13%);

 

  .main-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding-top: 8rem;
  }


`;

export default Main;
