import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const PokeCard = ({url}) => {

  const [pokemon, setPokemon] = useState({})

  useEffect(()=>{
    axios.get(url)
      .then(res => setPokemon(res.data))
  },[])

  console.log()

  return (
    <Link to={`/pokedex/${pokemon.id}`}>
      <div className='container-cards maincontainer'>
        <div className='container-data thecard'>
          <div className='thefront'>
            <h1>{pokemon.species?.name}</h1>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            <div className='types-container'>
              <div href="">{pokemon.types?.[0]?.type.name}</div>
              {pokemon.types?.[1]?.type.name &&(
                <div href="">{pokemon.types?.[1]?.type.name}</div>
              )}
            </div>
            </div>
          <div className='theback'>
            <p>Especificaciones</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokeCard;