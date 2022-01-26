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
    var data = response.data['api']['games']
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(404).send(err);
  });
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

