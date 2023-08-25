//import prop-types module
import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Heart from "react-animated-heart";
import { useState } from "react";
import "../../index.scss";
import { useDispatch, useSelector } from "react-redux";

export const MovieCard = ({ movie }) => {

  // get user, token state and dispatch from redux
  const { user } = useSelector(state => state.user);
  const { token } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [isclick, setclick] = useState(false);
  const [isFavorite, setFavorite] = useState(user.Favorites ? user.Favorites.includes(movie.id) : null);

  const addToFavorites = () => {
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
          dispatch(setUser(data));
          setFavorite(true);
        })
        .catch((error) => {
          console.error(error);
        })
    );
  };

  const deleteFromFavorites = () => {
    fetch(
      `https://movies-app1-3d6bd65a6f09.herokuapp.com/users/${user._id}/movies/${movie.id}`,
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
        dispatch(setUser(data));
        setFavorite(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Card className="h-100 m-auto bg-light mh-90 ">
      <div className="position-relative" style={{minHeight: "80%"}}>
        <Card.Img className="fluid h-100" variant="top" src={movie.ImagePath} />
        <div
          style={{ bottom: "80%", left: "75%" }}
          className="ms-0 p-0 mw-10 position-absolute bg-transparent"
        >
          {!isFavorite ? (
            <Heart
              isClick={isclick}
              style={{ border: "1px solid white" }}
              onClick={() => {
                setclick(true);
                addToFavorites();
              }}
            />
          ) : (
            <Heart
              isClick={true}
              onClick={() => {
                setclick(false);
                deleteFromFavorites();
              }}
            />
          )}
        </div>
      </div>
      <Card.Body className="mh-10 d-flex justify-content-center bg-light">
        <div className="d-flex flex-column align-items-center">
          <Card.Title className="font-weight-bold my-3" style={{fontFamily: "'Victor Mono', monospace"}}>
            {movie.Title}
          </Card.Title>
          <Link to={`/movies/${encodeURIComponent(movie.Title)}`}>
            <Button variant="primary">Learn more</Button>
          </Link>
        </div>
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
