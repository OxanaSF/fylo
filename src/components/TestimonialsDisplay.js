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
  background-position: left 5rem top 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 10rem 10rem 5rem 10rem;
  line-height: 1.5;
`;

export default TestimonialsDisplay;
