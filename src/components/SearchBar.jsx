import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchLoop } from "../assets/icons/search.svg";
import Filter from "./Filter";

const StyledSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  .search-container {
    position: relative;
    width: 400px;
    display: flex;
    border-radius: 40px;
    background-color: var(--white);
  }
  .search-bar {
    width: 100%;
    border: none;
    border-radius: inherit;
    background-color: inherit;
    padding: 16px 20px 16px 56px;
    font-size: 16px;
    font-family: inherit;
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.25) inset;
  }
  .search-bar:focus {
    outline: none;
  }
  .search-loop {
    position: absolute;
    left: 0;
    top: 0;
    padding: 12px 0 12px 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .search-icon{
    cursor: default;
  }
`;

const SearchBar = ({ filter, searchChange, onFilterChange }) => {
  return (
    <StyledSearchBar>
      <div className="search-container">
        <label htmlFor="search" className="search-loop">
          <SearchLoop fill="var(--primary-color)" className="search-icon" />
        </label>
        <input
          type="text"
          id="search"
          className="search-bar"
          name="search"
          placeholder="Search"
          onChange={searchChange}
        ></input>
      </div>
      <Filter filter={filter} filterChange={onFilterChange} />
    </StyledSearchBar>
  );
};

export default SearchBar;
