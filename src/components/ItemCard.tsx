import React from 'react';
import Cocktail from '../types/types';

/**
 * Props for the ItemCard component.
 * @typedef {Object} ItemCardProps
 * @property {Cocktail} cocktail - The cocktail object to display details.
 */

interface ItemCardProps {
  cocktail: Cocktail;
}
/**
 * Functional component representing a card displaying details of a cocktail.
 * @component
 * @param {ItemCardProps} props - The props for the ItemCard component.
 */
const ItemCard: React.FC<ItemCardProps> = ({ cocktail }) => {
  /**
   * Render the ItemCard component.
   */
  return (
    <article className="item-card bg-white font-oswald bg-opacity-10 shadow-lg rounded-2xl p-3 h-full mt-2">
      {/* Image of the cocktail */}
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="w-full object-fill mb-4 rounded-3xl shadow-2xl"
      />
      {/* Title of the cocktail */}
      <h3 className="text-2xl text-center font-black mb-3">{cocktail.strDrink}</h3>
      <div className="text-container overflow-y-auto">
        {/* Ingredients section */}
        <p className="text-gray-400 mb-1">Ingredients:</p>
        <ul className="list-none mb-3">
          {/* Mapping through cocktail object to display ingredients and measures */}
          {Object.keys(cocktail).map((key) => {
            if (key.startsWith('strIngredient') && cocktail[key as keyof Cocktail]) {
              const ingredientNumber = key.replace('strIngredient', '');
              const measureKey = `strMeasure${ingredientNumber}` as keyof Cocktail;

              if (measureKey in cocktail) {
                return (
                  // List item displaying ingredient and measure
                  <li key={`${key}-${cocktail[key as keyof Cocktail]}`} className='list-none'>
                    {`${cocktail[key as keyof Cocktail]} - ${cocktail[measureKey]}`}
                  </li>
                );
              }
            }
            return null;
          })}
        </ul>
        {/* Instructions section */}
        <p className="text-gray-400 mb-1">Instructions:</p>
        <p className="text-justify">{cocktail.strInstructions}</p>
      </div>
    </article>
  );
};

export default ItemCard;
