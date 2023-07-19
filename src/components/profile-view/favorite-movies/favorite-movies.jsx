import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { MovieCard } from "../../movie-card/movie-card";

export const FavoriteMovies = ({ favoriteMovies, movie }) => {
  return (
    <>
      <h2>Your favorite movies :(</h2>
      <p>Why doesn't it work?</p>
      {favoriteMovies.map((movie) => {
        <Col xs={12} s={6} md={3} key={movie._id}>
          <MovieCard movie={movie} />
        </Col>
      })}
    </>
  );
};
