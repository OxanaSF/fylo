import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'

const Nav = () => {
  return (
    <NavStyled>
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div className="nav-items">
            <div className="nav-item">Features</div>
            <div className="nav-item">Teams</div>
            <div className="nav-item">Sign In</div>
        </div>

    </NavStyled>
  )
}

const NavStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 4.5rem 4rem;


.nav-items {
    display: flex;
    justify-content: space-evenly;
    gap: 2.8rem;
}
`

export default Nav