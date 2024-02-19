import React from 'react';
import ItemCard from './ItemCard';
import Cocktail from '../interfaces/interfaces';

interface ItemListProps {
  cocktails: Array<Cocktail>;
}
const ItemList: React.FC<ItemListProps> = ({ cocktails }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
      {cocktails.map(cocktail => (
        <div key={cocktail.idDrink} className="mr-4">

          <ItemCard cocktail={cocktail} />
        </div>  
      ))}
    </div>
  );
};

export default ItemList;
