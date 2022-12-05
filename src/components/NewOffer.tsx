import '../App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Pokemon } from '../model/Pokemon';

export function NewOffer() {

    const [lookingForPokemon, setLookingForPokemon] = useState<Pokemon>();
    const [forTradePokemon, setForTradePokemon] = useState<Pokemon>();


    const { id } = useParams();

    useEffect(() => {
        if (id !== '') {
            fetch('http://localhost:8080/api/pokemon/' + id)
                .then(res => res.json())
                .then(
                    (data) => {
                        setLookingForPokemon(data)
                    }
                )
                .catch((error) => {
                    console.error(error);
                });
        }
    }, []);

    return <>
        <div className="flex">
            <div className="flex-1	">
                {lookingForPokemon?.nomFrancais}
            </div>
            <div className="flex-1	" >
                test 2
            </div>
            <div className="flex-1">
                test 3
            </div>
        </div>
    </>
}