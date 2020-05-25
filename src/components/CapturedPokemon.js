import React from 'react'
import {usePokemonState} from '../contexts/PokemonContext'

const CapturedPokemon = () => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
  } = usePokemonState()

  return (
    <div className='pokedex'>
      <h2>Captured Pokemons</h2>

      {capturedPokemons.map((pokemon) => (
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  )
}

export default CapturedPokemon
