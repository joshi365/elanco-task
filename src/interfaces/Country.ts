export interface Country {
    name: {
        common: string;
        official: string;
    };
    cca2: string;
    capital: string[];
    population: number;
    region: string;
    subregion: string;
    flags: {
        png: string;
        svg: string;
    };
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    languages: {
        [key: string]: string;
    };
    timezones: string[];
}