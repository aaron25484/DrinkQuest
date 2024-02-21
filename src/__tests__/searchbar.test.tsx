import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../components/Searchbar';

const mockOnSearch = jest.fn();

describe('SearchBar', () => {
  it('renders SearchBar correctly', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    expect(screen.getByText('DrinkQuest')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search by ingredient...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('updates search term on input change', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const searchInput = screen.getByPlaceholderText('Search by ingredient...') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'whiskey' } });

    expect(searchInput.value).toBe('whiskey');
  });

  it('performs search and fetches cocktails', async () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const searchInput = screen.getByPlaceholderText('Search by ingredient...');
    fireEvent.change(searchInput, { target: { value: 'whiskey' } });

    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    expect(mockOnSearch).toHaveBeenCalledWith('whiskey');
  });
});
