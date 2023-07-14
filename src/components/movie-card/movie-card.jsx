//import prop-types module
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card 
        style={{ width: '18rem' }}
        onClick = {() => {
            onMovieClick(movie);
        }}
    >
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Body>
            <Button>Learn more</Button>
        </Card.Body>
    </Card>
    );
};

//define props constraints
MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired 
};