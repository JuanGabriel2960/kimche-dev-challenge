export interface Data {
    countries: Country[];
    languages: ContinentElement[];
    continents: ContinentElement[];
}

export interface ContinentElement {
    name: string;
    code: string;
}

export interface Country {
    code: string;
    name: string;
    phone: string;
    continent: StateClass;
    capital: null | string;
    currency: null | string;
    languages: StateClass[];
    emoji: string;
    states: StateClass[];
}

export interface StateClass {
    name: string;
}


export enum GroupBy {
    continents = "continents",
    languages = "languages",
}
