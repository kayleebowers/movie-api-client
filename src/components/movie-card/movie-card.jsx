//import prop-types module
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card 
        className="h-100"
        style={{ width: '18rem' }}
        onClick = {() => {
            onMovieClick(movie);
        }}
    >
        <Card.Img className="img-fluid h-75" variant="top" src={movie.ImagePath} />
        <Card.Title className="mx-auto my-4">{movie.Title}</Card.Title>
        <Card.Body>
            <Button className="float-start">Learn more</Button>
            <Button className="float-end">Add to favorites</Button>
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