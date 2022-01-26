const axios = require('axios');

  const url = 'https://api-nba-v1.p.rapidapi.com';
  const headers =  {
    'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
    'x-rapidapi-key': ''
  }

  module.exports = {
    getAllPlayers() {
      return axios.get(`${url}/players/league/standard`, { headers });
    },

    getAllGamesStatistics() {
      return axios.get(`${url}/games/league/standard/2021`, {headers});
    }

  }