import React from 'react';

// Use any free movie background image (e.g., from Unsplash or Pexels)
const backgroundImage = "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?fit=crop&w=1920&q=80";

const Home = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Discover Your Next Favorite Movie</h1>
        <p className="text-lg mb-6">Search for movies, explore genres, and find trending films!</p>
        <button className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded-lg hover:bg-yellow-300">
          Start Searching
        </button>
      </div>
    </div>
  );
};

export default Home;
