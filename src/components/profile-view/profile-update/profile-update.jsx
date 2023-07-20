import { useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";

export const ProfileUpdate = ({user, token, setUser}) => {
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);

  const handleUpdate = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch(`https://movies-app1-3d6bd65a6f09.herokuapp.com/users/${user.Username}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        alert("Your information was updated");
      } else {
        alert("Update failed")
      }
     }).then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      // setToken(token);
    }).catch((error) => {
        console.error(error);
    })
  };

  return (
    <>
      <Card className="m-5">
        <Card.Title className="mx-auto pt-4">
          <h3>Update your information</h3>
          </Card.Title>
        <Card.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username*</Form.Label>
              <Form.Control
                type="text"
                minLength="5"
                required
                value={username}
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
                required
                value={email}
                minLength="6"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBirthday">
              <Form.Label>Birthday*</Form.Label>

              <Form.Control
                type="date"
                value={birthday}
                required
                onChange={(e) => setBirthday(e.target.value)}
              />
            </Form.Group>
            <Col className="mb-3 d-flex justify-content-center pt-4">
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Col>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
