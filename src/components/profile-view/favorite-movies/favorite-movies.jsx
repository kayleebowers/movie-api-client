import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { MovieCard } from "../../movie-card/movie-card";
import { Col, Row, Button, Card } from "react-bootstrap";

export const FavoriteMovies = ({ user, movie }) => {
  //get favoriteMovies array
 
  return (
    <>
      <h2>Your favorite movies</h2>
      <Row>
        { user.Favorites && (
          user.Favorites.map((movie) => {
            return (
              <Col>{user.Favorites}</Col>
              // <Col xs={6} md={4} key={movie._id}>
              //   <MovieCard movie={movie} />
              // </Col>
            )
        })
        )}
        { !user.Favorites && (
          <Col>No favorite movies yet</Col>
        )}
      </Row>
    </>
  );
};
