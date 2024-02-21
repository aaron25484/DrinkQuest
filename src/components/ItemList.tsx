import React from 'react';
import ItemCard from './ItemCard';
import Cocktail from '../types/types';

interface ItemListProps {
  cocktails: Cocktail[];
}

const ItemList: React.FC<ItemListProps> = ({ cocktails }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mx-3 flex-grow">
      {cocktails.map((category, index) => (
        <div key={index}>
          {Array.isArray(category.drinks) && category.drinks.map(cocktail => (
            <ItemCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default ItemList;
