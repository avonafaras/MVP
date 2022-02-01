const axios = require('axios');
const config = require('../config.js');

  const url = 'https://api-nba-v1.p.rapidapi.com';
  const headers =  {
    'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
    'x-rapidapi-key': `${config.token}`
  }

  module.exports = {
    getAllPlayers() {
      return axios.get(`${url}/players/league/standard`, { headers });
    },

    getAllGamesStatistics() {
      return axios.get(`${url}/games/league/standard/2021`, {headers});
    },

    getPersonalStats(playerId) {
      return axios.get(`${url}/statistics/players/playerId/${playerId}`, {headers})
    }

    // getAllTeamsStatistics() {

    // }

  }