import React from 'react'
import styled from "styled-components";

const StyledFooter = styled.div`
    text-align: center;
    background-color: var(--primary-color);
    color: var(--white);
    font-family: inherit;
    margin-top: 20px;
    position: fixed;
    bottom: 0;
    width:100%;

    a{
      text-decoration: none;
      font-weight: bold;
      color:  #fff;
      cursor: pointer;
    }

`

const Footer = () => {
  return (
    <StyledFooter>
    <footer>
        <small>
            Design by :  &nbsp;
            <a target="_blank" rel="noreferrer" href="https://dribbble.com/shots/22223916-Pok-dex">
            Ricardo Schiniegoski
            </a>
        </small>
    </footer>
    </StyledFooter>
  )
}

export default Footer