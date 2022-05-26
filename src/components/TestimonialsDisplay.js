import React from "react";
import styled from "styled-components";
import { testimonialCards } from "./TestimonialsCardData";
import TestimonialCard from "./TestimonialCard";

import bgQuotesImg from "../images/bg-quotes.png";

const TestimonialsDisplay = () => {
  return (
    <TestimonialsDisplayStyled>
      {testimonialCards.map((card) => (
        <TestimonialCard
          key={card.id}
          paragraph={card.paragraph}
          iconSrc={card.iconSrc}
          authorName={card.authorName}
          authorPosition={card.authorPosition}
        />
      ))}
    </TestimonialsDisplayStyled>
  );
};

const TestimonialsDisplayStyled = styled.div`
  background-image: url(${bgQuotesImg});
  background-repeat: no-repeat;
  background-position: left 10rem top 7.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 10rem 10rem 5rem 10rem;
  line-height: 1.5;


  @media (max-width: 780px) {
    background-position: left 3rem top 7.2rem;
    padding: 10rem 2.7rem 0rem 2.7rem;
    display: grid;
    grid-template-columns: 1fr;
  
    }
`;

export default TestimonialsDisplay;
