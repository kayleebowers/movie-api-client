import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          myFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          {user && (
            <>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Profile
              </Nav.Link>
              <Nav className="ms-auto">
              <Nav.Link as={Link} to="/login" onClick={onLoggedOut}>
                Logout
              </Nav.Link>
              </Nav>
            </>
          )}
        </Nav>
        <Nav className="ms-auto">
          {!user && (
            <>
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/users">
                  Register
                </Nav.Link>
                </Navbar.Collapse>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
