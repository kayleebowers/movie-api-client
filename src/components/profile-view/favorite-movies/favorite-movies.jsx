import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { MovieCard } from "../../movie-card/movie-card";

export const FavoriteMovies = ({ favoriteMovies }) => {
  return (
    <>
      {favoriteMovies ? (
        <>
          {favoriteMovies.map((movie) => {
            return (
              <Col xs={12} s={6} md={3} key={movie._id}>
                <MovieCard movie={movie} />
              </Col>
            );
          })}
        </>
      ) : (
        <Col>You have no favorite movies</Col>
      )}
    </>
  );
};
