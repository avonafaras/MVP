import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import PlayersListEntry from './PlayersListEntry.jsx';

const AllPlayersList = ({playersIdsList, setPlayersIdsList}) => {
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
    <div>
    <div className="container"> <SearchBar players={players} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchResults={searchResults} setSearchResults={setSearchResults} /> </div>
     <div>
     {searchResults ?
        <ul>{
          searchResults.map((item, index) => {
            return (
              <div key={index}>
                <PlayersListEntry data={item} playersIdsList={playersIdsList} setPlayersIdsList={setPlayersIdsList}/>
              </div>
            )
          })
        }
        </ul>
        : null}
      </div>
      </div>
  )
}

export default AllPlayersList;