import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { MovieCard } from "../../movie-card/movie-card";
import { Col, Row, Button, Card } from "react-bootstrap";

export const FavoriteMovies = ({ user, movies }) => {
  //get favoriteMovies array
  const fav = user.Favorites;
  let favoriteMovies = movies.filter(m => fav.includes(m.id));

  return (
    <>
      <h2>Your favorite movies</h2>
      <Row>
        { favoriteMovies.map((movie) => {
            return (
              // <Col>{movie}</Col>
              <Col xs={6} md={4} key={movie.id}>
                <MovieCard movie={movie} user={user} />
              </Col>
            )
        })
        }
        { !favoriteMovies && (
          <Col>No favorite movies yet</Col>
        )}
      </Row>
    </>
  );
};
