import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const [pokiData, setPokiData] =  useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const params = useParams().id;

    useEffect(() => {
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${params}`)
        .then(response => {
            if(!response.ok) {
                throw new Error("fetch error detail")
            }
            return response.json();
        })
        .then((pokiDetailData) => {
            setPokiData(pokiDetailData);
            setIsLoading(false);
        })
        .catch((error) => console.log(error.message))
    },[]);

        if (isLoading) {
            return (
                 <div>
                    <p>Loading...</p>
                </div>
             );
        }

    return (
        <section>
            <div>
                <p>details about:</p>
            <img src={pokiData.sprites?.versions['generation-iii'].emerald.front_default} alt={pokiData.name}/>
            </div>
            <article>
            {pokiData.id <= 9 ? (
                <h3>0{pokiData.id}</h3>
            ) : (
                <h3>{pokiData.id}</h3>
            )}
            <h3>{pokiData.name}</h3>
            <p>{pokiData.weight}kg</p>
            </article>
        </section>
    )
}

export default PokemonDetail;

//<p>{pokiData.types.type.name}</p> funktioniert nicht WIESO!? neu fetchen?