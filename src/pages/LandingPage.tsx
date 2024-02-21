import React, { useState } from 'react'
import Searchbar from '../components/Searchbar'
import ItemList from '../components/ItemList'
import Footer from '../components/Footer'
import { searchByIngredient } from '../api/apiCalls'
import Cocktail from '../types/types'

const LandingPage: React.FC = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  const handleSearch = async (ingredient: string) => {
    try {
      const result = await searchByIngredient(ingredient)
      const extractedCocktails = result.map(response => response.data);
        setCocktails(extractedCocktails)
    } catch (error) {  
      console.error('Error searching:', (error as Error).message)
      setCocktails([])
    }
  }
  return (
    <>
      <Searchbar onSearch={handleSearch} />
      <ItemList cocktails={cocktails} />
      <Footer />
    </>
  )

}

export default LandingPage