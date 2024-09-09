import {
    FETCH_POPULAR_MOVIES_REQUEST,
    FETCH_POPULAR_MOVIES_SUCCESS,
    FETCH_POPULAR_MOVIES_FAILURE,
    FETCH_MOVIE_DETAIL_REQUEST,
    FETCH_MOVIE_DETAIL_SUCCESS,
    FETCH_MOVIE_DETAIL_FAILURE,
    FETCH_MOVIES_BY_SEARCH_REQUEST,
    FETCH_MOVIES_BY_SEARCH_SUCCESS,
    FETCH_MOVIES_BY_SEARCH_FAILURE
  } from '../actions/movieActions';
  
  const initialState = {
    popularMovies: [],
    movieDetail: null,
    searchResults: [],
    loading: false,
    error: null
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POPULAR_MOVIES_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_POPULAR_MOVIES_SUCCESS:
        return { ...state, loading: false, popularMovies: action.payload };
      case FETCH_POPULAR_MOVIES_FAILURE:
        return { ...state, loading: false, error: action.error };
        
      case FETCH_MOVIE_DETAIL_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_MOVIE_DETAIL_SUCCESS:
        return { ...state, loading: false, movieDetail: action.payload };
      case FETCH_MOVIE_DETAIL_FAILURE:
        return { ...state, loading: false, error: action.error };
        
      case FETCH_MOVIES_BY_SEARCH_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_MOVIES_BY_SEARCH_SUCCESS:
        return { ...state, loading: false, searchResults: action.payload };
      case FETCH_MOVIES_BY_SEARCH_FAILURE:
        return { ...state, loading: false, error: action.error };
  
      default:
        return state;
    }
  };
  
  export default movieReducer;
  