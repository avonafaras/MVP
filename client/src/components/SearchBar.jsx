import React, { useState, useEffect} from 'react';


const SearchBar = ({players, setSearchTerm, searchTerm, setSearchResults, searchResults}) => {
  const handleChange = event => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (players.length > 0) {
      const searchTermLowerCased = searchTerm.toString().toLowerCase();
      const filtered = searchTermLowerCased.length >= 3 ? players.filter(item => item.lastname.toLowerCase().includes(searchTermLowerCased)|| item.firstname.toLowerCase().includes(searchTermLowerCased)) : null;
      setSearchResults(filtered);
    }
  }, [searchTerm]);


  return (
      <div className="qaItem">
      <div className="searchContainer">
        <input className="searchInput" type="text" value={searchTerm} onChange={handleChange} placeholder="Enter player's name" />

      </div>
    </div>
    )

}

export default SearchBar;