import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import PokeList from './components/PokeList';
import axios from 'axios';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [filter, setFilter] = useState('');
  const [isLoading, setLoading] = useState(true);

  async function fetchData() {
    const newPokemonsArray = [];
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    const results = response?.data?.results || []

    for (let i = 0; i < results.length; i++){
      const pokemon = await axios.get(results[i].url);
      newPokemonsArray.push(pokemon.data)
      setPokemons(newPokemonsArray)
    }
    setLoading(false);
}
  useEffect(()=> {
    fetchData()
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
          <Loading/>
          :
          <PokeList pokemons={filter==='text'? filteredPokemons.sort(sortByName) : filteredPokemons}></PokeList>
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
