//import prop-types module
import PropTypes from "prop-types";
import { Col, Row, Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

//display movie data 
export const MovieView = ({ movies }) => {
  const { title } = useParams();

  const movie = movies.find((movie) => movie.title === title);

  return (
    <Card className="mb-4 d-flex justify-content-between border-0">
      <Row className="d-flex justify-content-between">
      <Col md={3}>
        <Card.Img className="mw-60 my-4" src={movie.ImagePath} alt="movie poster" />
      </Col>
      <Col md={9}>
        <Card.Body className="my-4">
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>Description: {movie.Description}</Card.Text>
          <Card.Text>Director: {movie.Director.Name}</Card.Text>
          <Card.Text>About the director: {movie.Director.Bio}</Card.Text>
          <Card.Text>Genre: {movie.Genre.Name}</Card.Text>
          <Card.Text>About the genre: {movie.Genre.Description}</Card.Text>
        </Card.Body>
      </Col>
      </Row>
      <Col className="mt-4 mx-auto mr-4">
        <Link to={'/'}>
          <Button>Back</Button>
        </Link>
      </Col>
    </Card>
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