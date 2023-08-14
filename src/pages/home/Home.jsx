import React from "react";
import PokemonList from "../../components/items/PokemonList";
import { Link } from 'react-router-dom';
import Pokeball from '../../components/img/pokeball.png'

const Home = () => {

  return (
    <>
    <h1>pokemon.app</h1>
    <h2>welcome new trainers to another information site about pokemon!</h2>
    <br></br>
    <Link to="/pokemonlist"><img src={Pokeball} alt="pokeball icon" style={{ width: '100px', height: '100px'}}/></Link>
    <p>see them all</p>
    </>
  )
}

export default Home;