import React, { createContext, useState, useContext } from 'react'

const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Charmander' },
    { id: 3, name: 'Squirtle' },
  ])

  const [capturedPokemons, setCapturedPokemons] = useState([])

  const providerValue = {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
  }

  return (
    <PokemonContext.Provider value={providerValue}>
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemonState = () => {
  const context = useContext(PokemonContext)
  if (context === undefined) {
    throw new Error('usePokemonState must be used within a PokemonProvider')
  }
  return context
}
