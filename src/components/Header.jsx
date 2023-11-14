import React from "react";
import styled from "styled-components";
import { ReactComponent as Pokeball } from "../assets/icons/pokeball.svg";
import SearchBar from "./SearchBar";

const StyledHeader = styled.div`

  background-color: var(--primary-color);
  color: white;
  padding: 20px 0 40px 0;
  display: flex;
  flex-direction : column;
  gap: 20px;
  align-items: center;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

`;

const Header = ({filter, onSearchChange, onFilterChange}) => {
    return (
      <StyledHeader>
        <div className="title">
          <Pokeball fill="white" stroke="white" />
          <h1> Pokedex </h1>
        </div>
        <SearchBar filter={filter} searchChange={onSearchChange} onFilterChange={onFilterChange}></SearchBar>
      </StyledHeader>
    );
  }

export default Header;
