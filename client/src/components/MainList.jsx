import React from 'react';
import MainListEntry from './MainListEntry.jsx';

const MainList = ({playersIdsList}) => {
  return(<div className="container">
    <ul>
      {
        playersIdsList.map(playerId => <MainListEntry playerId={playerId} />)
      }
    </ul>
  </div>)
}

export default MainList