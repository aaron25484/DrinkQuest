import axios, { AxiosResponse } from 'axios';

// Retrieve API URL from environment variables
const { VITE_API_URL } = import.meta.env;

/**
 * Retrieves details of a specific cocktail by its ID.
 *
 * @param {string} cocktailId - The ID of the cocktail to fetch details for.
 * @returns {Promise<AxiosResponse | null>} - A Promise that resolves to the AxiosResponse or null if an error occurs.
 */
const getCocktailDetails = async (cocktailId: string): Promise<AxiosResponse | null> => {
  try {
    const response: AxiosResponse = await axios.get(`${VITE_API_URL}lookup.php?i=${cocktailId}`);
    return response.data.drinks ? response : null;
  } catch (error) {
    console.error(`Error fetching cocktail details for ID ${cocktailId}: ${(error as Error).message}`);
    return null;
  }
};

/**
 * Searches for cocktails based on a specified ingredient.
 *
 * @param {string} ingredient - The ingredient to search for.
 * @returns {Promise<AxiosResponse[]>} - A Promise that resolves to an array of AxiosResponse objects representing cocktails.
 * @throws {Error} - Throws an error if there is an issue with the API request.
 */
export const searchByIngredient = async (ingredient: string): Promise<AxiosResponse[]> => {
  try {
    const response: AxiosResponse = await axios.get(`${VITE_API_URL}filter.php?i=${ingredient}`);
    
    if (response.data && response.data.drinks) {
      const allCocktailsWithIngredient = response.data.drinks;

      const nonAlcoholicCocktails: AxiosResponse[] = [];
      const alcoholicCocktails: AxiosResponse[] = [];

      for (const cocktail of allCocktailsWithIngredient) {
        const detailsResponse = await getCocktailDetails(cocktail.idDrink);
        if (detailsResponse) {
          const ingredients = Object.keys(detailsResponse.data.drinks[0]).filter(
            (key) => key.startsWith('strIngredient') && detailsResponse.data.drinks[0][key] !== null
          );

          if (ingredients.length <= 6) {
            if (detailsResponse.data.drinks[0].strAlcoholic === 'Alcoholic') {
              alcoholicCocktails.push(detailsResponse);
            } else {
              nonAlcoholicCocktails.push(detailsResponse);
            }
          }

          if (nonAlcoholicCocktails.length + alcoholicCocktails.length === 6) {
            break;
          }
        }
      }

      const finalCocktails = nonAlcoholicCocktails.length >= 6
        ? nonAlcoholicCocktails.slice(0, 6)
        : nonAlcoholicCocktails.concat(alcoholicCocktails.slice(0, 6 - nonAlcoholicCocktails.length));

      return finalCocktails;
    }

    console.error('Error: Invalid response format from the API');
    return [];
  } catch (error) {
    console.error('Error fetching the request:', (error as Error).message);
    throw error;
  }
};
