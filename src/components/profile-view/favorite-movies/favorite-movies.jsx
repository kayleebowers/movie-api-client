import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { MovieCard } from "../../movie-card/movie-card";

export const FavoriteMovies = ({ favoriteMovies }) => {
  return (
    <>
      <h2>Your favorite movies</h2>
      {favoriteMovies.map((movie) => {
        return (
          <Col xs={12} s={6} md={3} key={movie._id}>
            <MovieCard movie={movie} />
          </Col>
        );
      })}
    </>
  );
};
