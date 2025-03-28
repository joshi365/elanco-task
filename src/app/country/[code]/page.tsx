"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import { Country } from '@/interfaces/Country';
import Loader from '@/app/components/Loader';
import Image from 'next/image'; // Import the Image component

const CountryDetails = () => {
  const { code } = useParams();
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCountry(data[0]);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        setError(e.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [code]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!country) {
    return <div>Country not found</div>;
  }

  const currencies = country?.currencies && typeof country.currencies === 'object'
    ? Object.keys(country.currencies).join(', ')
    : 'N/A';

  const languages = country?.languages && typeof country.languages === 'object'
    ? Object.values(country.languages).join(', ')
    : 'N/A';

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}>
      <Head>
        <title>{country?.name?.common || 'Country Details'}</title>
        <meta name="description" content={`Details for ${country?.name?.common || 'this country'}`} />
      </Head>

      <div style={{border:"2px solid black", width:"40%",borderRadius:"8px"}}>
        <h1>{country?.name?.common || 'Country Details'}</h1>
        {country?.flags?.png && (
          <Image // Use Next.js Image
            src={country.flags.png}
            alt={country?.name?.common || 'Country Flag'}
            width={230}
            height={130}
          />
        )}
        <p>Capital: {country?.capital || 'N/A'}</p>
        <p>Population: {country?.population || 'N/A'}</p>
        <p>Region: {country?.region || 'N/A'}</p>
        <p>Subregion: {country?.subregion || 'N/A'}</p>
        <p>Currencies: {currencies}</p>
        <p>Languages: {languages}</p>
        <p>Timezones: {country?.timezones?.join(', ') || 'N/A'}</p>
      </div>
    </div>
  );
};

export default CountryDetails;