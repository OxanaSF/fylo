import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Nav = () => {
  return (
    <NavStyled>
      <Logo />
      <div className="nav-items">
        <div className="nav-item">Features</div>
        <div className="nav-item">Teams</div>
        <div className="nav-item">Sign In</div>
      </div>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4.5rem 4rem;

  .nav-items {
    display: flex;
    justify-content: space-evenly;
    gap: 2.8rem;
  }

  @media (max-width: 600px) {
    padding: 1.5rem 1rem;

    .nav-items {
      gap: 1.2rem;
      font-size: 10px;
    }

    .logo {
      width: 5.5rem;
    }
  }
`;

export default Nav;
