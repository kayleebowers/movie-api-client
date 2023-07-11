import { useState, useEffect } from "react";

//import child components
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  //set movies state to array
  const [movies, setMovies] = useState([]);

  //add state to track clicks
  const [selectedMovie, setSelectedMovie] = useState(null);

  //fetch API data
  useEffect(() => {
    fetch("https://movies-app1-3d6bd65a6f09.herokuapp.com/movies")
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
  });

  //check for clicks
  if (selectedMovie) {
    return (
        <MovieView movie={selectedMovie} onBackClick={() => {
          return setSelectedMovie(null);
        }}/>
    );
  }

  //check for no movies
  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  //return list of movies
  return (
    <div>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
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
