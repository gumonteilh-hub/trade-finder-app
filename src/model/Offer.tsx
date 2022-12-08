import { Pokemon } from "./Pokemon";

export interface Offer {
    lookingForPokemon: Pokemon;
    forTradePokemon: Pokemon;
    author: string;
}