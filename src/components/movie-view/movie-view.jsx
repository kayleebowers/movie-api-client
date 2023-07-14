//import prop-types module
import PropTypes from "prop-types";
import { Col, Row, Button, Card } from "react-bootstrap";

//display movie data 
export const MovieView = ({ movie, onBackClick }) => {
  return (
    <Card className="mw-60">
      <Row>
      <Col md={3}>
        <Card.Img className="mw-60" src={movie.ImagePath} alt="movie poster" />
      </Col>
      <Col md={9}>
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>Description: {movie.Description}</Card.Text>
          <Card.Text>Director: {movie.Director.Name}</Card.Text>
          <Card.Text>About the director: {movie.Director.Bio}</Card.Text>
          <Card.Text>Genre: {movie.Genre.Name}</Card.Text>
          <Card.Text>About the genre: {movie.Genre.Description}</Card.Text>
        </Card.Body>
      </Col>
      </Row>
      <Button onClick={onBackClick}>Back</Button>
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
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};