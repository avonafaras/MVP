const express = require('express');
const app = express();

const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.json());

app.get('/api/players', (req, res) => {
  var result = {
      "api": {
          "status": 200,
          "message": "GET players/league/standard",
          "results": 1853,
          "filters": [
              "playerId",
              "teamId",
              "league",
              "country",
              "lastName",
              "firstName"
          ],
          "players": [
              {
                  "firstName": "Alex",
                  "lastName": "Abrines",
                  "teamId": null,
                  "yearsPro": "0",
                  "collegeName": "",
                  "country": "Spain",
                  "playerId": "1",
                  "dateOfBirth": "1993-08-01",
                  "affiliation": "Spain/Spain",
                  "startNba": "2016",
                  "heightInMeters": "",
                  "weightInKilograms": "",
                  "leagues": {
                      "standard": {
                          "jersey": "8",
                          "active": "0",
                          "pos": ""
                      }
                  }
              },
              {
                  "firstName": "Quincy",
                  "lastName": "Acy",
                  "teamId": "28",
                  "yearsPro": "6",
                  "collegeName": "Baylor",
                  "country": "USA",
                  "playerId": "2",
                  "dateOfBirth": "1990-10-06",
                  "affiliation": "Baylor/USA",
                  "startNba": "2012",
                  "heightInMeters": "2.01",
                  "weightInKilograms": "108.9",
                  "leagues": {
                      "standard": {
                          "jersey": "4",
                          "active": "1",
                          "pos": "F"
                      }
                  }
              },
              {
                  "firstName": "Jordan",
                  "lastName": "Adams",
                  "teamId": "19",
                  "yearsPro": "1",
                  "collegeName": "UCLA",
                  "country": "United States",
                  "playerId": "3",
                  "dateOfBirth": "1994-07-08",
                  "affiliation": "",
                  "startNba": "2014",
                  "heightInMeters": "1.96",
                  "weightInKilograms": "94.8",
                  "leagues": {
                      "standard": {
                          "jersey": "3",
                          "active": "",
                          "pos": "G"
                      }
                  }
              },
              {
                  "firstName": "Steven",
                  "lastName": "Adams",
                  "teamId": "19",
                  "yearsPro": "8",
                  "collegeName": "Pittsburgh",
                  "country": "New Zealand",
                  "playerId": "4",
                  "dateOfBirth": "1993-07-20",
                  "affiliation": "Pittsburgh/New Zealand",
                  "startNba": "2013",
                  "heightInMeters": "2.11",
                  "weightInKilograms": "120.2",
                  "leagues": {
                      "standard": {
                          "jersey": "4",
                          "active": "1",
                          "pos": "C"
                      }
                  }
              },
              {
                  "firstName": "LaMarcus",
                  "lastName": "Aldridge",
                  "teamId": "4",
                  "yearsPro": "15",
                  "collegeName": "Texas-Austin",
                  "country": "USA",
                  "playerId": "8",
                  "dateOfBirth": "1985-07-19",
                  "affiliation": "Texas-Austin/USA",
                  "startNba": "2006",
                  "heightInMeters": "2.11",
                  "weightInKilograms": "113.4",
                  "leagues": {
                      "standard": {
                          "jersey": "21",
                          "active": "1",
                          "pos": "C-F"
                      }
                  }
              },
            ],
          }
}

res.status(200).send(result);
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})