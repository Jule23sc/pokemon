import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import PokemonList from './components/items/PokemonList';
import PokemonDetail from './components/items/PokemonDetail';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pokemonlist" element={<PokemonList/>}/>
      <Route path="/pokemondetail/:id" element={<PokemonDetail/>}/>
    </Routes>
    </>
  )
}

export default App;