import { Pokemon } from "../model/Pokemon"
import { useMemo, useState } from "react";

type Props = {
    setPokemon: React.Dispatch<React.SetStateAction<any>>;
    pokemons: Pokemon[]
};

export function PokemonPicker({ setPokemon, pokemons }: Props) {

    const [query, setQuery] = useState<string>("");

    const filteredPokemons = useMemo(() => {
        if (query === '') {
            return []
        }
        return pokemons.filter(pokemon => {
            return pokemon.nomFrancais.toLowerCase().includes(query.toLowerCase()) || pokemon.nomAnglais.toLowerCase().includes(query.toLowerCase()) || pokemon.paldeaPokedexNumber.toString().toLowerCase().includes(query.toLowerCase()) || pokemon.nationalPokedexNumber.toString().toLowerCase().includes(query.toLowerCase())
        })
    }, [query, pokemons])

    const handlePokemonPicking = (pokemon : Pokemon) => {
        setPokemon(pokemon);
        setQuery("");
    }

    return <div className="m-[3em]">
        <label>Rechercher </label>
        <input className='border border-solid rounded' value={query} onChange={e => setQuery(e.target.value)} type="search"></input>
        <ul className="absolute bg-white">
            {filteredPokemons?.map(pokemon => (
                <li key={pokemon.nationalPokedexNumber}>
                    <button className="flex border w-[20vw] hover:bg-slate-100" onClick={() => handlePokemonPicking(pokemon)}><strong className="m-auto">{pokemon.nomFrancais}</strong>  <img className="h-20 ml-auto" src={pokemon.imageUrl}></img></button>
                </li>
            ))}
        </ul>
    </div>
}