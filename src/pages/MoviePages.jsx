import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    color: #333;
  }
`;

const MovieContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Poster = styled.img`
  max-width: 300px;
  border-radius: 10px;
`;

const Info = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ExtraInfo = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #555;
`;

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}`,
                {
                    params: { api_key: '78b656f609e8668dd49fc490722e5285' },
                }
            );
            setMovie(response.data);
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <Container>Loading...</Container>;
    }

    return (
        <Container>
            <BackLink to="/">← Back to Home</BackLink>
            <MovieContainer>
                <Poster
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                />
                <Info>
                    <Title>{movie.title}</Title>
                    <Overview>{movie.overview}</Overview>
                    <ExtraInfo>
                        <strong>Release Date:</strong> {movie.release_date}
                    </ExtraInfo>
                    <ExtraInfo>
                        <strong>Rating:</strong> {movie.vote_average} / 10
                    </ExtraInfo>
                </Info>
            </MovieContainer>
        </Container>
    );
};

export default MovieDetails;