import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Offer } from "../model/Offer";
import { Pokemon } from "../model/Pokemon";
import { PokemonPicker } from "./PokemonPicker";
import { Switch } from "./Switch";


export function OfferList() {

    const [offerList, setOfferList] = useState<Offer>();
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [pokemonFilter, setPokemonFilter] = useState<Pokemon>();

    const { id } = useParams();

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

    useEffect(() => {
        fetch('http://localhost:8080/api/pokemon/')
            .then(res => res.json())
            .then(
                (data) => {
                    setPokemonList(data)
                    setLoading(false)
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
                <div className="flex h-[10vh] justify-around place-items-center">
                    <PokemonPicker pokemons={pokemonList} setPokemon={setPokemonFilter}></PokemonPicker>
                    <Switch></Switch>
                </div>
        }

    </>
}