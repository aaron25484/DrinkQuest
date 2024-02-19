import React from 'react';
import Cocktail from '../interfaces/interfaces';

const ItemCard = ({ cocktail }) => {
  return (
    <div className="item-card bg-white shadow-lg rounded-md p-6">
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="w-full h-48 object-contain mb-4 rounded-md"
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
