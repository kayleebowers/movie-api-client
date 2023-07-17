//import prop-types module
import PropTypes from "prop-types";

//display movie data 
export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <img src={movie.ImagePath} alt="movie poster" />
      <p>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </p>
      <p>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </p>
      <p>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </p>
      <p>
        <span>About the director: </span>
        <span>{movie.Director.Bio}</span>
      </p>
      <p>
        <span>Genre: </span>
        <span>{movie.Genre.Name}</span>
      </p>
      <p>
        <span>About the genre: </span>
        <span>{movie.Genre.Description}</span>
      </p>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

//define props constraints
MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Description: PropTypes.string,
    Director: PropTypes.string,
    Bio: PropTypes.string,
    Genre: PropTypes.string,
    GenreDescription: PropTypes.string
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};