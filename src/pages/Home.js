// 3rd party imports
import React from 'react'

// My imports
import PokemonList from '../components/PokemonList'
import CapturedPokemon from '../components/CapturedPokemon'
import { PokemonProvider } from '../contexts/PokemonContext'

const Home = () => {
  return (
    <PokemonProvider>
      <PokemonList />
      <CapturedPokemon />
    </PokemonProvider>
  )
}

export default Home

// STYLING
