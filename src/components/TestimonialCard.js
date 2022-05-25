import React from "react";
import styled from "styled-components";

const TestimonialCard = (props) => {
  return (
    <TestimonialCardStyled>
      <p>{props.paragraph}</p>

      <div className="testimonial-profile">
        <img src={props.iconSrc} alt="" />
        <div className="profile-about">
          <h4>{props.authorName}</h4>
          <p>{props.authorPosition}</p>
        </div>
      </div>
    </TestimonialCardStyled>
  );
};

const TestimonialCardStyled = styled.div`
  background-color: hsl(219, 30%, 18%);
  border-radius: 0.3rem;
  padding: 2rem;

  .testimonial-profile {
    display: flex;
    padding-top: 1.5rem;
    align-items: center;

    p {
    font-size: 10px;
  }
  }

  img {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    margin-right: 0.3rem;
  }

  
`;

export default TestimonialCard;
