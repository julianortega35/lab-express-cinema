const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.js')


/* GET home page */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Ironhack Cinema' });
  });




//iteración 3

router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(allTheMoviesFromDB => {
        console.log('Retrieved movies from DB:', allTheMoviesFromDB);
        res.render('movies', {movies: allTheMoviesFromDB });
      })
      .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);
      })
  });


//Iteración 4

router.get('/movies/:moviesId', (req, res, next) => {
    Movie.findById(req.params.moviesId)
      .then(theMovie => {
        res.render('/movie-details', { movies: theMovie});
      })
      .catch(error => {
        console.log('Error while retrieving movies details: ', error);
      })
  });


  module.exports = router;