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
        <span>{movie.Director.Description}</span>
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
