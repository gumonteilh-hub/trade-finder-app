import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {validateEmail} from '../utils';
import questionMark from '../assets/question-circle-svgrepo-com-white.svg'


export function Header() {

    const [isLoggedin, setIsLoggedin] = useState<string>("");

    const login = () => {
        let email = window.prompt("entrez votre adresse email", "");

        while(email != null && email != "" && !validateEmail(email)) {
            email = window.prompt("entrez une adresse email avec un format valide", "");
        }
        
        if (email != null) {
            sessionStorage.setItem("email", email);
            setIsLoggedin(email);
        }
    }

    useEffect(() => {
        const email = sessionStorage.getItem("email");
        if (email != null) {
            setIsLoggedin(email);
        }
    }, [])

    return <>
        <div className='header'>
            <nav>
                <ul className='menus'>
                    <li>
                        <Link to="/" >Accueil</Link>
                    </li>
                    <li>
                        <Link to="/pokemons" >Pokemons</Link>
                    </li>
                    <li>
                        <Link to="/offer" >Offres</Link>
                    </li>
                    <li>
                        <Link to="/newOffer" >Nouvelle offre</Link>
                    </li>
                    <div className="m-auto mr-[30px] flex">
                        <img className="mr-5 w-10 tooltip" title="test" src={questionMark} alt="question mark" />
                        <p className="tooltipText tooltipLogin">
                            La "connexion" consiste en une simple adresse email stocké dans la session, afin d'éviter d'avoir a stocker des mots de passe, 
                            de plus l'adresse email n'est sauvegardé dans la base de donnée qu'au moment où vous créez une offre.
                            Vous pouvez donc visualiser et répondre aux offres sans être connecté.
                        </p>
                        {isLoggedin == "" ?
                            <button onClick={login}>Se connecter</button>
                            :
                            <span className='my-auto'>{isLoggedin}</span>
}
                    </div>
                </ul>
            </nav>
        </div>
    </>
}