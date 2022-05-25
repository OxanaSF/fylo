import React from 'react'
import styled from "styled-components";
import { testimonialCards } from './TestimonialsCardData'
import TestimonialCard from './TestimonialCard'



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
  )
}


const TestimonialsDisplayStyled = styled.div`
/* width: 80%;
margin: auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 10rem 10rem 20rem 10rem;
  line-height: 1.5;
`

export default TestimonialsDisplay