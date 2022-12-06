export interface Pokemon {
    paldeaPokedexNumber: number;
    nationalPokedexNumber: number;
    imageUrl: string;
    nomFrancais: string;
    nomAnglais: string;
    type1: Type;
    type2: Type;
}

export enum Type {
    ACIER,
    COMBAT,
    DRAGON,
    EAU,
    ELECTRIK,
    FEE,
    FEU,
    GLACE,
    INSECTE,
    NORMAL,
    PLANTE,
    POISON,
    PSY,
    ROCHE,
    SOL,
    SPECTRE,
    TENEBRES,
    VOL
}