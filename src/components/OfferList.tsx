import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Offer } from "../model/Offer";
import { Pokemon } from "../model/Pokemon";
import { PokemonInfo } from "./PokemonInfo";
import { PokemonPicker } from "./PokemonPicker";
import { Switch } from "./Switch";
import questionMark from '../assets/question-circle-svgrepo-com-white.svg'


export function OfferList() {

    const [offerList, setOfferList] = useState<Offer[]>();
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [pokemonFilter, setPokemonFilter] = useState<Pokemon>();
    // false = "looking for", true = forTrade
    const [searchType, setSearchType] = useState<boolean>(false);

    const { id } = useParams();

    const sendEmail = (offer: Offer) => {
        const subject = "Échange " + offer.forTradePokemon.nomFrancais + "/" + offer.lookingForPokemon.nomFrancais;
        const body = "Bonjour, %0DJe souhaiterai échanger mon " + offer.lookingForPokemon.nomFrancais + " contre votre " + offer.forTradePokemon.nomFrancais + " ! %0DCordialement.";
        window.open('mailto:' + offer.author + '?subject=' + subject + '&body=' + body);
    }


    useEffect(() => {
        if (id !== undefined) {
            fetch('https://tradefinder-production.up.railway.app/api/offer/pokemon/' + id)
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
            fetch('https://tradefinder-production.up.railway.app/api/offer/pokemon/' + pokemonFilter?.nationalPokedexNumber + "/" + searchType)
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
        fetch('https://tradefinder-production.up.railway.app/api/pokemon/')
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
                        <div className="flex justify-center items-center">
                            <Switch onClick={setSearchType}></Switch>
                            <img className="ml-10 w-10 tooltip" title="test" src={questionMark} alt="question mark" />
                            <p className="tooltipText tooltipOffer">
                                Si vous cherchez a obtenir un Pikachu, séléctionnez Pikachu dans la barre de recherche, 
                                mettez le switch sur "Recevoir" et apparaitront les offres de gens cherchant a Envoyer un Pikachu. <br/>
                                Les valeurs "Envoyer" et "Recevoir" sont basées sur votre point de vue, pas sur celui du créateur de l'offre 
                                (Si vous voyez un Pokemon dans la colonne "Recevoir" c'est que la personne ayant créé l'offre cherche a l'"Envoyer")  
                            </p>
                        </div>
                    </div>
                    <div className="mt-[7em] flex justify-center">
                        {offerList && offerList.length > 0 ?
                            <table className='border-separate border border-slate-500 table-auto '>
                                <thead>
                                    <tr>
                                        <th className='border border-slate-300'>Recevoir</th>
                                        <th className='border border-slate-300'>Envoyer</th>
                                        <th className='border border-slate-300'>Auteur</th>
                                        <th className='border border-slate-300'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {offerList.map((offer) => {
                                        return <tr className="">
                                            <th className='p-5 border border-slate-300'><PokemonInfo pokemon={offer.forTradePokemon}></PokemonInfo></th>
                                            <th className='p-5 border border-slate-300'><PokemonInfo pokemon={offer.lookingForPokemon}></PokemonInfo></th>
                                            <th className='p-5 border border-slate-300'>{offer.author}</th>
                                            <th className='p-5 border border-slate-300'><button onClick={() => sendEmail(offer)}><strong><u>Contacter</u></strong></button></th>
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