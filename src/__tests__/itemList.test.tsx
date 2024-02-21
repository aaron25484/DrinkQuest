import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemList from '../components/ItemList';
import ItemCard from '../components/ItemCard';

interface Cocktail {
  drinks: {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strAlcoholic: string;
    strInstructions: string;
  }[];
}

describe('ItemList', () => {
  test('renders ItemList correctly with different cocktail lists', () => {
    const anotherMockCocktails: Cocktail[] = [
      {
        drinks: [
          {
            idDrink: '1',
            strDrink: 'Mocktail 1',
            strDrinkThumb: 'mocktail1-image.jpg',
            strIngredient1: 'Ingredient 1',
            strIngredient2: 'Ingredient 2',
            strIngredient3: 'Ingredient 3',
            strIngredient4: 'Ingredient 4',
            strIngredient5: 'Ingredient 5',
            strIngredient6: 'Ingredient 6',
            strMeasure1: 'Measure 1',
            strMeasure2: 'Measure 2',
            strMeasure3: 'Measure 3',
            strMeasure4: 'Measure 4',
            strMeasure5: 'Measure 5',
            strMeasure6: 'Measure 6',
            strAlcoholic: 'Alcoholic',
            strInstructions: 'Mocktail 1 instructions',
          },
          {
            idDrink: '3',
            strDrink: 'Mocktail 3',
            strDrinkThumb: 'mocktail3-image.jpg',
            strIngredient1: 'Ingredient 1',
            strIngredient2: 'Ingredient 2',
            strIngredient3: 'Ingredient 3',
            strIngredient4: 'Ingredient 4',
            strIngredient5: 'Ingredient 5',
            strIngredient6: 'Ingredient 6',
            strMeasure1: 'Measure 1',
            strMeasure2: 'Measure 2',
            strMeasure3: 'Measure 3',
            strMeasure4: 'Measure 4',
            strMeasure5: 'Measure 5',
            strMeasure6: 'Measure 6',
            strAlcoholic: 'Alcoholic',
            strInstructions: 'Mocktail 3 instructions',
          }
        ],
      },
    ];


    render(<ItemList cocktails={anotherMockCocktails} />);

    expect(screen.getByText('Mocktail 1 instructions')).toBeInTheDocument();
    expect(screen.getByText('Mocktail 3 instructions')).toBeInTheDocument();

    expect(screen.getByAltText('Mocktail 1')).toBeInTheDocument();
    expect(screen.getByAltText('Mocktail 3')).toBeInTheDocument();

  });


  test('renders ItemCard correctly', () => {
    const mockCocktail: Cocktail = {
      drinks:[],
      idDrink: '2',
      strDrink: 'Mocktail 2',
      strDrinkThumb: 'test-cocktail-image.jpg',
      strIngredient1: 'Ingredient 1',
      strIngredient2: 'Ingredient 2',
      strIngredient3: 'Ingredient 3',
      strIngredient4: 'Ingredient 4',
      strIngredient5: 'Ingredient 5',
      strIngredient6: 'Ingredient 6',
      strMeasure1: 'Measure 1',
      strMeasure2: 'Measure 2',
      strMeasure3: 'Measure 3',
      strMeasure4: 'Measure 4',
      strMeasure5: 'Measure 5',
      strMeasure6: 'Measure 6',
      strAlcoholic: 'Alcoholic',
      strInstructions: 'Mocktail 2 instructions'
    };

    render(<ItemCard cocktail={mockCocktail} />);

    expect(screen.getByAltText('Mocktail 2')).toBeInTheDocument();
    expect(screen.getByText('Mocktail 2')).toBeInTheDocument();
    expect(screen.getByText('Ingredient 1 - Measure 1')).toBeInTheDocument();
    expect(screen.getByText('Mocktail 2 instructions')).toBeInTheDocument();

  });
});
