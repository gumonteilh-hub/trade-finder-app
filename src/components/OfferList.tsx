import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Offer } from "../model/Offer";
import { Pokemon } from "../model/Pokemon";
import { PokemonInfo } from "./PokemonInfo";
import { PokemonPicker } from "./PokemonPicker";
import { Switch } from "./Switch";


export function OfferList() {

    const [offerList, setOfferList] = useState<Offer[]>();
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [pokemonFilter, setPokemonFilter] = useState<Pokemon>();

    const { id } = useParams();

    /*
    useEffect(() => {
        if (id !== undefined) {
            fetch('http://localhost:8080/api/offer/pokemon' + id)
                .then(res => res.json())
                .then(
                    (data) => {
                        setOfferList(data);
                    }
                )
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [])
*/
    useEffect(() => {
        fetch('http://localhost:8080/api/pokemon/')
            .then(res => res.json())
            .then(
                (data) => {
                    setPokemonList(data)
                    if (id !== undefined && parseInt(id)) {
                        const pokemon = data.filter((pokemon: Pokemon) => { return pokemon.nationalPokedexNumber === parseInt(id) })
                        setPokemonFilter(pokemon[0])
                    }
                    setLoading(false)
                    console.log("end loading")
                }
            )
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return <>
        {
            loading
                ?
                <p>Chargement</p>
                :
                <>
                    <div className="flex h-[10vh] justify-around place-items-center">
                        <PokemonPicker pokemons={pokemonList} setPokemon={setPokemonFilter}></PokemonPicker>
                        {pokemonFilter && pokemonFilter.paldeaPokedexNumber ? <PokemonInfo pokemon={pokemonFilter}></PokemonInfo> : <div></div>}
                        <Switch></Switch>
                    </div>
                    {offerList && offerList.length > 0 ?
                        <table className='border-collapse border-spacing-2 border border-slate-500'>
                            <thead>
                                <tr>
                                    <th className='border border-slate-300'>Looking for</th>
                                    <th className='border border-slate-300'>For trade</th>
                                    <th className='border border-slate-300'>author</th>
                                    <th className='border border-slate-300'>actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {offerList.map((offer) => {
                                    return <tr>
                                        <th><PokemonInfo pokemon={offer.lookingForPokemon}></PokemonInfo></th>
                                        <th><PokemonInfo pokemon={offer.forTradePokemon}></PokemonInfo></th>
                                        <th>{offer.author}</th>
                                        <th><button>view</button></th>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        :
                        <></>}
                </>
        }
    </>
}