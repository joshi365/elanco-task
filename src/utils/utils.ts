import { Country } from "@/interfaces/Country";


export const sortByPopulation = (countries: Country[], order: 'asc' | 'desc'): Country[] => {
    return [...countries].sort((a, b) => {
        if (order === 'asc') {
            return a.population - b.population;
        } else {
            return b.population - a.population;
        }
    });
};

export const filterByRegion = (countries: Country[], region: string): Country[] => {
    if (!region) {
        return countries;
    }
    return countries.filter((country) => country.region === region);
};

export const searchCountries = (countries: Country[], searchTerm: string): Country[] => {
    const term = searchTerm.toLowerCase();
    return countries.filter((country) => {
        return (
            country.name.common.toLowerCase().includes(term) ||
            (country.capital && country.capital.some(capital => capital.toLowerCase().includes(term)))
        );
    });
};