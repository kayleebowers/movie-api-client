//import prop-types module
import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100" style={{ width: '18rem' }} >
        <Card.Img className="img-fluid h-75" variant="top" src={movie.ImagePath} />
        <Card.Title className="mx-auto my-4">{movie.Title}</Card.Title>
        <Card.Body>
            <Link to={`/movies/${movie._id}`}>
                <Button variant="link">Learn more</Button>
            </Link>
        </Card.Body>
    </Card>
    );
};

//define props constraints
MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string
    }).isRequired
};