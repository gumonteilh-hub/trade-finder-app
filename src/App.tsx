import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { PokemonList } from './components/PokemonList'
import { NewOffer } from './components/NewOffer'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header></Header>

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
