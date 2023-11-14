import React from "react";
import styled from "styled-components";
import { ReactComponent as Weight } from "../assets/icons/weight.svg";
import { ReactComponent as Height } from "../assets/icons/straighten.svg";

const StyledAbout = styled.div`


  .about-container {
    display:flex;
    flex-direction:column;
    align-items: center;
  }
  .about-tab {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 18px;
    > * {  /* le tableau avec poid, taille et talents*/
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
    }
    > *:not(:last-of-type) { /* le tableau avec poid et taille mais pas talents*/
      border-right: 2px solid #b6b6b6b6;
      padding-right: 20px;
    }
  }

  .weight{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      padding:8px 0;
  }
  .height{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      padding:8px 0;
  }
  .abilities{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding:8px 0;
  }

  .description{
    padding: 8px 50px;
  }
`;

const PokeAbout = ({type, weight, height, firstAbility, secondAbility, thirdAbility}) => {
  return (
    <StyledAbout type={type}>
      <div className="about-container">
        <h2>About</h2>
        <div className="about-tab">
          <div className="weight-container">
            <div className="weight">
              <Weight/> 
              <span className='value'>{weight}kg</span>
            </div>

            <small>Weight</small>
          </div>
          <div className="height-container">
            <div className="height">
              <Height/> 
              <span className='value'>{height}m</span>
            </div>
            <small>Height</small>
          </div>
          <div className="abilities-container">
            <div className="abilities">
            <span id="ability">{firstAbility}</span>
            <span id="ability">{secondAbility}</span>
            <span id="ability">{thirdAbility}</span>
            </div>
            <small>Abilities</small>
          </div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis
          eros vitae tellus condimentum maximus sit amet in eros.
        </div>
      </div>
    </StyledAbout>
  );
};

export default PokeAbout;
