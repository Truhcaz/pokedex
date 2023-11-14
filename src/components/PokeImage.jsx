import React from 'react'

const PokeImage = ({id, name}) => {
  const artworkURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  return (
    <div>
        <img src={artworkURL} alt={name}/>
    </div>
  )
}

export default PokeImage