import '../App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Pokemon } from '../model/Pokemon';
import trade from '../assets/trade.svg'
import { PokemonPicker } from './PokemonPicker';

export function NewOffer() {

    const [lookingForPokemon, setLookingForPokemon] = useState<Pokemon>();
    const [forTradePokemon, setForTradePokemon] = useState<Pokemon>();


    const { id } = useParams();

    

    return <>
        <div className="flex">
            <div className="flex-1">
                <PokemonPicker setPokemon={setLookingForPokemon} ></PokemonPicker>
                {lookingForPokemon?.nomFrancais}
            </div>
            <div className="flex-1" >
                <img className='h-[10vh] m-auto' src={trade} />
            </div>
            <div className="flex-1">
                <PokemonPicker data={lookingForPokemon}></PokemonPicker>
            </div>
        </div>
    </>
}