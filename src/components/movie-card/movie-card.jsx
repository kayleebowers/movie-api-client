//import prop-types module
import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Heart from "react-animated-heart";
import { useState } from "react";

export const MovieCard = ({ movie, user, token, setUser }) => {
  const [isClick, setClick] = useState(false);

  const addToFavorites = () => {
    fetch(`https://movies-app1-3d6bd65a6f09.herokuapp.com/users/${user._id}/movies/${movie._id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,

      }
    }).then((response) => response.json()
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        setClick(!isClick);
      })
    )
  }

  return (
    <Card className="h-100" style={{ width: "22rem" }}>
      <Card.Img
        className="img-fluid h-75"
        variant="top"
        src={movie.ImagePath}
      />
      <Heart
        isClick={isClick}
        onClick={() => {
          setClick(!isClick);
        }}
      />
      <Card.Title className="mx-auto my-4">{movie.Title}</Card.Title>
      <Card.Body>
        <Link to={`/movies/${encodeURIComponent(movie.Title)}`}>
          <Button variant="link">Learn more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

//define props constraints
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
  }).isRequired,
};
