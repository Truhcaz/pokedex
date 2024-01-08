import React, { useState } from "react";
import { ReactComponent as Sort } from "../assets/icons/sort.svg";
import { ReactComponent as TextFormat } from "../assets/icons/text_format.svg";
import { ReactComponent as Tag } from "../assets/icons/tag.svg";
import styled from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  background-color: ${props => props.active === 'true' ? '#fff' : ''};
  border-radius: 50px;
  padding: 3px 10px;

  .filter, .text, .number {
    border: none;
    border-radius: 50%;
    padding: 11px;
    background-color: var(--white);
    cursor: pointer;
  }

  .filter{
    box-shadow: ${props => props.active === 'true' ? '0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;' : '0px 1px 3px 1px rgba(0, 0, 0, 0.20)'};
  }
  .text{
    box-shadow: ${props => props.filter === 'text' ? '0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset' : '0px 1px 3px 1px rgba(0, 0, 0, 0.20)'};
  }
  .number{
    box-shadow: ${props => props.filter === 'text' ? '0px 1px 3px 1px rgba(0, 0, 0, 0.25)' : '0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset'};
  }

  .sort,
  .text-format,
  .tag {
    padding-top: 2px;
    width: 28px;
    height: 28px;
    @media (max-width: 400px) {
      width: 20px;
      height: 20px;
    }
  }

`;

const Filter = ({filter, filterChange}) => {

  const [filterBtnState, setFilterBtnState] = useState(false);

  const toggleFilters = () => {
    setFilterBtnState(() => !filterBtnState);
  };

  function showFilters() {
    return (
      <React.Fragment>
        <button className="text" id='text' onClick={filterChange}>
          <TextFormat
            className="text-format"
            fill="var(--primary-color)"
          ></TextFormat>
        </button>
        <button className="number" id='number' onClick={filterChange}>
          <Tag className="tag" fill="var(--primary-color)"></Tag>
        </button>
      </React.Fragment>
    );
  }

  return (
    <StyledFilter filter={filter} active={filterBtnState.toString()}>
      <button className="filter" onClick={toggleFilters}>
        <Sort className="sort" fill="var(--primary-color)"></Sort>
      </button>

      {filterBtnState ? 
        showFilters()
      : 
      ""}
    </StyledFilter>
  );
};

export default Filter;
