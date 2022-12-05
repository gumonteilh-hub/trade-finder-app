import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './components/Home'
import { PokemonList } from './components/PokemonList'
import { NewOffer } from './components/NewOffer'

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/" > Home</Link>
        </li>
        <li>
          <Link to="/pokemons" > Pokemons</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemons' element={<PokemonList />} />
        <Route path='/newOffer/:id' element={<NewOffer />} />
        <Route path='/newOffer/' element={<NewOffer />} />
      </Routes>
    </>
  )
}

export default App
