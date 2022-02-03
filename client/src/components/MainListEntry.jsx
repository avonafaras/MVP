import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MyCabinet from './MyCabinet.jsx';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const MainListEntry = ({playerId}) => {
  const [sortedData, setSortedData] = useState([])
  const [rows, setRows] = useState([]);
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('')

  useEffect(() => {
    axios.get(`/statistics/players/playerId/${playerId}`)
    .then((data) => {
      setSortedData(data)
      setName(data.data[0].firstname + ' ' +data.data[0].lastname  )
      setPicture(data.data[0].pictures)

      function createData(vTeam, hTeam, points, tpa, totReb, assists) {
        return { vTeam, hTeam, points, tpa, totReb, assists};
      }

      if (data && data.hasOwnProperty('data') && data !== 'undefined') {
        var rows1 = data.data.map(gameData => {
          return createData( gameData.vteam_logo, gameData.hteam_logo, gameData.points, (gameData.tpa/gameData.tpm).toFixed(2), gameData.totReb, gameData.assists)}
          )
        setRows(rows1);
      }
    })
  }, [])

  const addToFav = () => {
    axios.post('/myplayers', {id: playerId})
  }

  return (
      <div className="container">
      <Grid container spacing={0}>
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image={picture}
        alt="k"
        sx={{
          backgroundColor: "#003049",
          fontFamily: "Bebas Neue, cursive"
          }
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={addToFav}>Add to favorites</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={8}>
    <h2>Last 5 games stats</h2>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell align="left">vTeam</TableCell>
          <TableCell align="left">hTeam</TableCell>
          <TableCell align="right">Points</TableCell>
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
            <TableCell  component="th" scope="row">
              <img src={row.vTeam} align="left" width="45px" height="40px"/>
            </TableCell>
            <TableCell  component="th" align="left" scope="row">
              <img src={row.hTeam} width="45px" height="40px"/>
            </TableCell>
            <TableCell align="right">{row.points}</TableCell>
            <TableCell align="right">{row.tpa}</TableCell>
            <TableCell align="right">{row.totReb}</TableCell>
            <TableCell align="right">{row.assists}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </Grid>
  </Grid>

    </div>



  )
}

export default MainListEntry;