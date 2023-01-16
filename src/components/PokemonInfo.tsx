import { Pokemon } from '../model/Pokemon'
import { PokeType } from './PokeType';

type Props = {
    pokemon: Pokemon
};


export function PokemonInfo({ pokemon }: Props) {

    return <>
        <div className='flex flex-col lg:flex-row h-[10em] overflow-auto'>
            <div className='flex flex-col m-auto space-y-5'>
                <p>Nom : <strong>{pokemon.nomFrancais}</strong></p>
                <p>Numéro pokedex national : <strong>#{pokemon.nationalPokedexNumber}</strong></p>
                <div className="flex flex-col lg:flex-row">
                    <PokeType poketype={pokemon.type1}></PokeType>
                    <PokeType poketype={pokemon.type2}></PokeType>
                </div>
            </div>

            <img className='relative' src={pokemon.imageUrl} alt={pokemon.nomFrancais} />

        </div>
    </>
}