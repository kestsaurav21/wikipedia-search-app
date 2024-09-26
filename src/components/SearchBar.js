import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {

  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    onSearch(searchTerm);
  }

  return (
    
    <>

      <form onSubmit={handleSubmit}>
          <input
              type='search'
              name='searchTerm'
              id='searchTerm'
              placeholder='Enter to search...'
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
              
          />
      
          <button id='submit'>
                Search
          </button>
        </form>
    </>
  )
}

export default SearchBar