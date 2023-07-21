import React from "react";
import { Col, Row, Button, Card } from "react-bootstrap";
import { MovieCard } from "../../movie-card/movie-card";

export const SimilarMovies = ({ movie, movies, user, favorites, token, setUser }) => {
    //filter movies by genre
    let similarMovies = movies.filter((m) => {
      if (m.Genre.Name == movie.Genre.Name && m.Title != movie.Title) {
        return movie;
      }
    });
  
  return (
    <>
      <h2>Similar movies you may enjoy</h2>
      <Row>
        {similarMovies.map((movie) => {
            return (
            <Col key={movie._id}>
                <MovieCard
                movie={movie} user={user} favorites={favorites} token={token} setUser={setUser}
                />
            </Col>
            );
        })}
      </Row>
    </>
  );
};
