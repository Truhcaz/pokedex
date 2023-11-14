import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import PokeList from './components/PokeList';
import axios from 'axios';
import Footer from './components/Footer';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [filter, setFilter] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const newPokemonsArray = [];
    for (let i = 1; i <= 493; i++) {
      axios.get(API_URL + i)
        .then(res => {
          newPokemonsArray.push(res.data)
          setPokemons(newPokemonsArray)
          setLoading(false);
        })
        .catch(err => console.log(err))
    }
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }
  const onFilterChange = (event) => {
    setFilter(event.currentTarget.id)
  }

  const filteredPokemons = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchfield.toLowerCase()) || pokemon.id.toString().includes(searchfield.toString());
  })

  function sortByName(a,b){
    return a.name.localeCompare(b.name)
  }

  return (
    <div className="App">
      <Header filter={filter} onSearchChange={onSearchChange} onFilterChange={onFilterChange}></Header>
      {
        (isLoading) ?
          <h1>Loading in App...</h1>
          :
          <PokeList pokemons={filter==='text'? filteredPokemons.sort(sortByName) : filteredPokemons}></PokeList>
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
