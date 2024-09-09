import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetail } from '../redux/actions/movieActions';
import { useParams } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const MovieDetail = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const { movieDetail, loading, error } = useSelector((state) => state.movies);
    console.log("movieDetail", movieDetail)
    useEffect(() => {
        dispatch(fetchMovieDetail(movieId));
    }, [dispatch, movieId]);

    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <FaSpinner className="animate-spin text-yellow-400 text-4xl" />
        </div>
    );


    if (!movieDetail) return (
        <div className="text-center text-red-500">
            <p>No movie details available.</p>
        </div>
    );

    if (error) return (
        <div className="text-center text-red-500">
            <p>Error: {error}</p>
        </div>
    );

    const {
        title,
        backdrop_path,
        poster_path,
        overview,
        release_date,
        vote_average,
        genres,
        budget,
        revenue,
        runtime,
        production_companies,
        spoken_languages,
        tagline
    } = movieDetail;

    return (
        <div className="py-20 px-4">
            <div className="relative mb-8">
                <img
                    src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                    alt={title}
                    className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            <h1 className="text-4xl font-bold text-center mb-8 text-white">{title}</h1>
            <div className="flex flex-col md:flex-row items-center">
                <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    className="w-full md:w-1/3 h-96 object-cover rounded-lg"
                />
                <div className="md:ml-8 mt-8 md:mt-0 text-white">
                    <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                    <p className="text-gray-300 mb-4">{overview}</p>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Release Date</h3>
                        <p className="text-gray-300">{release_date}</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Rating</h3>
                        <p className="text-gray-300">{vote_average}</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Genres</h3>
                        <p className="text-gray-300">{genres.map(genre => genre.name).join(', ')}</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Runtime</h3>
                        <p className="text-gray-300">{runtime} minutes</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Budget</h3>
                        <p className="text-gray-300">${budget.toLocaleString()}</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Revenue</h3>
                        <p className="text-gray-300">${revenue.toLocaleString()}</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Production Companies</h3>
                        <p className="text-gray-300">
                            {production_companies.map(company => (
                                <span key={company.id}>
                                    {company.name}
                                    {production_companies.indexOf(company) < production_companies.length - 1 ? ', ' : ''}
                                </span>
                            ))}
                        </p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Spoken Languages</h3>
                        <p className="text-gray-300">{spoken_languages.map(lang => lang.name).join(', ')}</p>
                    </div>
                    {tagline && (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold">Tagline</h3>
                            <p className="text-gray-300 italic">"{tagline}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
