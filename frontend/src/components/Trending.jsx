import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../redux/actions/movieActions';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const Trending = () => {
    const dispatch = useDispatch();
    const { popularMovies, loading, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch]);

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

    return (
        <div className="py-5 px-4">
            <h1 className="text-4xl font-bold text-center">Trending Movies</h1>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {popularMovies.length > 0 ? (
                    popularMovies.map((movie) => (
                        <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold truncate text-white">{movie.title}</h2>
                                <p className="text-gray-400 text-sm mt-2 truncate">{movie.overview}</p>
                                <Link
                                    to={`/movies/${movie.id}`}
                                    className="text-yellow-400 hover:underline mt-4 block text-center"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-400">No movies found.</div>
                )}
            </div>
        </div>
    );
};

export default Trending;
