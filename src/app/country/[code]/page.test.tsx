import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import Home from './page'; // Adjust the import path
import '@testing-library/jest-dom';

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      {
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
      },
    ]),
    ok: true,
  })
) as jest.Mock;

describe('Home Page Integration Test', () => {
  it('should render the country card with data', async () => {
    await act(async () => {
      render(<Home />);
    });

    // Wait for the data to load
    await waitFor(() => screen.getByText('Test Country'));

    expect(screen.getByRole('img')).toHaveAttribute('src', 'test.png');
    expect(screen.getByText('Test Country')).toBeInTheDocument();
    expect(screen.getByText('Capital: Test Capital')).toBeInTheDocument();
    expect(screen.getByText('Population: 1000000')).toBeInTheDocument();
    expect(screen.getByText('Region: Test Region')).toBeInTheDocument();
  });
});