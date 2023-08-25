import { ProfileInformation } from "./profile-information/profile-information";
import { ProfileUpdate } from "./profile-update/profile-update";
import { FavoriteMovies } from "./favorite-movies/favorite-movies";
import { useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router";

export const ProfileView = ({
  user,
  token,
  setUser,
  setToken,
  onLoggedOut,
  favorites
}) => {
  const { username } = useParams();

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
          <ProfileInformation user={user} token={token} onLoggedOut={onLoggedOut} />
        </Col>
        <Col xl={6} md={12} className="d-flex justify-content-center align-item-center">
          <ProfileUpdate
            user={user}
            token={token}
            setUser={setUser}
            setToken={setToken}
          /> 
        </Col>
      </Row>
      <Row>
        <Col>
          <FavoriteMovies user={user} token={token} setUser={setUser}/>
        </Col>
      </Row>
    </>
  );
};
