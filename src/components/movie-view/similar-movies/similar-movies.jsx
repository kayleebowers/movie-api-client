import React from "react";

export const SimilarMovies = ({movie}) => {

    return (
        <>
            <h1>Similar movies</h1>
        </>
    )
}
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
  //           <Col xs={12} s={6} md={4}>
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
