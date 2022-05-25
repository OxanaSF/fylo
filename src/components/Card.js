import React from 'react'
import styled from 'styled-components'

const Card = (props) => {
  return (
    <CardStyled>
        <img src={props.iconSrc} alt="" />
        <h3>{props.header}</h3>
        <p>{props.paragraph}</p>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  img {
    padding-bottom: 1.8rem;
  }

  h3 {
    padding-bottom: 1rem;
  }

  p {
    line-height: 1.5;
  }
`

export default Card