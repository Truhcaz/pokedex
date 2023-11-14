import React, { useState } from "react";
import styled from "styled-components";
import PokeCard from "./PokeCard";
import PokeDetails from "./PokeDetails";
import Popup from "./Popup";

const StyledPokeList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    margin-top: 20px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    height: auto;
  }
`;

const PokeList = ({ pokemons }) => {
  //hook
  const [popupState, setToggleState] = useState(false);

  const togglePopup = () => {
    setToggleState(() => !popupState);
  };


  const [data, setData] = useState();

  function nextPoke(){
    if(data.id === pokemons.length){
      setData(pokemons[0])
    } else{
      setData(pokemons[data.id])
    }
  }
  function prevPoke(){
    if(data.id === 1){
      setData(pokemons[pokemons.length-1])
    } else{
      setData(pokemons[data.id - 2])
    }
  }

  return (
    <StyledPokeList>
      <div className="container">
        {pokemons.length !== 0 ? (
          pokemons.map((pokemon, index) => {
            return (
              <PokeCard
                onClick={() => {
                setData(pokemon);
                togglePopup()
                }
                }
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
                key={index}
              ></PokeCard>
            );
          })
        ) : (
          <h1>No Pokemon Found</h1>
        )}
      </div>
      {popupState ? (
        <Popup>
          <PokeDetails
            pokemon = {data}
            setToggleState={setToggleState}
            className="poke-details"
            nextPoke={nextPoke}
            prevPoke={prevPoke}
          ></PokeDetails>
        </Popup>
      ) : null}
    </StyledPokeList>
  );
};

export default PokeList;
