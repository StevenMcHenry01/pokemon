// 3rd party imports
import React from 'react'

// My imports
import PokemonList from '../components/PokemonList'
import CapturedPokemon from '../components/CapturedPokemon'

const Home = () => {
  return (
    <React.Fragment>
      <PokemonList />
      <CapturedPokemon />
    </React.Fragment>
  )
}

export default Home

// STYLING
