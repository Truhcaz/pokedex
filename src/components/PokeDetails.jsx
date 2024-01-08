import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowBack } from "../assets/icons/arrow_back.svg";
import { ReactComponent as ChevronLeft } from "../assets/icons/chevron_left.svg";
import { ReactComponent as ChevronRight } from "../assets/icons/chevron_right.svg";
import PokeAbout from "./PokeAbout";
import PokeStats from "./PokeStats";
import PokeImage from "./PokeImage";
import { ReactComponent as Pokeball } from "../assets/icons/pokeball.svg";

const StyledDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(bg-color);
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin-right: auto;

  .detail-container {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      to top,
      var(--white) 70%,
      var(--${(props) => props.firstType}) 30%
    );
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
    gap: 0;
    border-radius: 10px;
    position: relative;
    width: 400px;
  }
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 24px;
    padding: 0 20px;
    color: var(--white);
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }

  .image img {
    position: relative;
    width: 144px;
    height: 144px;
    z-index: 100;
  }
  .image .pokeball {
    position: absolute;
    right: 100px;
    top: 5px;
    width: 200px;
    height: 200px;
    z-index: 3;
    @media (max-width: 500px) {
      width: 150px;
      left: 25%;
    }
  }

  .btn {
    border: none;
    background: transparent;
  }
  .btn > svg {
    fill: white;
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.2));
  }

  .types {
    display: flex;
    gap: 24px;
  }
  h2 {
    color: var(--${(props) => props.firstType});
    font-size: 16px;
  }
  .types > * {
    padding: 3px 10px;
    color: var(--white);
    border-radius: 16px;
    font-size: 12px;
    font-weight: 700;
  }

  #first-type {
    background-color: var(--${(props) => props.firstType});
  }
  #second-type {
    background-color: var(--${(props) => props.secondType});
  }

  @media (max-width: 800px) {
    left: 10%;
    right: 10%;
    top: 10%;
    bottom: 10%;
    * {
      font-size: 14px;
    }
  }
  @media (max-width: 400px) {
    * {
      font-size: 10px;
    }
  }
`;

const PokeDetails = ({ nextPoke, prevPoke, pokemon, setToggleState }) => {
  function back() {
    setToggleState(() => false);
  }

  const correctName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); //first letter uppercase
  const correctId = pokemon.id.toString().padStart(3, 0); //convert #1 to #001
  const firstType = pokemon.types[0].type.name;
  const secondType = pokemon.types[1] ? pokemon.types[1].type.name : "";
  const correctWeight = Math.round(pokemon.weight * 0.1 * 10) / 10;
  const correctHeight = Math.round(pokemon.height * 0.1 * 10) / 10;
  const firstAbility = pokemon.abilities[0].ability.name;
  const secondAbility = pokemon.abilities[1]
    ? pokemon.abilities[1].ability.name
    : "";
  const thirdAbility = pokemon.abilities[2]
    ? pokemon.abilities[2].ability.name
    : "";
  return (
    <StyledDetails firstType={firstType} secondType={secondType}>
      <div className="detail-container">
        <div className="title">
          <button className="btn back">
            <ArrowBack fill="white" onClick={back}></ArrowBack>
          </button>
          <h1>{correctName}</h1>
          <h3>#{correctId}</h3>
        </div>

        <div className="image">
          <button className="btn left">
            <ChevronLeft onClick={prevPoke}></ChevronLeft>
          </button>
          <Pokeball
            fill="#FFFFFF"
            fill-opacity="0.2"
            className="pokeball"
          ></Pokeball>
          <PokeImage id={pokemon.id}></PokeImage>
          <button className="btn right">
            <ChevronRight onClick={nextPoke}></ChevronRight>
          </button>
        </div>

        <div className="types">
          <span id="first-type">{firstType}</span>
          {secondType ? <span id="second-type">{secondType}</span> : ""}
        </div>

        {/* About */}
        <PokeAbout
          type={firstType}
          weight={correctWeight}
          height={correctHeight}
          firstAbility={firstAbility}
          secondAbility={secondAbility}
          thirdAbility={thirdAbility}
        />

        {/* Base Stats */}
        <PokeStats stats={pokemon.stats} type={firstType} />
      </div>
    </StyledDetails>
  );
};

export default PokeDetails;
