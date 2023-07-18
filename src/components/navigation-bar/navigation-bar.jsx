import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          myFlix
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/">Profile</Nav.Link>
          </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text as={Link} to="/login">
            Logout
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
