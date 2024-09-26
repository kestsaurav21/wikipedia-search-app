import React, { useState } from 'react'

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(e){
    e.preventDefault();
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
   
      {/* <button onSubmit={handleSearch}>
            Search
      </button> */}
    </form>
    </>
  )
}

export default SearchBar