import React from "react";
import styled from "styled-components";

const SubscribeModal = () => {
  return (
    <SubscribeModalStyled>
      <h2>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any<br></br>
        questions, our support team would be happy to help you.
      </p>
      <div className="subscribe-section">
          <input type="text" placeholder="email@example.com"/>
          <button>Get Started For Free</button>
      </div>
    </SubscribeModalStyled>
  );
};

const SubscribeModalStyled = styled.section`
    background: hsl(217, 28%, 15%);
    width: 55%;
    margin: auto;
    padding: 2rem 5rem;
    transform: translateY(40%);
    border-radius: 0.4rem;
    text-align: center;
 
    h2 {
      padding-bottom: 1.2rem;
    }

    p {
      padding-bottom: 2rem;
    }

   .subscribe-section {
     display: flex;
     gap: 1rem;
   }

    input {
      width: 70%;
      padding: 0.5rem;
      border-radius: 1rem;
    }

    button {
      width: 25%;
      font-size: 10px;
      padding: 0.6rem;
      border-radius: 1rem;
      border: none;

      background-image: linear-gradient(
      to right,
      hsl(176, 68%, 64%),
      hsl(198, 60%, 50%)
    );
    color: hsl(0, 0%, 100%);
    font-weight: 700;
    }
  
`
export default SubscribeModal;
