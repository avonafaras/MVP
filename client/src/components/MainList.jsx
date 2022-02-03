import React from 'react';
import MainListEntry from './MainListEntry.jsx';

const MainList = ({playersIdsList, setPlayersIdsList, handleClick}) => {
  return(<div className="container">
    <ul>
      {
        playersIdsList.map(playerId => <MainListEntry handleClick={handleClick} playerId={playerId} playersIdsList={playersIdsList} setPlayersIdsList={setPlayersIdsList} />)
      }
    </ul>
  </div>)
}

export default MainList