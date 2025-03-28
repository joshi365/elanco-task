"use client";

import React, { useState, useCallback } from 'react';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    }, [onSearch]);

    return (
        <input
            style={{ width: "12%", height: "35px", padding: "5px", borderRadius: "6px" }}
            type="text"
            placeholder="Search by name or capital"
            value={searchTerm}
            onChange={handleChange}
        />
    );
};

export default React.memo(SearchBar);