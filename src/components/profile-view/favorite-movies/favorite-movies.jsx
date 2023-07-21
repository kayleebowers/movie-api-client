import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { MovieCard } from "../../movie-card/movie-card";
import { Col, Row, Button, Card } from "react-bootstrap";

export const FavoriteMovies = ({ user, movies, token, setUser }) => {
  //get favoriteMovies array
  const fav = user.Favorites;
  let favoriteMovies = movies.filter(m => fav.includes(m.id));

  return (
    <>
      <h2 className="text-light mx-auto">Your favorite movies</h2>
      <Row>
        { favoriteMovies.map((movie) => {
            return (
              // <Col>{movie}</Col>
              <Col xs={6} md={4} key={movie.id}>
                <MovieCard movie={movie} user={user} token={token} setUser={setUser} />
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
