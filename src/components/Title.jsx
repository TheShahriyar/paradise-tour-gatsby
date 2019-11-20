import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle }) => {
  return (
    <StyledWrapper className="title-section">
      <h3>
        <span className="title">{title}</span> <span>{subtitle}</span>
      </h3>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;

  h3 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
  }
  @media (max-width: 767px) {
    font-size: 2rem;
  }
`

export default Title
