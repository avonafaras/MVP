const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  guests: Number
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;