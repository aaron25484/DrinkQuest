import axios, { AxiosResponse } from 'axios';

const { VITE_API_URL } = import.meta.env;

export const searchByIngredient = async (ingredient: string) => {
  try {
    const response: AxiosResponse = await axios.get(`${VITE_API_URL}filter.php?i=${ingredient}`);
    
    if (response.data && response.data.drinks) {
      const firstSixCocktails = response.data.drinks.slice(0, 6);

      const cocktailDetails = await Promise.all(
        firstSixCocktails.map(async (cocktail) => {
          const cocktailDetailsResponse: AxiosResponse = await axios.get(
            `${VITE_API_URL}lookup.php?i=${cocktail.idDrink}`
          );
          return cocktailDetailsResponse.data.drinks ? cocktailDetailsResponse.data.drinks[0] : null;
        })
      );


      return cocktailDetails;
    }

    console.error('Error: Invalid response format from the API');
    return [];
  } catch (error) {
    console.error('Error fetching the request:', error.message);
    throw error;
  }
};
