import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TopPlayers = () => {
  const [players, setPlayers] = useState([]);


useEffect(() => {
  axios.get('/topplayers')
  .then((players) => {
  setPlayers(players.data);
  })
}, [])

//DONT FORGET TO CHANGE! IT'S MOCKED FOR DEMO. API DIDNT WORK NEED TO IMPROVE FOR FINAL PRESENTATION

function createData(name, team, pg, points) {
  return { name, team, pg, points };
}

const rows = [
  createData('1 Kevin Durant', 'BKN' , 36, 29.3 ),
  createData('2 LeBron JAmes', 'LAL', 36, 29.1),
  createData('3 Joel Embiid', 'PHI', 36, 29.0),
  createData('4 Giannis Antekoumpo', 'MIL', 36, 28.6),
  createData('5 Trae Young', 'ATL', 36, 27.7),
];


  return (
    <div className="container">
      <div className="contaiter"><h2> Top Scorers Last Week </h2></div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell># Player</TableCell>
            <TableCell align="right">Team</TableCell>
            <TableCell align="right">PG</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.team}</TableCell>
              <TableCell align="right">{row.pg}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )

}

export default TopPlayers