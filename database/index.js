const pool = require('./db_connection.js');

module.exports = {
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




  // }

  getAllPlayers() {
   return pool.query('SELECT * FROM players')
  }
}