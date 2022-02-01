import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import PlayerInfo from './PlayerInfo.jsx'

const PlayersListEntry = ({data, playersIdsList, setPlayersIdsList}) => {
  const [isPlayerClicked, setPlayerClicked] = useState(false);
  const [sortedData, setSortedData] = useState([])


  const handleClick = (id) => {
    console.log('id:', id)
    setPlayersIdsList([id])
    // axios.get(`/statistics/players/playerId/${id}`)
    // .then((data) => {
    //   setSortedData(data)
    // })
    // .then(() => {
    //   setPlayerClicked(!isPlayerClicked)
    // })
  }
  return (

      <li>
        <div className="container">
          <h2 onClick={() => handleClick(data.id)}>{data.firstname} {data.lastname}</h2>
          {/* {isPlayerClicked ?
          <PlayerInfo  data={sortedData} />
          : null} */}
          </div>
      </li>
      )

}

// <p>Country: {data.country}</p>
// <p>Date of birth: {data.dateofbirth}</p>
// <p>College: {data.collegename}</p>
// <p>Affiliation: {data.affiliation}</p>
// <p>Start NBA: {data.startnba}</p>
// <p>Height: {data.heightinmeters} m</p>
// <p>Weight: {data.weightinkilograms} kg</p>

export default PlayersListEntry;