import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LandingPage from '../pages/LandingPage';;

jest.mock('../api/apiCalls', () => ({
  searchByIngredient: jest.fn() as jest.MockedFunction<typeof import('../api/apiCalls').searchByIngredient>,
}));

describe('LandingPage', () => {
  it('renders LandingPage correctly', async () => {  
    
    render(<LandingPage />);

    const searchInput = screen.getByPlaceholderText('Search by ingredient...');
    const searchButton = screen.getByRole('button', { name: 'Search' });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    
    });

  });
