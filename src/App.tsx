import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { PokemonList } from './components/PokemonList'
import { NewOffer } from './components/NewOffer'
import { Header } from './components/Header'
import { OfferList } from './components/OfferList'
import useWindowDimensions from './utils'
import workInProgress from "./assets/work-in-progress.png"

function App() {
  const { height, width } = useWindowDimensions();

  return (


    <>
      {width > 800
        ? <>
          <Header></Header>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemons' element={<PokemonList />} />
            <Route path='/newOffer/:id' element={<NewOffer />} />
            <Route path='/newOffer/' element={<NewOffer />} />
            <Route path='/offer/:id' element={<OfferList />} />
            <Route path='/offer/' element={<OfferList />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </>
        :
        <div className='mt-10 mx-[25%]'>Je n'ai malheureusement pas encore rendu le site responsive / adapté aux mobiles.<br />
          Je vous invite à réessayer sur un PC ou à dézoomer.
          <img src={workInProgress} className="m-auto pt-5 w-20"></img>
        </div>

      }
    </>
  )
}

export default App
