import React from "react";
import styled from "styled-components";

const ServiceCard = (props) => {
  return (
    <CardStyled>
      <img src={props.iconSrc} alt="" />
      <h3>{props.header}</h3>
      <p>{props.paragraph}</p>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  img {
    padding-bottom: 1.8rem;
  }

  h3 {
    padding-bottom: 1rem;
  }

  p {
    line-height: 1.2;
    font-size: 12px;
  }


  @media (max-width: 780px) {
    h3 {
    font-size: 1.3rem;
  }

  p {
    line-height: 1.5;
    font-size: 15px;
  }
    }
`;

export default ServiceCard;
