import React from 'react';
import ItemCard from './ItemCard';
import Cocktail from '../types/types';

interface ItemListProps {
  cocktails: Cocktail[];
}

const ItemList: React.FC<ItemListProps> = ({ cocktails }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mx-3">
      {cocktails.map((category, index) => (
        <div key={index}>
          {Array.isArray(category.drinks) && category.drinks.map(cocktail => (
            <ItemCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
