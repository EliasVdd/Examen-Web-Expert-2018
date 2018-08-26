// server.js - app voor artiesten in MongoDB
var express = require('express'),
    parser = require('body-parser'),
    db = require('./database'),
    Artist = require('./models/artists');

var app = express();
app.use(parser.json());

// CORS
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

// route voor getArtists()
app.get('/apiv1/artists', function(req, res){
    Artist.find(function (err, artists) {
        if (err) {
            return next(err);
        }
        res.json(artists);
    });
});

// route voor getArtist(id)
app.get('/apiv1/artists/:id', function(req, res){
    const id = req.params.id;

    Artist.find({_id: id}, function (err, artists) {
        if (err) {
            return next(err);
        }
        res.json(artists);
    })
});

// route voor addArtist(obj)
app.post('/apiv1/artists', function(req, res){
    let input = req.body;

    let newArtist = new Artist({
        first: input.first,
        last: input.last,
        genre: input.genre,
        birthdate: input.birthdate,
    });

    newArtist.save(function(err){
        if (err) {
            return handleError(err);
        }
        res.json(newArtist);
    });
});

// route voor deleteArist(id)
app.delete('/apiv1/artists/:id', function(req, res){
    const id = req.params.id;

    Artist.remove({_id: id}, function (err, removed) {
        if (err) {
            return next(err);
        }
        res.json(removed);
    });
});

// opstarten server
app.listen(3000, function () {
    console.log('Server started on http://localhost:3000');
});
