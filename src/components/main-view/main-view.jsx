import { useState, useEffect } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import child components
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignUpView } from "../signup-view/signup-view";

export const MainView = () => {
  //set localStorage as default values of user/token
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = JSON.parse(localStorage.getItem("token"));

  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  //fetch API data
  useEffect(() => {
    //prevent data from loading without token
    if (!token) {
      return;
    }
    fetch("https://movies-app1-3d6bd65a6f09.herokuapp.com/movies", {
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
        setMovies(moviesFromApi);
      });
    //add token to dependency array so data only re-renders on token change
  }, [token]);

  //check for clicks
  if (selectedMovie) {
    //filter movies by genre
    let similarMovies = movies.filter((movie) => {
      if (
        movie.Genre.Name == selectedMovie.Genre.Name &&
        movie.Title != selectedMovie.Title
      ) {
        return movie;
      }
    });
    //add MovieView with similar movies
    return (
      <Row>
        <Col>
          <Button
            className="mx-auto float-end"
            onClick={() => {
              setUser(null);
              setToken(null);
              localStorage.clear();
            }}
          >
            Logout
          </Button>
        </Col>
        
        <hr />
        <h2>Similar Movies</h2>
        {similarMovies.map((movie) => {
          return (
            <Col md={4}>
              <MovieCard
                key={movie._id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          );
        })}
      </Row>
    );
  }

  //return list of movies
  return (
    <BrowserRouter>
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
                  <Col md={5}>
                    <SignUpView />
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
                  <Col md={5}>
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
            element = {
              <>
                { !user ? (
                  <Navigate to="/login" />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col>
                    <MovieView movies={movies}/>
                  </Col>
                )}
              </>
            }
          />
          <Row>
            <Col>
              <Button
                className="mx-auto float-end"
                onClick={() => {
                  setUser(null);
                  setToken(null);
                  localStorage.clear();
                }}
              >
                Logout
              </Button>
            </Col>
          </Row>
          {movies.map((movie) => {
            return (
              <Col md={3} className="mt-4">
                <MovieCard
                  key={movie._id}
                  movie={movie}
                  onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);
                  }}
                />
              </Col>
            );
          })}
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
