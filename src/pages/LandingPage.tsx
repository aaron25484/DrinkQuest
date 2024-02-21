import React, { useState } from 'react';
import Searchbar from '../components/Searchbar';
import ItemList from '../components/ItemList';
import Footer from '../components/Footer';
import { searchByIngredient } from '../api/apiCalls';
import Cocktail from '../types/types';

/**
 * LandingPage component representing the main landing page of the application.
 * @component
 */
const LandingPage: React.FC = () => {
  /** State to hold the list of cocktails */
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  /**
   * Handles the search for cocktails based on the provided ingredient.
   * @param {string} ingredient - The ingredient to search for.
   * @returns {Promise<void>} - A Promise that resolves once the search is complete.
   */
  const handleSearch = async (ingredient: string): Promise<void> => {
    try {
      // Perform the search using the API call
      const result = await searchByIngredient(ingredient);

      // Extract the cocktail data from the API response
      const extractedCocktails = result.map(response => response.data);

      // Set the state with the extracted cocktails
      setCocktails(extractedCocktails);
    } catch (error) {
      // Handle errors during the search
      console.error('Error searching:', (error as Error).message);
      // Clear the cocktails state in case of an error
      setCocktails([]);
    }
  };

  /**
   * Render the LandingPage component.
   */
  return (
    <>
      {/* Searchbar component with the handleSearch function as a prop */}
      <Searchbar onSearch={handleSearch} />
      {/* ItemList component displaying the list of cocktails */}
      <ItemList cocktails={cocktails} />
      {/* Footer component */}
      <Footer />
    </>
  );
};

export default LandingPage;
