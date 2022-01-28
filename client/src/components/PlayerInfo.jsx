import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PlayerInfo = ({data}) => {
  function createData(matchup, points, min, fgm, tpa, totReb, assists) {
    return { matchup, points, min, fgm, tpa, totReb, assists};
  }
  // const rows = [
  //   {'MATCHUP', 159, 6.0, 24, 4.0, 6, 8, 9}
  // ];
  // createData('MATCHUP', gameData.points, gameData.min, gameData.fgm, gameData.tpa, gameData.totReb, gameData.assists
  // rows = data.forEach(gameData => createData('MATCHUP', gameData.points, gameData.min, gameData.fgm, gameData.tpa, gameData.totReb, gameData.assists))


  var rows = [];

  if (data && data.hasOwnProperty('data') && data !== 'undefined') {
    rows = data.data.map(gameData => createData('MATCHUP', gameData.points, gameData.min, gameData.fgm, gameData.tpa, gameData.totReb, gameData.assists))
  }
  ;
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>MATCHUP</TableCell>
          <TableCell align="right">Points</TableCell>
          <TableCell align="right">Min</TableCell>
          <TableCell align="right">fgm/fga/fgp</TableCell>
          <TableCell align="right">tpa/tpm</TableCell>
          <TableCell align="right">totReb</TableCell>
          <TableCell align="right">assists</TableCell>
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
            <TableCell align="right">{row.points}</TableCell>
            <TableCell align="right">{row.min}</TableCell>
            <TableCell align="right">{row.fgm}</TableCell>
            <TableCell align="right">{row.tpa}</TableCell>
            <TableCell align="right">{row.totReb}</TableCell>
            <TableCell align="right">{row.assists}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>



  )
}

export default PlayerInfo