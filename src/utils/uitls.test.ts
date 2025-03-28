import { sortByPopulation, filterByRegion, searchCountries } from './utils';
import { Country } from '../interfaces/Country'; // Adjust the import path

describe('Utility Functions Tests', () => {
  const mockCountries: Country[] = [
    {
      name: { common: 'Brazil', official: 'Federative Republic of Brazil' },
      cca2: 'BR',
      capital: ['Brasília'],
      population: 212559409,
      region: 'Americas',
      subregion: 'South America',
      flags: { png: '', svg: '' },
      currencies: { BRL: { name: 'Real', symbol: 'R$' } },
      languages: { por: 'Portuguese' },
      timezones: ['UTC-05:00 to UTC-02:00'],
    },
    {
      name: { common: 'Germany', official: 'Federal Republic of Germany' },
      cca2: 'DE',
      capital: ['Berlin'],
      population: 83240525,
      region: 'Europe',
      subregion: 'Western Europe',
      flags: { png: '', svg: '' },
      currencies: { EUR: { name: 'Euro', symbol: '€' } },
      languages: { deu: 'German' },
      timezones: ['UTC+01:00', 'UTC+02:00'],
    },
    {
      name: { common: 'China', official: 'People\'s Republic of China' },
      cca2: 'CN',
      capital: ['Beijing'],
      population: 1402637000,
      region: 'Asia',
      subregion: 'Eastern Asia',
      flags: { png: '', svg: '' },
      currencies: { CNY: { name: 'Renminbi', symbol: '¥' } },
      languages: { zho: 'Chinese' },
      timezones: ['UTC+08:00'],
    },
  ];

  describe('sortByPopulation', () => {
    it('should sort countries by population in ascending order', () => {
      const sortedAsc = sortByPopulation([...mockCountries], 'asc');
      expect(sortedAsc[0].name.common).toBe('Germany');
      expect(sortedAsc[2].name.common).toBe('China');
    });

    it('should sort countries by population in descending order', () => {
      const sortedDesc = sortByPopulation([...mockCountries], 'desc');
      expect(sortedDesc[0].name.common).toBe('China');
      expect(sortedDesc[2].name.common).toBe('Germany');
    });
  });

  describe('filterByRegion', () => {
    it('should filter countries by region', () => {
      const filtered = filterByRegion([...mockCountries], 'Europe');
      expect(filtered.length).toBe(1);
      expect(filtered[0].name.common).toBe('Germany');
    });

    it('should return all countries if region is an empty string', () => {
      const filtered = filterByRegion([...mockCountries], '');
      expect(filtered.length).toBe(3);
    });
  });

  describe('searchCountries', () => {
    it('should find countries by name', () => {
      const found = searchCountries([...mockCountries], 'Germany');
      expect(found.length).toBe(1);
      expect(found[0].name.common).toBe('Germany');
    });

    it('should find countries by capital', () => {
      const found = searchCountries([...mockCountries], 'Brasília');
      expect(found.length).toBe(1);
      expect(found[0].name.common).toBe('Brazil');
    });

    it('should return an empty array if no match is found', () => {
      const found = searchCountries([...mockCountries], 'Atlantis');
      expect(found.length).toBe(0);
    });
  });
});