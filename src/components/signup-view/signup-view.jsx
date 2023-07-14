import { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";

export const SignUpView = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [birthday, setBirthday] = useState(null);

  const handleSignUp = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch("https://movies-app1-3d6bd65a6f09.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        alert("You are registered!");
      } else {
        alert("Something went wrong.");
      }
    });
  };

  return (
    <>
      <Form>
        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username*</Form.Label>
          <Form.Control
            type="text"
            minLength="6"
            value={username}
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password*</Form.Label>

          <Form.Control
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email*</Form.Label>

          <Form.Control
            type="email"
            value={email}
            required
            minLength="6"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBirthday">
          <Form.Label>Birthday</Form.Label>

          <Form.Control
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" onClick={handleSignUp}>
          Submit
        </Button>
      </Form>
    </>
  );
};