import React from 'react';
import ItemCard from './ItemCard';
import Cocktail from '../types/types';

/**
 * Props for the ItemList component.
 * @typedef {Object} ItemListProps
 * @property {Cocktail[]} cocktails - The array of cocktails to display.
 */

interface ItemListProps {
  cocktails: Cocktail[];
}
/**
 * Functional component representing a list of items (cocktails) displayed using cards.
 * @component
 * @param {ItemListProps} props - The props for the ItemList component.
 */
const ItemList: React.FC<ItemListProps> = ({ cocktails }) => {
  /**
   * Render the ItemList component.
   */
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mx-3 flex-grow">
      {cocktails.map((category, index) => (
        <div key={index}>
          {Array.isArray(category.drinks) && category.drinks.map(cocktail => (
            // ItemCard component displaying details of each cocktail
            <ItemCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default ItemList;
