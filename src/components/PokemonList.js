// 3rd party imports
import React from 'react'

// My imports
import { usePokemonState } from '../contexts/PokemonContext'

const PokemonList = () => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
   } = usePokemonState()

  const removePokemonFromList = (removedPokemon) => {
    console.log(pokemons)
    
    return pokemons.filter((pokemon) => pokemon !== removedPokemon)
  }

  const capture = (pokemon) => {
    // add to captured list
    setCapturedPokemons([...capturedPokemons, pokemon])
    // remove from available list
    setPokemons(removePokemonFromList(pokemon))
    console.log(pokemons)
  }

  console.log(pokemons)

  return (
    <div>
      <h2>Pokemon List</h2>

      {pokemons && pokemons.map((pokemon) => (
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <div>
            <span>{pokemon.name}</span>
            <span> {pokemon.id}</span>
            <button onClick={()=>capture(pokemon)}>+</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PokemonList

// STYLING
