import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "../../redux/reducers/movies";

//import child components
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignUpView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";

export const MainView = () => {
  const api = "https://movies-app1-3d6bd65a6f09.herokuapp.com";

  //set localStorage as default values of user/token
  const storedUser = localStorage.getItem("user");
  const storedToken = localStorage.getItem("token");

  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

  // set dispatch and values with Redux
  const dispatch = useDispatch();
  const { movies } = useSelector(state => state.movies);

  //fetch API data
  useEffect(() => {
    //prevent data from loading without token
    if (!token) {
      return;
    }
    fetch(`${api}/movies`, {
      //pass bearer authorization in header to make authenticated API requests
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((movies) => {
        const moviesFromApi = movies.map((movie) => {
          return {
            id: movie._id,
            Title: movie.Title,
            ImagePath: movie.ImagePath,
            Description: movie.Description,
            Director: movie.Director,
            Bio: movie.Director.Bio,
            Genre: movie.Genre,
            GenreDescription: movie.Genre.Description,
          };
        });
        dispatch(setMovies(moviesFromApi));
      });
    //add token to dependency array so data only re-renders on token change
  }, [token]);

  //logged out function
  const onLoggedOut = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };
  
  //define favorites
  let favorites = ["test"];

  //return list of movies
  return (
    <BrowserRouter>
      <NavigationBar 
        user={user} favorites={favorites} token={token} setUser={setUser}
        onLoggedOut={onLoggedOut}
      />
      <Row>
        <Routes>
          {/* route to SignUpView */}
          <Route
            path="/users"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col>
                    <SignUpView style={{fontFamily: "'Victor Mono', monospace"}} />
                  </Col>
                )}
              </>
            }
          />
          {/* route to LoginView */}
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col>
                    <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                      }}
                    />
                  </Col>
                )
                }
              </>
            }
          />
          {/* route to movie by title */}
          <Route
            path="/movies/:title"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col>
                    <MovieView user={user} favorites={favorites} token={token} setUser={setUser} />
                  </Col>
                )}
              </>
            }
          />
          {/* add main page route */}
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {movies.map((movie) => {
                      return (
                        <Col xs={12} s={8} md={4} className="my-4" key={movie._id}>
                          <MovieCard movie={movie} user={user} token={token} setUser={setUser} favorites={favorites} />
                        </Col>
                      );
                    })}
                  </>
                )}
              </>
            }
          />
          {/* add profile route */}
          <Route 
            path="/users/:username/"
            element = {
              <>
                { !user ? (
                  <Navigate to="/login" />
                ) : (
                  <Col>
                    <ProfileView user={user} token={token} favorites={favorites} setUser={setUser} onLoggedOut={onLoggedOut} />
                  </Col>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
