//import prop-types module
import PropTypes from "prop-types";
import { Col, Row, Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {SimilarMovies} from "./similar-movies/similar-movies";

//display movie data 
export const MovieView = ({ movies, user, favorites, token, setUser }) => {
  //returning /movies/:title object through useParams
  const { title } = useParams();
  const movie = movies.find((movie) => movie.Title === title);

  return (
    <>
      <Card className="mb-4 d-flex border-0 bg-light mt-5">
        <Row className="d-flex justify-content-center align-content-center bg-light movieView">
        <Col lg={4} className="mx auto">
          <Card.Img className="mh-60 p-4" src={movie.ImagePath} alt="movie poster" />
        </Col>
        <Col lg={8}>
          <Card.Body className="my-4 bg-light text-xs-center">
            <Card.Title className="mb-4 font-weight-bold">{movie.Title}</Card.Title>
            <Card.Text>Description: {movie.Description}</Card.Text>
            <Card.Text>Director: {movie.Director.Name}</Card.Text>
            <Card.Text>About the director: {movie.Director.Bio}</Card.Text>
            <Card.Text>Genre: {movie.Genre.Name}</Card.Text>
            <Card.Text>About the genre: {movie.Genre.Description}</Card.Text>
          </Card.Body>
          <Card.Footer className="mt-4 bg-light d-flex justify-content-center">
            <Link to={'/'} className="mt-4">
              <Button className="mb-3">Back</Button>
            </Link>
          </Card.Footer>
        </Col>
        </Row>
      </Card>
      <SimilarMovies movie={movie} movies={movies} user={user} favorites={favorites} token={token} setUser={setUser} />
    </>
  );
};

//define props constraints
MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Description: PropTypes.string,
    Director: PropTypes.string,
    Bio: PropTypes.string,
    Genre: PropTypes.string,
    GenreDescription: PropTypes.string
  }).isRequired
};