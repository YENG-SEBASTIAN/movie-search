import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetail } from '../redux/actions/movieActions';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const { movieDetail, loading, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovieDetail(movieId));
    }, [dispatch, movieId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="py-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">{movieDetail.title}</h1>
        <div className="flex flex-col md:flex-row items-center">
            <img 
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} 
            alt={movieDetail.title} 
            className="w-full md:w-1/3 h-96 object-cover rounded-lg"
            />
            <div className="md:ml-8 mt-8 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-400">{movieDetail.overview}</p>
            <div className="mt-6">
                <h3 className="text-xl font-semibold">Release Date</h3>
                <p>{movieDetail.release_date}</p>
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-semibold">Rating</h3>
                <p>{movieDetail.vote_average}</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default MovieDetail;
