import React, { useState } from 'react'
import logo from './logo.png'
import './app.css'
import SearchBar from './components/SearchBar'

const App = () => {

  const [article, setArticle] = useState([]);
  

  const handleSearch = () => {

  }
  




  
  return (    
    <>
    <header>
        <img src={logo} alt='wikipedia' id='logo'/>
        <h1>Wikipedia Search</h1>
    </header>
    <SearchBar onSearch={handleSearch}/>
    <main>
    </main>

    </>
    
    
  )
}

export default App;
