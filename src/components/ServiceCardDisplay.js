import React from "react";
import styled from "styled-components";
import Card from "./ServiceCard";

import { serviceCards } from "./ServiceCardData";

const ServiceCardDisplay = () => {
  return (
    <CardDisplayStyled>
      {serviceCards.map((card) => (
        <Card
          iconSrc={card.iconSrc}
          header={card.header}
          paragraph={card.paragraph}
        />
      ))}
    </CardDisplayStyled>
  );
};

const CardDisplayStyled = styled.div`
  text-align: center;
  width: 50%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5rem;



  @media (max-width: 375px) {
    grid-template-columns: 1fr;
    width: 80%;
    }
`;

export default ServiceCardDisplay;
