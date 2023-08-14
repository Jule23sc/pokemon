import PokemonItem from './PokemonItem';
import { useEffect, useState } from 'react';

const PokemonList = () => {

    const [allPokemon, setAllPokemon] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(response => {
            if(!response.ok) {
                throw new Error("fetch error list")
            }
            return response.json();
        })
        .then(datas => setAllPokemon(datas.results))
        .catch((error) => console.log(error.message))
    }, [])
    console.log(allPokemon);

    return (
        <div>
            {allPokemon.map((poke) =>
            <PokemonItem
            key={poke.name}
            name={poke.name}
            url={poke.url}
            />
            )}
        </div>
    )
}
export default PokemonList;