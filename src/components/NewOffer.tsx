import '../App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Pokemon } from '../model/Pokemon';
import trade from '../assets/trade.svg'
import { PokemonPicker } from './PokemonPicker';
import { PokemonInfo } from './PokemonInfo';
import { Offer } from '../model/Offer';

export function NewOffer() {

    const [lookingForPokemon, setLookingForPokemon] = useState<Pokemon>();
    const [forTradePokemon, setForTradePokemon] = useState<Pokemon>();
    const [pokemonList, setPokemonList] = useState<Pokemon[]>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/pokemon/')
            .then(res => res.json())
            .then(
                (data) => {
                    setPokemonList(data);
                    if (id !== undefined && id !== '') {
                        const pokemon = data?.find((pokemon: Pokemon) => {
                            return pokemon.nationalPokedexNumber.toString() === id;
                        })
                        setLookingForPokemon(pokemon)
                    }
                    setLoading(false)
                }
            )
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const { id } = useParams();

    const postOffer = () => {
        const offer = {
            lookingForPokemon: lookingForPokemon,
            forTradePokemon: forTradePokemon,
            author: "guigui"
        } as Offer
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(offer)
        };

        fetch('http://localhost:8080/api/offer/', requestOptions)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data)
                }
            )
            .catch((error) => {
                console.error(error);
            });
    }

    return <>
        <div className="flex">
            {loading
                ?
                <p>Chargement</p>
                :
                <>
                    <div className="flex-1">
                        <h1>For trade :</h1>
                        <PokemonPicker setPokemon={setForTradePokemon} pokemons={pokemonList!}></PokemonPicker>
                        <br />
                        {
                            forTradePokemon
                                ?
                                <PokemonInfo pokemon={forTradePokemon!}></PokemonInfo>
                                :
                                <></>
                        }
                    </div>
                    <div className="flex-1 h-[95vh]" >
                        <img className='w-[30%] m-auto mt-[50%] tradesvg' src={trade} />
                        <button onClick={postOffer} className=''> Create offer</button>
                    </div>
                    <div className="flex-1">
                        <h1>Looking for :</h1>
                        <PokemonPicker setPokemon={setLookingForPokemon} pokemons={pokemonList!} ></PokemonPicker>
                        <br />
                        {
                            lookingForPokemon
                                ?
                                <PokemonInfo pokemon={lookingForPokemon!}></PokemonInfo>
                                :
                                <></>
                        }
                    </div>
                </>
            }
        </div>
    </>
}