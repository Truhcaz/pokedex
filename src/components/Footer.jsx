import React from 'react'
import styled from "styled-components";

const StyledFooter = styled.div`
    text-align: center;
    background-color: var(--primary-color);
    margin-top: 20px;
`

const Footer = () => {
  return (
    <StyledFooter>
    <footer>
        <small>
            Design inspiration by :  &nbsp;
            <a target="_blank" rel="noreferrer" href="https://dribbble.com/shots/22223916-Pok-dex">
            Ricardo Schiniegoski
            </a>
        </small>
    </footer>
    </StyledFooter>
  )
}

export default Footer