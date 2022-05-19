export interface Data {
    countries: Country[];
    languages: Element[];
    continents: Element[];
}

export interface Element {
    name: string;
    code: string;
}

export interface Country {
    code: string;
    name: string;
    native: string;
    phone: string;
    continent: CountryContinent;
    capital: null | string;
    currency: null | string;
    languages: CountryContinent[];
    emoji: string;
    emojiU: string;
}

export interface CountryContinent {
    name: string;
}
