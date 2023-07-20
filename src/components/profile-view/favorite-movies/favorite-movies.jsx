import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { MovieCard } from "../../movie-card/movie-card";
import { Col, Row, Button, Card } from "react-bootstrap";

export const FavoriteMovies = ({ user, movies }) => {
  //get favoriteMovies array
  const favoriteMovies = [];
  movies.forEach((movie) => {
    for (let i = 0; i < user.Favorites.length; i++) {
      if (movie._id === user.Favorites[i]) {
        favoriteMovies.push(movie);
      }
    }
  });

  console.log(favoriteMovies);

  return (
    <>
      <h2>Your favorite movies</h2>
      <Row>
        { user.Favorites.map((movie) => {
            return (
              <Col>{movie}</Col>
              // <Col xs={6} md={4} key={movie._id}>
              //   <MovieCard movie={movie} />
              // </Col>
            )
        })
        }
        { !user.Favorites && (
          <Col>No favorite movies yet</Col>
        )}
      </Row>
    </>
  );
};
