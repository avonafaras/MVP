const pool = require('./db_connection.js');

module.exports = {

  //ALL THE PLAYERS IN DB
  // saveToDb(data) {
  //   let sqlQuery = '';
  //   //console.log("data from Postman: ", data)
  //   let count = 0;
  //  for (var i = 0; i < data.length; i++) {
  //    count++;
  //     sqlQuery = `INSERT INTO players (id, firstName, lastName, teamId,
  //       yearsPro, country, dateOfBirth, collegeName, affiliation, startNba, heightInMeters, weightInKilograms)
  //       VALUES (${data[i].playerId}, '${data[i].firstName}', '${data[i].lastName}', ${data[i].teamId},'${data[i].yearsPro}', '${data[i].country}', '${data[i].dateOfBirth}', '${data[i].collegeName}', '${data[i].affiliation}', '${data[i].startNba}', '${data[i].heightInMeters}', '${data[i].weightInKilograms}')`
  //       pool.query(sqlQuery)
  //   }


  saveStatsToDb(allData) {
    let values =
    allData
    .filter(data => (data.gameId &&
      data.teamId &&
      data.points &&
      data.pos &&
      data.min &&
      data.fgm &&
      data.fga &&
      data.fgp &&
      data.ftm &&
      data.fta &&
      data.ftp &&
      data.tpm &&
      data.tpa &&
      data.tpp &&
      data.offReb &&
      data.defReb &&
      data.totReb &&
     data.assists &&
     data.pFouls &&
     data.steals &&
     data.turnovers &&
     data.blocks &&
     data.plusMinus &&
     data.playerId))
     .map(data => (
      (`(${data.gameId}, ${data.teamId}, ${data.points}, '${data.pos}', '${data.min}', ${data.fgm}, ${data.fga}, ${data.fgp}, ${data.ftm}, ${data.fta}, ${data.ftp}, ${data.tpm}, ${data.tpa}, ${data.tpp}, ${data.offReb}, ${data.defReb}, ${data.totReb},
      ${data.assists}, ${data.pFouls}, ${data.steals}, ${data.turnovers}, ${data.blocks}, ${data.plusMinus}, ${data.playerId})`)
    ))
    let sqlQuery = `INSERT INTO player_statistics (gameid, teamid, points, pos, minutes, fgm, fga, fgp, ftm, fta, ftp, tpm, tpa, tpp, offreb, defreb, totreb,
        assists, pfouls, steals, turnovers, blocks, plusminus, playerid)
        VALUES ${values.join(',')}`

  pool.query(sqlQuery)
   },


  getAllPlayers() {
   return pool.query('SELECT * FROM players')
  },

  getTopPlayers() {
    return pool.query('SELECT * FROM top_scorers')
  },

  getPersonalStats(playerId) {
    return pool.query(` SELECT * FROM player_statistics p
    INNER JOIN game_statistics g ON p.gameid = g.gameId
    INNER JOIN players pl ON p.playerid = pl.id
    WHERE playerid=${playerId}`)
  },

  // saveGamesToDb(data) {
  //   let sqlQuery = `INSERT INTO game_statistics(seasonyear, league, gameid, vteam_teamid, vteam_shortname, vteam_fullname, vteam_logo, vteam_score,
  //     hteam_teamid, hteam_shortname, hteam_fullname, hteam_logo, hteam_score)
  //     VALUES(${data.seasonYear}, ${data.league}, ${data.gameId}, ${data.vTeam[teamId]},
  //       ${data.vTeam[shortName]}, ${data.vTea[fullName]}, ${data.vTeam[logo]}, ${data.vTeam[score]},
  //       ${data.hTeam[teamId]}, ${data.hTeam[shortName]}, ${data.hTeam[fullName]}, ${data.hTeam[logo]}, $data.hTeam[score])`;
  //       console.log("sqlquery: ", sqlQuery);
  //       pool.query(sqlQuery)
  // }

  saveGamesToDb(allData) {
    let values =
    allData
    .filter(data => data.hTeam && data.vTeam && data.hTeam.score && data.vTeam.score && data.hTeam.score.points && data.vTeam.score.points)
    // .filter(data => (data.seasonYear &&
    //   data.gameId &&
    //   data.league &&
    //   data.vTeam.teamId &&
    //   data.vTeam.shortName &&
    //   data.vTeam.fullName &&
    //   data.vTeam.logo &&
    //   data.vTeam.score &&
    //   data.hTeam.shortName &&
    //   data.hTeam.fullName &&
    //   data.hTeam.logo &&
    //   data.hTeam.score))
     .map(data => (
      (`(${data.seasonYear}, '${data.league}', ${data.gameId}, ${data.vTeam.teamId}, '${data.vTeam.shortName}',
      '${data.vTeam.fullName}', '${data.vTeam.logo}', ${data.vTeam.score.points}, ${data.hTeam.teamId}, '${data.hTeam.shortName}', '${data.hTeam.fullName}', '${data.hTeam.logo}', ${data.hTeam.score.points})`)));



    let sqlQuery = `INSERT INTO game_statistics (seasonyear, league, gameid, vteam_teamid, vteam_shortname, vteam_fullname, vteam_logo, vteam_score,hteam_teamid, hteam_shortname, hteam_fullname, hteam_logo, hteam_score)
        VALUES ${values.join(',')}`

        console.log("sqlQuery:", sqlQuery);

        return pool.query(sqlQuery)
   },
   getFavoritePlayers() {
     return pool.query(`SELECT * FROM myplayers`)
   },

   addPlayer(id) {
     return pool.query(`INSERT INTO myplayers (playerid) VALUES(${id})`)
   }

}