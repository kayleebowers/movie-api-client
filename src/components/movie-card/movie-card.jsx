//import prop-types module
import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Heart from "react-animated-heart";
import { useState } from "react";

export const MovieCard = ({ movie, user, token, setUser }) => {
  const [isclick, setclick] = useState(false);
  const [isFavorite, setFavorite] = useState(false);
  const addToFavorites = () => {
    console.log(movie);

    fetch(
      `https://movies-app1-3d6bd65a6f09.herokuapp.com/users/${user._id}/movies/${movie.id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    ).then((response) =>
      response
        .json()
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data));
          setUser(data);
          setFavorite(true);
        })
        .catch((error) => {
          console.error(error);
        })
    );
  };

  const deleteFromFavorites = () => {
    fetch(
      `https://movies-app1-3d6bd65a6f09.herokuapp.com/users/${user._id}/movies/${movie._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        setFavorite(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Card className="h-100 m-auto">
      <Card.Img className="fluid h-100" variant="top" src={movie.ImagePath} />
      <Card.Body className="h-50 d-flex flex-column align-items-center">
        {!isFavorite ? (
          <Heart
            isClick={isclick}
            onClick={() => {
              setclick(true);
              addToFavorites();
            }}
          />
        ) : (
          <Heart
            isClick={isclick}
            onClick={() => {
              setclick(false);
              deleteFromFavorites();
            }}
          />
        )}
        <Card.Title className="font-weight-bold my-3">{movie.Title}</Card.Title>
        <Link to={`/movies/${encodeURIComponent(movie.Title)}`}>
          <Button variant="primary">Learn more</Button>
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
