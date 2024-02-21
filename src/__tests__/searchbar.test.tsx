import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../components/Searchbar';

// Mocking the onSearch function
const mockOnSearch = jest.fn();

/**
 * Test suite for the SearchBar component.
 * @group SearchBar
 */
describe('SearchBar', () => {
  /**
   * Test case to verify if the SearchBar renders correctly.
   * @test {SearchBar} renders correctly
   */
  it('renders SearchBar correctly', () => {
    // Render the SearchBar component
    render(<SearchBar onSearch={mockOnSearch} />);

    // Assertions to check if specific elements are rendered
    expect(screen.getByText('DrinkQuest')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search by ingredient...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  /**
   * Test case to verify if the search term updates on input change.
   * @test {SearchBar} updates search term on input change
   */
  it('updates search term on input change', () => {
    // Render the SearchBar component
    render(<SearchBar onSearch={mockOnSearch} />);

    // Get the search input element and simulate a change event
    const searchInput = screen.getByPlaceholderText('Search by ingredient...') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'whiskey' } });

    // Assertion to check if the search input value is updated
    expect(searchInput.value).toBe('whiskey');
  });

  /**
   * Test case to verify if the search is performed and cocktails are fetched.
   * @test {SearchBar} performs search and fetches cocktails
   */
  it('performs search and fetches cocktails', async () => {
    // Render the SearchBar component
    render(<SearchBar onSearch={mockOnSearch} />);

    // Get the search input element, simulate a change event, and click the search button
    const searchInput = screen.getByPlaceholderText('Search by ingredient...');
    fireEvent.change(searchInput, { target: { value: 'whiskey' } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    // Assertion to check if the onSearch function is called with the correct parameter
    expect(mockOnSearch).toHaveBeenCalledWith('whiskey');
  });
});
