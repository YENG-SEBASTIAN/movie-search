const express = require('express');
const {
  getAllMovies,
  searchMovies,
  getMovieDetails,
} = require('../controllers/movieController');
const router = express.Router();

/**
 * @swagger
 * /api/movies/popular:
 *   get:
 *     summary: Fetch a list of all popular movies
 *     description: Retrieve a list of the current popular movies from TMDB.
 *     responses:
 *       200:
 *         description: Popular movies fetched successfully
 *       500:
 *         description: Internal server error.
 */
router.get('/popular', getAllMovies);

/**
 * @swagger
 * /api/movies/search:
 *   get:
 *     summary: Search for a movie by title
 *     description: Use a search query to retrieve a list of movies from TMDB API.
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for movie titles
 *     responses:
 *       200:
 *         description: Movies fetched successfully
 *       400:
 *         description: Bad request. Search query is required.
 *       500:
 *         description: Internal server error.
 */
router.get('/search', searchMovies);

/**
 * @swagger
 * /api/movies/{movieId}:
 *   get:
 *     summary: Fetch detailed information about a movie
 *     description: Get detailed information about a specific movie using its TMDB movie ID.
 *     parameters:
 *       - in: path
 *         name: movieId
 *         schema:
 *           type: string
 *         required: true
 *         description: TMDB Movie ID
 *     responses:
 *       200:
 *         description: Movie details fetched successfully
 *       400:
 *         description: Bad request. Movie ID is required.
 *       404:
 *         description: Movie not found.
 *       500:
 *         description: Internal server error.
 */
router.get('/:movieId', getMovieDetails);

module.exports = router;
