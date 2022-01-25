import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';

const AllPlayersList = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios.get('/api/players')
    .then((players) => {
      var result = players.data['api']['players'];
      setPlayers(result)
    })
  }, [])

  return (
    <div>Hey</div>
  )
}

export default AllPlayersList;