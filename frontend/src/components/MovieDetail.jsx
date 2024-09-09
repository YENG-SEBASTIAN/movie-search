import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetail } from '../redux/actions/movieActions';
import { useParams } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const MovieDetail = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const { movieDetail, loading, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovieDetail(movieId));
    }, [dispatch, movieId]);

    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <FaSpinner className="animate-spin text-yellow-400 text-4xl" />
        </div>
    );

    if (error) return (
        <div className="text-center text-red-500">
            <p>Error: {error}</p>
        </div>
    );

    if (!movieDetail) return (
        <div className="text-center text-red-500">
            <p>No movie details available.</p>
        </div>
    );

    return (
        <div className="py-20 px-4">
            {/* Backdrop Image */}
            {movieDetail.backdrop_path && (
                <div className="relative mb-8">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
                        alt={movieDetail.title || "Backdrop"}
                        className="w-full h-96 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
            )}

            {/* Movie Title */}
            <h1 className="text-4xl font-bold text-center mb-8 text-white">
                {movieDetail.title || "Title not available"}
            </h1>

            <div className="flex flex-col md:flex-row items-center">
                {/* Poster Image */}
                {movieDetail.poster_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                        alt={movieDetail.title || "Poster"}
                        className="w-full md:w-1/3 h-96 object-cover rounded-lg"
                    />
                )}
                <div className="md:ml-8 mt-8 md:mt-0">
                    {/* Overview */}
                    <h2 className="text-2xl font-semibold mb-4 text-white">
                        Overview
                    </h2>
                    <p className="text-gray-300">
                        {movieDetail.overview || "Overview not available"}
                    </p>

                    {/* Release Date */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-white">
                            Release Date
                        </h3>
                        <p className="text-gray-300">
                            {movieDetail.release_date || "Release date not available"}
                        </p>
                    </div>

                    {/* Rating */}
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">
                            Rating
                        </h3>
                        <p className="text-gray-300">
                            {movieDetail.vote_average !== undefined ? movieDetail.vote_average : "N/A"}
                        </p>
                    </div>

                    {/* Genres */}
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">
                            Genres
                        </h3>
                        <p className="text-gray-300">
                            {movieDetail.genres && movieDetail.genres.length > 0 
                                ? movieDetail.genres.map((genre) => genre.name).join(', ') 
                                : "Genres not available"}
                        </p>
                    </div>

                    {/* Additional Details (Optional) */}
                    {movieDetail.runtime && (
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-white">Runtime</h3>
                            <p className="text-gray-300">{movieDetail.runtime} minutes</p>
                        </div>
                    )}
                    {movieDetail.budget !== undefined && (
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-white">Budget</h3>
                            <p className="text-gray-300">${movieDetail.budget.toLocaleString()}</p>
                        </div>
                    )}
                    {movieDetail.revenue !== undefined && (
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-white">Revenue</h3>
                            <p className="text-gray-300">${movieDetail.revenue.toLocaleString()}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
