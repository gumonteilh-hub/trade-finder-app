import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {validateEmail} from '../utils';

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
                        {isLoggedin == "" ?
                            <button onClick={login}>Se connecter</button>
                            :
                            <span>{isLoggedin}</span>
}
                    </div>
                </ul>
            </nav>
        </div>
    </>
}