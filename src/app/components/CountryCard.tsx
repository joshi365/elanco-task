import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Country } from '@/interfaces/Country';

const CountryCard: React.FC<{ country: Country }> = ({ country }) => {
    return (
        <div
            style={{
                border: "2px solid black",
                borderRadius: "6px",
                padding: "20px",
                width: "20%",
                minWidth: "200px",
            }}
        >
            <Link 
                href={`/country/${country.cca2.toLowerCase()}`} 
                passHref 
                style={{ textDecoration: "none", color: "inherit" }} // Removes blue underline
            >
                <div style={{ textAlign: "center" }}> {/* Wrap content inside a div */}
                    <Image
                        src={country.flags.png}
                        alt={country.name.common}
                        width={200}
                        height={130}
                    />
                    <h3>{country.name.common}</h3>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                </div>
            </Link>
        </div>
    );
};

export default React.memo(CountryCard);
