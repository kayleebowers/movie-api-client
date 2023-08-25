import { ProfileInformation } from "./profile-information/profile-information";
import { ProfileUpdate } from "./profile-update/profile-update";
import { FavoriteMovies } from "./favorite-movies/favorite-movies";
import { useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export const ProfileView = ({onLoggedOut, favorites}) => {
  const { username } = useParams();

  // get state from redux
  const { user } = useSelector(state => state.user);
  const { token } = useSelector(state => state.user);

  //get current user data from users API
  useEffect(() => {
    if (!user) {
        return;
    }
    fetch(`https://movies-app1-3d6bd65a6f09.herokuapp.com/users/${user._id}`, {
      headers: { 
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json" 
      },
    })
      .then((response) => response.json())
      .then((user) => {
        return {
          id: user._id,
          Username: user.Username,
          Email: user.Email,
          Birthday: user.Birthday,
          Favorites: user.Favorites,
        };
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Row className="d-flex justify-content-around">
        <Col xl={6} md={12} className="d-flex justify-content-center mh-60">
          <ProfileInformation onLoggedOut={onLoggedOut} />
        </Col>
        <Col xl={6} md={12} className="d-flex justify-content-center align-item-center">
          <ProfileUpdate /> 
        </Col>
      </Row>
      <Row>
        <Col>
          <FavoriteMovies/>
        </Col>
      </Row>
    </>
  );
};
