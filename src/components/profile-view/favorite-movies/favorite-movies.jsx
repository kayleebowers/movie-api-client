import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { MovieCard } from "../../movie-card/movie-card";
import { Col, Row, Button, Card } from "react-bootstrap";

export const FavoriteMovies = ({ favoriteMovies, movie }) => {
  return (
    <>
      <h2>Your favorite movies :(</h2>
      <Row>
        { favoriteMovies && (
          favoriteMovies.map((movie) => {
            return (
              <Col xs={12} s={6} md={3} key={movie._id}>
                <MovieCard movie={movie} />
              </Col>
            )
        })
        )}
        { !favoriteMovies && (
          <Col>No favorite movies yet</Col>
        )}
      </Row>
    </>
  );
};
