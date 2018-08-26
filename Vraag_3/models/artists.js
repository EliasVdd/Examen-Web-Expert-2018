// artists.js : Model voor artists in MongoDB
var mongoose = require('mongoose');

var Artist = mongoose.model('Artist',{
    first: { type: String, required: true },
    last: { type: String, required: true },
    genre: { type: String, required: true },
    birthdate: { type: Date, required: true },
});

module.exports = Artist;

