import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PokeData = () => {

  const [pokemon, setPokemon] = useState({});
  const {id} = useParams();

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => setPokemon(res.data))
  },[id])

  return (
    <div>
      <h1>{pokemon.species?.name}</h1>
      <img src={pokemon.sprites?.front_default} alt="" />
    </div>
  );
};

export default PokeData;