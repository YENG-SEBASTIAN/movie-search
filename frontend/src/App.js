import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Trending from './components/Trending';
import Genres from './components/Genres';
import MovieDetail from './components/MovieDetail';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/movies/:movieId" component={<MovieDetail/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
