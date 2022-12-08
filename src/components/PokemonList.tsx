import { useState, useEffect, useMemo } from 'react';
import { Pokemon } from '../model/Pokemon';
import '../App.css'
import {Link} from 'react-router-dom'


export function PokemonList() {

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [query, setQuery] = useState<string>("");

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

    const filteredPokemons = useMemo(() => {
        return pokemonList.filter(pokemon =>{
            return pokemon.nomFrancais.toLowerCase().includes(query.toLowerCase()) || pokemon.nomAnglais.toLowerCase().includes(query.toLowerCase()) || pokemon.paldeaPokedexNumber.toString().toLowerCase().includes(query.toLowerCase()) || pokemon.nationalPokedexNumber.toString().toLowerCase().includes(query.toLowerCase())
        })
    }, [pokemonList, query])

    return <>

        <label>search</label>
        <input className='border border-solid rounded-3xl' value={query} onChange={e => setQuery(e.target.value)} type="search"></input>

        {
            loading ?
                <p> Chargement</p>
                :

                <table className='border-collapse border-spacing-2 border border-slate-500'>
                    <thead>
                        <tr>
                            <th className='border border-slate-300'> Numéro pokedex National</th>
                            <th className='border border-slate-300'> Numéro pokedex régional</th>
                            <th className='border border-slate-300'> Nom Français</th>
                            <th className='border border-slate-300'> Nom Anglais</th>
                            <th className='border border-slate-300'> image</th>
                            <th className='border border-slate-300' colSpan={2}> Type</th>
                            <th className='border border-slate-300'> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPokemons.map((pokemon) => {
                            return <tr>
                                <td className='border border-slate-300'>{pokemon.nationalPokedexNumber}</td>
                                <td className='border border-slate-300'>{pokemon.paldeaPokedexNumber}</td>
                                <td className='border border-slate-300'>{pokemon.nomFrancais}</td>
                                <td className='border border-slate-300'>{pokemon.nomAnglais}</td>
                                <td className='border border-slate-300'><img src={pokemon.imageUrl}></img></td>
                                <td className='border border-slate-300'>{pokemon.type1}</td>
                                <td className='border border-slate-300'>{pokemon.type2}</td>
                                <td className='border border-slate-300'>
                                    <Link to={'/newOffer/'+ pokemon.nationalPokedexNumber}>créer offre</Link>
                                    <br/>
                                    <Link to={'/offer/'+ pokemon.nationalPokedexNumber}>voir les offres</Link>    
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
        }
    </>
}