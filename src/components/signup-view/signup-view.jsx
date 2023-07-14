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
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalUsername"
        >
          <Form.Label column sm={2}>
            Username*
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              minLength="6"
              value={username}
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password*
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email*
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              value={email}
              required
              minLength="6"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalBirthday"
        >
          <Form.Label column sm={2}>
            Birthday
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Button type="submit" onClick={handleSignUp}>
          Submit
        </Button>
      </Form>
    </>
  );
};
