import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const MyCabinet = () => {
const [isClicked, setClicked] = useState(false);
const [sortedData, setSortedData] = useState([])
const [rows, setRows] = useState([])


const handleClick = () => {
  setClicked(!isClicked);
}

useEffect(() => {
  axios.get('/statistics/players/playerId/4')
  .then((data) => {
    setSortedData(data)

    function createData(matchup, points, min, fgm, tpa, totReb, assists) {
      return { matchup, points, min, fgm, tpa, totReb, assists};
    }

    if (data && data.hasOwnProperty('data') && data !== 'undefined') {
      var rows1 = data.data.map(gameData => createData('MATCHUP', gameData.points, gameData.min, gameData.fgm, gameData.tpa, gameData.totReb, gameData.assists))
      setRows(rows1);
    }


  })
})


  return(
    <div className="container">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image="./203500.png"
        alt="adams"
        sx={{
          backgroundColor: "#003049",
          fontFamily: "Bebas Neue, cursive"
          }
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Steve Adams
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date of Birth: 1993-07-20
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Country: New Zealand
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Start Nba: 2013
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Height: 2.11m
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Weight: 120.2kg
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Team: Memphis Grizzlies
            </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Show Stats</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>



    <div className='divv'>
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
  </div>

    </div>

  )
}


export default MyCabinet