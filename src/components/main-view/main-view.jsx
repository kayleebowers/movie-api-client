import { useState, useEffect } from "react";

//import child components
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  //fetch API data
  useEffect(() => {
    //prevent data from loading without token
    if (!token) {
      return;
    }
    fetch("https://movies-app1-3d6bd65a6f09.herokuapp.com/movies", {
      //pass bearer authorization in header to make authenticated API requests
      headers: { Authorization: `Bearer ${token}`}
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
            GenreDescription: movie.Genre.Description
          };
        });
        setMovies(moviesFromApi);
      })
      //add token to dependency array so data only re-renders on token change
  }, [token]);

  //check for user
  if (!user) {
    return (
      <>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token)
        }} 
        />
      </>
    )
  }

  //check for clicks
  if (selectedMovie) {
    //filter movies by genre
    let similarMovies = movies.filter((movie) => {
      if (movie.Genre.Name == selectedMovie.Genre.Name && movie.Title != selectedMovie.Title) {
        return movie;
      } 
    })
    //add MovieView with similar movies 
    return (
      <>
        <button onClick={() => setUser(null)}>Logout</button>
        <MovieView movie={selectedMovie} onBackClick={() => {
          return setSelectedMovie(null);
        }}/>
        <hr />
        <h2>Similar Movies</h2>
        {similarMovies.map((movie) => {
          return (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            /> 
          );
        })}
      </>
    );
  }

  //check for no movies
  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  //return list of movies
  return (
    <div>
      <button onClick={() => setUser(null)}>Logout</button>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie._id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        );
      })}
    </div>
  );
};
