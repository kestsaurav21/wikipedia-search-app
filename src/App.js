import React, { useState } from 'react'
import logo from './logo.png'
import './app.css'
import SearchBar from './components/SearchBar'
import { search } from './api'
import ArticleList from './components/ArticleList'

const App = () => {

  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const handleSearch = async (searchTerm) => {

    setIsLoading(true);

    try{
      const results = await search(searchTerm);
      setArticle(results);
      console.log(article);
      
    }catch(err){
      setError('Something went wrong. Please try again.')
    }finally{
      setIsLoading(false);
    }
    
   

  }
  

  
  return (    
    <>
    <header>
        <img src={logo} alt='wikipedia' id='logo'/>
        <h1>Wikipedia Search</h1>
    </header>
    <SearchBar onSearch={handleSearch}/>
    <main id='searchResult'>
      {isLoading && <p>Loading....</p>}
      {error && <p className='error'>{error}</p>}
      <ArticleList articles={article}/>
    </main>

    </>
    
    
  )
}

export default App;
