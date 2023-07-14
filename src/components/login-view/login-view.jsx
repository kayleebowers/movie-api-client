import React from "react";
import { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    //prevent page from reloading on submit
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    //get header with user info and JWT from API
    fetch("https://movies-app1-3d6bd65a6f09.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      //return header with JWT
      .then((response) => {
        return response.json();
      })
      //pass user and token to MainView
      .then((data) => {
        console.log("Login response: " + data);
        if (data.user) {
          //store user info so user won't have to re-auth on reload
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", JSON.stringify(data.token));
          onLoggedIn(data.user, data.token);
        } else {
          alert("User does not exist");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername" className="mb-3">
        <Form.Label>Username* </Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
          minLength="5"
        />
      </Form.Group>
      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label>Password* </Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mb-3">
        Submit
      </Button>
    </Form>
  );
};
