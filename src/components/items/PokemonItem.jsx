import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonDetail from './PokemonDetail';

const PokemonItem = (props) => {

    const [pokeDetail, setPokeDetail] = useState({})

    useEffect(() => {
        fetch(props.url)
        .then(response => {
            if(!response.ok) {
                throw new Error("fetch error item")
            }
            return response.json();
        })
        .then(data => setPokeDetail(data))
        .catch((error) => console.log(error.message))
    }, [])
    //console.log(pokeDetail);
    
    return (
        <div>
            <Link to={`/pokemondetail/${pokeDetail.id}`}><img src={pokeDetail.sprites?.versions['generation-iii'].emerald.front_default}/></Link>
            <h1>{pokeDetail.name}</h1>
            {pokeDetail.id <= 9 ? (
                <h1>0{pokeDetail.id}</h1>
            ) : (
                <h1>{pokeDetail.id}</h1>
            )}
        </div>
    )
}
export default PokemonItem;
//<p>{pokeDetail.id}</p>