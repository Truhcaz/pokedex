import React from 'react'
import styled from 'styled-components';

const StyledStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 20px;
  width: 100%;
.stat-name {
    display: flex;
    flex-direction: column;
    border-right: 2px solid #b6b6b6b6;
    padding-right: 20px;
    color: var(--${props => props.type});
    font-weight: 700;
  }
  .stat-number {
    display: flex;
    flex-direction: column;
  }
  .base-stat{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
  .stat-percent {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
    @media (max-width: 800px) {
      gap: 15px;
    }  }

  .progress-bar {
    background-color: #b6b6b6b6;
    border-radius: 15px;
    width: 100%;
  }
  .progress{
    background-color: var(--${props => props.type});
    border-radius: 15px;
    width: 50%;
    padding: 3px;
  }

  .hp{
    width: ${props => props.hp > 200 ? 100 : props.hp / 2}% ;
  }
  .atk{
    width: ${props => props.atk > 200 ? 100 : props.atk/ 2}% ;
  }
  .def{
    width: ${props => props.def > 200 ? 100 : props.def/ 2}% ;
  }
  .spatk{
    width: ${props => props.spatk > 200 ? 100 : props.spatk/ 2}% ;
  }
  .spdef{
    width: ${props => props.spdef > 200 ? 100 : props.spdef/ 2}% ;
  }
  .speed{
    width: ${props => props.speed > 200 ? 100 : props.speed/ 2}% ;
  }
  
`

const PokeStats = ({stats, type}) => {
  const hp = stats[0].base_stat;
  const atk = stats[1].base_stat;
  const def = stats[2].base_stat;
  const spatk = stats[3].base_stat;
  const spdef = stats[4].base_stat;
  const speed = stats[5].base_stat;

  return (
    <StyledStats type={type} hp={hp} atk={atk} def={def} spatk={spatk} spdef={spdef} speed={speed}>
        <h2> Base Stats</h2>
        <div className="base-stat">
          <div className="stat-name">
            <span>HP</span>
            <span>ATK</span>
            <span>DEF</span>
            <span>SPATK</span>
            <span>SPDEF</span>
            <span>SPD</span>
          </div>
          <div className="stat-number">
            <span>{hp}</span>
            <span>{atk}</span>
            <span>{def}</span>
            <span>{spatk}</span>
            <span>{spdef}</span>
            <span>{speed}</span>
            
          </div>
          <div className="stat-percent">
            <div className="progress-bar">
              <div className="progress hp"></div>
            </div>
            <div className="progress-bar">
              <div className="progress atk"></div>
            </div>
            <div className="progress-bar">
              <div className="progress def"></div>
            </div>
            <div className="progress-bar">
              <div className="progress spatk"></div>
            </div>
            <div className="progress-bar">
              <div className="progress spdef"></div>
            </div>
            <div className="progress-bar">
              <div className="progress speed"></div>
            </div>
          </div>
        </div>
    </StyledStats>
  )
}

export default PokeStats