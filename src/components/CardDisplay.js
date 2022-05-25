import React from "react";
import styled from "styled-components";
import Card from "./Card";

import { cards } from "../components/CardData";

const CardDisplay = () => {
  return (
    <CardDisplayStyled>
      {cards.map((card) => (
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


`;

export default CardDisplay;
