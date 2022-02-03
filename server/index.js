const express = require('express');
const app = express();
const models = require('./models.js');
const PORT = 3000 || process.env.PORT;
const db = require('./../database/index.js')

app.use(express.static('client/dist'));
app.use(express.json());

app.get('/players/league/standard', (req, res) => {
  db.getAllPlayers()
  .then((response) => {
    res.status(200).send(response.rows)
  })
  .catch((err) => {
    res.status(404).send(err);
  });
})

app.get('/games/league/standard/2021', (req, res) => {
  models.getAllGamesStatistics()
  .then((response) => {
    console.log("response.data.api.games:", response.data.api.games);
    db.saveGamesToDb(response.data.api.games)
    .then(() => console.log('success'))
    .catch(err => console.log(err))
  })
  .catch((err) => {
    console.log("err:", err);
    res.status(404).send(err);
  });
})

app.get('/statistics/players/playerId/:id', (req, res) => {
  var id = req.params.id;
  db.getPersonalStats(id)
  .then((response) => {
    var stats = response.rows;
    var sortedStats =
    stats
    // .filter(data => (data.gameId && data.teamId && data.points && data.pos && data.min && data.fgm && data.fga && data.fgp && data.ftm && data.fta && data.ftp && data.tpm && data.tpa && data.tpp && data.offReb &&
    // data.defReb && data.totReb && data.assists && data.pFouls && data.steals && data.turnovers && data.blocks && data.plusMinus && data.playerId))
    .sort((a, b) => b.gameId - a.gameId );

    res.status(200).send(sortedStats.slice(0, 5));

  //db.saveStatsToDb(response.data.api.statistics)
  // .then((data) => {
  //   res.status(200).send(data);
  // })
  // .err(() => {
  //   console.log(err)
  // })
  })
  .catch(err => console.log(err))

})

app.get('/topplayers', (req,res) => {
  db.getTopPlayers()
  .then((response) => {
    res.status(200).send(response.rows)
  })
  .catch(err => res.status(404).send(err))
})

app.get('/myplayers', (req, res) => {
  db.getFavoritePlayers()
  .then((data) => res.status(200).send(data))
  .catch((err) => res.status(404).send(err))
})

app.post('/myplayers', (req, res) => {
  db.addPlayer(req.body.id)
  .then(() => console.log('success'))
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

