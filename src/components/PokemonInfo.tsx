import { Pokemon } from '../model/Pokemon'

type Props = {
    pokemon: Pokemon
};


export function PokemonInfo({ pokemon }: Props) {

    return <>
        <div className='flex'>
            <div className='flex flex-col m-auto space-y-5'>
                <p>Nom Français : {pokemon.nomFrancais}</p>
                <p>Nom Anglais : {pokemon.nomAnglais}</p>
                <p>Numéro pokedex national : #{pokemon.nationalPokedexNumber}</p>
            </div>

            <img src={pokemon.imageUrl} alt="" />

        </div>
    </>
}