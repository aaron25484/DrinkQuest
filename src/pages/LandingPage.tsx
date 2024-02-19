import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import ItemList from '../components/ItemList'
import Footer from '../components/Footer'
import { searchByIngredient } from '../api/searchByIngredient'

const LandingPage: React.FC = () => {
  const [cocktails, setCocktails] = useState([]);

  const handleSearch = async (ingredient: string) => {
    try {
      const result = await searchByIngredient(ingredient)
        setCocktails(result)
        console.log(result)
    } catch (error) {  
      console.log(error)
      console.error('Error searching:', error.message)
      setCocktails([])
    }
  }
  return (
    <>
      <Navbar/>
      <Searchbar onSearch={handleSearch} />
      <ItemList cocktails={cocktails} />
      <Footer />
    </>
  )

}

export default LandingPage