import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CountryCard from './CountryCard';
import { Country } from '@/interfaces/Country'; // Adjust the import path
import '@testing-library/jest-dom';

// Mock useParams to return a valid 'code'
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

const mockCountry: Country = {
  name: { common: 'Test Country', official: 'Official Test Country' },
  cca2: 'TC',
  capital: ['Test Capital'],
  population: 1000000,
  region: 'Test Region',
  subregion: 'Test Subregion',
  flags: { png: 'test.png', svg: 'test.svg' },
  currencies: { TST: { name: 'Test Currency', symbol: 'T$' } },
  languages: { tst: 'Test Language' },
  timezones: ['UTC'],
};

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

describe('CountryCard Component', () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ code: 'TC' }); // Mock the 'code' parameter
  });

  it('should render country details correctly', () => {
