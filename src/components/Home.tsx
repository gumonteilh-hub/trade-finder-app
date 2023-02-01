import { Link } from "react-router-dom";


export function Home() {
    return <div>
        <div>
            <div className='pokeball pokeball-container'>
                <span className='circle-black'></span>
                <span className='circle-white'></span>
                <div className="h-[50%]">
                    <h1 className="mt-20 font-bold text-8xl"> PokeTrade </h1>
                    <p className="text-2xl p-[2em]">Bienvenue sur PokeTrade, l'application web d'échange de pokemons!</p>
                </div>
                <p className="text-xl m-[15%]">Dans <Link to="/pokemons" ><u>Pokemons</u></Link> vous verrez la liste des Pokemons disponnibles ainsi que leurs caractéristiques. <br />
                    Dans <Link to="/offer" ><u>Offres</u></Link> vous trouverez la liste de toutes les offres d'échanges déjà éxistantes, <br />
                    Et enfin si aucune offre ne vous interresse vous pouvez en créer une sur mesure dans <Link to="/newOffer" ><u>Nouvelle offre</u></Link>


                </p>
            </div>
        </div>
    </div>
}