import React from 'react';
import Cocktail from '../types/types';

interface ItemCardProps {
  cocktail: Cocktail;
}

const ItemCard: React.FC<ItemCardProps> = ({ cocktail }) => {
  return (
    <div className="item-card bg-white font-oswald bg-opacity-10 shadow-lg rounded-2xl p-3 h-full">
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="w-full object-fill mb-4 rounded-3xl shadow-2xl"
      />
      <h3 className="text-xl text-center font-bold mb-2">{cocktail.strDrink}</h3>
      <div className="text-container overflow-y-auto">
        <p className="text-gray-600 mb-1">Ingredients:</p>
        <ul className="list-none mb-3">
          {Object.keys(cocktail).map((key) => {
            if (key.startsWith('strIngredient') && cocktail[key as keyof Cocktail]) {
              const ingredientNumber = key.replace('strIngredient', '');
              const measureKey = `strMeasure${ingredientNumber}` as keyof Cocktail;

              if (measureKey in cocktail) {
                return (
                  <li key={`${key}-${cocktail[key as keyof Cocktail]}`} className='list-none'>
                    {`${cocktail[key as keyof Cocktail]} - ${cocktail[measureKey]}`}
                  </li>
                );
              }
            }
            return null;
          })}
        </ul>
        <p className="text-gray-600 mb-1">Instructions:</p>
        <p className="text-gray-700 text-justify">{cocktail.strInstructions}</p>
      </div>
    </div>
  );
};

export default ItemCard;
