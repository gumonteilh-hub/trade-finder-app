import { Type } from "../model/Pokemon";

type Props = {
    poketype: Type
};

export function PokeType ({poketype} : Props) {
    switch (Type[poketype]?.toString()){
        case Type.ACIER.toString() : return <img src="https://www.pokepedia.fr/images/thumb/2/27/Miniature_Type_Acier_EV.png/80px-Miniature_Type_Acier_EV.png" alt="type acier"></img>
        case Type.COMBAT.toString() : return <img src="https://www.pokepedia.fr/images/thumb/9/96/Miniature_Type_Combat_EV.png/80px-Miniature_Type_Combat_EV.png" alt="type combat"></img>
        case Type.DRAGON.toString() : return <img src="https://www.pokepedia.fr/images/thumb/3/3d/Miniature_Type_Dragon_EV.png/80px-Miniature_Type_Dragon_EV.png" alt="type dragon"></img>
        case Type.EAU.toString() : return <img src="https://www.pokepedia.fr/images/thumb/3/3d/Miniature_Type_Eau_EV.png/80px-Miniature_Type_Eau_EV.png" alt="type eau"></img>
        case Type.ELECTRIK.toString() : return <img src="https://www.pokepedia.fr/images/thumb/6/6d/Miniature_Type_%C3%89lectrik_EV.png/80px-Miniature_Type_%C3%89lectrik_EV.png" alt="type electrik"></img>
        case Type.FEE.toString() : return <img src="https://www.pokepedia.fr/images/thumb/5/58/Miniature_Type_F%C3%A9e_EV.png/80px-Miniature_Type_F%C3%A9e_EV.png" alt="type fee"></img>
        case Type.FEU.toString() : return <img src="https://www.pokepedia.fr/images/thumb/c/c7/Miniature_Type_Feu_EV.png/80px-Miniature_Type_Feu_EV.png" alt="type feu"></img>
        case Type.GLACE.toString() : return <img src="https://www.pokepedia.fr/images/thumb/e/e7/Miniature_Type_Glace_EV.png/80px-Miniature_Type_Glace_EV.png" alt="type glace"></img>
        case Type.INSECTE.toString() : return <img src="https://www.pokepedia.fr/images/thumb/a/a9/Miniature_Type_Insecte_EV.png/80px-Miniature_Type_Insecte_EV.png" alt="type insecte"></img>
        case Type.NORMAL.toString() : return <img src="https://www.pokepedia.fr/images/thumb/b/bf/Miniature_Type_Normal_EV.png/80px-Miniature_Type_Normal_EV.png" alt="type normal"></img>
        case Type.PLANTE.toString() : return <img src="https://www.pokepedia.fr/images/thumb/d/d9/Miniature_Type_Plante_EV.png/80px-Miniature_Type_Plante_EV.png" alt="type plante"></img>
        case Type.POISON.toString() : return <img src="https://www.pokepedia.fr/images/thumb/1/1c/Miniature_Type_Poison_EV.png/80px-Miniature_Type_Poison_EV.png" alt="type poison"></img>
        case Type.PSY.toString() : return <img src="https://www.pokepedia.fr/images/thumb/8/81/Miniature_Type_Psy_EV.png/80px-Miniature_Type_Psy_EV.png" alt="type psy"></img>
        case Type.ROCHE.toString() : return <img src="https://www.pokepedia.fr/images/thumb/f/fe/Miniature_Type_Roche_EV.png/80px-Miniature_Type_Roche_EV.png" alt="type roche"></img>
        case Type.SOL.toString() : return <img src="https://www.pokepedia.fr/images/thumb/4/40/Miniature_Type_Sol_EV.png/80px-Miniature_Type_Sol_EV.png" alt="type sol"></img>
        case Type.SPECTRE.toString() : return <img src="https://www.pokepedia.fr/images/thumb/4/43/Miniature_Type_Spectre_EV.png/80px-Miniature_Type_Spectre_EV.png" alt="type spectre"></img>
        case Type.TENEBRES.toString() : return <img src="https://www.pokepedia.fr/images/thumb/b/bc/Miniature_Type_T%C3%A9n%C3%A8bres_EV.png/80px-Miniature_Type_T%C3%A9n%C3%A8bres_EV.png" alt="type tenebre"></img>
        case Type.VOL.toString() : return <img src="https://www.pokepedia.fr/images/thumb/9/99/Miniature_Type_Vol_EV.png/80px-Miniature_Type_Vol_EV.png" alt="type vol"></img>
        default : return <></>
    }
}