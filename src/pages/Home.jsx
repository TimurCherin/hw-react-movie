import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const MovieList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MovieItem = styled.li`
  margin-bottom: 10px;
`;

const MovieLink = styled(Link)`
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #7c36d8;
  }
`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day',
        {
          params: { api_key: '78b656f609e8668dd49fc490722e5285' },
        }
      );
      setMovies(response.data.results);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <Container>
      <Title>Trending Movies</Title>
      <MovieList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`}>{movie.title}</MovieLink>
          </MovieItem>
        ))}
      </MovieList>
    </Container>
  );
};

export default Home;