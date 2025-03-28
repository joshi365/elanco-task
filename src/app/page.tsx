"use client"
import React, { useState, useCallback, useMemo } from 'react';
//import styles from "./page.module.css";
import Head from 'next/head';
import CountryCard from "./components/CountryCard";
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import Sort from './components/Sort';
import Loader from './components/Loader';
import { sortByPopulation, filterByRegion, searchCountries } from '../utils/utils';
import useFetchAndCache from '@/hooks/useFetchAndCache';
import { Country } from '../interfaces/Country';



export default function Home() {

  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterRegion, setFilterRegion] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');


  const { data: allCountries, loading, error } = useFetchAndCache<Country[]>(
    'https://restcountries.com/v3.1/all'
  );

  const sortedCountries = useMemo(() => {
    if (!allCountries) return [];

    let results = [...allCountries];

    if (filterRegion) {
      results = filterByRegion(results, filterRegion);
    }

    if (searchTerm) {
      results = searchCountries(results, searchTerm);
    }

    results = sortByPopulation(results, sortOrder);
    return results;
  }, [allCountries, sortOrder, filterRegion, searchTerm]);


  const handleSearch = useCallback((searchTerm: string) => {
    setSearchTerm(searchTerm);
  }, [setSearchTerm]);

  const handleFilter = useCallback((region: string) => {
    setFilterRegion(region);
  }, [setFilterRegion]);

  const handleSort = useCallback((order: 'asc' | 'desc') => {
    setSortOrder(order);
  }, [setSortOrder]);



  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div style={{textAlign:"center"}}>
      <Head>
        <title>Country Data Dashboard</title>
        <meta name="description" content="Country data dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Country Data Dashboard</h1>

        <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
          <SearchBar onSearch={handleSearch} />
          <Filter onFilter={handleFilter} />
          <Sort onSortOrder={handleSort} />
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          {sortedCountries.map((country) => (
            <CountryCard key={country.cca2} country={country} />
          ))}
        </div>
      </main>
    </div>
  );
}


