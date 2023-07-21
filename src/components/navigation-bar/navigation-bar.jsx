import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { SearchBar } from "../main-view/search-bar";

export const NavigationBar = ({
  user,
  onLoggedOut,
  movies,
  favorites,
  token,
  setUser,
}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          myFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {user && (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={`/users/${user.Username}/`}>
                  Profile
                </Nav.Link>
              </>
            )}
          </Nav>
          <SearchBar
                  user={user}
                  movies={movies}
                  favorites={favorites}
                  token={token}
                  setUser={setUser}
          />
          <Nav.Link as={Link} to="/login" onClick={onLoggedOut}>
                  Logout
          </Nav.Link>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
