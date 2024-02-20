import React from 'react';
import ItemCard from './ItemCard';
import Cocktail from '../types/types';

interface ItemListProps {
  cocktails: Array<{ data: { drinks: Array<Cocktail> } }>;
}

const ItemList: React.FC<ItemListProps> = ({ cocktails }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
      {cocktails.map(cocktailData => (
        <div key={cocktailData.data.drinks[0].idDrink} className="mr-4">
          <ItemCard cocktail={cocktailData.data.drinks[0]} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
