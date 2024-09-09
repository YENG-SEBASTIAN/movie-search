import axios from 'axios';

// ACTION TYPES
export const FETCH_POPULAR_MOVIES_REQUEST = 'FETCH_POPULAR_MOVIES_REQUEST';
export const FETCH_POPULAR_MOVIES_SUCCESS = 'FETCH_POPULAR_MOVIES_SUCCESS';
export const FETCH_POPULAR_MOVIES_FAILURE = 'FETCH_POPULAR_MOVIES_FAILURE';

export const FETCH_MOVIE_DETAIL_REQUEST = 'FETCH_MOVIE_DETAIL_REQUEST';
export const FETCH_MOVIE_DETAIL_SUCCESS = 'FETCH_MOVIE_DETAIL_SUCCESS';
export const FETCH_MOVIE_DETAIL_FAILURE = 'FETCH_MOVIE_DETAIL_FAILURE';

export const FETCH_MOVIES_BY_SEARCH_REQUEST = 'FETCH_MOVIES_BY_SEARCH_REQUEST';
export const FETCH_MOVIES_BY_SEARCH_SUCCESS = 'FETCH_MOVIES_BY_SEARCH_SUCCESS';
export const FETCH_MOVIES_BY_SEARCH_FAILURE = 'FETCH_MOVIES_BY_SEARCH_FAILURE';

const API_URL = 'http://localhost:4000/api/movies';

export const fetchPopularMovies = () => async (dispatch) => {
    dispatch({ type: FETCH_POPULAR_MOVIES_REQUEST });

    try {
        const response = await axios.get(`${API_URL}/popular`);
        dispatch({ type: FETCH_POPULAR_MOVIES_SUCCESS, payload: response.data.movies });
    } catch (error) {
        dispatch({ type: FETCH_POPULAR_MOVIES_FAILURE, error: error.message });
    }
};

export const fetchMovieDetail = (movieId) => async (dispatch) => {
    dispatch({ type: FETCH_MOVIE_DETAIL_REQUEST });

    try {
        const response = await axios.get(`${API_URL}/${movieId}`);
        dispatch({ type: FETCH_MOVIE_DETAIL_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_MOVIE_DETAIL_FAILURE, error: error.message });
    }
};

export const fetchMoviesBySearchQuery = (query) => async (dispatch) => {
    dispatch({ type: FETCH_MOVIES_BY_SEARCH_REQUEST });

    try {
        const response = await axios.get(`${API_URL}/search`, {
            params: { search: query }
        });
        dispatch({ type: FETCH_MOVIES_BY_SEARCH_SUCCESS, payload: response.data.movies });
    } catch (error) {
        dispatch({ type: FETCH_MOVIES_BY_SEARCH_FAILURE, error: error.message });
    }
};
