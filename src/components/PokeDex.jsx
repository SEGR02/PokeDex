import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import axios from 'axios'
import PokeCard from './PokeCard';

const PokeDex = () => {

   const userName = useSelector(state => state.name)
   const [pokemon, setPokemon] = useState([])
   const navigate = useNavigate();
   const [input, setInput] = useState('')
   const [pokemonList, setPokemonList] = useState([])

   useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res => setPokemon(res.data.results))

    axios.get('https://pokeapi.co/api/v2/type/')
      .then(res => setPokemonList(res.data.results))
   }, [])

   const search = (value) => {
    value = value.toLowerCase(value)
    navigate(`/pokedex/${value}`)
   }

   const filter = (e) => {
    const url = e.target.value;
    axios.get(url).then(res => setPokemon(res.data.pokemon))
   }

   console.log(pokemonList);

  return (
    <>
      <center>
        <h1>welcome to Pokedex {userName}!</h1>
        <form action="" onSubmit={() => search(input)}>
          <input placeholder='Search by name' type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
          <select onChange={filter} name="" id="">
          {
            pokemonList.map(element => (
              <option key={element.name} value={element.url}>{element.name}</option>
              ))
            }
        </select>
        {/* Con .include se pueden hacer las sugerencias al escribir */}
        <button>Submit</button>
      </form>
      </center>
      <div className='pokemons-container'>
      {pokemon.map(pokemon => (
          <PokeCard key={pokemon.name ? pokemon.name : pokemon.pokemon.url} url={pokemon.url ? pokemon.url : pokemon.pokemon.url}/>
      ))}
      </div>
    </>
  );
};

export default PokeDex;