import { Link } from 'react-router-dom'

export function Header() {

    return <>
        <div className='header'>
            <nav>
                <ul className='menus'>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/pokemons" >Pokemons</Link>
                    </li>
                    <li>
                        <Link to="/offer" >Offers</Link>
                    </li>
                    <li>
                        <Link to="/newOffer" >New Offer</Link>
                    </li>
                    <div className="ml-auto mr-[30px] flex">
                        <li>
                            <Link to="/connection">Log in</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    </>
}