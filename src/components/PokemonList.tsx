import { useState, useEffect, useMemo } from 'react';
import { Pokemon } from '../model/Pokemon';
import '../App.css'
import { Link } from 'react-router-dom'
import { PokeType } from './PokeType';
import { Loading } from './Loading';


export function PokemonList() {

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        fetch('https://tradefinder-production.up.railway.app/api/pokemon/')
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
        return pokemonList.filter(pokemon => {
            return pokemon.nomFrancais.toLowerCase().includes(query.toLowerCase()) || pokemon.nomAnglais.toLowerCase().includes(query.toLowerCase()) || pokemon.paldeaPokedexNumber.toString().toLowerCase().includes(query.toLowerCase()) || pokemon.nationalPokedexNumber.toString().toLowerCase().includes(query.toLowerCase())
        })
    }, [pokemonList, query])

    return <>
        <div className='ml-[40vw] my-5'>
            <label>Rechercher </label>
            <input type="search" onChange={e => setQuery(e.target.value)} className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1" placeholder="Pikachu" />
        </div>

        {
            loading ?
                <Loading></Loading>
                :
                <div className='flex justify-center overflow-auto max-h-[85vh]'>
                    <table>
                        <thead>
                            <tr>
                                <th className='p-1 border border-slate-300'> Numéro pokedex National</th>
                                <th className='p-1 border border-slate-300'> Numéro pokedex régional</th>
                                <th className='p-1 border border-slate-300'> Nom Français</th>
                                <th className='p-1 border border-slate-300'> Nom Anglais</th>
                                <th className='p-1 border border-slate-300'> image</th>
                                <th className='p-1 border border-slate-300' colSpan={2}> Type</th>
                                <th className='p-1 border border-slate-300'> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPokemons.map((pokemon) => {
                                return <tr>
                                    <td className='p-1 border border-slate-300'>{pokemon.nationalPokedexNumber}</td>
                                    <td className='p-1 border border-slate-300'>{pokemon.paldeaPokedexNumber}</td>
                                    <td className='p-1 border border-slate-300'>{pokemon.nomFrancais}</td>
                                    <td className='p-1 border border-slate-300'>{pokemon.nomAnglais}</td>
                                    <td className='p-1 border border-slate-300'><img src={pokemon.imageUrl}></img></td>
                                    <td className='p-1 border border-slate-300'><PokeType poketype={pokemon.type1} ></PokeType></td>
                                    <td className='p-1 border border-slate-300'><PokeType poketype={pokemon.type2} ></PokeType></td>
                                    <td className='p-1 border border-slate-300'>
                                        <Link to={'/newOffer/' + pokemon.nationalPokedexNumber}><u>créer offre</u></Link>
                                        <br />
                                        <br />
                                        <Link to={'/offer/' + pokemon.nationalPokedexNumber}><u>voir les offres</u></Link>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
        }
    </>
}