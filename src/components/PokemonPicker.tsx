import { Pokemon } from "../model/Pokemon"
import { useEffect, useState } from "react";

type Props = {
    setPokemon: React.Dispatch<React.SetStateAction<any>>;
};

export function PokemonPicker(callback: Props) {

    const [query, setQuery] = useState<string>("");


    useEffect(() => {
        fetch('http://localhost:8080/api/pokemon/' + query)
            .then(res => res.json())
            .then(
                (data) => {
                    callback.setPokemon(data)
                }
            )
            .catch((error) => {
                console.error(error);
            });

    }, [query]);
    return <>

        <label>search</label>
        <input className='border border-solid rounded-3xl' value={query} onChange={e => setQuery(e.target.value)} type="search"></input>
    </>
}