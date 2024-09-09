import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Brand Logo */}
        <div className="text-2xl font-bold">Movie Search</div>

        {/* Mobile Menu Toggle */}
        <div className="block lg:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul 
          className={`lg:flex lg:space-x-6 space-y-4 lg:space-y-0 w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:block`}
        >
          <li>
            <Link to="/" className="hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/trending" className="hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
              Trending
            </Link>
          </li>
          <li>
            <Link to="/genres" className="hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
              Genres
            </Link>
          </li>
        </ul>

        {/* Search Box */}
        <div className="flex items-center w-full lg:w-auto mt-4 lg:mt-0">
          <input
            type="text"
            className="px-4 py-2 w-full lg:w-auto text-black rounded-l-md"
            placeholder="Search movies..."
          />
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
