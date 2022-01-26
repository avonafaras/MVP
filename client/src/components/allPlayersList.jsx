import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const AllPlayersList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('/players/league/standard')
    .then((players) => {
      setPlayers(players.data);
    })
  }, [])

//  var playersIds

  return (
    <div>Heyy</div>
  )
}

export default AllPlayersList;