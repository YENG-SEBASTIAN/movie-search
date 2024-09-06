const axios = require('axios');

// Base URL for TMDB API
const tmdbApiUrl = 'https://api.themoviedb.org/3';

// Get a list of all popular movies
exports.getAllMovies = async (req, res) => {
  try {
    // Make an API call to TMDB to get popular movies
    const response = await axios.get(`${tmdbApiUrl}/movie/popular`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
      },
    });

    if (response.data.results.length === 0) {
      return res.status(404).json({
        status: 404,
        message: 'No popular movies found.',
      });
    }

    // Return the list of popular movies
    res.status(200).json({
      status: 200,
      message: 'Popular movies fetched successfully',
      movies: response.data.results, // List of popular movies
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Server error while fetching popular movies',
    });
  }
};

// Search for a movie by title
exports.searchMovies = async (req, res) => {
  const { search } = req.query;

  // If no search query is provided, return an error
  if (!search) {
    return res.status(400).json({
      status: 400,
      message: 'Please provide a search query for movies.',
    });
  }

  try {
    // Make an API call to TMDB to search for movies by title
    const response = await axios.get(`${tmdbApiUrl}/search/movie`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query: search,
      },
    });

    if (response.data.results.length === 0) {
      return res.status(404).json({
        status: 404,
        message: 'No movies found for this search query.',
      });
    }

    // Return the list of searched movies
    res.status(200).json({
      status: 200,
      message: 'Movies fetched successfully',
      movies: response.data.results, // List of movies
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Server error while searching for movies',
    });
  }
};

// Get the detailed information of a selected movie
exports.getMovieDetails = async (req, res) => {
  const { movieId } = req.params;

  // If no movie ID is provided, return an error
  if (!movieId) {
    return res.status(400).json({
      status: 400,
      message: 'Please provide a valid movie ID.',
    });
  }

  try {
    // Make an API call to TMDB to get movie details by movie ID
    const response = await axios.get(`${tmdbApiUrl}/movie/${movieId}`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
      },
    });

    if (!response.data) {
      return res.status(404).json({
        status: 404,
        message: 'Movie details not found.',
      });
    }

    // Return the movie details
    res.status(200).json({
      status: 200,
      message: 'Movie details fetched successfully',
      movie: response.data, // Movie details
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Server error while fetching movie details',
    });
  }
};
