import axios, { AxiosResponse } from 'axios';

const { VITE_API_URL } = import.meta.env;

const getCocktailDetails = async (cocktailId: string): Promise<AxiosResponse | null> => {
  try {
    const response: AxiosResponse = await axios.get(`${VITE_API_URL}lookup.php?i=${cocktailId}`);
    return response.data.drinks ? response : null;
  } catch (error) {
    console.error(`Error fetching cocktail details for ID ${cocktailId}: ${error.message}`);
    return null;
  }
};

export const searchByIngredient = async (ingredient: string) => {
  try {
    const response: AxiosResponse = await axios.get(`${VITE_API_URL}filter.php?i=${ingredient}`);
    
    if (response.data && response.data.drinks) {
      const allCocktailsWithIngredient = response.data.drinks;

      const filteredCocktails: AxiosResponse[] = [];

      for (const cocktail of allCocktailsWithIngredient) {
        const detailsResponse = await getCocktailDetails(cocktail.idDrink);
        if (detailsResponse) {
          const ingredients = Object.keys(detailsResponse.data.drinks[0]).filter(
            (key) => key.startsWith('strIngredient') && detailsResponse.data.drinks[0][key] !== null
          );

          if (ingredients.length <= 6) {
            filteredCocktails.push(detailsResponse);
            if (filteredCocktails.length === 6) {
              break;
            }
          }
        }
      }

      return filteredCocktails;
    }

    console.error('Error: Invalid response format from the API');
    return [];
  } catch (error) {
    console.error('Error fetching the request:', error.message);
    throw error;
  }
};
