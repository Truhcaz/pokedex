import React from "react";
import styled from "styled-components";
import PokeImage from "./PokeImage";

const StyledCard = styled.div`
  cursor: pointer;
  width: 250px;
  @media (max-width: 1024px) {
    width: 30%;
  }

  img {
    width: 144px;
    height: 144px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 650px) {
      width: 100px;
      height: 100px;
    }
  }
  p {
    padding: 16px;
    line-height: 16px;
    font-size: 20px;
    @media (max-width: 650px) {
      font-size:14px;
      padding: 8px;
      line-height: 8px;
    }
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
    width: 100%;
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
    @media (max-width: 650px) {
      height: 170px;
    }
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
