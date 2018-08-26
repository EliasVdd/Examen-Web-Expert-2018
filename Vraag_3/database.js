// database.js - logica voor verbinden MongoDB
// Connectie schrijven met melding "mongoose connected"
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/artistlist', function() {
    console.log('Connected to mongo!');
});

module.exports = db;
