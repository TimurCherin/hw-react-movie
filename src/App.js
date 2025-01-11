import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import("./pages/Layout"));
const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const MoviePages = lazy(() => import("./pages/MoviePages"));
const FavoriteMovies = lazy(() => import("./pages/Favorites"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviePages />} />
        <Route path="favorites" element={<FavoriteMovies />} />
      </Route>
    </Routes>
  );
};

export default App;