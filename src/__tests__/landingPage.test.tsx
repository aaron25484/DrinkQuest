import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LandingPage from '../pages/LandingPage';

// Mocking the searchByIngredient function from the apiCalls module
jest.mock('../api/apiCalls', () => ({
  searchByIngredient: jest.fn() as jest.MockedFunction<typeof import('../api/apiCalls').searchByIngredient>,
}));

/**
 * Test suite for the LandingPage component.
 * @group LandingPage
 */
describe('LandingPage', () => {
  /**
   * Test case to verify if the LandingPage renders correctly.
   * @test {LandingPage} renders correctly
   */
  it('renders LandingPage correctly', async () => {  
    // Render the LandingPage component
    render(<LandingPage />);

    // Get the search input and search button elements
    const searchInput = screen.getByPlaceholderText('Search by ingredient...');
    const searchButton = screen.getByRole('button', { name: 'Search' });

    // Assertions to check if specific elements are rendered
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
});
