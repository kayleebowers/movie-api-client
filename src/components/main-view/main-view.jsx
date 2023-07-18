import { useState, useEffect } from "react";
import { Button, Row, Col, Card, Nav } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import child components
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignUpView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";

export const MainView = () => {
  //set localStorage as default values of user/token
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = JSON.parse(localStorage.getItem("token"));

  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);

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

  // //check for clicks
  // if (selectedMovie) {
  //   //filter movies by genre
  //   let similarMovies = movies.filter((movie) => {
  //     if (
  //       movie.Genre.Name == selectedMovie.Genre.Name &&
  //       movie.Title != selectedMovie.Title
  //     ) {
  //       return movie;
  //     }
  //   });
  //   //add MovieView with similar movies
  //   return (
  //     <Row>
  //       <Col>
  //         <Button
  //           className="mx-auto float-end"
  //           onClick={() => {
  //             
  //           }}
  //         >
  //           Logout
  //         </Button>
  //       </Col>

  //       <hr />
  //       <h2>Similar Movies</h2>
  //       {similarMovies.map((movie) => {
  //         return (
  //           <Col md={4}>
  //             <MovieCard
  //               key={movie._id}
  //               movie={movie}
  //               onMovieClick={(newSelectedMovie) => {
  //                 setSelectedMovie(newSelectedMovie);
  //               }}
  //             />
  //           </Col>
  //         );
  //       })}
  //     </Row>
  //   );
  // }

  //return list of movies
  return (
    <BrowserRouter>
      <NavigationBar 
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
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
                    <MovieView movies={movies} />
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
                        <Col md={3} className="mt-4" key={movie._id}>
                          <MovieCard movie={movie} />
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
                    <ProfileView user={user} movies={movies} token={token} setUser={setUser} setToken={setToken} onLoggedOut={onLoggedOut} />
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
