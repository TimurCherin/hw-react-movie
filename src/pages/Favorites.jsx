import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const RemoveButton = styled.button`
  margin-left: 15px;
  padding: 8px 16px;
  font-size: 16px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #ff1a1a;
    transform: scale(1.05);
  }

  &:active {
    background-color: #e60000;
  }
`;

const FavoriteMovies = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const handleRemoveFavorite = (movieId) => {
        const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        window.location.reload();
    };

    return (
        <Container>
            <Title>Favorites</Title>
            {favorites.length === 0 ? (
                <p>No favorite movies yet!</p>
            ) : (
                <MovieList>
                    {favorites.map((movie) => (
                        <MovieItem key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                            <RemoveButton onClick={() => handleRemoveFavorite(movie.id)}>
                                Remove
                            </RemoveButton>
                        </MovieItem>
                    ))}
                </MovieList>
            )}
        </Container>
    );
};

export default FavoriteMovies;
