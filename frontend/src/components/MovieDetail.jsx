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
            {movieDetail.movie.belongs_to_collection?.poster_path && (
                <div className="relative mb-8">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movieDetail.movie.belongs_to_collection.poster_path}`}
                        alt={movieDetail.movie.title || "Backdrop"}
                        className="w-full h-96 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
            )}

            {/* Movie Title */}
            <h1 className="text-4xl font-bold text-center mb-8 text-black italic">
                {movieDetail.movie.title || "Title not available"}
            </h1>

            <div className="flex flex-col md:flex-row items-center">
                {/* Poster Image */}
                {movieDetail.movie.poster_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movieDetail.movie.poster_path}`}
                        alt={movieDetail.movie.title || "Poster"}
                        className="w-full md:w-1/3 h-96 object-cover rounded-lg mb-4"
                    />
                )}
                <div className="md:ml-8 mt-8 md:mt-0">
                    {/* Original Title */}
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-black italic">
                            Original Title
                        </h3>
                        <p className="text-gray-600 italic">
                            {movieDetail.movie.original_title || "Original title not available"}
                        </p>
                    </div>

                    {/* Overview */}
                    <h2 className="text-2xl font-semibold mb-4 text-black italic mt-6">
                        Overview
                    </h2>
                    <p className="text-gray-600 italic">
                        {movieDetail.movie.overview || "Overview not available"}
                    </p>

                    {/* Homepage */}
                    {movieDetail.movie.homepage && (
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-black italic">
                                Homepage
                            </h3>
                            <a
                                href={movieDetail.movie.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                {movieDetail.movie.homepage}
                            </a>
                        </div>
                    )}

                    {/* Release Date */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-black italic">
                            Release Date
                        </h3>
                        <p className="text-gray-600 italic">
                            {movieDetail.movie?.release_date || "Release date not available"}
                        </p>
                    </div>

                    {/* Rating */}
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-black italic">
                            Rating
                        </h3>
                        <p className="text-gray-600 italic">
                            {movieDetail.movie.vote_average !== undefined ? movieDetail.movie.vote_average : "N/A"}
                        </p>
                    </div>

                    {/* Vote Count */}
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-black italic">
                            Vote Count
                        </h3>
                        <p className="text-gray-600 italic">
                            {movieDetail.movie?.vote_count !== undefined ? movieDetail.movie.vote_count : "N/A"}
                        </p>
                    </div>

                    {/* Popularity */}
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-black italic">
                            Popularity
                        </h3>
                        <p className="text-gray-600 italic">
                            {movieDetail.movie.popularity !== undefined ? movieDetail.movie?.popularity : "N/A"}
                        </p>
                    </div>

                    {/* Genres */}
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-black italic">
                            Genres
                        </h3>
                        <p className="text-gray-600 italic">
                            {movieDetail.movie.genres && movieDetail.movie.genres.length > 0
                                ? movieDetail.movie.genres.map((genre) => genre.name).join(', ')
                                : "Genres not available"}
                        </p>
                    </div>

                    {/* Origin Country */}
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-black italic">
                            Origin Country
                        </h3>
                        <p className="text-gray-600 italic">
                            {movieDetail.movie.origin_country && movieDetail.movie.origin_country.length > 0
                                ? movieDetail.movie.origin_country.join(', ')
                                : "Origin country not available"}
                        </p>
                    </div>

                    {/* Tagline */}
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-black italic">
                            Tagline
                        </h3>
                        <p className="text-gray-600 italic">
                            {movieDetail.movie.tagline || "Tagline not available"}
                        </p>
                    </div>

                    {/* Budget */}
                    {movieDetail.movie.budget !== undefined && (
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-black italic">Budget</h3>
                            <p className="text-gray-600 italic">${movieDetail.movie?.budget.toLocaleString()}</p>
                        </div>
                    )}

                    {/* Status */}
                    {movieDetail.movie.status && (
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-black italic">
                                Status
                            </h3>
                            <p className="text-gray-600 italic">{movieDetail.movie?.status}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
