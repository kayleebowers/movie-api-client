export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <img src={movie.ImagePath} alt="movie poster" />
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre.Name}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
