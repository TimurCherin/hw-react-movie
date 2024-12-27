import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  width: 300px;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
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
    color: #4c00b0;
  }
`;

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movies, setMovies] = useState([]);

  const handleSearch = async event => {
    event.preventDefault();
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: { api_key: '78b656f609e8668dd49fc490722e5285', query },
      }
    );
    setMovies(response.data.results);
  };

  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <Input
          type="text"
          value={query}
          onChange={e => setSearchParams({ query: e.target.value })}
        />
        <Button type="submit">Search</Button>
      </Form>
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

export default Movies;