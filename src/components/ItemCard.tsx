import React from 'react';
import Cocktail from '../types/types';

interface ItemCardProps {
  cocktail: Cocktail;
}

const ItemCard: React.FC<ItemCardProps> = ({ cocktail }) => {
  return (
    <div className="item-card bg-white bg-opacity-10 shadow-lg rounded-2xl p-3">
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="w-full h-48 object-contain mb-4 rounded-3xl"
      />
      <h3 className="text-2xl font-bold mb-2">{cocktail.strDrink}</h3>
      <p className="text-gray-600 mb-4">Ingredients:</p>
      <ul className="list-none mb-4">
        {Object.keys(cocktail).map((key) => {
          if (key.startsWith('strIngredient') && cocktail[key]) {
            const ingredientNumber = key.replace('strIngredient', '');
            const measureKey = `strMeasure${ingredientNumber}`;
            return (
              <li key={key} className='list-none'>
                {cocktail[key]} - {cocktail[measureKey]}
              </li>
            );
          }
          return null;
        })}
      </ul>
      <p className="text-gray-700 text-justify">{cocktail.strInstructions}</p>
    </div>
  );
};

export default ItemCard;
