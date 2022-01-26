import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx'

const AllPlayersList = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get('/players/league/standard')
    .then((players) => {
      setPlayers(players.data);
    })
  }, [])

  return (
    <div><SearchBar players={players} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchResults={searchResults} setSearchResults={setSearchResults} /></div>
    // <div>
    //     <ul>{
    //       searchResults.map((item, index) => (
    //         <div>{item.lastName}</div>
    //       ))
    //     }
    //     </ul>
    //   </div>
  )
}

export default AllPlayersList;