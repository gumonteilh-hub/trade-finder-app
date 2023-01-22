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
    // false = "looking for", true = forTrade
    const [searchType, setSearchType] = useState<boolean>(false);

    const { id } = useParams();

    
    useEffect(() => {
        if (id !== undefined) {
            fetch('http://localhost:8080/api/offer/pokemon/' + id)
                .then(res => res.json())
                .then(
                    (data) => {
                        console.log("test 1 ")
                        setOfferList(data);
                    }
                )
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [])

    useEffect(() => {
        if (pokemonFilter?.nationalPokedexNumber !== undefined) {
            fetch('http://localhost:8080/api/offer/pokemon/' + pokemonFilter?.nationalPokedexNumber + "/" + !searchType)
                .then(res => res.json())
                .then(
                    (data) => {
                        console.log("test 1 ")
                        setOfferList(data);
                    }
                )
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [pokemonFilter, searchType])

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
                    <div className="grid grid-cols-3 h-[10vh]">
                        <PokemonPicker pokemons={pokemonList} setPokemon={setPokemonFilter}></PokemonPicker>
                        <div>{pokemonFilter && pokemonFilter.paldeaPokedexNumber ? <PokemonInfo pokemon={pokemonFilter}></PokemonInfo> : <div></div>}</div>
                        <Switch onClick= {setSearchType}></Switch>
                    </div>
                    <div className="mt-[7em] flex justify-center">
                        {offerList && offerList.length > 0 ?
                            <table className='border-separate border border-slate-500 table-auto '>
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
                                        return <tr className="">
                                            <th className='border border-slate-300'><PokemonInfo pokemon={offer.lookingForPokemon}></PokemonInfo></th>
                                            <th className='border border-slate-300'><PokemonInfo pokemon={offer.forTradePokemon}></PokemonInfo></th>
                                            <th className='border border-slate-300'>{offer.author}</th>
                                            <th className='border border-slate-300'><button>view</button></th>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                            :
                            <></>}
                    </div>
                </>
        }
    </>
}