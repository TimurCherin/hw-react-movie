import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MoviePages from './pages/MoviePages';

const App = () => {
  return (
    <Routes>
      <Route path="/hw-react-movie/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviePages />} />
      </Route>
    </Routes>
  );
};

export default App;