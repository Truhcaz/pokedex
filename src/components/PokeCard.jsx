import React from "react";
import styled from "styled-components";
import PokeImage from "./PokeImage";
import axios from "axios";

const StyledCard = styled.div`
  img {
    width: 144px;
    height: 144px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -70px;
    margin-top: -80px;
  }
  p {
    padding: 16px;
    line-height: 16px;
    font-size: 20px;
  }
  #number {
    display: flex;
    padding: 4px 8px 0px 8px;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    color: var(--grayscale-medium, #666);
    text-align: right;
  }
`;
const Card = styled.div`
    display: flex;
    width: 250px;
    height: 250px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border: 1px solid black;
    border-radius: 10px;
    background: linear-gradient(
      to bottom,
      var(--white) 60%,
      var(--${props => props.type }) 40%
    );
  `


const PokeCard = ({ data, name, id, type, updateFields, ...rootDOMAttributes }) => {
  const correctName = name[0].toUpperCase() + name.slice(1); //first letter uppercase
  const correctId = id.toString().padStart(3,0); //convert #1 to #001

  return (
    <StyledCard {...rootDOMAttributes}>
      <Card type={type}>
        <span id="number"> #{correctId} </span>
        <PokeImage id={id} name={correctName}></PokeImage>
        <p> {correctName} </p>
      </Card>
      
    </StyledCard>
  );
};

export default PokeCard;
